using System;

namespace HackerNews.Models
{
  public class User
  {
    public int Id { get; set; }
    public string UserName { get; set; }
    public int Karma { get; set; }
    public DateTime CreatedDate { get; set; } = DateTime.Now;
    public DateTime LastLoggedIn { get; set; } = DateTime.Now;
    public string About { get; set; }

  }
}