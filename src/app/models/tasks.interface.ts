export enum ILevels {
  'INFO',
  'URGENT',
  'BLOCKING',
}
export interface ITask {
  title: string;
  description: string;
  completed: boolean;
  level: ILevels;
}
