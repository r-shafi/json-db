import { Component, OnInit } from '@angular/core';
import { GetUsersService } from './get-users.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  database;
  filtered;

  constructor(private data: GetUsersService) {}

  ngOnInit(): void {
    this.data.fetchData().subscribe((data) => {
      this.database = data;
      this.filtered = data;
    });
  }

  filter(input) {
    if (input.value) {
      this.filtered = this.database.filter((data) =>
        data.name.toLowerCase().includes(input.value.toLowerCase())
      );
    }
    if (!input.value) {
      this.filtered = this.database;
    }
  }
}
