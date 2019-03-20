using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace introtoapis.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class PingController : ControllerBase
  {
    [HttpGet]
    public ActionResult<string> GetAction()
    {
      // this is where we query the database

      return "pong";
    }

  }
}