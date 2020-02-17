import { Action } from '@ngrx/store';

export enum UserActionsType {
  MarkUserName = '[User] Mark User Name'
}

export class MarkUserName implements Action {
  readonly type = UserActionsType.MarkUserName;

  constructor(public payload: boolean) {}
}

export type UserActions = MarkUserName;
