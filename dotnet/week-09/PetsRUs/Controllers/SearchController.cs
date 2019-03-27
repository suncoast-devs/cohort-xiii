using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using petsrus;

namespace dotnet_sdg_template.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SearchController : ControllerBase
  {
    private DatabaseContext db;

    public SearchController()
    {
      this.db = new DatabaseContext();
    }

    [HttpGet("pets")]
    public ActionResult SearchForPets([FromQuery] string query, [FromQuery] bool? goodWithKids = null)
    {
      query = query.ToLower();
      var checkingForAge = int.TryParse(query, out var age);

      var results = db.Pets
            .Include(i => i.Shelter)
            .Where(w => !w.IsAdopted);

      if (goodWithKids != null)
      {
        results = results.Where(w => w.GoodWithKids == goodWithKids.Value);
      }

      if (checkingForAge)
      {
        results = results.Where(w => w.Age <= age);
      }
      else
      {
        results = results.Where(w =>
              w.Breed.ToLower().Contains(query) ||
              w.Species.ToLower().Contains(query) ||
              w.Name.ToLower().Contains(query) ||
              w.Shelter.Name.ToLower().Contains(query)
              );
      }


      return Ok(new { SearchingFor = query, results = results, checkingForAge });
    }


  }
}