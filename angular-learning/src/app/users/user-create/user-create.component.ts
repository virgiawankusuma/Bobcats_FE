import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  @Input()
  user!:  { id:number, name:string, passport:number, age:number, gender:string, professions:string, maritalStatus:string };

  genders = ['Male', 'Female', 'Transgender', 'Non-binary/non-conforming', 'Prefer not to respond'];
  maritals = ['Maried', 'Widowed', 'Separated', 'Divorced', 'Single'];

  addUser!:FormGroup;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    const userAddresses = new FormArray([
      new FormControl(null),
      new FormControl(null),
      new FormControl(null),
      new FormControl(null)
    ]);
    // userAddresses.setValue(['addressesDescription', 'addressesRegion', 'addressesCity','addressesCountry']);

    this.addUser = new FormGroup({
      'userName': new FormControl(null, [Validators.required]),
      'userPassport': new FormControl(null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      'userAge': new FormControl(20, [Validators.required]),
      'userGender': new FormControl('Male', [Validators.required]),
      'userProfessions': new FormControl(null, [Validators.required]),
      'userMaritalStatus': new FormControl('Single', [Validators.required]),
      'userAddresses': userAddresses
    });
  }

  onSubmit(){
    console.log(this.addUser);
    // this.usersService.addUser(this.addUser.value);
  }

  getControls() {
    return (<FormArray>this.addUser.get('userAddresses')).controls;
  }

  // onAddAddress(){
  //   const control = new FormControl(null, Validators.required);
  //   (<FormArray>this.addUser.get('userAddresses')).push(control);
  // }

}
