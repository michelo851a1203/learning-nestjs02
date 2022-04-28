import { IsEnum, IsNotEmpty, IsNumberString, IsString } from 'class-validator';
import { StatusEnum } from './tasks.enum';

export class TaskQueryIdDTO {
  @IsNotEmpty()
  @IsString()
  id: string;
}

export class TaskCreateBodyDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumberString()
  price: number;

  @IsEnum(StatusEnum)
  status: StatusEnum;
}

export class TaskUpdateParamDTO {
  @IsNotEmpty()
  @IsString()
  id: string;
}

export class TaskUpdateBodyDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumberString()
  price: number;

  @IsEnum(StatusEnum)
  status: StatusEnum;
}

export class TaskDeleteParamDTO {
  @IsNotEmpty()
  @IsString()
  id: string;
}
