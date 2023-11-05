import { FastifyCore } from './app'
import { activeMinaInstance } from "@tokenizk/util";

const server = async () => {

    // init Mina tool 

    await activeMinaInstance(); // TODO improve it to configure graphyQL endpoint 

    const app = new FastifyCore()

    try {
        await app.listen()
        
    } catch (error) {
        console.log(error);
        
    }
}

export default server

server()
