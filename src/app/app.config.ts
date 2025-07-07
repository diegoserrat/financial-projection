import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { simulationReducer } from './core/state/reducer/simulation.reducer';
import { SimulationEffects } from './core/state/effect/simulation.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    // provideStore({ simulation: simulationReducer }),
    // provideEffects([SimulationEffects]),
  ]
};
