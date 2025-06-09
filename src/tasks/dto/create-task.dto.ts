import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { TaskStatus } from '../interfaces/task.interface';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsEnum(TaskStatus)
  status: TaskStatus = TaskStatus.PENDING;
} 