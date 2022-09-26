using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class PaymentIntentAddedUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "693a2d61-b8e6-46e0-a498-ef8809ba7c79");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "aaad8577-ef36-4cf0-aa19-5881c786ba5c");

            migrationBuilder.RenameColumn(
                name: "PaymentIntetId",
                table: "Basket",
                newName: "PaymentIntentId");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "309de59a-0f7b-4bda-b8ee-21979161a902", "85e44d49-cea8-412d-bec3-c2ad586302c5", "Student", "STUDENT" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "3698ef14-bff1-4c81-bc9d-9bc75813580a", "02838dba-82a9-4dbc-b110-0479f6c7cf49", "Instructor", "INSTRUCTOR" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "309de59a-0f7b-4bda-b8ee-21979161a902");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3698ef14-bff1-4c81-bc9d-9bc75813580a");

            migrationBuilder.RenameColumn(
                name: "PaymentIntentId",
                table: "Basket",
                newName: "PaymentIntetId");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "693a2d61-b8e6-46e0-a498-ef8809ba7c79", "f510e708-99be-418b-a642-f0e1f54386bc", "Student", "STUDENT" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "aaad8577-ef36-4cf0-aa19-5881c786ba5c", "9489789b-6d62-40df-b0d1-fb93fa90c716", "Instructor", "INSTRUCTOR" });
        }
    }
}
