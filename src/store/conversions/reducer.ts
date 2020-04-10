import {
  ConversionsState,
  ConversionType,
  SET_CONVERSION,
  SET_CONVERSION_INDICATOR,
} from './types';

const initialState: ConversionsState = {
  isLoading: false,
  data: {},
};

export default (
  state = initialState,
  { type, payload }: ConversionType
): ConversionsState => {
  switch (type) {
    case SET_CONVERSION_INDICATOR:
      return {
        ...state,
        isLoading: payload.isLoading,
      };
    case SET_CONVERSION:
      return {
        ...state,
        data: {
          ...state.data,
          [payload.conversion]: payload,
        },
      };
    default:
      return state;
  }
};
