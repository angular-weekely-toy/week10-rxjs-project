import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './service/youtube.service'
import { FormBuilder, FormGroup  } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [YoutubeService],
})
export class AppComponent implements OnInit {
  title = 'hobby';
  group: FormGroup;
  target: string;
  youtubeList?: any[] = new Array();
  youtubeItem: string = '';
  youtubeTitle?: String;

  constructor(private fb: FormBuilder, private youtubeService: YoutubeService) {
    this.group = this.fb.group({});

  }

  createForm() {
    this.group.addControl('search_text', this.fb.control('dog'));
  }

  ngOnInit(): void {
    this.createForm();
    this.target = this.group?.controls?.search_text?.value;
    this.search(this.target);
  }

  search(search: any) {
    this.searchList(search);
  }

  actionSubmit= () => {
    this.target = this.group?.controls?.search_text?.value;
    this.searchList(this.target);
  }

  searchList(searchText: any) {
    this.youtubeService.getSearchChannel(searchText)
      .toPromise()
      .then((data) => {
        console.log('items : ', data?.kind);
        this.youtubeList = data?.items;
        console.log('req -> ', data);
      })
      .catch((error) => {
        console.log('error - ', error);
      })
  }


}