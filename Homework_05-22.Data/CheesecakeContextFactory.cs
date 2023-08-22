using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Homework_05_22.Data
{
    public class CheesecakeContextFactory : IDesignTimeDbContextFactory<CheesecakeDataContext>
    {
        public CheesecakeDataContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}Homework_05-22.Web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new CheesecakeDataContext(config.GetConnectionString("ConStr"));
        }
    }
}