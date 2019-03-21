using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using MovieApi.Models;
using MovieApi.ViewModels;

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
    public ActionResult<IList<MovieViewModel>> GetAllMovies()
    {
      // TODO: query the database
      // return the results that not queued for delete


      var results = db
            .Movies
            .Where(w => w.IsActive)
            .OrderBy(o => o.Title)
            .Select(s => new MovieViewModel
            {
              Title = s.Title,
              Rating = s.Rating,
              Director = s.Director,
              Id = s.Id
            })
            .ToList();
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
    [HttpPut("{id}")]
    public ActionResult<Movie> UpdateMovie(int id, [FromBody] Movie newMovieData)
    {
      var movie = db.Movies.FirstOrDefault(f => f.Id == id);
      movie.Title = newMovieData.Title;
      movie.Rating = newMovieData.Rating;
      movie.Director = newMovieData.Director;
      db.SaveChanges();
      return movie;
    }

    // DELETE
    [HttpDelete("{id}")]
    public ActionResult DeleteMovie(int id)
    {

      // update that boolean
      // soft delete
      var movie = db.Movies.FirstOrDefault(f => f.Id == id);
      movie.IsActive = false;
      db.SaveChanges();
      return Ok();
      //     // hard deletion
      //   var movie = db.Movies`.FirstOrDefault(f => f.Id == id);
      //   db.Movies.Remove(movie);
      //   db.SaveChanges();
      //   return Ok();`
    }

  }
}