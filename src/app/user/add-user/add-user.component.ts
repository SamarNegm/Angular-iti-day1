import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  myform = new FormGroup(
    {
      sname: new FormControl('', Validators.required),
      fname: new FormControl('', [Validators.required, Validators.minLength(5)]),
      address: new FormGroup({
        city: new FormControl('', Validators.required),
        street: new FormControl('', Validators.required)
      })
    }

  )

  get sname() {
    return this.myform.get('sname') as FormControl;
  }
  get fname() {
    return this.myform.get('fname') as FormControl;

  }
  get city() {
    return this.myform.get('address.city') as FormControl;
  }
  get street() {
    return this.myform.get('address.street') as FormControl;
  }
  add(data: any) {
    console.log(data);
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.myform.patchValue({ sname: "mido", fname: "hamda", address: { city: 'cairo', street: "ramsis" } })
    this.myform.setValue({ sname: "mido", fname: "hamda", address: { city: 'cairo', street: "ramsis" } })
  }

}
