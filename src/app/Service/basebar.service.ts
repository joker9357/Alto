import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasebarService {
  isOpen = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  Open() {

    this.isOpen = true;

    this.change.emit(this.isOpen);
  }

  Close() {

    this.isOpen = false;

    this.change.emit(this.isOpen);
  }
}
