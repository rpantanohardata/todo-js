export class Todo{
    constructor ( Tarea ){
        this.Tarea = Tarea;

        this.id         = new Date().getTime();
        this.completado = false;
        this.creado     = new Date(); 
    }

    static fromJson( {id, Tarea, completado, creado} ){
        const tempTodo = new Todo( Tarea );
       
        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;
    }
}