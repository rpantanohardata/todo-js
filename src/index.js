
import './styles.css';
import { Todo, TodoList} from './Classes';
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './Classes/todo.class';
// import { TodoList } from './Classes/todo-list.class';


export const todoList = new TodoList();

// todoList.todos.forEach( todo => crearTodoHtml( todo ));
todoList.todos.forEach( crearTodoHtml ); //funciona solo si es un solo elemento

// const tarea = new Todo('Aprender Javascript');

// todoList.nuevoTodo( tarea );
// console.log( todoList );

// crearTodoHtml( tarea );

// localStorage.setItem('mi-key', 'ABC123');
// sessionStorage.setItem('mi-key', 'ABC123');

// setTimeout ( ()=> {
//     localStorage.removeItem('mi-key');
// }, 1500 );

console.log('todos', todoList.todos);