using AutoMapper;
using Database.Context;
using Domain.AppSettings;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Repositories
{
    public class RepositoryParameters
    {
        public Repositories Repositories { get; set; }
        public ApplicationSettings ApplicationSettings { get; set; }
        public ApplicationContext Context { get; set; }
        public IMapper Mapper { get; set; }
    }
}
