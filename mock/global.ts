// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express';

export default {
  'POST  /api/userInfo': (req: Request, res: Response) => {
    const { userid } = req.body;
    if (userid) {
      res.send({
        status: 'ok',
        data: {
          username: 'admin',
          userid: 'abc456efdd',
        },
      });
      return;
    }
    res.send({
      status: 'error',
      data: {
        username: 'guest',
        userid: 'sdfsdfewfds',
      },
    });
  },
};
