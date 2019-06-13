import {
  SEND_CODE,
  SEND_CONFIRMATION,
} from './types';

export function sendCode(data) {
  return ({
    type: SEND_CODE,
    data,
  });
}

export function sendConfirmation(data) {
  return ({
    type: SEND_CONFIRMATION,
    data,
  });
}
