using System;
using System.Collections.Generic;
using System.Linq;

namespace HelloWorld
{
  class Program
  {
    //template: 
    // static returnType Name(params...){}

    static string GetGreetingMessage(string name)
    {
      return $"Welcome to C#, {name}!";
    }

    static void Main(string[] args)
    {
      Console.WriteLine("Welcome!, What is your name?");
      var name = Console.ReadLine();
      var message = GetGreetingMessage(name);
      // Console.WriteLine($"Hello, {name}. what is your favorite number");
      //   var favoriteNumber = int.Parse(Console.ReadLine());


      // string 
      var aString = "this is a string";
      // char 
      var aCharacter = 'x';

      // Numbers
      var number = -10;
      //   number = null;
      var aNumberWithDecimalPoints = 10.5m;

      //bool 

      // byte


      // dynamic!?!?! Don't use this!!!
      //   dynamic thisIsAThing = "hello";
      //   thisIsAThing = 42;


      // if
      var firstName = "Jimmy";
      if (firstName != null)
      {
        Console.WriteLine($"Hey there, {firstName}");
      }

      // arrays/list
      // arrays 
      var scores = new int[10];
      scores[11] = 42;

      var listScores = new List<string>();

      listScores.Add("55");
      listScores.Add("12");

      var first = listScores[0];

      // loops
      for (int i = 0; i < 10; i++)
      {

      }

      foreach (var score in listScores)
      {
        Console.WriteLine(score);
      }

      while (true)
      {

      }

      do
      {

      } while (true);

      // map/filter/reduce

      var map = listScores.Select(score => score + "points");

      var filter = listScores
        .Where(score => int.Parse(score) > 50)
        .OrderBy(score => score[0])
        .Take(10);




      // methods
      // 
      // dev env set up
    }
  }
}
