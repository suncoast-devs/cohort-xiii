using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;

namespace HackerNews
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddMvc()
      .AddJsonOptions(x => x.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
    }

    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      // 
      app.Map("/ping", (api) =>
      {
        api.Run(async context =>
        {
          await context.Response.WriteAsync("pong");
        });
      });

      app.Map("/api/articles/recent", (api) =>
      {
        app.Run(async context =>
        {
          // go to database
          var db = new CmdNewsContext();
          // get the top ten most recent
          var recentArticles = db.Articles
                                  .Include(i => i.User)
                                  .OrderByDescending(o => o.DateSubmitted).Take(10)
                                  .Select(s => new { s.Title, s.DateSubmitted, s.Id, s.User.UserName, s.Url });


          // return the result as JSON
          await context.Response.WriteAsync(JsonConvert.SerializeObject(recentArticles));
        });
      });
    }
  }
}