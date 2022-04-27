export function addTodos(data){
  return{
    type: 'addTodos',
    payload:data
  }
}
export function updateTodos(data){
  return{
    type: 'updateTodos',
    payload:data
  }
}

export function deleteTodo(data){
  return{
    type: 'deleteTodo',
    payload:data
  }
}

export function receivedTodos(data){
  return{
    type: 'receivedTodos',
    payload:data
  }
}
export function fetchTodos(data){
  return{
    type: 'fetchTodos',
    payload:data
  }
}
