import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountryService {

    private url = 'https://restcountries.com/v3.1'

    constructor(private http: HttpClient) { }

    searchCountryByAplphaCode(code: string): Observable<Country | null>{
        const url = `${this.url}/alpha/${code}`
        return this.http.get<Country[]>(url)
            .pipe(
                map( countries => countries.length > 0 ? countries[0] : null ),
                catchError( () => of(null)
                )
            )
    }

    // los pipes siven para especificar diferentes operadores rxjs
    searchByCapital( term: string ): Observable<Country[]> {
        const url = `${this.url}/capital/${term}`
        return this.http.get<Country[]>( url )
            .pipe(
                catchError( () => {
                    return of([])
                })
            )
    }

    searchByCountry( term: string ) : Observable<Country[]>{
        const url = `${this.url}/name/${term}`
        return this.http.get<Country[]>(url)
            .pipe(
                catchError( () => {
                    return of([])
                })
            );
    }

    searchByRegion( region: string ) : Observable<Country[]>{
        const url = `${this.url}/name/${region}`
        return this.http.get<Country[]>(url)
            .pipe(
                catchError( () => {
                    return of([])
                })
            );
    }   


    
}