using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;

using HackerNews.Models;

namespace HackerNews
{
  class EfExamples
  {

    static void DisplayArticles(IQueryable<Article> articles)
    {
      // display the articles
      // id. Title => url @ time by username
      foreach (var article in articles)
      {
        Console.WriteLine($"{article.Id} - {article.Title} => {article.Url} @ {article.DateSubmitted} by {article.User?.UserName} ");
      }
    }

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
          // recent 10 articles 
          var recentArticles = db.Articles
            .Include(i => i.User)
            .OrderByDescending(o => o.DateSubmitted).Take(10);
          DisplayArticles(recentArticles);
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
          var favs = db
              .UserFavorties
              .Include(uf => uf.Article)
              .Where(uf => uf.UserId == user.Id)
              .Select(uf => uf.Article)
              .Include(article => article.User);
          /*
          
          // maybe???

            SELECT Article.Text, Article.Url, User.UserName, Article.DateCreated, Article.Id
            FROM UserFavorites
            LEFT JOIN Articles ON Articles.Id = UserFavorites.ArticleID 
            LEFT JOIN User ON Articles.UserId = User.Id
            WHERE UserFavorties.UserId = {user.id}
          
           */


          DisplayArticles(favs);

        }
        else if (input.Contains("favorite"))
        {
          if (int.TryParse(input.Split(' ')[1], out int articleId))
          {
            Console.WriteLine($"favoriting article {articleId}");
            user.UserFavorties.Add(new UserFavorties
            {
              ArticleId = articleId,
              UserId = user.Id
            });
            db.SaveChanges();
            Console.WriteLine("Successfully saved");
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
          // read the url
          Console.WriteLine("Url?");
          var url = Console.ReadLine();
          // read the title
          Console.WriteLine("Title?");
          var title = Console.ReadLine();
          // create it
          var newArticle = new Article
          {
            Title = title,
            Url = url,
            UserId = user.Id
          };
          // add it
          db.Articles.Add(newArticle);
          // save it
          db.SaveChanges();


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
