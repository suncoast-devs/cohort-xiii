using System;
using System.Collections.Generic;

namespace IntroToOrms
{
  public class Team
  {

    public int Id { get; set; }
    // coach
    public string Coach { get; set; }
    public string Mascot { get; set; }
    public string City { get; set; }
    public DateTime FoundedDate { get; set; }

    public int ChampionsWon { get; set; }
    public double AverageTicketPrice { get; set; }

    // players

    public List<Players> Players { get; set; } = new List<Players>();

  }
}