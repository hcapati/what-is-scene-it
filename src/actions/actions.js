import { CREATEUSER, LOGIN, ADDPTS, MINUSPTS } from './../constants/constants';

export const createUser = user => ({ type: CREATEUSER, user: user });
export const onLogin = email => ({ type: LOGIN, email: email });
export const addPts = points => ({ type: ADDPTS, points: points });
export const minusPts = points => ({ type: MINUSPTS, points: points });