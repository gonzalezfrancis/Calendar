using Domain.Dtos;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    public interface IAppointmentsController
    {
        ActionResult<AppointmentDto> GetById(int id);
        ActionResult Post(AppointmentDto appointment);
        ActionResult UpdateAppointment(AppointmentDto appointment);
        ActionResult Remove(int id);
        ActionResult<List<AppointmentDto>> GetByDate(SimpleRequest date);
    }
}
