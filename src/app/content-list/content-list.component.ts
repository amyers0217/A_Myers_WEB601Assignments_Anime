import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  search?: string;
  contentItems: Content[] = [];



  searchTerm = '';
  searchResult: boolean | null = null;
  searchContent() {
    this.searchResult = this.contentItems.some(c => c.title === this.searchTerm);
  }


}
