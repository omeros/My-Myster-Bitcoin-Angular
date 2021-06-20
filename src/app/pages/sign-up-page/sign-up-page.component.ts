import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  loginCre = {username: 'victoria_o', password: '1234'}
  signupCred =  {username: '', password: '', fullname: ''}
  isSignupModal = false
  creatNewAccountAns: string

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }

  // doSignup(){
    
  // }
  openCreatNewAccountModal(){
    this.isSignupModal = !this.isSignupModal
   // console.log('test function sign up page',this.isSignupModal )
  }
  closeLogIn(event){
   // console.log(' event.target', event.target) 
    if( event.target.matches('button.newaccount-btn')|| event.target.matches('#parent-node, #parent-node *')){
        return 
    }
    this.isSignupModal = false;
  }
  async doSignUp(value: User){
    console.log('in sign up page, user credentials :',value.fullname)
    var newUser = await this.userService.getEmptyUser();         /// with promis
   newUser.fullname = value.fullname
   newUser.password = value.password
   newUser.username = value.username
   console.log('in sign up page, newUser :',newUser)
   const user = await this.userService.save(newUser);   
 }
}

