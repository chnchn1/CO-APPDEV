import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { BookService } from '../book.service';
import { Show } from '../model/book.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  volume =100;
  books: Show[] = [];

  constructor(private bookService: BookService, private modalController: ModalController, private alertController: AlertController, private toastController: ToastController) { }
  
  async toggleModal () {
    const modal = await this.modalController.create({
      component: ModalComponent
    });
    return await modal.present();
  }

  async alert () {
    const alert = await this.alertController.create ({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    await alert.present();
  }
  async presentToast() {
    const toast = await this.toastController.create ({
      message: 'Your toast message here',
      duration: 2000 //Duration in milliseconds
    });
    toast.present();
  }
  async dismissToast() {
    const toast = await this.toastController.getTop();
    if(toast) {
      toast.dismiss();
    }
  }
  ngOnInit(): void {
    this.bookService.getTitles().subscribe(item => { 
      this.books = item;
    })
  }
}