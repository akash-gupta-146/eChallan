import { Component } from '@angular/core';
import { PeopleProvider } from '../../providers/people/people';
import { ModalController, NavController } from 'ionic-angular';
import { ViolenterHistoryPage } from '../../pages/violenter-history/violenter-history';
import { AddViolationComponent } from '../add-violation/add-violation';

/**
 * Generated class for the GenerateChallanComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'generate-challan',
  templateUrl: 'generate-challan.html'
})
export class GenerateChallanComponent {

  text: string;
  dl: string;
  rc: string;
  vc: string;
  violenter: any;
  needManualDetails:boolean = false;




  constructor(public people:PeopleProvider,
              public modalCtrl:ModalController,
              public navCtrl:NavController
  ) {
    this.text = 'Hello World';
  }

  getInfo(){
    this.violenter = this.people.getPerson('driving_license',this.dl);
    if(this.violenter == null)
      this.needManualDetails = true
    else  
      this.needManualDetails = false
  }

  viewViolations(){
    const violenterModal = this.modalCtrl.create(ViolenterHistoryPage,{ data: this.violenter })
    violenterModal.present()
  }

  addViolation(){
    this.navCtrl.push(AddViolationComponent,{ name: this.violenter })
  }
}
