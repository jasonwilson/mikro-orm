import { ReferenceType } from '../entity';
import { createOneToDecorator, OneToManyOptions } from './OneToMany';
import { EntityName, AnyEntity } from '../typings';

export function OneToOne<T extends AnyEntity<T>, O extends AnyEntity<O>>(
  entity?: OneToOneOptions<T, O> | string | ((e?: any) => EntityName<T>),
  mappedBy?: (string & keyof T) | ((e: T) => any),
  options: Partial<OneToOneOptions<T, O>> = {},
) {
  return createOneToDecorator<T, O>(entity as string, mappedBy, options, ReferenceType.ONE_TO_ONE);
}

export interface OneToOneOptions<T extends AnyEntity<T>, O extends AnyEntity<O>> extends Partial<Omit<OneToManyOptions<T, O>, 'orderBy'>> {
  owner?: boolean;
  inversedBy?: (string & keyof T) | ((e: T) => any);
  wrappedReference?: boolean;
  primary?: boolean;
  onDelete?: 'cascade' | 'no action' | 'set null' | 'set default' | string;
  onUpdateIntegrity?: 'cascade' | 'no action' | 'set null' | 'set default' | string;
}