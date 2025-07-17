import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { CustomerException } from './customerException';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Erro interno do servidor';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
      message = typeof res === 'string' ? res : (res as any).message;
    } else if (exception instanceof Error) {
      message = exception.message;
    }

    const customException = new CustomerException(message, status);

    const errorResponse = customException.getResponse();
    const safeResponse =
      typeof errorResponse === 'object'
        ? errorResponse
        : { message: errorResponse };

    response.status(status).json({
      ...safeResponse,
      timestamp: new Date().toISOString(),
      status,
    });
  }
}
