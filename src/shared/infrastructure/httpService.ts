// const axios = require('axios').default

export abstract class HttpService {
  abstract get(url: string): Promise<any>
  abstract post(url: string, body: any): Promise<any>
  abstract put(url: string, body: any): Promise<any>
  abstract delete(url: string): Promise<any>
}

export class AxiosHttpService implements HttpService {
  async get(url: string): Promise<any> {
    return [
      {
        colorGuitar: 'white',
        type: 'electric',
        engraving: 'Mi grabado'
      },
      {
        colorGuitar: 'red',
        type: 'electric',
        engraving: 'Mi grabado'
      }
    ]
  }

  async post(url: string, body: any): Promise<any> {
    // const response = await axios.post(url, body)
    // return response.data
  }

  async put(url: string, body: any): Promise<any> {
    // const response = await axios.put(url, body)
    // return response.data
  }

  async delete(url: string): Promise<any> {
    // const response = await axios.delete(url)
    // return response.data
  }
}
