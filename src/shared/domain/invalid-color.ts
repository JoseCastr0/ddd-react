import { Exception } from './exception'

export default class InvalidColorException extends Exception {
  constructor() {
    super('Invalid color')
  }
}
