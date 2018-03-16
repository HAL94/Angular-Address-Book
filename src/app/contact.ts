import { ProfileImage } from "./profile-image";

export class Contact
{
    $key?:string;
    name:string;
    mobile:string;
    email:string;
    address?:string;
    profileImg?: ProfileImage;
    nickname?:string;
    company?:string;
    title?:string;
    phone?:string;
    website?:string;
    birthday?:string;
    relationship?:string;

    constructor(name:string, mobile:string, email:string)
    {
      this.name = name;
      this.mobile = mobile;
      this.email = email;
      this.address = '';
      this.profileImg = new ProfileImage('');
      this.nickname = '';
      this.company = '';
      this.title = '';
      this.phone = '';
      this.website = '';
      this.birthday = '';
      this.relationship = '';
    }
}
