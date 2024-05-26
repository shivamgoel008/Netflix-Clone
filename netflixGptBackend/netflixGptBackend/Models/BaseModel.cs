using System.ComponentModel.DataAnnotations;
using Azure;
using Azure.Data.Tables;

namespace netflixGptBackend.Models
{
    public class BaseModel
    {
        [Required]
        public string UserID {get; set;}
        public DateTimeOffset? Timestamp { get; set;}
    }
}