export default (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.newTodo];
    case 'DELETE':
      return state.filter((todo) => todo.id !== action.id);
    case 'EDIT':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, text: action.text };
        } else {
          return todo;
        }
      });
    case 'CHECKER':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, checked: !todo.checked };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
