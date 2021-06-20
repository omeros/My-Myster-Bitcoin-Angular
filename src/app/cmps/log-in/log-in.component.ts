import { Component,EventEmitter, OnInit, Output  } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  loginCre = {username: 'victoria_o', password: '1234'}
  signupCred =  {username: '', password: '', fullname: ''}
  @Output() onCreatNewAccount = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }
  doSignup(){
    
  }
  // creatNewAccount(){
  //   this.emit($event)
  // }

}
