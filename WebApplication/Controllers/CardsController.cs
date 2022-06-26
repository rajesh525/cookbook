using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication.Data;
using WebApplication.Models;

namespace WebApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CardsController : Controller
    {
        private readonly IDataRepository _dataRepository;

        public CardsController(IDataRepository dataRepository)
        {
            _dataRepository = dataRepository;
        }
        
        [HttpGet]
        public async Task<IActionResult> GetAllCards()
        {
            var result = await _dataRepository.GetAllCardsAsync();
            return Ok(result);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        [ActionName("GetCard")]
        public async Task<IActionResult> GetCard([FromRoute] Guid id)
        {
            var result = await _dataRepository.GetCardAsync(id);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> AddCard([FromBody] RecipeCard card)
        {
            var result = await _dataRepository.SaveCardAsync(card);
            return CreatedAtAction(nameof(GetCard), new { id = result.Id }, result);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateCard([FromRoute] Guid id, [FromBody] RecipeCard card)
        {
            var result = await _dataRepository.UpdateCardAsync(id, card);
            return result!=null?Ok(result):NotFound("Card not found");
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteCard([FromRoute] Guid id)
        {
            var result = await _dataRepository.DeleteCardAsync(id);
            return result!=null?Ok(result):NotFound("Card not found");
        }
    }
}
