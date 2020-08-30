import {ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, OnDestroy, OnInit, Optional, Self} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {MatFormFieldControl} from '@angular/material';
import {FormBuilder, NgControl} from '@angular/forms';
import {FocusMonitor} from '@angular/cdk/a11y';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.container.html',
  styleUrls: ['./star-rating.container.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: MatFormFieldControl, useExisting: StarRatingContainer}],
})
export class StarRatingContainer implements MatFormFieldControl<number>, OnInit, OnDestroy {

  static nextId = 0;
  @HostBinding() id = `app-star-rating-${StarRatingContainer.nextId++}`;

  private rating: Subject<number> = new Subject<number>();
  rating$: Observable<number> = this.rating.asObservable();

  // tslint:disable-next-line:variable-name
  private _placeholder: string;
  focused = false;

  @Input()
  get empty() {
    return false;
  }

  shouldLabelFloat: boolean;
  required: boolean;
  disabled: boolean;
  errorState = false;
  controlType?: string;

  autofilled?: boolean;
  rateUpdatedValue;
  describedBy = '';

  stateChanges = new Subject<void>();

  constructor(@Optional() @Self() public ngControl: NgControl,
              fb: FormBuilder,
              private fm: FocusMonitor,
              private elRef: ElementRef<HTMLElement>) {
    fm.monitor(elRef.nativeElement, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  ngOnInit(): void {
    this.rating$.subscribe((rating) => this.rateUpdatedValue = rating);
  }

  @Input()
  get value(): number {
    return this.rateUpdatedValue;
  }

  set value(updatedRate) {
    this.ratingUpdated(updatedRate);
    this.stateChanges.next();
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef.nativeElement);
  }

  @Input()
  get placeholder() {
    return this._placeholder;
  }

  set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }

  setDescribedByIds(ids: string[]): void {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent): void {
  }


  ratingUpdated(rate: number) {
    this.rating.next(rate);
  }
}
