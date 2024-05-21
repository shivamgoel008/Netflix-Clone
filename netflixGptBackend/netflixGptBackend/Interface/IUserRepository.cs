using System;
using netflixGptBackend.Models;
namespace netflixGptBackend.Interface
{
    public interface IUserRepository
    {
        Task<User> RegisterUserAsync(User user);
        Task<User>LoginUserAsync(string email, string password);
    }
}