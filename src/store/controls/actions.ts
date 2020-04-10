import { ControlTypes, SET_CONTROL_VALUE } from './types';

export function setControlValue(control: string, value: string): ControlTypes {
  return {
    type: SET_CONTROL_VALUE,
    payload: {
      control,
      value,
    },
  };
}
