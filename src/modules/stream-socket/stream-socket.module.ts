import { Module } from '@nestjs/common';
import { StreamSocketService } from './stream-socket.service';

@Module({
  providers: [StreamSocketService]
})
export class StreamSocketModule {}
