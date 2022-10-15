import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from '../../models/application.model';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

  public applicationList: Application[] = [];

  constructor(private applicationService: ApplicationService,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.applicationService.getApplicationList();

    this.applicationService.applicationList$.subscribe(dataList => {
      this.applicationList = dataList;
    });

  }

  /*A SECOND WAY:
  goto(application: Application) {
    const navigationExtras: NavigationExtras = { state: { application: application } };
    this.router.navigate(['detail', application.id], navigationExtras);
  }*/

}
