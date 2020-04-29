import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../places/place.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-bookings',
  templateUrl: './create-bookings.component.html',
  styleUrls: ['./create-bookings.component.scss']
})
export class CreateBookingsComponent implements OnInit {
 @Input() selectedPlace : Place;
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  onCancel(){
    this.modalCtrl.dismiss(null,'cancel');
  }

  onBookPlace(){this.modalCtrl.dismiss({message:'this is a dummy message'},'conform')}

}
