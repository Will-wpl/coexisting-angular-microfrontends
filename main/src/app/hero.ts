export interface Hero {
  OppId: number;
  CIPName: string;
  updateTime: string;
  Comment: string;
}

export interface ReturnHero {
  CIPId: number;
  CIPName: string;
  updateTime: string;
  Status: string;
}