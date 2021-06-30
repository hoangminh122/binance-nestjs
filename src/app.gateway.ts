import { Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway()
export class AppGateway implements OnGatewayInit,OnGatewayConnection,OnGatewayDisconnect{
  
  @WebSocketServer() server: Server;
  
  private logger: Logger = new Logger('AppGateway')


  handleDisconnect(client: any) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: any, ...args: any[]) {
    this.logger.log(`Client disconnected:${client.id}`);
  }

  afterInit(server: any) {
    this.logger.log('Init');
  }


  @SubscribeMessage('msgToServer')
  handleMessage(client: any, payload: any) {
    this.server.emit('msgToClient', payload);
  }


}
