using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PetsRUs.Models;
using petsrus;

namespace PetsRUs.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ShelterController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public ShelterController()
    {
      _context = new DatabaseContext();
    }

    // GET: api/Shelter
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Shelter>>> GetShelters()
    {
      return await _context.Shelters.Include(i => i.Pets).ToListAsync();
    }
    [HttpGet("{id}/pets")]
    public async Task<ActionResult<IEnumerable<Pet>>> GetPets(int id)
    {
      var shelter = await _context.Shelters.Include(i => i.Pets).FirstOrDefaultAsync(w => w.Id == id);

      if (shelter == null)
      {
        return NotFound();
      }

      return shelter.Pets;

    }

    // GET: api/Shelter/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Shelter>> GetShelter(int id)
    {
      var shelter = await _context.Shelters.FindAsync(id);

      if (shelter == null)
      {
        return NotFound();
      }

      return shelter;
    }

    // PUT: api/Shelter/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutShelter(int id, Shelter shelter)
    {
      if (id != shelter.Id)
      {
        return BadRequest();
      }

      _context.Entry(shelter).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();

      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ShelterExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/Shelter
    [HttpPost]
    public async Task<ActionResult<Shelter>> PostShelter(Shelter shelter)
    {
      _context.Shelters.Add(shelter);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetShelter", new { id = shelter.Id }, shelter);
    }

    // DELETE: api/Shelter/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Shelter>> DeleteShelter(int id)
    {
      var shelter = await _context.Shelters.FindAsync(id);
      if (shelter == null)
      {
        return NotFound();
      }

      _context.Shelters.Remove(shelter);
      await _context.SaveChangesAsync();

      return shelter;
    }

    private bool ShelterExists(int id)
    {
      return _context.Shelters.Any(e => e.Id == id);
    }
  }
}
