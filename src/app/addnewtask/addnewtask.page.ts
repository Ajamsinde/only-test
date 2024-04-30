import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addnewtask',
  templateUrl: './addnewtask.page.html',
  styleUrls: ['./addnewtask.page.scss'],
})
export class AddnewtaskPage implements OnInit {

  constructor(public modalCtrl : ModalController) { }

  async dismis(){

    await this.modalCtrl.dismiss() 
    

  }

  ngOnInit() {
  }

}
