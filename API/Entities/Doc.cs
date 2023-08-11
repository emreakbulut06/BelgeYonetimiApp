namespace API.Entities
{
    public class Doc
    {
        public int Id { get; set; }
        public string DocumentName { get; set; }
        public string Url { get; set; }
        public List<UserRoleDocument> UserRoleDocuments { get; set; } = new();
    }
}
