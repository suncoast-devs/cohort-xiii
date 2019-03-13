using System;

namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Welcome!, What is your name?");
      var name = Console.ReadLine();
      Console.WriteLine($"Hello, {name}. what is your favorite number");
      var favoriteNumber = int.Parse(Console.ReadLine());


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
      dynamic thisIsAThing = "hello";
      thisIsAThing = 42;

      // gitignore


      // if

      // arrays/list

      // loops

      // methods

      // dev env set up
    }
  }
}
