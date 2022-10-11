import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { JifitiService } from '../jifiti.service';
import { Application } from '../models/application.model';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

  public applicationList: Application[] = [];

  constructor(private jifitiService: JifitiService,
    private http: HttpClient,
    private router: Router  ) { }

  ngOnInit(): void {
    this.jifitiService.getApplicationList();

    this.jifitiService.applicationList$.subscribe(dataList => {
      this.applicationList = dataList;
    });

  }

  /*A SECOND WAY:
  goto(application: Application) {
    const navigationExtras: NavigationExtras = { state: { application: application } };
    this.router.navigate(['detail', application.id], navigationExtras);
  }*/

}


