using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using MovieApi.Models;

namespace movieapi.Controllers
{

  [Route("api/[controller]")]
  [ApiController]
  public class MoviesController : ControllerBase
  {
    private DatabaseContext db;

    public MoviesController()
    {
      this.db = new DatabaseContext();
    }

    [HttpGet]
    public ActionResult<IList<Movie>> GetAllMovies()
    {
      // TODO: query the database
      // return the results
      var results = db.Movies.OrderBy(o => o.Title).ToList();
      return results;
    }

    [HttpGet("{id}")]
    public ActionResult<Movie> GetOneMovie(int id)
    {
      // go to the database
      // query the database for the movie with the id of id
      var movie = db.Movies.FirstOrDefault(f => f.Id == id);
      // return that movie
      return movie;
    }

    [HttpPost]
    public ActionResult<Movie> CreateMovie([FromBody] Movie movieToAdd)
    {
      db.Movies.Add(movieToAdd);
      db.SaveChanges();
      return movieToAdd;
    }


    // PUT

    // DELETE

  }
}