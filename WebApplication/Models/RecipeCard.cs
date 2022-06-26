using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace WebApplication.Models
{
    public class RecipeCard
    {
        [Key]
        public Guid Id { get; set; }
        public string RecipeName { get; set; }
        public string Category { get; set; }
        public DateTime InsertedDate { get; set; }
        
        [NotMapped]
        public string Ingredents { get; set; }
        [NotMapped]
        public string Description { get; set; }


    }
}
