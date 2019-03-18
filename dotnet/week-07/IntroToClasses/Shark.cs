using System;

namespace IntroToClasses.Ocean
{
  public class Shark : Fish
  {
    public string Diet { get; set; } = "fish";
    public bool HasCoolThemeSong { get; set; } = true;
    public int NumberOfTeeth { get; set; }
    public string Era { get; set; }

    public Shark()
    {
      this.IsSaltWater = true;
      this.Species = "Shark";
    }

    public override void Swim()
    {
      Console.WriteLine("baby shark doo doo do do do ....");


    }
  }
}