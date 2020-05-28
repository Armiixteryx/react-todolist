// import { setStoredState } from './localStorage';

export default (state, action) => {
  switch (action.type) {
    case 'ADD': {
      let newState = [...state, action.newTodo];
      // setStoredState(newState);
      return newState;
    }
    case 'DELETE': {
      let newState = state.filter(todo => todo.id !== action.id);
      // setStoredState(newState);
      return newState;
    }
    case 'EDIT': {
      let newState = state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, text: action.text };
        } else {
          return todo;
        }
      });
      // setStoredState(newState);
      return newState;
    }
    case 'CHECKER': {
      let newState = state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, checked: !todo.checked };
        } else {
          return todo;
        }
      });
      // setStoredState(newState);
      return newState;
    }
    default:
      return state;
  }
};
