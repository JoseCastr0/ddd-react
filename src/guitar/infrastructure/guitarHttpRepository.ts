import { Exception } from '../../shared/domain/exception'
import {
  AxiosHttpService,
  HttpService
} from '../../shared/infrastructure/httpService'
import Guitar from '../domain/guitar/guitar'

export abstract class GuitarRepository {
  abstract send(guitar: Guitar): Promise<void>
  abstract getList(): Promise<Guitar[]>
}

export class GuitarHttpRepository implements GuitarRepository {
  constructor(private httpService: HttpService = new AxiosHttpService()) {}

  async getList(): Promise<Guitar[]> {
    try {
      const response = await this.httpService.get(
        'http://localhost:3000/guitars'
      )
      return response.map(Guitar.fromJSON)
    } catch (error) {
      console.log('dentro del catch error ', error)
      throw error
    }
  }
  async send(guitar: Guitar): Promise<void> {
    // post
  }
}

export class GuitarFakeRepository implements GuitarRepository {
  async getList(): Promise<Guitar[]> {
    return [
      Guitar.fromJSON({
        colorGuitar: 'white',
        type: 'electric',
        engraving: 'Mi grabado'
      })
    ]
  }
  async send(guitar: Guitar): Promise<void> {
    // post
  }
}

export default class GuitarHttpRepositoryException extends Exception {
  constructor() {
    super('GuitarHttpRepositoryException error')
  }
}
