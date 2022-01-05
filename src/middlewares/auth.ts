import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

const auth = {
  private: async (request: Request, response: Response, next: NextFunction) => {
    let success = false;

    if (request.headers.authorization) {
      const [authType, token] = request.headers.authorization.split(' ');

      if (authType === 'Bearer') {
        try {
          verify(token, process.env.JWT_SECRET_KEY as string);
          success = true;
        } catch (err) {
          console.log('Erro no JWT');
        }
      }
    }

    if (success) {
      next();
    } else {
      response.status(403).json({ error: 'Not authorized' });
    }

    return success;
  },
};

export default auth;
