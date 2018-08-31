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
  newlpItemSubmitted = new EventEmitter<NgForm>(); 

  constructor() { }

  ngOnInit() {
  }

  addNewLP(form){

    console.log("Pushing out:", form);

    //send out event.
    this.newlpItemSubmitted.next(form);
  }
}
