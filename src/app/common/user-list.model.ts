export class UserListModel {
  userList: UserDetails[]
}

export class UserDetails {
  public id:number;
  public name:string;
  public surname:string;
  public birthDate:number;
  public phone:number;
  public city:string;
  public street:string;
  public number:number;
}
