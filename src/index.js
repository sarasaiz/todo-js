import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml (todo) ); 
// todoList.todos.forEach(  crearTodoHtml ); Podría ponerlo así porque es el mismo argumento

// const newTodo = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(newTodo);
// todoList.todos[0].imprimirClase();
// console.log( 'todos', todoList.todos);
// newTodo.imprimirClase();


// const tarea  = new Todo('Aprender Javascript!!');

// todoList.nuevoTodo( tarea );

// tarea.completado = true;


// console.log( todoList);

// crearTodoHtml(tarea);

// localStorage.setItem('mi-key', 'ABC123');
// sessionStorage.setItem('mi-key', 'ABC123');
// setTimeout(()=> {
//     localStorage.removeItem('mi-key');
// }, 1500);
