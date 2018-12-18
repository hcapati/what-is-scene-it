import { CREATEUSER, LOGIN } from './../constants/constants';

export const createUser = user => ({ type: CREATEUSER, user: user })
export const onLogin = email => ({ type: LOGIN, email: email })