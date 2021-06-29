const TodoListDone = () => {
	return(
		<div className="col-md-6">
			<div className="todolist">
				<h1>Already Done</h1>
				<ul id="done-items" className="list-unstyled">
				<li>Some item <button className="remove-item btn btn-default btn-xs pull-right"><span className="glyphicon glyphicon-remove"></span></button></li>
				</ul>
			</div>
		</div>

	);
}


export default TodoListDone;