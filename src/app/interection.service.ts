import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterectionService {
  private _perentComponentSource = new Subject<string>();
  perentComponent$ = this._perentComponentSource.asObservable();

  constructor() { }

  sandMassage(message:string){
    this._perentComponentSource.next(message);
  }
}
