import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http' ;
import { HttpParams } from '@angular/common/http';
import { toRelativeImport } from '@angular/compiler-cli/src/ngtsc/file_system';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  headers: any = new HttpHeaders().set('Accept', 'application/vnd.github.v3+json') ;
  
  constructor(private http: HttpClient) { }

  async getUserInfo(username: string): Promise<any> {
    return this.http.get(`https://api.github.com/users/${username}`, {headers: this.headers}).toPromise() ;
  }

  async getUserRepositories(username: string, page_size: number, page_num: number): Promise<any> {
    return this.http.get(`https://api.github.com/users/${username}/repos?per_page=${page_size}&page=${page_num}`, {headers: this.headers}).toPromise() ;
  }

  async getUserRepositoryTags(username: string, repository_name: string): Promise<any> {
    return this.http.get(`https://api.github.com/repos/${username}/${repository_name}/languages`, {headers: this.headers}).toPromise() ;
  }

}
