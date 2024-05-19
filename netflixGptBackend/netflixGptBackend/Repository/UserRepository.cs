using System;
using System.Threading.Tasks;
using Azure.Data.Tables;
using netflixGptBackend.Interface;
using netflixGptBackend.Models;

namespace StudentManagementWebAPI.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly IConfiguration _configuration;
        private TableClient _tableClient;
        public UserRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public Task<User> LoginUserAsync()
        {
            throw new NotImplementedException();
        }

        public async Task<int> RegisterUserAsync(User user)
        {
            try
            {
                var serviceClient = new TableServiceClient(_configuration["StorageConnectionString"]);
                _tableClient = serviceClient.GetTableClient("User");
                await _tableClient.CreateIfNotExistsAsync();
                var query = _tableClient.QueryAsync<User>(u => u.PartitionKey == user.PartitionKey);
                var exist = false;
                // Return true if any entities are found
                await foreach (var entity in query)
                {
                    exist = true;
                }
                if (exist)
                {
                    return 0;
                }
                else
                {
                    await _tableClient.AddEntityAsync(user);
                    return 1;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return -1;
            }
        }
    }
}
