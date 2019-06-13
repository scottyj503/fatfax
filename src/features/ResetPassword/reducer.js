import {
  SEND_CODE,
  SEND_CODE_FULFILLED,
  SEND_CODE_ERROR,
  SEND_CONFIRMATION,
  SEND_CONFIRMATION_FULFILLED,
  SEND_CONFIRMATION_ERROR,
} from './types';

const INITIAL_STATE = {
  isCodeSent: false,
  isSendingCode: false,
  isConfirmed: false,
  isConfirming: false,
  error: '',
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEND_CODE:
      return { ...state, isSendingCode: true };
    case SEND_CODE_FULFILLED:
      return { ...state, isSendingCode: false, isCodeSent: true };
    case SEND_CONFIRMATION:
      return { ...state, isConfirming: true };
    case SEND_CONFIRMATION_FULFILLED:
      return { ...state, isConfirming: false, isConfirmed: true };
    case SEND_CODE_ERROR:
      return {
        ...state,
        isSendingCode: false,
        isCodeSent: false,
        error: action.payload,
      };
    case SEND_CONFIRMATION_ERROR:
      return {
        ...state,
        isConfirming: false,
        isConfirmed: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
