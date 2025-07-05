using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Persistence
{
    public class DbInitializer
    {
        public async Task SeedData(AppDbContext context)
        {
            if (context.Activities.Any())
                return;
        }
    }
}