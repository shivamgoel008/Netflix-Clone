using Microsoft.AspNetCore.Cors;
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
        private readonly IConfiguration _configuration;

        public AccountController(IUserRepository userRepository,IConfiguration configuration)
        {
            _configuration = configuration;
            _userRepository = userRepository;
            _pepper = "Shivam";
        }
        [HttpPost]
        [EnableCors("AllowAllOrigins")]
        [Route("[controller]/register-user/{name}/{email}/{password}")]
        public async Task<IActionResult> RegisterUser(string name, string email, string password, string photoUrl)
        {
            try
            {
                string myKeyValue = _configuration["ConnectionString"];
                var passwordSalt = PasswordHasher.GenerateSalt();
                var user = new User
                {
                    PartitionKey = email,
                    RowKey = Guid.NewGuid().ToString(),
                    Name = name,
                    Email = email,
                    PasswordSalt = passwordSalt,
                    Alias = email.Split('@')[0],
                    PasswordHash = PasswordHasher.ComputeHash(password, passwordSalt, _pepper, _iteration),
                    PhotoUrl = string.IsNullOrWhiteSpace(photoUrl)? "https://avatars.githubusercontent.com/u/55030452?v=4":photoUrl
                };

                var result = await _userRepository.RegisterUserAsync(user);
                return Ok(result);
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

