using System;

namespace PetsRUs.ViewModels
{
  public class PetViewModel
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
    public int ShelterId { get; set; }
    public string ShelterUrl { get; set; }
    public string ImageUrl { get; set; }
    public string ShelterName { get; set; }
  }
}