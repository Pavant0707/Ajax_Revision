using Microsoft.EntityFrameworkCore;
using Student_Ajax.Entity;

namespace Student_Ajax.Context
{
    public class StudentContext : DbContext
    {
        public StudentContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Student> Studentdb { get; set; }
    }
}
