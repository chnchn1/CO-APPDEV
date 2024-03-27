import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {

  constructor(private modalController: ModalController) { }

  async closeModal (){
    await this.modalController.dismiss();
  }

  ngOnInit() {}

}
