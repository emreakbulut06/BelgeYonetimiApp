using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Doc> Docs { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserRoleDocument>()
                        .HasKey(t => new { t.UserId, t.DocumentId, t.UserRoleId });

            modelBuilder.Entity<UserRoleDocument>()
                        .HasOne(u => u.User)
                        .WithMany(ud => ud.UserRoleDocuments)
                        .HasForeignKey(u => u.UserId);

            modelBuilder.Entity<UserRoleDocument>()
                        .HasOne(ur => ur.UserRole)
                        .WithMany(u => u.UserRoleDocuments)
                        .HasForeignKey(u => u.UserRoleId);

            modelBuilder.Entity<UserRoleDocument>()
                        .HasOne(dr => dr.Document)
                        .WithMany(d => d.UserRoleDocuments)
                        .HasForeignKey(dr => dr.DocumentId);
        }

    }
}
