import { Component, Input } from '@angular/core';
import { LPItem } from './lpitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My LP Collection';

  @Input()
  lpItemsList: LPItem[];
  

  newlpItem($event: LPItem){
    var item = $event.albumName
    console.log("Received", item );
    //this.lpItemsList.push();
   
  }
}
