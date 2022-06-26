using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication.Models;

namespace WebApplication.Data
{
    public class DataRepository : IDataRepository
    {
        private readonly CardsDbContext _cardsDbContext;

        public DataRepository(CardsDbContext cardsDbContext)
        {
          _cardsDbContext = cardsDbContext;
        }

        public async Task<IEnumerable<RecipeCard>> GetAllCardsAsync()
        {
            var result = await _cardsDbContext.Details.Include(x => x.RecipeCard).Select(x => new RecipeCard() { Id = x.RecipeCard.Id, RecipeName = x.RecipeCard.RecipeName, Description = x.Description, Category = x.RecipeCard.Category, InsertedDate = x.RecipeCard.InsertedDate, Ingredents = x.Ingredents }).ToListAsync();
            return result ?? null;
        }

        public async Task<RecipeCard> GetCardAsync(Guid id)
        {
            var result = await _cardsDbContext.Details.Include(x => x.RecipeCard).Where(x => x.RecipeCard.Id == id).Select(x => new RecipeCard() { Id = x.RecipeCard.Id, RecipeName = x.RecipeCard.RecipeName, Description = x.Description, Category = x.RecipeCard.Category, InsertedDate = x.RecipeCard.InsertedDate, Ingredents = x.Ingredents }).FirstOrDefaultAsync();
            return result ?? null;
        }

        public async Task<RecipeCard> SaveCardAsync(RecipeCard card)
        {
            card.Id = Guid.NewGuid();
            RecipeDetails recipeDetails = new RecipeDetails() { Ingredents = card.Ingredents, Description = card.Description, RecipeCard = card };
            await _cardsDbContext.Details.AddAsync(recipeDetails);
            await _cardsDbContext.SaveChangesAsync();
            return card;
           
        }

        public async Task<RecipeCard> UpdateCardAsync(Guid id, RecipeCard card)
        {
            var eCard = await _cardsDbContext.Details.Include(x => x.RecipeCard).FirstOrDefaultAsync(x => x.RecipeCard.Id == id);
            if (eCard != null)
            {

                eCard.RecipeCard.RecipeName = card.RecipeName;
                eCard.RecipeCard.InsertedDate = card.InsertedDate;
                eCard.RecipeCard.Category = card.Category;
                eCard.Description = card.Description;
                eCard.Ingredents = card.Ingredents;
                await _cardsDbContext.SaveChangesAsync();
                return card;
            }

            return null;
        }

        public async Task<RecipeCard> DeleteCardAsync(Guid id)
        {
            var eCard = await _cardsDbContext.Details.Include(x => x.RecipeCard).FirstOrDefaultAsync(x => x.RecipeCard.Id == id);
            if (eCard != null)
            {
                _cardsDbContext.Details.Remove(eCard);
                await _cardsDbContext.SaveChangesAsync();
                return new RecipeCard() { Id = eCard.RecipeCard.Id };
            }
            return null;
        }
    }
}
