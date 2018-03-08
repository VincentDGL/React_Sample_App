import { SELECT_USER, CHANGE_NAME } from '../constants/ActionTypes';

const initialState = {
  users: [
    { "id": 11, "name": "Lee Fortenberry" },
    { "id": 12, "name": "Jenny Porche" },
    { "id": 13, "name": "James Smith" },
    { "id": 14, "name": "Dennis Kingsley" },
    { "id": 15, "name": "Michell Riehle" },
    { "id": 16, "name": "Robert Broadway" },
    { "id": 17, "name": "Alain Akasa" },
    { "id": 18, "name": "Nicholas Defeo" },
    { "id": 19, "name": "Ion Smail" },
    { "id": 20, "name": "Stephen Koumos" }
  ],
  selectedUser: null,
  title: 'Users App'
};

export default function userAppState(state = initialState, action) {
  let newState = null;

  switch (action.type) {
    case SELECT_USER:
      newState = Object.assign({}, state);
      newState.selectedUser = state.users.find(user =>
        user.id === action.id
      );
      return newState;
    case CHANGE_NAME:
      newState = Object.assign({}, state);
      newState.users = newState.users.map(user => {
        if (user.id === action.id) {
          user.name = action.newName;
        }
        return user;
      }
      );
      return newState;
    default:
      return state;
  }
}
