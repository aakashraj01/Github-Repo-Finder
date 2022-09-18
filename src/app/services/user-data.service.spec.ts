import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing' ;

import { UserDataService } from './user-data.service';

describe('UserDataService', () => {
  let service: UserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserDataService]
    });
    service = TestBed.inject(UserDataService);
  });

  it('should be created', () => {
    const service: UserDataService = TestBed.get(UserDataService);
    expect(service).toBeTruthy();
   });

   it('should have getUser function', () => {
    const service: UserDataService = TestBed.get(UserDataService);
    expect(service.getUserInfo).toBeTruthy();
   });

   it('should have getUserRepositories function', () => {
    const service: UserDataService = TestBed.get(UserDataService);
    expect(service.getUserRepositories).toBeTruthy();
   });

   it('should have getUserRepositoryTags function', () => {
    const service: UserDataService = TestBed.get(UserDataService);
    expect(service.getUserRepositoryTags).toBeTruthy();
   });

});
