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
    // host: 'ec2-35-174-122-153.compute-1.amazonaws.com',
    // port: 5432,
    // username: 'kdsebwidssgndo',
    // password: '98ec89114a5a1e52d965072941d49427995f9ae201533bb1a9be08442b2e2e76',
    // database: 'd23q0n9iu3166p',
    autoLoadEntities : true,
    entities: [],
    url:'postgres://ynjkxwlyualiag:3175d2e205a1334974ee4c9b3bec37e50b36bfe2e88ab1bb28cb4ac092b08000@ec2-54-147-93-73.compute-1.amazonaws.com:5432/deio4tc1l9pdlb',
    ssl:{
      rejectUnauthorized: false
    },
    synchronize: true
  }), PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
