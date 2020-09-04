import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { VacationType } from './dto/create-vacation.dto';
import { VacationService } from './vacation.service';
import { VacationInput } from './input-vacation.input';


@Resolver()
export class VacationResolver {
    constructor(private readonly vacationService: VacationService) {}
  
    @Query(() => [VacationType])
    async vacations(): Promise<VacationType[]> {
      return this.vacationService.findAll();
    }
  
    @Mutation(() => VacationType)
    async createvacation(@Args('input') input: VacationInput): Promise<VacationType> {
      return this.vacationService.create(input);
    }
  
    @Mutation(() => VacationType) 
    async updatevacation(
      @Args('id') id: string,
      @Args('input') input: VacationInput,
    ): Promise<VacationInput> {
      return this.vacationService.update(id, input);
    }
  
    @Mutation(() => VacationType)
    async deletevacation(@Args('id') id: string): Promise<VacationType> {
      return this.vacationService.delete(id);
    }
  
    @Query(() => String)
    async hello() {
      return 'hello';
    }
  }
  
