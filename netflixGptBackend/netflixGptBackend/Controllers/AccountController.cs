using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Permissions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using netflixGptBackend.Helper;
using netflixGptBackend.Interface;
using netflixGptBackend.Models;

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
            try
            {
                var passwordSalt = PasswordHasher.GenerateSalt();
                var user = new User
                {
                    PartitionKey = email,
                    RowKey = Guid.NewGuid().ToString(),
                    Name = name,
                    Email = email,
                    PasswordSalt = passwordSalt,
                    Alias = email.Split('@')[0],
                    PasswordHash = PasswordHasher.ComputeHash(password, passwordSalt, _pepper, _iteration)
                };

                var result = await _userRepository.RegisterUserAsync(user);
                switch (result)
                {
                    case 1:
                        return Ok(new { code = 1, message = "Success" });
                    case 0:
                        return Ok(new { code = 0, message = "Duplicate User" });
                    default:
                        return Ok(new { code = -1, message = "Failure" });
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest(new { code = -1, message = "Bad Request" });
            }
        }

        [HttpPost]
        [Route("[controller]/login-user/{email}/{password}")]
        public async Task<IActionResult> LoginUser(string name, string email, string password)
        {
            try
            {
                var result = await _userRepository.LoginUserAsync(email, password);
                if(User!=null)
                return Ok(result);
                else 
                return Ok(new {code=0, message="User Not Found"});
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest(new { code = -1, message = "Bad Request" });
            }
        }

    }
}

