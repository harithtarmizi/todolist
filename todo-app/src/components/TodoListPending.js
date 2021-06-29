const TodoListPending = () => {


	const todos = [
		{title: 'Learn JS', state: 'pending'},
		{title: 'Learn React', state: 'pending'},
		{title: 'Learn Node', state: 'pending'},
		{title: 'Learn Database', state: 'pending'},
		{title: 'Learn Unit Testing', state: 'pending'}
	];


	return(
		<>
			<ul id="sortable" className="list-unstyled">

				<li className="ui-state-default">
				<div className="checkbox">
					<label>
					<input type="checkbox" value="" />Take out the trash</label>
				</div>
				</li>
				<li className="ui-state-default">
					<div className="checkbox">
						<label>
						<input type="checkbox" value="" />Buy bread</label>
					</div>
				</li>
				<li className="ui-state-default">
					<div className="checkbox">
						<label>
						<input type="checkbox" value="" />Teach penguins to fly</label>
					</div>
				</li>
			</ul>

			<div className="todo-footer">
				<strong><span className="count-todos"></span></strong> Items Left
			</div>
	</>
	// must be wrap with empty tag because have two elements, react cant have many elements
	);
}

export default TodoListPending;