import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from '../models/randomuser';

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(value: IContact, ...args: unknown[]): unknown {
    return `${value.name?.title} ${value.name?.first} ${value.name?.last}`;
  }
}
