using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MovieApi.Models;

namespace movieapi.Controllers
{

  [Route("api/[controller]")]
  [ApiController]
  public class MoviesController : ControllerBase
  {

    [HttpGet]
    public ActionResult<IEnumerable<Movie>> GetAllMovies()
    {
      // TODO: query the database
      // return the results
      return new List<Movie> { new Movie { Title = "Jaws" }, new Movie { Title = "GoodFellas" } };
    }

    [HttpGet("{id}")]
    public ActionResult<Movie> GetOneMovie(int id)
    {
      return new Movie { Title = "E.T.", Id = id };
    }

    [HttpPost]
    public ActionResult<Movie> CreateMovie([FromBody] Movie movieToAdd)
    {
      return new Movie
      {
        Title = movieToAdd.Title
      };
    }

  }
}