using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace IntroToOrms.Migrations
{
    public partial class AddedNonStringColumns : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "AverageTicketPrice",
                table: "Teams",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<int>(
                name: "ChampionsWon",
                table: "Teams",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "FoundedDate",
                table: "Teams",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AverageTicketPrice",
                table: "Teams");

            migrationBuilder.DropColumn(
                name: "ChampionsWon",
                table: "Teams");

            migrationBuilder.DropColumn(
                name: "FoundedDate",
                table: "Teams");
        }
    }
}
