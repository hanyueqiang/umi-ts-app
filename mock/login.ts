// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express';

function getFakeCaptcha(req: Request, res: Response) {
  return res.json('captcha-xxx');
}

export default {
  'POST  /api/login': (req: Request, res: Response) => {
    const { password, username } = req.body;
    if (password === '123456' && username === 'admin') {
      setTimeout(() => {
        res.send({
          status: 'ok',
          currentAuthority: {
            username: 'admin',
            userid: 'abc123efdd',
          },
        });
      }, 3000);
      return;
    }
    if (password === '123456' && username === 'user') {
      res.send({
        status: 'ok',
        currentAuthority: {
          username: 'user',
          userid: 'abc456efdd',
        },
      });
      return;
    }
    res.send({
      status: 'error',
      currentAuthority: 'guest',
    });
  },
  'GET  /api/login/captcha': getFakeCaptcha,
};
