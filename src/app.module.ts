import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app.gateway';
import { DatabaseModule } from './modules/database/database.module';
import { StreamSocketController } from './modules/stream-socket/stream-socket.controller';
import { StreamSocketModule } from './modules/stream-socket/stream-socket.module';

@Module({
  imports: [DatabaseModule, StreamSocketModule],
  controllers: [AppController, StreamSocketController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
