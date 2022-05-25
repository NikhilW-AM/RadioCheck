import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = ''
  constructor(private _fb: FormBuilder) {

  }
  checkArray: any = ['read', 'play', 'walk', 'timepass']
  optionsArray: any = [
    { op: 'a', isChecked: false },
    { op: 'b', isChecked: false },
    { op: 'c', isChecked: false },
    { op: 'd', isChecked: false },
  ]
  addForm!: FormGroup
  ngOnInit(): void {
    this.addForm = this._fb.group({
      check: this._fb.array(this.checkArray.map((contact: any) => this.createContact(contact))),
      options: this._fb.array(this.optionsArray.map((op: any) => this.createoptions(op)))
    })
  }

  quantity(): FormArray {
    return this.addForm.get('check') as FormArray;
  }
  createContact(contact: any): FormGroup {
    return this._fb.group({
      name: contact,
      isCorrect: false
    })
  }

  newContact(checkValue: string): FormGroup {
    return this._fb.group({
      name: checkValue,
      isCorrect: false
    })
  }
  add(value: string) {
    this.quantity().push(this.newContact(value))
  }





  opQuantity() {
    return this.addForm.get('options') as FormArray;
  }

  createoptions(options: any) {
    return this._fb.group({
      name: [options.op],
      isChecked: [options.isChecked]
    })
  }

  selectOptions(i: number) {
    var formArray = this.addForm.get('options') as FormArray;

    formArray.controls.forEach((data: any, index: number) => {
      if (i === index) {
        formArray.at(index).get('isChecked')?.setValue(true)
      }
      else {
        formArray.at(index).get('isChecked')?.setValue(false)
      }
    })
  }

  newRadio(radioValue: string): FormGroup {
    return this._fb.group({
      name: radioValue,
      isChecked: false
    })
  }
  addradio(radioValue: string) {
    console.log(radioValue);

    this.opQuantity().push(this.newRadio(radioValue))
  }

  submitSelectedCheckboxes() { }
}
