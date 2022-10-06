import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JifitiService } from '../jifiti.service';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.css']
})
export class ApplicationDetailComponent implements OnInit {

  public transactionList!: Transaction[];
  private baseUrl: string;
  public id: number | undefined;
  public firstName: string | undefined;
  public lastName: string | undefined;
  TransType: typeof
    TransType = TransType;
 
  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.firstName = String(this.route.snapshot.paramMap.get('firstName'));
    this.lastName = String(this.route.snapshot.paramMap.get('lastName'));
    this.http.get<Transaction[]>(this.baseUrl + 'applications/' + this.id).subscribe(result => {
      this.transactionList = result;
    }, error => console.error(error));


  }

}


interface Transaction {
  id: number;
  amount: string;
  transType: TransType;
  cardId: number;
  appId: number;
  cardNo: string;
  issuer: string;
}

export enum TransType {
  AUTH = 1,
  COMMIT = 2,
  REFUND = 3
}


