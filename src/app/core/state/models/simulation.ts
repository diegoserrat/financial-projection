export interface SimulationParams {
  initial: number;
  monthly: number;
  rate: number;
  months: number;
}

export interface ProjectionPoint {
  month: number;
  total: number;
}

export interface SimulationState {
  params: SimulationParams;
  result: ProjectionPoint[];
}

export const initialState: SimulationState = {
  params: {
    initial: 1000,
    monthly: 200,
    rate: 0.01,
    months: 120
  },
  result: []
};