using System;
using IntroToClasses.Ocean;

namespace IntroToClasses
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");
      var oneFish = new Fish("Seuss fish")
      {
        Species = "Seuss Fish",
        Color = "Yellow"
      };

      var twoFish = new Fish("Seuss fish");
      twoFish.Swim();
      var blueFish = new Fish("Seuss fish");
      blueFish.Swim();
      var nemo = new Fish();
      var bruce = new Shark();
      bruce.Swim();
    }
  }
}
