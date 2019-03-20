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

    [HttpGet]
    public ActionResult<IList<Movie>> GetAllMovies()
    {
      // TODO: query the database
      // return the results
      var db = new DatabaseContext();
      var results = db.Movies.OrderBy(o => o.Title).ToList();
      return results;
    }

    [HttpGet("{id}")]
    public ActionResult<Movie> GetOneMovie(int id)
    {
      // go to the database
      var db = new DatabaseContext();
      // query the database for the movie with the id of id
      var movie = db.Movies.FirstOrDefault(f => f.Id == id);
      // return that movie
      return movie;
    }

    [HttpPost]
    public ActionResult<Movie> CreateMovie([FromBody] Movie movieToAdd)
    {

      var db = new DatabaseContext();
      db.Movies.Add(movieToAdd);
      db.SaveChanges();
      return movieToAdd;
    }

  }
}