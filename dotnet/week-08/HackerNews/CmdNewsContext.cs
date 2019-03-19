using System;
using HackerNews.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace HackerNews
{
  public partial class CmdNewsContext : DbContext
  {
    public CmdNewsContext()
    {
    }

    public CmdNewsContext(DbContextOptions<CmdNewsContext> options)
        : base(options)
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured)
      {
        optionsBuilder.UseNpgsql("server=localhost;database=CmdNews");
      }
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    { }

    public DbSet<User> Users { get; set; }
    public DbSet<Article> Articles { get; set; }
    public DbSet<UserFavorties> UserFavorties { get; set; }
  }
}
