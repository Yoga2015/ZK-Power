import { FastifyError, FastifyRequest } from 'fastify';

export function throwError(
    this: FastifyRequest,
    statusCode: number,
    message: string,
    thrownError?: Error
): FastifyError {
    if (thrownError) {
        this.log.error(thrownError)
    }
   const error1 = new Error() as FastifyError
    error1.statusCode = statusCode;
    error1.message = message;
    return err
}
