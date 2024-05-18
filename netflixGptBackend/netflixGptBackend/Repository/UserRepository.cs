using System;
using System.Threading.Tasks;
using netflixGptBackend.Interface;
using netflixGptBackend.Models;

namespace StudentManagementWebAPI.Repository
{
    public class UserRepository : IUserRepository
    {
        public Task<User> LoginUserAsync()
        {
            throw new NotImplementedException();
        }

        public Task<User> RegisterUserAsync()
        {
            throw new NotImplementedException();
        }
    }
}
