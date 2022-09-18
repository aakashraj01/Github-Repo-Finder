import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input()
  username: string = "" ;
  @Input()
  userDetails: any = {} ;
  @Input()
  userRepositories:any[] = [] ;
  @Input()
  page_size:number = 20 ;
  @Input()
  isDataRetrieved: boolean = false ;
  @Input()
  page_num:number = 1 ;

  @Output()
  resetEvent = new EventEmitter() ;

  constructor(private userData: UserDataService) { 
  }

  ngOnInit(): void {
  }

  reset() {
    return this.resetEvent.emit() ;
  }

  async selectPage($event: any) {
    this.isDataRetrieved = false ;
    this.userRepositories = [] ;
    this.page_num = $event.page_num ;
    this.page_size = $event.page_size ;

    await this.userData.getUserRepositories(this.username, this.page_size, this.page_num).then(async (data: any)=>{

      for ( const repo of data ) {
        let repository_name: string = repo["name"] ;
        let tagData = await this.userData.getUserRepositoryTags(this.username, repository_name) ;
        repo["tags"] = Object.keys(tagData).slice(0, 2) ;
        this.userRepositories.push(repo) ;
      };

    }) ;

    this.isDataRetrieved = true ;
  }

}
