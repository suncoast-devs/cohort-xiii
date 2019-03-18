namespace IntroToOrms
{
  public class Players
  {
    public int Id { get; set; }
    public string FullName { get; set; }
    public string Number { get; set; }
    public string Position { get; set; }
    public double Salary { get; set; }
    public bool Injured { get; set; } = false;

    // team stuff

    public int TeamId { get; set; }
    public Team Team { get; set; }
  }
}