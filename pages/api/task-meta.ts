import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  [k: string]: any
}

const data = require('./dummyData/task_meta.json');

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json( data );
  } else {
    res.status(405).json({
      code: 405,
      status: 'Method Not Allowed',
    });
  }
}
