using System;
using System.Linq;
using HackerNews.Models;

namespace HackerNews
{
  class Program
  {
    static void Main(string[] args)
    {

      Console.WriteLine("Welcome to cmd hacker news, who are you?");
      var username = Console.ReadLine();
      // TODO: create or get user 
      var db = new CmdNewsContext();
      // getting the user if it exists
      var user = db.Users.FirstOrDefault(f => f.UserName.ToLower() == username.ToLower());
      // if user does not exists, create it
      if (user == null)
      {
        user = new User
        {
          UserName = username.ToLower()
        };
        db.Users.Add(user);
        db.SaveChanges();
      }

      // update the last logged in date
      user.LastLoggedIn = DateTime.Now;
      db.SaveChanges();

      var reading = true;

      while (reading)
      {

        Console.WriteLine($"Welcome {user.UserName} to cmd hacker news");
        Console.WriteLine("what do you wanna do?");
        Console.WriteLine("see the most (recent)");
        Console.WriteLine("see the (top)");
        Console.WriteLine("(view {id}) article ");
        Console.WriteLine("(favorite {id}) article ");
        Console.WriteLine("view my (favorites) ");
        Console.WriteLine("(add) a new article");
        Console.WriteLine("(exit)");
        var input = Console.ReadLine();
        Console.Clear();
        if (input == "recent")
        {
          Console.WriteLine("Recent Articles");
          Console.WriteLine("=========================");
        }
        else if (input == "top")
        {
          Console.WriteLine("Top Articles");
          Console.WriteLine("=========================");

        }
        else if (input == "favorites")
        {
          Console.WriteLine("Viewing your favorites");
          Console.WriteLine("=========================");

        }
        else if (input.Contains("favorite"))
        {
          if (int.TryParse(input.Split(' ')[1], out int articleId))
          {
            Console.WriteLine($"favoriting article {articleId}");
          }
        }
        else if (input.Contains("see"))
        {
          if (int.TryParse(input.Split(' ')[1], out int articleId))
          {
            Console.WriteLine($"seeing article {articleId}");
          }
        }
        else if (input == "add")
        {
          Console.WriteLine("Adding an article...");

        }
        else if (input == "exit")
        {
          reading = false;
          Console.WriteLine("Bye bye!");
        }
        else
        {
          Console.WriteLine("I am not sure what you mean, try again");
        }
        Console.WriteLine();
        Console.WriteLine();
        Console.WriteLine();

      }
    }
  }
}
