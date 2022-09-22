using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Entity;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Course> Courses {get; set;}

        public DbSet<Category> Categories {get; set;}

        public DbSet<Requirement> Requirements {get; set;}

        public DbSet<Learning> Learnings {get; set;}

         public DbSet<Basket> Basket {get; set;}
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}