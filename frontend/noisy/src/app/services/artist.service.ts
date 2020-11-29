import { Injectable } from '@angular/core';
import { Http, Response, Headers, requestOptions } from '@angular/http';
//import { HttpClient, HttpHeaders, HttpErrorResponse, requestOptions } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { GLOBAL } from './global';
import { Artist } from '../models/artist';

@Injectable()
    export class ArtistService{
        public url: string;
    

        
        constructor(private _http: HttpClient){
        this.url = GLOBAL.url;
        }
    addArtist(token, artist: Artist){
        let params = JSON.stringify(artist);
        let headers= new Headers({
            'Content-Type' : 'application/json',
            'Authorization' : token,
        });

        return this._http.post(this.url+'artist', params, {headers: headers}).map(res => res.json());
    }
    
    

    getArtist(token: any, id: string){
        let headers = new Headers({
            'Content-Type' : 'application/json',
            'Authorization' : token
        });
        let options = requestOptions ({headers: headers}),
        return this._http.get(this.url+'artist/'+id,options).map(res=> res.json())

    

    editArtist(token: any,id:string : Artist: any){
        let params = JSON.stringify(artist);
        let headers= new Headers({
            'Content-Type' : 'application/json',
            'Authorization' : token;
        })

        return this._http.put(this.url+'artist/'+id', params, {headers: headers}.map(res => res.json());
    };

   deleteArtist(token: any, id: string){
        let headers = new Headers({
            'Content-Type' : 'application/json',
            'Authorization' : token
        });
        let options = requestOptions ({headers: headers}),
        return this._http.delete(this.url+'artist/'+id, options).map(res=> res.json();)

    };

    }
  
    }
}
