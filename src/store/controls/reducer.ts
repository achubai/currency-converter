import { ControlsState, ControlTypes, SET_CONTROL_VALUE } from './types';


const initialState: ControlsState = {
  amount: null,
  from: '',
  to: '',
};

export default (
  state = initialState,
  { type, payload }: ControlTypes
): ControlsState => {
  switch (type) {
    case SET_CONTROL_VALUE:
      return {
        ...state,
        [payload.control]: payload.value,
      };
    default:
      return state;
  }
};
