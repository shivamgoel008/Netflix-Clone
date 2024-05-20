using Azure;
using Azure.Data.Tables;
using netflixGptBackend.Helper;
using netflixGptBackend.Interface;
using netflixGptBackend.Models;

namespace StudentManagementWebAPI.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly IConfiguration _configuration;
        private TableClient _tableClient;
        private readonly string _pepper;
        private readonly int _iteration = 3;
        public UserRepository(IConfiguration configuration)
        {
            _configuration = configuration;
            _pepper = "Shivam";
        }
        public async Task<User> LoginUserAsync(string email, string password)
        {
            try
            {
                var serviceClient = new TableServiceClient(_configuration["StorageConnectionString"]);
                _tableClient = serviceClient.GetTableClient("User");

                var users = new List<User>();
                await foreach (Page<User> page in _tableClient.QueryAsync<User>().AsPages())
                {
                    users.AddRange(page.Values);
                }
                var user = users.Where(x => x.Email == email).FirstOrDefault();
                if (user != null)
                {
                    var passwordHash = PasswordHasher.ComputeHash(password, user.PasswordSalt, _pepper, _iteration);
                    if (passwordHash == user.PasswordHash)
                    {
                        return user;
                    }
                }
                return null;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
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
