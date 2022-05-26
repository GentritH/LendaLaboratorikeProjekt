using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Sukseset.Any()) return;

            var activities = new List<Activity>
            {
                new Activity
                {
                    fotoName = "Kampion",
                    suksesetTitle = "Finalja e Grupmoshave U-19",
                    suksesetDescription = "Vendi i pare ne finalen e grupmoshave U-19",
                
                },
                new Activity
                {
                    fotoName = "Kampion",
                    suksesetTitle = "Finalja e Grupmoshave U-16",
                    suksesetDescription = "Vendi i pare ne finalen e grupmoshave U-16",
                
                },
                new Activity
                {
                    fotoName = "Kampion",
                    suksesetTitle = "Finalja e Grupmoshave U-14",
                    suksesetDescription = "Vendi i pare ne finalen e grupmoshave U-14",
                
                },
                new Activity
                {
                    fotoName = "Kampion",
                    suksesetTitle = "Finalja e Grupmoshave U-12",
                    suksesetDescription = "Vendi i pare ne finalen e grupmoshave U-12",
                
                },
                new Activity
                {
                    fotoName = "Kampion",
                    suksesetTitle = "Finalja e Grupmoshave U-10",
                    suksesetDescription = "Vendi i pare ne finalen e grupmoshave U-10",
                
                },
                new Activity
                {
                    fotoName = "Nenkampion",
                    suksesetTitle = "Finalja e Grupmoshave U-18",
                    suksesetDescription = "Vendi i dyte ne finalen e grupmoshave U-18",
                
                },
                new Activity
                {
                    fotoName = "Nenkampion",
                    suksesetTitle = "Finalja e Grupmoshave U-17",
                    suksesetDescription = "Vendi i dyte ne finalen e grupmoshave U-17",
                
                },
                new Activity
                {
                    fotoName = "Nenkampion",
                    suksesetTitle = "Finalja e Grupmoshave U-15",
                    suksesetDescription = "Vendi i dyte ne finalen e grupmoshave U-15",
                
                }
            };

            await context.Sukseset.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}