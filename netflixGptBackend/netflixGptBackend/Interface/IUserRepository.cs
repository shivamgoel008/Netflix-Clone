using System;
using netflixGptBackend.Models;
namespace netflixGptBackend.Interface
{
    public interface IUserRepository
    {
        Task<int> RegisterUserAsync(User user);
        Task<User>LoginUserAsync();
    }
}