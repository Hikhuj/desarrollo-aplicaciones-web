using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace Lec09.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(AppDbContextOptions<AppDbContext> options) : base(options)
        {

        }
        public DataSet<Proveedores>
    }
}