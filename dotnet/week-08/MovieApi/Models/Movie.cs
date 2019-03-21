namespace MovieApi.Models
{
  public class Movie
  {
    public int Id { get; set; }
    public string Title { get; set; }
    public string Rating { get; set; }
    public string Director { get; set; }
    public bool IsActive { get; set; } = true;
  }
}