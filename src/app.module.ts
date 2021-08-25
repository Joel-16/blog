import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './post/post.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal : true}),
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'ec2-35-174-122-153.compute-1.amazonaws.com',
    port: 5432,
    username: 'kdsebwidssgndo',
    password: '98ec89114a5a1e52d965072941d49427995f9ae201533bb1a9be08442b2e2e76',
    database: 'd23q0n9iu3166p',
    autoLoadEntities : true,
    entities: [],
    url:'postgres://kdsebwidssgndo:98ec89114a5a1e52d965072941d49427995f9ae201533bb1a9be08442b2e2e76@ec2-35-174-122-153.compute-1.amazonaws.com:5432/d23q0n9iu3166p',
    synchronize: true
  }), PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
