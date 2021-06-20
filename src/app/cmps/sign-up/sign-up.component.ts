import { Component,EventEmitter,   OnInit, Output  } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  loginCre = {username: 'victoria_o', password: '1234'}
  signupCred =  {username: '', password: '', fullname: ''}
  @Output() onSignUpNow = new EventEmitter<Object>()

  constructor() { }

  ngOnInit(): void {
  }
  doSignup(){
      console.log('on sign-up btn',this.signupCred)
     // addNewItem(value: string) {
        this.onSignUpNow.emit(this.signupCred);
      
  }


}
