import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input()
  user:  any;

  genders = ['Male', 'Female', 'Transgender', 'Non-binary/non-conforming', 'Prefer not to respond'];
  maritals = ['Maried', 'Widowed', 'Separated', 'Divorced', 'Single'];

  updateUser!:FormGroup;

  classListItem = 'list-group-item d-flex justify-content-between align-items-start';

  lang:any
  
  constructor(
    private usersService: UsersService,
    public translate: TranslateService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
    ) {
      translate.addLangs(['en-US', 'fr-FR']);
      translate.setDefaultLang('en-US');
      const browserLang:any = translate.getBrowserLang();
      translate.use(browserLang.match(/en-US|fr-FR/) ? browserLang : 'en');
    }
    
    ngOnInit(): void {
      const userId = +this.route.snapshot.params['id'];
      this.user = this.usersService.getUser(userId);
      this.route.params.subscribe(params => {
        this.user = this.usersService.getUser(+params['id']);
      });

      this.updateUser = new FormGroup({
        'id': new FormControl(this.user.id),
        'name': new FormControl(this.user.name, [Validators.required]),
        'email': new FormControl(this.user.email, [Validators.required, Validators.email]),
        'phoneNumber': new FormControl(this.user.phoneNumber, [Validators.required]),
        'passport': new FormControl(this.user.passport, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
        'age': new FormControl(this.user.age, [Validators.required]),
        'gender': new FormControl(this.user.gender, [Validators.required]),
        'professions': new FormControl(this.user.professions, [Validators.required]),
        'maritalStatus': new FormControl(this.user.maritalStatus, [Validators.required]),
        'addresses': new FormArray([])
      });
      
      for (let i = 0; i < this.user.addresses.length; i++) {
        const control = new FormControl(this.user.addresses[i], Validators.required);
        (<FormArray>this.updateUser.get('addresses')).push(control);
      }
    }

  onUpdateSubmit(){
    // console.log(this.updateUser.value);
    if (this.updateUser.valid) {
      this.usersService.updateUser(this.updateUser.value);
      this.router.navigate(['/users', this.user.id]);
      this.updateUser.reset();
    }
  }

  getControls() {
    return (<FormArray>this.updateUser.get('addresses')).controls;
  }

  onAddAddress(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.updateUser.get('addresses')).push(control);
  }

}
