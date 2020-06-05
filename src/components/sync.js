const BACKEND = process.env.REACT_APP_BACKEND_LOCATION;

export const addTodo = (todo) => {
  fetch(BACKEND, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo),
  })
    .catch(error => console.error('Error in POST:', error));
};

export const delTodo = (id) => {
  fetch(`${BACKEND}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .catch(error => console.error('Error in DELETE:', error));
}

export const editTodo = (editedTodo) => {
  fetch(BACKEND, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(editedTodo),
  })
    .catch(error => console.error('Error in PUT:', error));
}
