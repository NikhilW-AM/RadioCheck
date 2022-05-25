import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-liveportal',
  templateUrl: './liveportal.component.html',
  styleUrls: ['./liveportal.component.css']
})
export class LiveportalComponent implements OnInit {

  constructor(private _fb: FormBuilder) { }

  isRadio: boolean = true
  optionsArray: any = [
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
  ]

  changeType() {
    if (this.isRadio) {
      this.isRadio = false
      //this.addForm.controls['options'].reset()
      this.addForm.setControl('options', this._fb.array(this.optionsArray.map((data: any) => this.createData(data))));
    }
    else {
      this.isRadio = true
      //this.addForm.controls['options'].reset()
      this.addForm.setControl('options', this._fb.array(this.optionsArray.map((data: any) => this.createData(data))));
    }
  }
  addForm!: FormGroup
  ngOnInit(): void {
    this.addForm = this._fb.group({
      options: this._fb.array(this.optionsArray.map((data: any) => this.createData(data)))
    })
  }

  createData(data: any): FormGroup {
    console.log(data);

    return this._fb.group({
      text: [data.text],
      isCorrect: [data.isCorrect]
    })
  }

  getOptions() {
    return this.addForm.get('options') as FormArray
  }

  formArray: any
  onChange(i: number) {
    this.formArray = this.addForm.get('options') as FormArray
    console.log(this.formArray.value);

    this.formArray.controls.forEach((data: any, index: number) => {
      if (i === index) {
        this.formArray.at(index).get('isCorrect')?.setValue(true)
      }
      else {
        this.formArray.at(index).get('isCorrect')?.setValue(false)
      }
    })
  }


  addOption() {
    this.getOptions().push(this.newOption())
  }

  newOption(): FormGroup {
    return this._fb.group({
      text: '',
      isCorrect: false
    })
  }
}
