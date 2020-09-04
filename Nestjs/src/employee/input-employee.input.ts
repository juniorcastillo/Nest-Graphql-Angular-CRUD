import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class EmployeeInput {
  @Field()
  readonly name: string;
  @Field()
  readonly lastname: string;
  @Field(() => Int)
  readonly age: number;
  @Field()
  readonly occupation: string;
  @Field()
  readonly address: string;
}
