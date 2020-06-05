// import { setStoredState } from './localStorage';
import { addTodo, delTodo, editTodo } from './sync';

// const URL_BACKEND = 'http://localhost:5000';

export default (state, action) => {
  console.log('REDUCER CALLED');
  switch (action.type) {
    case 'ADD': {
      let newState = [...state, action.newTodo];
      addTodo(action.newTodo);
      // setStoredState(newState);
      return newState;
    }
    case 'DELETE': {
      let newState = state.filter(todo => todo.id !== action.id);
      delTodo(action.id);
      // setStoredState(newState);
      return newState;
    }
    case 'EDIT': {
      let newState = state.map(todo => {
        if (todo.id === action.id) {
          const editedTodo = { ...todo, text: action.text };
          editTodo(editedTodo);
          return editedTodo;
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
          const editedTodo = { ...todo, checked: !todo.checked };
          editTodo(editedTodo);
          return editedTodo; 
        } else {
          return todo;
        }
      });
      // setStoredState(newState);
      return newState;
    }
    case 'SET_ALL': {
      return action.set;
    }
    default:
      return state;
  }
};
