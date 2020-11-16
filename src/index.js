import './styles.css';

import {Todo, TodoList} from './class/index';
import {crearTodoHtml} from './js/componentes';


export const todoList = new TodoList(); 

// todoList.todos.forEach( todo => crearTodoHtml(todo) );
todoList.todos.forEach( crearTodoHtml ); // forma corta

// const tarea = new Todo('aprender JavaScript');

// crearTodoHtml(tarea);

// todoList.nuevoTodo(tarea);


// localStorage.setItem('me-key','ACB123');
// sessionStorage.setItem('me-key','ACB123');
