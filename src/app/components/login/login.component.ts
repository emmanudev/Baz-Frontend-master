import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User, UserResponse } from '../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form : FormGroup;
  login = false;
  pass = false ;
  constructor(private fb :FormBuilder, private _snackBar: MatSnackBar, private router: Router, private _authSvc : AuthService) { 
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar(){
    const user = this.form.value.usuario;
    const pass = this.form.value.password;
    if(user == 'emmanuel' && pass == 'passroot'){
      //redireccionamos
      this.form.reset();
      console.log('Login correcto')
      this.Login();

    }else{
      //Redireccionamos con error
      this.error();
      this.form.reset();
      console.log('Incorrecto');
    }
  }
  
  Login(){
    this.login = true;
    setTimeout(() => {
      //rediereccionamos al dashboard
      this.router.navigate(['dashboard']);
    }, 1500);
    }

  error(){
    this._snackBar.open('¡Error!, usuario o contraseña incorrectos','Cerrar', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
  

}
