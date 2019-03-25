using System.Collections.Generic;

namespace PetsRUs.Models
{
  public class Shelter
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Address { get; set; }
    public bool IsNoKill { get; set; } = true;

    public int MaxCapacity { get; set; }

    public int CurrentCapacity { get; set; }

    public string PrimaryContactName { get; set; }
    public string PrimaryContactPhone { get; set; }

    public double AdoptionFee { get; set; }

    // Navigation
    public List<Pet> Pets { get; set; } = new List<Pet>();
  }
}