import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  [k: string]: any
}

const data = require('./dummyData/calendar.json');

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch(req.method) {
    case "PUT":
      res.status(200).json( data );

    case "PATCH":
      res.status(200).json({ name: 'John Doe' });

    case "DELETE":
      res.status(200).json({ name: 'John Doe' });

    case "POST":
      res.status(200).json({ name: 'John Doe' });

    default:
      res.status(200).json( data );
  }
}
