using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using netflixGptBackend.Helper;
using netflixGptBackend.Interface;
using netflixGptBackend.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace netflixGptBackend.Controllers
{
    public class AccountController : Controller
    {
        private readonly IUserRepository _userRepository;
        private readonly string _pepper;
        private readonly int _iteration = 3;
        public AccountController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
             _pepper = "Shivam";
        }
        [HttpPost]
        [Route("[controller]/register-user/{name}/{email}/{password}")]
        public async Task<IActionResult> RegisterUser(string name, string email, string password)
        {
            var passwordSalt = PasswordHasher.GenerateSalt();
            var user = new User
            {
                Name = name,
                Email = email,
                PasswordSalt = passwordSalt,
                Alias = email.Split('@')[0],
                PasswordHash=PasswordHasher.ComputeHash(password, passwordSalt, _pepper, _iteration)
            };

            var result = await _userRepository.RegisterUserAsync();
            return Ok();
        }

    }
}

