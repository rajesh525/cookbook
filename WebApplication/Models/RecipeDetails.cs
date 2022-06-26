using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class RecipeDetails
    {
        public Guid Id { get; set; }
        public string Ingredents { get; set; }
        public string Description { get; set; }
        
        [ForeignKeyAttribute("RecipeID")]
       public RecipeCard RecipeCard { get; set; }

    }
}
