// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express';

export default {
  'POST  /api/queryTableList': (req: Request, res: Response) => {
    setTimeout(() => {
      res.send({
        status: 'ok',
        data: [
          {
            id: 1,
            name: 'TradeCode 6751',
            desc: '是否是是范围发生的发史蒂夫',
            callNo: '248万',
            status: 1,
          },
          {
            id: 2,
            name: '去玩儿通天塔',
            desc: 'sdfsfsgeggg颠覆',
            callNo: '28万',
            status: 0,
          },
          {
            id: 3,
            name: 'dsfsdf史蒂夫',
            desc: '是发史蒂夫',
            callNo: '8万',
            status: 1,
          },
        ],
      });
    }, 1000);
  },
};
