using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Dtos
{
    public class AppointmentDtoInsert
    {
        public string Summary { get; set; }
        public string Location { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
