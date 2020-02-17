import { Injectable } from '@angular/core';
import { ProductService } from '../product.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as productActions from './product.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Product } from '../product';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()

export class ProductEffects {
  constructor(private productService: ProductService,
              private actions$: Actions
  ) { }

  @Effect()
  loadProducts$: Observable<Action> = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.Load),
    mergeMap((actions: productActions.Load) =>
      this.productService.getProducts().pipe(
        map((products: Product[]) => (new productActions.LoadSuccess(products))),
        catchError(err => of(new productActions.LoadFail(err)))
      )
    )
  );

  @Effect()
  updateProduct$: Observable<Action> = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.UpdateProduct),
    map((action: productActions.UpdateProduct) => action.payload),
    mergeMap((product: Product) => this.productService.updateProduct(product).pipe(
      map(updatedProduct => (new productActions.UpdateSuccess(updatedProduct))),
      catchError(err => of(new productActions.UpdateFail(err)))
    ))
  );

}

