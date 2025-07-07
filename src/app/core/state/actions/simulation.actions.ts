import { createAction, props } from "@ngrx/store";
import { SimulationParams } from "../models/simulation";

export const updateParams = createAction(
    '[Simulation] Update Params',
    props<{ params: SimulationParams }>()
);

export const runSimulation = createAction('[Simulation] Run Simulation');
