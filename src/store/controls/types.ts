export const SET_CONTROL_VALUE = 'SET_CONTROL_VALUE';

export interface ControlValue {
  control: string;
  value: string;
}

export interface ControlsState {
  amount: string;
  from: string;
  to: string;
}

interface SetControlValueAction {
  type: typeof SET_CONTROL_VALUE;
  payload: ControlValue;
}

export type ControlTypes = SetControlValueAction;
