import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './post/post.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal : true}),
    TypeOrmModule.forRoot({
    type: 'postgres',
    autoLoadEntities : true,
    entities: [],
    url:'postgres://bspoptrbdtspqs:cca87c2a6d5ebebaafce670a7af05b77cdc775353514fa6f8efeecc315d521c1@ec2-34-228-100-83.compute-1.amazonaws.com:5432/dape3pbvai4hkn',
    ssl:{
      rejectUnauthorized: false
    },
    synchronize: true
  }), PostModule]
  
})
export class AppModule {}
