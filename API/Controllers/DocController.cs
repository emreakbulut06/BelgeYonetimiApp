using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace API.Controllers
{
    public class DocController : BaseApiController
    {
        private readonly DataContext _context;

        public DocController(DataContext context) => _context = context;

        [HttpGet]
        public async Task<IActionResult> GetAllDocs()
        {
            try
            {
                var docs = await _context.Docs.ToListAsync();

                return Ok(docs);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateDoc([FromBody] Doc doc)
        {
            try
            {
                if (doc is null)
                {
                    return BadRequest("User object is null");
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest("Invalid model object");
                }

                _context.Add(doc);
                await _context.SaveChangesAsync();

                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }
    }
}
