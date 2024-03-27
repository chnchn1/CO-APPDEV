import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   username: string[] = [];
   password: string[] = [];

 constructor(private alertController: AlertController, private toastController: ToastController, private router: Router) { }
 
 async logIn () {
  if (this.username.includes('user1') && this.password.includes('password')) {
   const alert = await this.alertController.create ({
     header: 'LogIn',
     subHeader: 'Status',
     message: 'Log In Success.',
     buttons: ['OK']
   });
   await alert.present();
   this.router.navigate(['dashboard']);
 } else {
  const toast = await this.toastController.create ({
    message: 'Log In Failed',
    duration: 2000 
  });
    toast.present();
}
 }

  ngOnInit() {
  }

}
