import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero, ReturnHero } from './hero';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class HeroService {
  private hostUrl = 'https://reviewservices.azurewebsites.net'; // reviewservices
  private cipUrl = 'https://cipservices.azurewebsites.net';
  private userUrl = 'https://userservices.azurewebsites.net';
  private heroesUrl = 'api/heroes';  // URL to web api
  private getCipListUrl = `${this.hostUrl}/api/GetList`;
  private nodeUrl = 'http://localhost:4500/api/product';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getHeroes(): Observable<ReturnHero[]> {
    return this.http.get<ReturnHero[]>(this.getCipListUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<ReturnHero[]>('getHeroes', []))
      );
  }

  getCips(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.cipUrl}/api/GetList`)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.userUrl}/api/GetUsers`)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<any[]>('getHeroes', []))
      );
  }

  //微前端配合nodejs接口
  // getNodePro(): Observable<any[]> {
  //   return this.http.get<any[]>(this.nodeUrl)
  //     .pipe(
  //       tap(_ => this.log('fetched nodeList')),
  //       catchError(this.handleError<any[]>('nodeList', []))
  //     );
  // }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
