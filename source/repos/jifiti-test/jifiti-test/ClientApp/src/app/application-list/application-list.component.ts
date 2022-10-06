import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

  public applications: Application[] = [];
  private baseUrl: string;

  constructor(private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  ngOnInit(): void {

    //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http.get<Application[]>(this.baseUrl + 'applications').subscribe(result => {
      this.applications = result;
      }, error => console.error(error));


  }

}

interface Application {
  id: number;
  firstName: string;
  lastName: string;
}
