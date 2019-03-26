using System;

namespace PetsRUs.Models
{
  public class Pet
  {
    public int Id { get; set; }
    public string Name { get; set; }

    public string Species { get; set; }

    public bool GoodWithKids { get; set; }
    public int Age { get; set; }
    public string Breed { get; set; }

    public bool IsAdopted { get; set; } = false;
    public DateTime? DateAdopted { get; set; } = null;
    public DateTime DateArrived { get; set; } = DateTime.Now;

    public string ImageUrl { get; set; }

    // navigation properties
    public int ShelterId { get; set; }
    public Shelter Shelter { get; set; }
  }
}