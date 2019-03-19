using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;


using HackerNews.Models;

namespace HackerNews
{
  class Program
  {
    static void Main(string[] args)
    {
      WebHost.CreateDefaultBuilder(args)
                  .UseStartup<Startup>().Build().Run(); ;
    }
  }
}
