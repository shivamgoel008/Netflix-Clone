namespace netflixGptBackend.Models
{
    public class User:BaseModel
    {
        public string Name {get;set;}
        public string Email {get;set;}
        public string PasswordSalt {get;set;}
        public string PasswordHash {get;set;}
        public string Alias {get;set;}
    }
}