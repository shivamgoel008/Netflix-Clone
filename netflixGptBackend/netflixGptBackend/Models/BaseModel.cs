using Azure;
using Azure.Data.Tables;

namespace netflixGptBackend.Models
{
    public class BaseModel:ITableEntity
    {
         public string PartitionKey { get; set; }
        public string RowKey { get; set; }
        public DateTimeOffset? Timestamp { get; set; }
        public ETag ETag { get; set; }
    }
}