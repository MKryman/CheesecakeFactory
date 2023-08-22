namespace Homework_05_22.Data
{
    public class CheesecakeRepository
    {
        private string _connectionString;

        public CheesecakeRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Cheesecake> GetAllOrders()
        {
            var context = new CheesecakeDataContext(_connectionString);
            return context.Cheesecakes.ToList();
        }

        public void AddOrder(Cheesecake c)
        {
            var context = new CheesecakeDataContext(_connectionString);
            context.Cheesecakes.Add(c);
            context.SaveChanges();
        }

        public Cheesecake CheesecakeById(int id)
        {
            var context = new CheesecakeDataContext(_connectionString);
            return context.Cheesecakes.FirstOrDefault(c => c.Id == id);
        }
    }
}