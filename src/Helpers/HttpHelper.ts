import https from 'https';

export default class HttpHelper {
  constructor(private baseUrl: string) {}

  public Get(path: string): Promise<any> {
    const options = {
      hostname: this.baseUrl,
      port: 443,
      path: path,
      method: 'GET'
    }
    let body : Uint8Array[] = [];

    return new Promise((resolve, reject) => {
      const req = https.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`)
      
        res.on('data', data => {
          body.push(data);
        });

        res.on('end', () => {
          body = JSON.parse(Buffer.concat(body).toString());
          resolve(body);
        });
      })
      
    req.on('error', error => {
      reject(error);
    })
      
    req.end()
    })
    }
}