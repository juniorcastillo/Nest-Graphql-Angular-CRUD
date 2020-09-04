import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class VacationInput {
  @Field()
  readonly datefrom: string;
  @Field()
  readonly dateto: string;
  @Field()
  readonly datemodified: string;
  @Field()
  readonly availabledays: number;
  @Field(() => Int)
  readonly employeeid: number;
 
}
