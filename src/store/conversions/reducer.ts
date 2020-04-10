import {
  ConversionsState,
  ConversionType,
  SET_CONVERSION,
  SET_CONVERSION_INDICATOR,
  SET_CONVERSION_ERROR,
} from './types';

const initialState: ConversionsState = {
  isLoading: false,
  data: {},
  error: null,
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
    case SET_CONVERSION_ERROR:
      return {
        ...state,
        error: payload.error,
      };
    case SET_CONVERSION:
      return {
        ...state,
        error: null,
        data: {
          ...state.data,
          [payload.conversion]: payload,
        },
      };
    default:
      return state;
  }
};
