using AutoMapper;
using Database.Context;
using Domain.AppSettings;
using Domain.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController : ControllerBase, IBaseController
    {
        public Repositories Repositories { get; set; }
        public ApplicationSettings ApplicationSettings { get; set; }

        public BaseController(ApplicationSettings applicationSettings, ApplicationContext context, IMapper mapper)
        {
            this.ApplicationSettings = applicationSettings;
            this.Repositories = new Repositories(context, applicationSettings, mapper);
        }
    }
}
