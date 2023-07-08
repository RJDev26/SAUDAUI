export class Account {
  id: number;
  acGroup: number;
  acHead: number;
  shortCode: number;
  cityId: number;
  accountHeadId: number
  accountGroupId: number
  name: string;
  openingBal: number;
  phone: string;
  mobile: string;
  email: string;
  address: string;
  pin: string;
  panNo: string
  gstinno: string;
  drCr: string;
  telegramNo: string
  telegramId: string
  applyFutureCutBrok: boolean
  applyOptionCutBrok: boolean
  applyTax: boolean
  taxType: number
  exchange: number
  IntraDayRate: number
  InsType: number
  DeliveryRate: number
  FromDT: Date
  ToDT: Date
 


  createdDate: string;
  createdBy: string;
  lastModifiedDate: string;
  lastModifiedBy: string;
}
