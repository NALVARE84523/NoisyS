import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { GLOBAL } from '../services/global'

}

@Component({
    selector: 'user-edit',
    templateUrl: '../views/user-edit.html',
    providers: [UserService]
  })

  export class UserEditComponent implements OnInit{
    public titulo: string;
    public user: User;
    public identity;
    public token;  
    public alertMessage;
    public url: string;
    

    constructor(
        private _userService: UserService
      ){
          this.titulo= 'Actualiza mis datos';               
          this.identity = this._userService.getIdentity;
          this.token = this._userService.getToken;  
          this.user = this.identity;
          this.url = global.URL;
        }  

      ngOnInit(){
        
        console.log('user-edit.component.ts cargado');
    }
    onsubmit(){
       
        this._userService.updateUser(this.user).subscribe(
            Response =>{
                
                if(!Response.user){
                    this.alertMessage = 'El usuario no se ha actualizado';
                }else{
                    //this.user = Response.user;
                    localStorage.setItem('identity', JSON.stringify(Response.user));
                    document.getElementById("identity_name").innerHTML = this.user.name;
                    this.alertMessage = 'Datos actualizados correctamente';
                    if(!this.filesToUpload){

                    }else{
                        this.makeFileRequest(this.url+'upload-image-user/'+ this.user._id,[], this-this.filesToUpload).then(
                            function(result: any) =>{
                              
                                this.user.image = result.image;
                                localStorage.setItem('identity', JSON.stringify(this.user));
                                
                                let image_path = this.url + 'get-image-user/' + this.user.image;
                                document.getElementById('image-logged').setAttribute('src', image_path);
                            }
                             
                        )
                    }
                    this.alertMessage = 'Datos actualizados correctamente'
                }
            },
            error =>{
                var errorMessaje = <any>error;
                if(errorMessaje != null){
                  var body = JSON.parse(error._body);
                  this.alertMessage = body.message;
                  console.log(error);         
                }
              });
    }
    public filesToUpload: Array<file>;
    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>>fileInput.target.files;
    }

    makeFileRequest(url: string, params: Array<string>, files:Array<File>){
        
        var token= this.token;

        return new Promise(function(resolve,reject){

            var formData: any = new formData();
            var xhr = new XMLHttpRequest();

            for(var i=0; i < files.length,i++){
                formData.append('image', files[i], files[i].name);
            }
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if (xhr.status == 200){
                        resolve(JSON.parse(xhr.response))
                    }
                    resolve(JSON.parse(xhr));
                }else{
                    reject(xhr.response);
                }
            }
            xhr.open('Post', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formData);
        });

    }

}