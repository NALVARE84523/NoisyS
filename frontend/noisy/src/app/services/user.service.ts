import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { GLOBAL } from './global';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
  })
export class UserService{
    public url: string;

    constructor(private _http: HttpClient){
        this.url = GLOBAL.url;
    }

    signup(user_to_login, gethash = null) {
        if(gethash !=null){
            user_to_login.gethash = gethash;
        }
        let json = JSON.stringify(user_to_login);
        let params = json;
        let headers = new Headers({'Content-Type':'application/json'})
        return this._http.post(this.url+'login', params, {headers: headers}).map(res => res.json());
    }

    register(user_to_register){
        let params = JSON.stringify(user_to_register);        
        let headers = new Headers({'Content-Type':'application/json'})
        return this._http.post(this.url+'register', params, {headers: headers}).map(res => res.json());
    }
    getIdentity(){
        let identity = JSON.parse(localStorage.getItem('identity'));
        if(identity != "undefined"){
            this.identity = identity;
        }else{
            this.identity = null;
        }
        return this.identity;
    }
    getToken(){
        let token = JSON.parse(localStorage.getItem('token'));
        if (token !="undefined"){
            this.token = token;
        }else{
            this.token = null;
        }
        return this.token;

    }
}

   


  