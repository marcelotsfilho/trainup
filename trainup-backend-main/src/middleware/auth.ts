import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
  user?: any;
}

// Middleware para proteger rotas
export const protect = (req: AuthRequest, res: Response, next: NextFunction) => {
  let token;

  // Verifica se o token está presente no cabeçalho Authorization
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Extrai o token
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret_key_change_me');
      req.user = decoded;
      // Se o token for válido, chama o próximo middleware
      next();
    } catch (error) {
      // Em caso de erro na verificação do token
      console.error(error);
      res.status(401).json({ success: false, message: 'Não autorizado, token inválido' });
    }
  }

  // Se o token não estiver presente
  if (!token) {
    res.status(401).json({ success: false, message: 'Não autorizado, nenhum token fornecido' });
  }
};
