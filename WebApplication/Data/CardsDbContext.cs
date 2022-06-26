using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication.Models;

namespace WebApplication.Data
{
    public class CardsDbContext : DbContext
    {
        public CardsDbContext( DbContextOptions options) : base(options)
        {
        }

        //Dbset

        public DbSet<RecipeCard> Cards { get; set; }
        public DbSet<RecipeDetails> Details { get; set; }
    }
}
