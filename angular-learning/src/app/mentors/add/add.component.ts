import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { MentorsService } from '../mentors.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  civilities = ['MR', 'MRS', 'MISS', 'MS', 'DR'];
  genders = ['Male','Female', 'Transgender', 'Non-binary/non-conforming', 'Prefer not to respond'];
  statuses = ['Active', 'Pending'];

  lang:any

  addUser!:FormGroup;

  constructor(
    public translate: TranslateService,
    private mentorsService: MentorsService,
    ) { 
      translate.addLangs(['en-US', 'fr-FR']);
      translate.setDefaultLang('en-US');
      const browserLang:any = translate.getBrowserLang();
      translate.use(browserLang.match(/en-US|fr-FR/) ? browserLang : 'en-US');}

  ngOnInit(): void {
    const userId = new FormControl(1);

      this.addUser = new FormGroup({
        '_id': userId,
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'civility': new FormControl(null, [Validators.required]),
        'first_name': new FormControl(null, [Validators.required]),
        'last_name': new FormControl(null, [Validators.required]),
        'date_of_birth': new FormControl(20, [Validators.required]),
        'gender': new FormControl(Validators.required),
        'user_status': new FormControl(Validators.required),
      });
  }

  onSubmit(){
      if (this.addUser.valid) {
        this.mentorsService.addUser(this.addUser.value);
        this.addUser.reset();
        Swal.fire({
          title: 'Success',
          text: 'User added successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      }else{
        Swal.fire({
          title: 'Error',
          text: 'Please fill the form correctly',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
      
      this.mentorsService.addCobaBaru(this.addUser.value);
  }
}
