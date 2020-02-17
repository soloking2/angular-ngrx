import { Action } from '@ngrx/store';
import { Product } from '../product';

export enum ProductActionTypes {
  ToggleProductCode = '[Product] Toggle Product Code',
  SetCurrentProduct = '[Product] Set Current Product',
  ClearCurrentProduct = '[Product] Clear Current Product',
  InitializeCurrentProduct = '[Product] Initialize Current Product',
  Load = '[Product] Load',
  LoadSuccess = '[Product] Load Success',
  LoadFail = '[Product] Load Fail',
  UpdateProduct = '[Product] Update Product',
  UpdateSuccess = '[Product] Update Product Success',
  UpdateFail = '[Product] Update Product Fail'
}

export class ToggleProductCode implements Action {
  readonly type = ProductActionTypes.ToggleProductCode;

  constructor(public payload: boolean) {}
}

export class SetCurrentProduct implements Action {
  readonly type = ProductActionTypes.SetCurrentProduct;

  constructor(public payload: Product) {}
}

export class ClearCurrentProduct implements Action {
  readonly type = ProductActionTypes.ClearCurrentProduct;

}

export class Load implements Action {
  readonly type = ProductActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = ProductActionTypes.LoadSuccess;
  constructor(public payload: Product[]) {}
}

export class LoadFail implements Action {
  readonly type = ProductActionTypes.LoadFail;

  constructor(public payload: string) {}
}

export class InitializeCurrentProduct implements Action {
  readonly type = ProductActionTypes.InitializeCurrentProduct;

}

export class UpdateProduct implements Action {
  readonly type = ProductActionTypes.UpdateProduct;

  constructor(public payload: Product) {}
}

export class UpdateSuccess implements Action {
  readonly type = ProductActionTypes.UpdateSuccess;

  constructor(public payload: Product) {}
}

export class UpdateFail implements Action {
  readonly type = ProductActionTypes.UpdateFail;

  constructor(public payload: string) {}
}

export type ProductActions = ToggleProductCode
  | SetCurrentProduct
  | ClearCurrentProduct
  | InitializeCurrentProduct
  | Load
  | LoadSuccess
  | LoadFail
  | UpdateProduct
  | UpdateSuccess
  | UpdateFail;
