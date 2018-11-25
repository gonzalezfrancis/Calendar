using AutoMapper;
using Database.Entities;
using Domain.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.AutomapperProfiles
{
    public class AppointmentMappingProfile : Profile
    {
        public AppointmentMappingProfile()
        {
            CreateMap<AppointmentDto, Appointment>().ReverseMap();
            CreateMap<AppointmentDtoInsert, Appointment>().ReverseMap();

        }
        
    }
}
