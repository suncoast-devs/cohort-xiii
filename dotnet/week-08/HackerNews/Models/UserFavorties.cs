using System;

namespace HackerNews.Models
{
  public class UserFavorties
  {
    public int Id { get; set; }
    public DateTime When { get; set; } = DateTime.Now;

    // navigation properties
    public int UserId { get; set; }
    public User User { get; set; }

    public int ArticleId { get; set; }
    public Article Article { get; set; }
  }
}