import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EmployeeService } from './employee.service';
import { EmployeeType } from './dto/create-employee.dto';
import { EmployeeInput } from './input-employee.input';

@Resolver()
export class EmployeeResolver {
    constructor(private readonly employeeService: EmployeeService) {}
  
    @Query(() => [EmployeeType])
    async employees(): Promise<EmployeeType[]> {
      return this.employeeService.findAll();
    }
  
    @Mutation(() => EmployeeType)
    async createemployee(@Args('input') input: EmployeeInput): Promise<EmployeeInput> {
      return this.employeeService.create(input);
    }
  
    @Mutation(() => EmployeeType)
    async updateemployee(
      @Args('id') id: string,
      @Args('input') input: EmployeeInput,
    ): Promise<EmployeeInput> {
      return this.employeeService.update(id, input);
    }
  
    @Mutation(() => EmployeeType)
    async deleteemployee(@Args('id') id: string): Promise<EmployeeInput> {
      return this.employeeService.delete(id);
    }
  
    @Query(() => String)
    async hello() {
      return 'hello';
    }
  }
  
