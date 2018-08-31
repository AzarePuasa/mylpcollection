import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LPItem } from '../lpitem';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-newlpform',
  templateUrl: './newlpform.component.html',
  styleUrls: ['./newlpform.component.css']
})
export class NewlpformComponent implements OnInit {

  @Output() 
  newlpItemSubmitted = new EventEmitter<LPItem>(); 

  constructor() { }

  ngOnInit() {
  }

  addNewLP(form: NgForm){
    var newlpItem: LPItem;
    
    newlpItem = form.value 

    console.log("Rating:", newlpItem.rating )

    console.log("Pushing out:", newlpItem ) 
    
    //send out event.
    this.newlpItemSubmitted.next(newlpItem);
  }

}
