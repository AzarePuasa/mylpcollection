import { Component, OnInit } from '@angular/core';
import { LPItem } from '../lpitem';

@Component({
  selector: 'app-lpcollection',
  templateUrl: './lpcollection.component.html',
  styleUrls: ['./lpcollection.component.css']
})
export class LPCollectionComponent implements OnInit {

  album_url_test = "https://www.canva.com/templates/book-covers/MAB6qNBAV-0-in-too-deep-diving-music-album-cover/"

  lpCollections: LPItem[] =
  [
    {albumName: "Test1", artistName: "Test Name 1", rating: 1, albumCoverUrl: this.album_url_test},
  {albumName: "Test2", artistName: "Test Name 2", rating: 2, albumCoverUrl: this.album_url_test},
  {albumName: "Test3", artistName: "Test Name 3", rating: 3, albumCoverUrl: this.album_url_test},
  {albumName: "Test4", artistName: "Test Name 4", rating: 4, albumCoverUrl: this.album_url_test}
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
