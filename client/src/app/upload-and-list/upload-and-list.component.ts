import { DocToCreate } from '../_interfaces/docToCreate.model';
import { Doc } from '../_interfaces/doc.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-upload-and-list',
  templateUrl: './upload-and-list.component.html',
  styleUrls: ['./upload-and-list.component.css']
})
export class UploadAndListComponent implements OnInit {
  isCreate!: boolean;
  documentName!: string;
  doc!: DocToCreate;
  docs: Doc[] = [];
  response!: { dbPath: ''; };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.isCreate = true;
  }

  onCreate = () => {
    this.doc = {
      documentName: this.documentName,
      url: this.response.dbPath
    }

    this.http.post('https://localhost:5001/api/doc', this.doc)
      .subscribe({
        next: _ => {
          this.getDocs();
          this.isCreate = false;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      });
  }

   getDocs = () => {
    this.http.get('https://localhost:5001/api/doc')
      .subscribe({
        next: (res) => this.docs = res as Doc[],
        error: (err: HttpErrorResponse) => console.log(err)
      });
  }

   returnToCreate = () => {
    this.isCreate = true;
    this.documentName = '';
  }

  uploadFinished = (event: { dbPath: ""; }) => {
    this.response = event;
  }

  public createImgPath = (serverPath: string) => {
    return `https://localhost:5001/${serverPath}`;
  }
}
