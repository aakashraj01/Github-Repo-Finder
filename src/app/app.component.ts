import { Component, TemplateRef } from '@angular/core';
import { UserDataService } from './services/user-data.service';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'GitHub Repository Finder';
  username: string = "" ;
  page_size: number = 20 ;
  page_num: number = 1 ;
  userFound:boolean = false ;
  faHouseUser=  faHouseUser ;
  isDataRetrieved: boolean = false ;
  invalidUser:boolean = false ;

  userDetails: any = {} ;
  userRepositories:any[] = [] ;

  constructor( private userData: UserDataService ) {}

  async getResults() {

    this.userFound = true ;

    await this.userData.getUserInfo(this.username).then( async (data: any)=>{
      this.userDetails = data ;
      this.invalidUser = false ;
    }).catch( async () => {
      this.invalidUser = true ;
    }) ;

    if ( this.invalidUser ) {
      console.log('Invalid User') ;
      return ;
    }

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

  reset() {
    this.username = "" ;
    this.page_size = 20 ;
    this.page_num = 1 ;
    this.userFound = false ;
    this.userDetails = {} ;
    this.userRepositories = [] ;
    this.isDataRetrieved = false ;
    this.invalidUser = false ;
  }

  validateUser() {
    return this.invalidUser ;
  }

}
