using Homework_05_22.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Homework_05_22.Web.Controllers
{ 

    [Route("api/[controller]")]
    [ApiController]
    public class CheesecakeController : ControllerBase
    {
        private readonly string _connectionString;

        public CheesecakeController(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("ConStr");
        }

        [HttpGet][Route("getallorders")]
        public List<Cheesecake> GetAllOrders()
        {
            var repo = new CheesecakeRepository(_connectionString);
            return repo.GetAllOrders();
        }

        [HttpPost][Route("submitorder")]
        public void NewOrder(Cheesecake c)
        {
            var repo = new CheesecakeRepository(_connectionString);
            repo.AddOrder(c);
        }

        [Route("vieworder")]
        public Cheesecake ViewOrder(int id)
        {
            var repo = new CheesecakeRepository(_connectionString);
            return repo.CheesecakeById(id);
        }
    }
}
