using System;

namespace NumberGuesser
{
  class Program
  {
    static void Main(string[] args)
    {
      var stillGuessing = true;
      var counter = 0;
      while (stillGuessing)
      {
        counter++;
        // figure out the next guess
        // ask the user if the guess was correct
        Console.WriteLine("Is your number 65?");
        var input = Console.ReadLine();
        if (input == "yes")
        {
          stillGuessing = false;
        }
      }
      Console.WriteLine($"Hey, I guess a total of {counter} times and your number was Y");


    }
  }
}
