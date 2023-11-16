import { FastifyError, FastifyRequest } from 'fastify';

export function throwError(
    this: FastifyRequest,
    statusCode: number,
    message: string,

    thrownError?: Error
): FastifyError {
        this.log.error(thrownError)

   const error = new Error() as FastifyError
    error.statusCode = statusCode;
    error.message = message;
    return error
}
