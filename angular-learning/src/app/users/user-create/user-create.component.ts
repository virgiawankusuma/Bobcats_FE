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

  classListItem = 'list-group-item d-flex justify-content-between align-items-start';
  
  constructor(
    private usersService: UsersService
    ) { }

    users = this.usersService.users;
    
    ngOnInit(): void {
    const userId = new FormControl(this.users.length+1);
    const userAddresses = new FormArray([
      new FormControl(null),
      new FormControl(null),
      new FormControl(null),
      new FormControl(null)
    ]);
    // userAddresses.setValue(['addressesDescription', 'addressesRegion', 'addressesCity','addressesCountry']);

    this.addUser = new FormGroup({
      'id': userId,
      'name': new FormControl(null, [Validators.required]),
      'passport': new FormControl(null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      'age': new FormControl(20, [Validators.required]),
      'gender': new FormControl('Male', [Validators.required]),
      'professions': new FormControl(null, [Validators.required]),
      'maritalStatus': new FormControl('Single', [Validators.required]),
      'addresses': userAddresses
    });
  }

  onSubmit(){
    // console.log(this.addUser.value);
    this.usersService.addUser(this.addUser.value);
  }

  getControls() {
    return (<FormArray>this.addUser.get('addresses')).controls;
  }

  // onAddAddress(){
  //   const control = new FormControl(null, Validators.required);
  //   (<FormArray>this.addUser.get('userAddresses')).push(control);
  // }

}
