// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express';

export default {
  'GET /api/dashboard/card': (req: Request, res: Response) => {
    setTimeout(() => {
      res.send({
        code: '0',
        data: {
          headCount: 100,
          surveyCount: 200,
          totalCount: 300,
          deadLine: new Date().toLocaleDateString(),
          rate: 22,
          lossRate: 78,
        },
      });
    }, 1500);
    return;
  },
};
