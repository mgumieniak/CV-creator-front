import {ChangeDetectionStrategy, Component, HostBinding, Input, OnDestroy, OnInit, Optional, Self} from '@angular/core';
import {Subject} from 'rxjs';
import {MatFormFieldControl} from '@angular/material';
import {ControlValueAccessor, FormBuilder, FormGroup, NgControl} from '@angular/forms';

export interface FormFieldValue {
  description: string;
  property: number;
}

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: MatFormFieldControl, useExisting: StarRatingComponent}],
})
export class StarRatingComponent implements MatFormFieldControl<FormFieldValue>, ControlValueAccessor, OnInit, OnDestroy {
  static nextId = 0;
  @HostBinding() id = `app-star-rating-${StarRatingComponent.nextId++}`;

  private _placeholder: string;
  @Input()
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }

  get placeholder() {
    return this._placeholder;
  }

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
  describedBy = '';

  stateChanges = new Subject<void>();
  rate: number;
  form: FormGroup;

  starCount = 5;
  ratingArr = [];
  rating: number;

  onChange: (value: FormFieldValue) => void;

  constructor(@Optional() @Self() public ngControl: NgControl,
              private fb: FormBuilder) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
    this.form = this.fb.group({description: [''], property: [0]});
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => this.onChange(value));

    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  @Input()
  get value() {
    console.log('test');
    return this.form.value;
  }

  set value(value: FormFieldValue) {
    this.form.patchValue(value);
    this.rating = value.property;
    this.stateChanges.next();
  }

  ngOnDestroy() {
    this.stateChanges.complete();
  }


  setDescribedByIds(ids: string[]): void {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent): void {
  }

  writeValue(obj: FormFieldValue): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    if (fn) {
      this.rate = fn;
    }
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  onClick(rating: number) {
    this.rating = rating;
    this.form.patchValue({property: rating});
    return false;
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
