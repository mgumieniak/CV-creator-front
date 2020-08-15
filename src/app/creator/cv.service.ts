import {Injectable} from '@angular/core';
import {Subject, Observable, AsyncSubject} from 'rxjs';
import {CV} from '../model/data';
import {multiScan} from 'rxjs-multi-scan';
import {RestClientService} from '../model/rest-client.service';
import {FormBuilder} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvUpdate: Subject<CV> = new Subject();

  private cv$: Observable<CV> = multiScan(
    this.restClient.get('1'),
    (oldCV, uplodatedCV) => (oldCV = uplodatedCV),
    this.cvUpdate,
    (oldCV, uplodatedCV) => (oldCV = uplodatedCV),
    new CV()
  );

  constructor(private restClient: RestClientService) {
  }

  public updateGivenCv(cv: CV): void {
    console.log('Inside update:');
    console.log(cv);
    this.cvUpdate.next(cv);
  }

  public getCV(): Observable<CV> {
    return this.cv$;
  }
}
