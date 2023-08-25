import { Pipe, PipeTransform } from '@angular/core';
import { IResponseUser } from '../models/users.interface';

@Pipe({
  name: 'nombreCompleto',
})
export class NombreCompletoPipe implements PipeTransform {
  transform(value: IResponseUser, ...args: unknown[]): unknown {
    return `${value.name?.title} ${value.name?.first} ${value.name?.last}`;
  }
}
