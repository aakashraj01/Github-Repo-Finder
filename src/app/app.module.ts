import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { RepositoryListComponent } from './components/repository-list/repository-list.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button' ;
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { PaginationComponent } from './components/pagination/pagination.component'
import { MatGridListModule } from '@angular/material/grid-list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome' ;
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CeilPipe } from './pipes/ceil.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    RepositoryListComponent,
    MainComponent,
    PaginationComponent,
    CeilPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    MatGridListModule,
    FontAwesomeModule,
    NgxSkeletonLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
