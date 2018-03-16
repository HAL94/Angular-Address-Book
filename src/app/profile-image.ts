
export class ProfileImage
{
  $key?:string;
  name?:string;
  url?:string;

  constructor(name:string)
  {
    this.name = name;
  }
}
