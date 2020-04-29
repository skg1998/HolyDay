import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
import { CreateBookingsComponent } from '../../../bookings/create-bookings/create-bookings.component';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place= Place;

  constructor(private router:Router , 
    private navCtrl:NavController,
    private modalCtrl:ModalController ,
    private actionSheetCtrl :ActionSheetController
    ) { }

  ngOnInit() {
  }

  onBookingPlace(){
    // this.router.navigateByUrl('/places/tabs/discover');
    //this.navCtrl.pop('');
   // this.navCtrl.navigateBack('/places/tabs/discover');
    this.actionSheetCtrl.create({
      header:'Choose an action',
      buttons:[
        {
          text:'Select Date',
          handler: ()=>{
            this.openBookingModal('select');
          }
        },
        {
          text:'Random Date',
          handler: ()=>{
            this.openBookingModal('random');
          }
        },
        {
          text:'Cancel',
          role:'cancel'
        }
      ]
     }).then(actionSheetEl =>{
      actionSheetEl.present();
     })
    
  }

  openBookingModal(mode:'select'|'random'){
    console.log(mode);
    this.modalCtrl.create({component:CreateBookingsComponent ,
      componentProps:{selectedPlace:this.place}
      }).then(modalEl =>{
        modalEl.present();
        return modalEl.onDidDismiss();
      }).then(resultData =>{
        console.log(resultData.data,resultData.role);
        if(resultData.role === 'conform'){
          console.log('Booked!');
        }
      });
  }

}
