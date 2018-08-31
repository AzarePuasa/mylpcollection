import { Component, Input } from '@angular/core';
import { LPItem } from './lpitem';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My LP Collection';

  lpItemsList: LPItem[] = [];

  newlpItem(this_form){
    var form_values = this_form.value;
    
    console.log("Form Values:", form_values );

    var album = form_values.albumname;
    var artist = form_values.artistname;
    var rating = form_values.rating;
    var coverURL = form_values.albumimage;

    console.log("Album Name:", album );
    console.log("Artist Name:", artist );
    console.log("Rating:", rating );
    console.log("Album Cover URL:", coverURL );

    var newItem: LPItem = 
    { albumName: album,
    artistName: artist,
    rating: rating,
    albumCoverUrl: coverURL};
    console.log("New Item:", newItem );
    this.lpItemsList.push(newItem)
    console.log("List:", this.lpItemsList);
  }
}
