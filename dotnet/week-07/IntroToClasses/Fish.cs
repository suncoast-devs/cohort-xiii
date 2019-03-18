using System;

namespace IntroToClasses.Ocean
{
  public class Fish
  {
    // color
    public string Color { get; set; }
    // length
    public double LengthInCentimeters { get; set; }
    // weight
    public double WeightInKilograms { get; set; }
    // species
    public string Species { get; set; }
    // sex
    public string Sex { get; set; }
    // isSaltWater 
    public bool IsSaltWater { get; set; }

    //constructor
    public Fish(string species)
    {
      this.Species = species;
    }

    public Fish()
    {

    }

    public virtual void Swim()
    {
      Console.WriteLine("Just keep swimming....");
    }
  }
}