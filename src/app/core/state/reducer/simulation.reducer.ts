import { createReducer, on } from "@ngrx/store";
import { updateParams, runSimulation } from "../actions/simulation.actions";
import { initialState, SimulationState } from "../models/simulation";

export const simulationReducer = createReducer<SimulationState>(
  initialState,
  on(updateParams, (state, { params }) => ({ 
    ...state, 
    params 
  })),
  on(runSimulation, (state) => ({ 
    ...state, 
    result: [] 
  }))
);