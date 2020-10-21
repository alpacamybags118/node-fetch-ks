import express, { Request, Response } from 'express';
import HttpHelper from './Helpers/HttpHelper';
import NodeFetchHelper from './Helpers/NodeFetchHelper';

const app = express();
const port = 5000;

app.use(express.json());

app.get( "/httptest", async ( req: Request, res: Response ) => {
  const helper = new HttpHelper("reqres.in")
  const resp = await helper.Get('/api/users/2');

  res.send(resp.data);
} );

app.get( "/fetchtest", async ( req: Request, res: Response ) => {
  const helper = new NodeFetchHelper("https://reqres.in")
  const resp = await helper.Get('/api/users/2');

  res.send(resp);
} );

app.post("/fetchsend", async(req: Request, res: Response) => {
  const helper = new NodeFetchHelper("https://reqres.in")
  const resp = await helper.Post('/api/register', req.body);

  res.sendStatus(resp);
})

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );