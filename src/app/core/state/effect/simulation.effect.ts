// src/app/simulation/store/simulation.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as SimulationActions from '../actions/simulation.actions';

@Injectable()
export class SimulationEffects {
  
  constructor(private actions$: Actions) {}

  // Quando updateParams acontece → calcula → dispara runSimulation
  simulate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SimulationActions.updateParams), // Escuta esta ação
      map(action => {
        // Faz o cálculo
        this.calculate(action.params);
        // Retorna nova ação
        return SimulationActions.runSimulation();
      })
    )
  );

  // Método que faz o cálculo
  private calculate(params: any): any[] {
    const data = [];
    let total = params.initial;

    for (let i = 1; i <= params.months; i++) {
      total = total * (1 + params.rate) + params.monthly;
      data.push({ month: i, total });
    }

    return data;
  }
}