using System;

namespace HackerNews
{
  class Program
  {
    static void Main(string[] args)
    {

      while (true)
      {

        Console.WriteLine("Welcome to cmd hacker news");
        Console.WriteLine("what do you wanna do?");
        Console.WriteLine("see the most (recent)");
        Console.WriteLine("see the (top)");
        Console.WriteLine("(view {id}) article ");
        Console.WriteLine("(upvote {id}) article ");
        Console.WriteLine("Add a new article");
        var input = Console.ReadLine();
        Console.Clear();
        Console.WriteLine($"You picked {input}");

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
        else if (input.Contains("upvote"))
        {
          if (int.TryParse(input.Split(' ')[1], out int articleId))
          {
            Console.WriteLine($"up voting article {articleId}");
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
