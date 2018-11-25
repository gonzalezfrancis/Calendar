using AutoMapper;
using Database.Context;
using Domain.AppSettings;
using Domain.Dtos;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentsController : BaseController, IAppointmentsController
    {
        public AppointmentsController(ApplicationSettings applicationSettings, ApplicationContext context, IMapper mapper) 
            : base(applicationSettings, context, mapper)
        {

        }
        [HttpGet("{id}")]
        public ActionResult<AppointmentDto> GetById(int id)
        {
            return Repositories.Appointment.GetAppointmentById(id);
        }

        [HttpPost("addAppointment")]
        public ActionResult Post(AppointmentDto appointment)
        {
            Repositories.Appointment.AddAppointment(appointment);
            return Ok();
        }

        [HttpPost("update")]
        public ActionResult UpdateAppointment([FromBody] AppointmentDto appointment)
        {
            Repositories.Appointment.AddAppointment(appointment);
            return Ok();
        }

        [HttpGet("remove/{id}")]
        public ActionResult Remove(int id)
        {
            Repositories.Appointment.RemoveAppointment(id);
            return Ok();
        }

        [HttpPost("getbydate")]
        public ActionResult<List<AppointmentDto>> GetByDate(SimpleRequest request)
        {
            DateTime date = Convert.ToDateTime(request.Value);
            return Repositories.Appointment.GetByAppointmentsByDate(date);
        }

        [HttpGet("getall")]
        public ActionResult<List<AppointmentDto>> GetAllAppoitnments()
        {
            return Repositories.Appointment.GetAllAppointments();
        }
    }
}
