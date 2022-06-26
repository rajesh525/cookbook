using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication.Models;

namespace WebApplication.Data
{
    public interface IDataRepository
    {
        public Task<IEnumerable<RecipeCard>> GetAllCardsAsync();
        public Task<RecipeCard> GetCardAsync(Guid id);
        public Task<RecipeCard>SaveCardAsync(RecipeCard card);
        public Task<RecipeCard> UpdateCardAsync(Guid id,RecipeCard card);
        public Task<RecipeCard> DeleteCardAsync(Guid id);


    }
}
