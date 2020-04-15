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
  action: ConversionType
): ConversionsState => {
  switch (action.type) {
    case SET_CONVERSION_INDICATOR:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case SET_CONVERSION_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case SET_CONVERSION:
      return {
        ...state,
        error: null,
        data: {
          ...state.data,
          [action.payload.conversion]: action.payload,
        },
      };
    default:
      return state;
  }
};
