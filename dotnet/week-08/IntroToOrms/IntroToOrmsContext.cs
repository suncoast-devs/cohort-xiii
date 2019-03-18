using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace IntroToOrms
{
  public partial class IntroToOrmsContext : DbContext
  {
    public IntroToOrmsContext()
    {
    }

    public IntroToOrmsContext(DbContextOptions<IntroToOrmsContext> options)
        : base(options)
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured)
      {
        optionsBuilder.UseNpgsql("server=localhost;database=introToOrms");
      }
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    { }


    // public DbSet<SchemaClass> TableName {get;set;}
    public DbSet<Team> Teams { get; set; }

  }
}
