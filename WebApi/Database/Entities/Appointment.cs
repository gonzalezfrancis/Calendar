using System;
using System.Collections.Generic;
using System.Text;

namespace Database.Entities
{
    public class Appointment : BaseEntity
    {
        public string Summary { get; set; }
        public string Location { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
