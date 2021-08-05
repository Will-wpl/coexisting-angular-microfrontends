export interface Hero {
  OppId: number;
  CIPName: string;
  updateTime: string;
  Comment: string;
}

export interface ReturnHero {
  Id: number;
  Name: string;
  updateTime: string;
  Comment: string;
  OppId: string | number;
}