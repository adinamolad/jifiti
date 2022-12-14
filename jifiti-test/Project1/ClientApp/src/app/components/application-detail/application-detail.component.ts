import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from '../../models/application.model';
import { Transaction, TransType } from '../../models/transaction.model';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.css']
})
export class ApplicationDetailComponent implements OnInit {

  public transactionList: Transaction[] = [];
  public application: Application = {};
  TransType: typeof TransType = TransType;

  //A SECOND WAY:
  //navigation: Navigation | null;

  constructor(private applicationService: ApplicationService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient) {
    //A SECOND WAY:
    //this.navigation = this.router.getCurrentNavigation();
  }

  ngOnInit(): void {

    this.application.id = Number(this.route.snapshot.paramMap.get('id'));
    this.application.firstName = String(this.route.snapshot.paramMap.get('firstName'));
    this.application.lastName = String(this.route.snapshot.paramMap.get('lastName'));

    /*
    A SECOND WAY:
    const state = this.navigation?.extras.state as {application: Application};
    this.application.id = state.application.id;
    this.application.firstName = state.application.firstName;
    this.application.lastName = state.application.lastName;
   */

    if (this.application.id) {
      this.applicationService.getTransactionList(this.application.id);

      this.applicationService.transactionList$.subscribe(dataList => {
        this.transactionList = dataList;
      });
    }

  }

}
