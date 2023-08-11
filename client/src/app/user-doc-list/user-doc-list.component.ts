import { Component, OnInit } from '@angular/core';
import { Doc } from '../_interfaces/doc.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-user-doc-list',
  templateUrl: './user-doc-list.component.html',
  styleUrls: ['./user-doc-list.component.css']
})

export class UserDocListComponent implements OnInit {

  constructor(private http: HttpClient) { }
  docs: Doc[] = [];

  ngOnInit(): void {
    this.getDocs();
  }

  getDocs = () => {
    this.http.get('https://localhost:5001/api/doc')
      .subscribe({
        next: (res) => this.docs = res as Doc[],
        error: (err: HttpErrorResponse) => console.log(err)
      });
  }
}
