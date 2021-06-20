import { Injectable } from '@angular/core';
import axios from 'axios';
import { UtilService } from './util.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ImgUploadService {

  constructor(private http: HttpClient) { }






  // AXIOS
  public  uploadImg = async (file) =>{
      // Defining our variables
      const UPLOAD_PRESET = 'cloudphoto' // Insert yours
      const CLOUD_NAME = 'omerphoto' // Insert yours
      const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
      const FORM_DATA = new FormData();
      // Building the request body
      FORM_DATA.append('file', file)
      FORM_DATA.append('upload_preset',UPLOAD_PRESET)
      FORM_DATA.append('public_id', `Mister-Bitcoin-Angular/${file.name}`)
      console.log('uploadImg -> FORM_DATA', FORM_DATA)
      // Sending a post method request to Cloudniarys' API
      try {
          const res = await axios.post(UPLOAD_URL, FORM_DATA)
          return res.data;
      } catch(err) {
          console.error('ERROR!', err)
      }
  }

//Mister-Bitcoin-Angular

}
