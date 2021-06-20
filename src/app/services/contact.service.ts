import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/Contact';
import { UtilService } from './util.service'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  private _filterBy$ = new BehaviorSubject({ term: '' })                // service uses _filterBy

  public filterBy$ = this._filterBy$.asObservable()                    // components  out of service will use filterBy

  // Mock the database
  private _ContactsDb: Contact[] = [
    {
      "_id": "5a56640269f443a5d64b32ca",
      "fullname": "Simcha Riff",
      "email": "ochoahyde@renovize.com",
      "phone": "+1 (968) 593-3824",
      "image": "https://res.cloudinary.com/omerphoto/image/upload/v1617913624/Faces/image_4_rewpnx.jpg"
    },

    {
      "_id": "5a56640269f443a5d64b35ca",
      "fullname": "Itsik Spensiv",
      "email": "ochoahyde@renovize.com",
      "phone": "+1 (968) 593-3824",
      "image": "https://res.cloudinary.com/omerphoto/image/upload/v1617906128/Faces/image_2_c1wjed.jpg"
    },


    {
      "_id": "5a56640269f443a5d64b52ca",
      "fullname": "Reuma Matsati",
      "email": "ochoahyde@renovize.com",
      "phone": "+1 (968) 593-3824",
      "image": "https://res.cloudinary.com/omerphoto/image/upload/v1617905569/Faces/victoria2_gpuc9s.jpg"
    },
    {
      "_id": "5a56640269f443a5d64b62ca",
      "fullname": "Mati Shtoo",
      "email": "ochoahyde@renovize.com",
      "phone": "+1 (968) 593-3824",
      "image": "https://res.cloudinary.com/omerphoto/image/upload/v1617905572/Faces/face8_c2to2c.jpg"
    },
    {
      "_id": "5a56640269f443a5d64b72ca",
      "fullname": "Natan Lodoch",
      "email": "ochoahyde@renovize.com",
      "phone": "+1 (968) 593-3824",
      "image": "https://res.cloudinary.com/omerphoto/image/upload/v1617905578/Faces/image_qqzmyn.jpg"
    },
    {
      "_id": "5a56640269f443a5d64b82ca",
      "fullname": "Micha Faflo",
      "email": "ochoahyde@renovize.com",
      "phone": "+1 (968) 593-3824",
      "image": "https://res.cloudinary.com/omerphoto/image/upload/v1617905597/Faces/123_uv7mg7.jpg"
    },
    {
      "_id": "5a56640269f443a5d64b92ca",
      "fullname": "Eli Kopter",
      "email": "ochoahyde@renovize.com",
      "phone": "+1 (968) 593-3824",
      "image": "https://res.cloudinary.com/omerphoto/image/upload/v1616845142/Faces/charles_ed8c5v.jpg"
    },
    {
      "_id": "5a56640269f443a5d64b02ca",
      "fullname": "Maya Gidu",
      "email": "ochoahyde@renovize.com",
      "phone": "+1 (968) 593-3824",
      "image": "https://res.cloudinary.com/omerphoto/image/upload/v1617906017/Faces/image_1_jkfzd5.jpg"
    },
    {
      "_id": "5a56640269f443a5d64b33ca",
      "fullname": "Moti Luchim",
      "email": "ochoahyde@renovize.com",
      "phone": "+1 (968) 593-3824",
      "image": "https://res.cloudinary.com/omerphoto/image/upload/v1617714042/Faces/person1_mknafc.jpg"
    },
    {
      "_id": "5a56640269f443a5d64b34ca",
      "fullname": "Tsila chalon",
      "email": "ochoahyde@renovize.com",
      "phone": "+1 (968) 593-3824",
      "image": "https://res.cloudinary.com/omerphoto/image/upload/v1616846141/Faces/victoria1_ngn4hn.jpg"
    },
    {
      "_id": "5a56640269f443a5d64b42ca",
      "fullname": "Miki Bataor",
      "email": "babaj@gmail.com",
      "phone": "+1 (968) 548-2245",
      "image": "https://res.cloudinary.com/omerphoto/image/upload/v1617905565/Faces/malisa_noc1ph.jpg"
    },

    {
      "_id": "5a56630269f443a5d64b35ca",
      "fullname": "karlo Batusik",
      "email": "ochoahyde@renovize.com",
      "phone": "+1 (968) 593-3824",
      "image": "https://res.cloudinary.com/omerphoto/image/upload/v1617908308/Faces/image_3_udlsxk.jpg"
    },
  ];

  private _Contacts$ = new BehaviorSubject(this._ContactsDb);

  public Contacts$ = this._Contacts$.asObservable()

  public query() {
    const filterBy = this._filterBy$.getValue()
    const Contacts = this._ContactsDb.filter(({ fullname }) => {
      return fullname.toLowerCase().includes(filterBy.term.toLowerCase());
    });

    this._Contacts$.next(Contacts);
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

  public getEmptyContact() {
    return {
      _id: this._makeId(),
      fullname: 'insert your name',
      email: 'insert Email',
      phone: "Insert your phone",
      image: null
    }
  }

  public remove(ContactId: string) {
    const Contacts = this._ContactsDb
    const ContactIdx = Contacts.findIndex(Contact => Contact._id === ContactId)
    Contacts.splice(ContactIdx, 1)
    this._Contacts$.next(Contacts);
  }
  // getById().subscribe((Contact) => { })    // way to use this function (because it return Observable)

  public getById(ContactId: string) {
    const Contact = this._ContactsDb.find(Contact => Contact._id === ContactId)
    return of({ ...Contact })            //of -  turn Object into observable
  }

  public save(Contact: Contact) {
    return Contact._id ? this._edit(Contact) : this._add(Contact)
  }

  private _add(Contact: Contact) {
    Contact._id = this._makeId()
    this._ContactsDb.push(Contact)
    this._Contacts$.next(this._ContactsDb)
    return of(Contact)
  }

  private _edit(Contact: Contact) {
    const Contacts = this._ContactsDb
    const ContactIdx = Contacts.findIndex(_Contact => _Contact._id === Contact._id)
    Contacts.splice(ContactIdx, 1, Contact)
    this._Contacts$.next(Contacts)
    return of(Contact)
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
