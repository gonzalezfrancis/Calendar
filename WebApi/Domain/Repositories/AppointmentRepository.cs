using Database.Entities;
using Domain.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Domain.Repositories
{
    public class AppointmentRepository : BaseRepository, IAppointmentRepository
    {
        public AppointmentRepository(RepositoryParameters parameters) : base(parameters)
        {

        }

        public void AddAppointment(AppointmentDto appointment)
        {
            var AppointmentEntity = this.Mapper.Map<AppointmentDto, Appointment>(appointment);
            Context.Appointments.Add(AppointmentEntity);
            Context.SaveChanges();
        }

        public void RemoveAppointment(int id)
        {
            var appointment = Context.Appointments.FirstOrDefault(x => x.Id == id);
            Context.Appointments.Remove(appointment);
            Context.SaveChanges();
        }

        public void UpdateAppointment(AppointmentDto appointment)
        {
            var appointmentEntity = this.Mapper.Map<AppointmentDto, Appointment>(appointment);
            Context.Appointments.Update(appointmentEntity);
            Context.SaveChanges();
        }

        public AppointmentDto GetAppointmentById(int id)
        {
            var appointment = Context.Appointments.FirstOrDefault(x => x.Id == id);
            return this.Mapper.Map<Appointment, AppointmentDto>(appointment);
        }

        public List<AppointmentDto> GetByAppointmentsByDate(DateTime date)
        {
            var appointments = Context.Appointments.Where(x => x.StartDate.Date == date.Date).ToList();
            return Mapper.Map<List<Appointment>, List<AppointmentDto>>(appointments);
        }

        public List<AppointmentDto> GetAllAppointments()
        {
            var appointments = Context.Appointments.ToList();
            return Mapper.Map<List<Appointment>, List<AppointmentDto>>(appointments);
        }
    }
}
