import type { IContact } from './IContact';
import type { IGroup } from './IGroup';
import type { IPersonalData } from './IPersonalData';

export interface IStudent {
  id: number;
  receiptDate: Date;
  deductionDate: Date | null;
  personalData: IPersonalData;
  contact: IContact;
  group: IGroup;
}
