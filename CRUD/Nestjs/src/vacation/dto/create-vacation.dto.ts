import { ObjectType, Field, Int, ID } from 'type-graphql';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';


@ObjectType()
export class VacationType {
  @Field(() => ID)
  @IsString()
  readonly id?: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly datefrom: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly dateto: string;
  @Field()
  @IsString()
  readonly datemodified: string;
  @Field()
  @IsNumber()
  readonly availabledays: number;
  @Field(() => Int)
  @IsNumber()
  readonly employeeid: number;

 
}
