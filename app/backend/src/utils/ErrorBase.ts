export default class ErrorBase extends Error {
  constructor(msg: string, public statusCode: number) {
    super(msg);
  }
}
