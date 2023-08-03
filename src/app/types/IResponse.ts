import { IOneNew } from './IOneNew';

export interface IResponse {
  news: IOneNew[];
  totalCount: number;
}
