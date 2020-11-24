using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using wk09.Models;

namespace wk09.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        // El nombre debe estar igual al de la base de datos para que funcione bien
        public DbSet<Proveedores> Proveedores { get; set; }
        public DbSet<Usuarios> Usuarios { get; set; }
    }
}
