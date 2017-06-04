import React, {Component} from 'react';
import * as types from '../constants/TodoFilters';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import Footer from './Footer';

class MainSecton extends Component{

	constructor(props) {
		super(props);
		
		this.handleClearCompleted = this.handleClearCompleted.bind(this);
		this.handleShow = this.handleShow.bind(this);
	}

	static propTypes = {
		todos: PropTypes.array.isRequired,
		actions: PropTypes.object.isRequired
	}

	state = {
		filterTodo: types.SHOW_ALL
	}

	handleShow(filterTodo){
		this.setState({
			filterTodo
		})
	}

	handleClearCompleted(){
		this.props.actions.clearCompleted();
	}

	renderToggleAll(completedCount){
		const {todos, actions} = this.props;

		if(todos.length > 0){
			return(
				<input
					className="toggle-all"
					type="checkbox"
					checked={completedCount === todos.length}
					onChange={actions.completeAll}
				/>
			)
		}
	}

	renderFooter(completedCount){
		const {todos} = this.props;
		const {filterTodo} = this.state;
		const activeCount = todos.length - completedCount;

		if(todos.length){
			return (
				<Footer completedCount={completedCount}
					activeCount={activeCount}
					filterTodo={filterTodo}
					onClearCompleted={this.handleClearCompleted}
					onShow={this.handleShow}
				/>
			)
		}
	}

	render(){
		const {todos, actions} = this.props;
		const {filterTodo} = this.state;

		const completedCount = todos.reduce((count, todo) => 
			todo.completed ? count + 1 : count,
			0
		);

		let filteredTodos = null;

		switch (filterTodo){
			case types.SHOW_ALL:
				filteredTodos = todos;
				break;
			case types.SHOW_ACTIVE:
				filteredTodos = todos.filter(todo => !todo.completed);
				break;
			case types.SHOW_COMPLETED:
				filteredTodos = todos.filter(todo => todo.completed);
				break;
		}

		return(
			<section className="main">
				{this.renderToggleAll(completedCount)}
				<ul className="todo-list">
					{filteredTodos && filteredTodos.map(todo => 
						<TodoItem key={todo.id} todo={todo} {...actions} />
						)
					}
				</ul>
				{this.renderFooter(completedCount)}
			</section>
		)
	}
}

export default MainSecton;