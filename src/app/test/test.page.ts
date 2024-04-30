import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { ModalController } from '@ionic/angular';
import { AddnewtaskPage } from '../addnewtask/addnewtask.page';


@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {



  todolist=[
    {
    itemname:'coding',
    itemdate:'01-03-23',
    itempririte:'high',
    itemcatagori:'work'
  },
  {
    itemname:'desgin',
    itemdate:'13-05-24',
    itempririte:'low',
    itemcatagori:'work'
  },
  {
    itemname:'programmer',
    itemdate:'11-01-22',
    itempririte:'high',
    itemcatagori:'personal'
  },
  {
    itemname:'shoping',
    itemdate:'01-07-20',
    itempririte:'middle',
    itemcatagori:'personal'
  },
  {
    itemname:'market',
    itemdate:'11-06-21',
    itempririte:'low',
    itemcatagori:'work'
  }
  
]

today : number =Date.now();


  constructor(public modalCtrl : ModalController) {

  }

  ngOnInit() {
  }

  async addnewtask(){
    const modal = await this.modalCtrl.create({

      component:AddnewtaskPage

    })
return await modal.present();


  }


}
