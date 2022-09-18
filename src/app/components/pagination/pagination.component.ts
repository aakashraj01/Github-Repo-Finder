import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  page_num = 1 ;

  @Input()
  page_size = 10 ;

  @Input()
  total_pages = 1

  @Output()
  reloadRepoEvent = new EventEmitter() ;

  faChevronLeft = faChevronLeft ;
  faChevronRight = faChevronRight ;

  constructor() { }

  ngOnInit(): void {
  }

  changePageSize(x: number) {
    this.page_size = x ;
    this.page_num = 1 ;
    this.reloadRepos() ;
  }

  maxPageNum(): number {
    return Math.ceil((this.total_pages * ( 1.0 ) / this.page_size)) ;
  }

  reloadRepos() {

    if ( this.page_num <= 0 || this.page_num > this.maxPageNum() ) {
      return ;
    }

    this.reloadRepoEvent.emit({
      "page_num": this.page_num, 
      "page_size": this.page_size
    }) ;
  }

}
