using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using petsrus;
using PetsRUs.Models;
using PetsRUs.ViewModels;

namespace PetsRUs.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class PetsController : ControllerBase
  {

    private DatabaseContext db;
    public PetsController()
    {
      this.db = new DatabaseContext();
    }

    [HttpGet]
    public ActionResult<IList<PetViewModel>> GetAllPets()
    {
      return db.Pets.OrderByDescending(o => o.DateArrived)
      .Select(s => new PetViewModel
      {
        Age = s.Age,
        Breed = s.Breed,
        DateAdopted = s.DateAdopted,
        DateArrived = s.DateArrived,
        GoodWithKids = s.GoodWithKids,
        Id = s.Id,
        IsAdopted = s.IsAdopted,
        Name = s.Name,
        Species = s.Species,
        ShelterId = s.ShelterId,
        ShelterUrl = $"https://localhost:5001/api/shelter/{s.ShelterId}"
      }).ToList();
    }

    [HttpPost]
    public async Task<ActionResult<Pet>> CreatePet(Pet newPet)
    {
      db.Pets.Add(newPet);
      // update the current capacity 
      var shelter = await db.Shelters.FirstOrDefaultAsync(f => f.Id == newPet.ShelterId);
      shelter.CurrentCapacity++;
      await db.SaveChangesAsync();
      return newPet;
    }

  }
}