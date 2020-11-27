import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService]
})
export class AppComponent  implements OnInit{
 public title = 'noisy';
 public user: User;
 public user_register: User;
 public identity;
 public token;
 public errorMessage;
 public alertRegister;
 
 constructor(
   private _userService: UserService
 ){
   this.user = new User('','','','','','ROLE_USER', '');
   this.user_register = new User('','','','','','ROLE_USER', '');
 }
 ngOnInit(){
  this.identity = this._userService.getIdentity;
  this.token = this._userService.getToken;  
}


 public onSubmit(){
   console.log(this.user);
   this._userService.signup(this.user).subscribe(
     response =>{
      let identity = response.user,
      this.identity = identity;
      if(!this.identity._id){
        alert("El usuario no esta correctamente identificado")
      }else{
        localStorage.setItem('identity', JSON.stringify(identity));
        this._userService.signup(this.user, 'true').subscribe(
          response =>{
           let  token = response.token;
           this.token =  token;
           if(this.token.lenght <= 0){
             alert("El token no se ha generado")
           }else{
            localStorage.setItem('token', token);
            this.user = new User('','','','','','ROLE_USER', '');
           }

      },
     
     error =>{
       var errorMessaje = <any>error;
       if(errorMessaje != null){
         var body = JSON.parse(error._body);
         this.errorMessage = body.message;
         console.log(error);         
       }
     }
   );
 }
 
  }
  );
}
logout(){
  localStorage.removeItem('identity');
  localStorage.removeItem('token');
  localStorage.clear();
  this.identity = null;
  this.token = null;
}


onSubmitRegister(){
  this._userService.register(this.user_register).subscribe(
    Response =>{
      let user = Response.user;
      this.user_register = user;
      if(!user._id){
        this.alertRegister = 'Error al registrarse';
      }else{
        this.alertRegister = 'El registro ha sido exitoso';
        this.user_register = new User('','','','','','ROLE_USER', '');
      }
    },
    error =>{
        var errorMessaje = <any>error;
        if(errorMessaje != null){
          var body = JSON.parse(error._body);
          this.alertRegister = body.message;
          console.log(error);         
        }
      

    }
  );
}

}
