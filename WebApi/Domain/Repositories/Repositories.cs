using AutoMapper;
using Database.Context;
using Domain.AppSettings;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Repositories
{
    public class Repositories : IRepositories
    {
        public ApplicationContext Context { get; set; }
        public ApplicationSettings ApplicationSettings { get; set; }
        public IMapper Mapper { get; set; }

        public Repositories(ApplicationContext context, ApplicationSettings applicationSettings, IMapper mapper)
        {
            this.Context = context;
            this.ApplicationSettings = applicationSettings;
            this.Mapper = mapper;
        }

        private RepositoryParameters GetRepositoryParameters()
        {
            return new RepositoryParameters
            {
                ApplicationSettings = this.ApplicationSettings,
                Context = this.Context,
                Mapper = this.Mapper,
                Repositories = this
            };
        }

        public AppointmentRepository Appointment
        {
            get
            {
                return new AppointmentRepository(GetRepositoryParameters());
            }
        }
    }
}
