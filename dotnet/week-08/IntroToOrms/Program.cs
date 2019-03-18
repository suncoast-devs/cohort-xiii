using System;
using System.Linq;

namespace IntroToOrms
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Lets do some team building!");

      // we need to create a new instance of our database context class
      var db = new IntroToOrmsContext();

      // create (insert)
      // INSERT INTO Teams (Mascot, Coach.....) VALUES('Wallabyes', 'Jordan'....)
      var favoriteTeam = new Team
      {
        Mascot = "Wallabyes",
        Coach = "Jordan",
        ChampionsWon = 3,
        AverageTicketPrice = 3.50,
        FoundedDate = DateTime.Now,
        City = "Sydney"
      };
      var favoriteTeam2 = new Team
      {
        Mascot = "Patriots",
        Coach = "Silvana",
        ChampionsWon = 3,
        AverageTicketPrice = 3.50,
        FoundedDate = DateTime.Now,
        City = "Sydney"
      };
      var favoriteTeam4 = new Team
      {
        Mascot = "Eagles",
        Coach = "Andrews",
        ChampionsWon = 3,
        AverageTicketPrice = 3.50,
        FoundedDate = DateTime.Now,
        City = "Sydney"
      };
      var favoriteTeam3 = new Team
      {
        Mascot = "Cowbots",
        Coach = "Manny",
        ChampionsWon = 3,
        AverageTicketPrice = 3.50,
        FoundedDate = DateTime.Now,
        City = "Sydney"
      };



      //   db.Teams.Add(favoriteTeam);
      //   db.Teams.Add(favoriteTeam2);
      //   db.Teams.Add(favoriteTeam3);
      //   db.Teams.Add(favoriteTeam4);
      db.SaveChanges();



      // select 
      // SELECT * FROM Teams WHERE Mascot = 'Patriots' OR Mascot = 'Eagles'
      var thoseTeams = db.Teams.Where(team => team.Mascot == "Patriots" || team.Mascot == "Eagles");

      foreach (var team in thoseTeams)
      {
        Console.WriteLine(team.City + " " + team.Mascot);
      }

      // update
      // find the item we want to update
      // SELECT TOP(1) * FROM Teams WHERE Mascot = 'Eagles'
      // if  nothing is found, then return 'null'
      var eagles = db.Teams.FirstOrDefault(team => team.Mascot == "Eagles");
      // update it
      if (eagles != null)
      {
        eagles.City = "philly";
        eagles.ChampionsWon = 1;
        eagles.AverageTicketPrice = 100.10;
      }
      // save the changes 
      db.SaveChanges();

      // update mutiple
      var teamsToUpdate = db.Teams.Where(teams => teams.Mascot != "Eagles");
      foreach (var team in teamsToUpdate)
      {
        team.ChampionsWon = 0;
      }
      db.SaveChanges();


      // add a player to the Wallabyes
      // find the Wallabyes
      var wallabyes = db.Teams.FirstOrDefault(team => team.Id == 1);
      // create a new player
      var jordan = new Players
      {
        FullName = "Jordan",
        Injured = false,
        Number = "13",
        Position = "Center",
      };
      // add player to the Wallabyes
      wallabyes.Players.Add(jordan);
      // save changes
      db.SaveChanges();


      // delete
      // DELETE FROM Teams WHERE Id = 2    
      // find the thing to delete
      // var thatTeam = db.Teams.FirstOrDefault(team => team.Id == 2);
      // // if (thatTeam != null)
      // // {
      // //   // delete it
      // //   db.Teams.Remove(thatTeam);
      // // }
      // // // save the changes
      // // db.SaveChanges();
    }
  }
}
