import { FastifyPlugin } from "fastify"
import { RequestHandler } from '@/lib/types'
import { BaseResponse, ProofTaskDto, ProofTaskType, ProofTaskDtoSchma } from "@tokenizk/types";
import { parentPort } from "worker_threads";
import process from "process";

/**
* recieve proof-gen req 
*/
export const proofGenReqEndpoint: FastifyPlugin = async function (
    instance,
    options,
    done
): Promise<void> {
    instance.route({
        method: "POST",
        url: "/proof-gen",
        preHandler: [instance.authGuard],
        schema,
        handler
    })
}

const handler: RequestHandler<ProofTaskDto<any, any>, null> = async function (
    req,
    res
): Promise<BaseResponse<string>> {
    const { taskType, index, payload } = req.body;

    try {
        (process as any).send(req.body);
    } catch (err) {
        console.log(err);

    }


    return {
        code: 200,
        data: '',
        msg: ''
    };
}

const schema = {
    description: 'recieve proof-gen req',
    tags: ["Proof"],
    body: {
        type: "object",
        properties: (ProofTaskDtoSchma as any).properties,
    },
    response: {
        200: {
            type: "object",
            properties: {
                code: {
                    type: 'bigInt',
                    description: '0: success, 1: failure.'
                },
                data: {
                    type: 'string'
                },
                msg: {
                    type: 'string',
                    description: 'The reason or msg related to \'code\''
                }
            },
        }
    }
}

