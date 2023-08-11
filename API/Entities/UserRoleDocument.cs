using System.Reflection.Metadata;

namespace API.Entities
{
    public class UserRoleDocument
    {
        public int UserId { get; set; }
        public User User { get; set; }
        public int DocumentId { get; set; }
        public Doc Document { get; set; }
        public int UserRoleId { get; set; }
        public UserRole UserRole { get; set; }
    }
}
