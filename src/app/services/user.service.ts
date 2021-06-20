import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UtilService } from './util.service'
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  
  private _filterBy$ = new BehaviorSubject({ term: '' })                // service uses _filterBy

  public filterBy$ = this._filterBy$.asObservable()                    // components  out of service will use filterBy

  // Mock the database
  private _UserDb: User[] = [
    {
    "_id": '123',
    "fullname": "Eitan Mich ",
    "username" : 'aa',
    "password" : 'sada',
    "coins": 100,
    "moves": [
          {
                toId: "d88e3u2ih329",
                to: "bobo",
                at: 2652712572,
                amount: 1
          },
          {
                toId: "d88e3u2ih129",
                to: "koko",
                at: 3652712572,
                amount: 3
          },
          {
                toId: "d88e3u2ih429",
                to: "lolo",
                at: 4652712572,
                amount: 5
          },
          {
                toId: "d88e3u2ih529",
                to: "chipopo",
                at: 5652712572,
                amount: 7
          },
    ],
  
    "image": "https://res.cloudinary.com/omerphoto/image/upload/v1617974616/Faces/image_5_blsfey.jpg",
    // image : "https://thispersondoesnotexist.com/image",
    // image : "",
    "coinImage": "https://image.shutterstock.com/image-photo/golden-coins-bitcoin-symbol-on-600w-1698227716.jpg"
  }
  ];

  private _User$ = new BehaviorSubject(this._UserDb);

  public User$ = this._User$.asObservable()

  public query() {
    const filterBy = this._filterBy$.getValue()
    const myuser = this._UserDb.filter(({ fullname }) => {
      return fullname.toLowerCase().includes(filterBy.term.toLowerCase());
    });

    this._User$.next(myuser);
  }

  public setFilter(filterBy) {
    this._filterBy$.next(filterBy)
    this.query()
  }

  shouldBuyContact(ContactId: string) {
    return this.http.get<{ answer: string }>('https://yesno.wtf/api')
      .pipe(
        map(res => res.answer)
      )
  }

  public getEmptyUser() {
    return {
      fullname: '',
      username: '',
      password: '',
      coins: 100,
      moves: [],
      image: null,
      coinImage : null
    }
  }

  public remove(UserId: string) {
    const User = this._UserDb
    const ContactIdx = User.findIndex(User => User._id === UserId)
    User.splice(ContactIdx, 1)
    this._User$.next(User);
  }
  // getById().subscribe((Contact) => { })    // way to use this function (because it return Observable)

  public getById(UserId: string) {
    const User = this._UserDb.find(User => User._id === UserId)
    return of({ ...User })            //of -  turn Object into observable
  }

  public save(User: User) {
    return User._id ? this._edit(User) : this._add(User)
  }

  private _add(User: User) {
    User._id = this._makeId()
    this._UserDb.push(User)
    this._User$.next(this._UserDb)
    return of(User)
  }

  private _edit(User: User) {
    const UserDB = this._UserDb
    const UserIdx = UserDB.findIndex(_User => _User._id === User._id)
    UserDB.splice(UserIdx, 1, User)
    this._User$.next(UserDB)
    return of(User)
  }

  private _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }


}
