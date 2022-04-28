import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule, Routes } from 'nest-router';
import { TasksModule } from './tasks/tasks.module';

const routes: Routes = [
  {
    path: '/api/v1',
    module: TasksModule,
  },
];

@Module({
  imports: [
    TasksModule,
    RouterModule.forRoutes(routes),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3100,
      database: 'testDB',
      username: 'root',
      password: 'secret',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
