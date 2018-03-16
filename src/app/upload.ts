export class Upload
{
  $key:string;
  file:File;
  url:string;
  creation:Date = new Date();

  constructor(file: File)
  {
    this.file = file;
  }
}
