using System;
using netflixGptBackend.Models;
namespace netflixGptBackend.Interface
{
    public interface IUserRepository
    {
        Task<User> RegisterUserAsync();
        Task<User>LoginUserAsync();
    }
}