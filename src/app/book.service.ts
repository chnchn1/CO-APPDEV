import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Show } from './model/book.model';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getTitles() {
    return this.http.get<Show[]>('https://openlibrary.org/authors/OL23919A/works.json')
      .pipe(
        map((response: any) => {
          return response.entries.map((entry: any) => ({ title: entry.title }));
        })
      );
  }
}
