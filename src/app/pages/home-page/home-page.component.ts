import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/User';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  user: User[]
  rate: Object;

  user$: Observable<User[]>
  coin : any
  answer$: Observable<object>
  subscription: Subscription
  subscription2: Subscription
  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  async ngOnInit() {
    this.user$ = this.userService.User$
    console.log('the user$ fron the subscribe', this.user$)
    this.subscription = this.user$.subscribe(user => {
      this.user = user
      console.log('the user fron the subscribe', user)
    })

    // this.coin = await this.bitcoinService.getRate();         /// with promis
    console.log( 'this.coin fron the subscribe',  this.coin)
    this.subscription2 = this.bitcoinService.getRate().subscribe(rate => {             // with observeble
    //  this.answer = answer
      console.log('the answer fron the rate rate rate', rate)
    })
  }

 //this.answer$ = this.petService.shouldBuyPet(this.selectedPetId)
  choosUserToTransfer() {

  }

}
