import TodoAdd from "./TodoAdd";
import TodoListDone from "./TodoListDone";
import TodoListMarkDone from "./TodoListMarkDone";
import TodoListPending from "./TodoListPending";

const Todos = () => {
	return(
		<div className="container">
        <div className="row">
          <div className="col-md-6">
              <div className="todolist not-done">
                <h1>Todos</h1>
				<TodoAdd /> 
                <TodoListMarkDone />
				<hr/>
                <TodoListPending />
              </div>
          </div>
				<TodoListDone />
         </div>
      </div>
	)
}

export default Todos;