export class WaitFor extends Error {
  constructor(public promise: Promise<any>) {
    super('WaitFor')
  }
}
