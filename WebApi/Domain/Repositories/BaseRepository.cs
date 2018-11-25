using AutoMapper;
using Database.Context;
using Domain.AppSettings;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Repositories
{
    public class BaseRepository : IBaseRepository
    {
        public Repositories Repositories { get; set; }
        public ApplicationSettings ApplicationSettings { get; set; }
        public ApplicationContext Context { get; set; }
        public IMapper Mapper { get; set; }

        public BaseRepository(RepositoryParameters parameters)
        {
            this.Context = parameters.Context;
            this.ApplicationSettings = parameters.ApplicationSettings;
            this.Repositories = parameters.Repositories;
            this.Mapper = parameters.Mapper;
        }
    }
}
