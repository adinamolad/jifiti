import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Application } from '../models/application.model';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private baseUrl: string;
  private transactionListSubject = new BehaviorSubject<Transaction[]>([]);
  private applicationListSubject = new BehaviorSubject<Application[]>([]);

  get transactionList$() {
    return this.transactionListSubject.asObservable();
  }

  get applicationList$() {
    return this.applicationListSubject.asObservable();
  }

  constructor(public http: HttpClient,
    @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getTransactionList(id: number) {
    this.http.get<Transaction[]>(this.baseUrl + 'applications/' + id).subscribe(result => {
      this.transactionListSubject.next(result);
    }, error => console.error(error));
  }

  getApplicationList() {
    this.http.get<Application[]>(this.baseUrl + 'applications').subscribe(result => {
      this.applicationListSubject.next(result);
    }, error => console.error(error));
  }

}
