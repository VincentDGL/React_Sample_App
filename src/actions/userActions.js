import * as types from '../constants/ActionTypes';

export function changeName(id, newName) {
  return { type: types.CHANGE_NAME, id, newName };
}

export function selectUser(id) {
  return { type: types.SELECT_USER, id };
}

