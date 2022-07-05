export default interface ITask {
  id?: number;
  name: string;
  statusId: number;
  categoryId: number;
  created?: Date;
  updated?: Date;
}