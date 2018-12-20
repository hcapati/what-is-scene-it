import { CREATEUSER, LOGIN, ADDPTS, MINUSPTS, SETCATEGORY, SETDIFFICULTY, DISABLECARD, GAMEOVER, RESULTS } from './../constants/constants';

export const createUser = user => ({ type: CREATEUSER, user: user });
export const onLogin = email => ({ type: LOGIN, email: email });
export const addPts = points => ({ type: ADDPTS, points: points });
export const minusPts = points => ({ type: MINUSPTS, points: points });
export const setCategory = value => ({ type: SETCATEGORY, value: value });
export const setDifficulty = value => ({ type: SETDIFFICULTY, value: value });
export const disableCard = card => ({ type: DISABLECARD, card: card});
export const gameOver = () => ({ type: GAMEOVER });
export const getResults = () => ({ type: RESULTS });