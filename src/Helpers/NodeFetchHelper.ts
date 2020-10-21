import fetch, { Request, Response, Headers } from 'node-fetch';

export default class NodeFetchHelper {
  constructor(private baseUrl: string) {}

  public Get(path: string): Promise<any> {
    const url = `${this.baseUrl}${path}`;
    return fetch(url)
      .then((resp: Response) => {
        return resp.json();
      })
  }

  public Post(path: string, body: any): Promise<number> {
    const url = `${this.baseUrl}${path}`;
    console.log(body);
    return fetch(url, { method: 'POST', body: JSON.stringify(body), headers: { 'content-type': 'application/json'}})
      .then((resp: Response) => {
        return resp.status;
      })
  }
}