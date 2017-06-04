import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import * as types from '../constants/TodoFilters';

export default class Footer extends Component{

	static propTypes = {
		completedCount: PropTypes.number.isRequired,
		activeCount: PropTypes.number.isRequired,
		filterTodo: PropTypes.string.isRequired,
		onClearCompleted: PropTypes.func.isRequired,
		onShow: PropTypes.func.isRequired
	};

	renderTodoCount(){
		const {activeCount} = this.props;
		const itemWord = activeCount === 1 ? 'item' : 'items';

		return(
			<span className="todo-count">
				<strong>{activeCount || 'No'}</strong> {itemWord} left
			</span>
		)
	}

	renderClearButton(){
		const {completedCount, onClearCompleted} = this.props;

		if(completedCount > 0){
			return(
				<button
					className="clear-completed"
					onClick={onClearCompleted}
				>
					Clear completed
				</button>
			)
		}
	}

	render(){
		const listFilters = [types.SHOW_ALL, types.SHOW_ACTIVE, types.SHOW_COMPLETED];
		const {filterTodo, onShow} = this.props;

		return(
			<footer className="footer">
				{this.renderTodoCount()}
				<ul className="filters">
					{
						listFilters.map((item, key) => (
							<li key={key}>
								<a className={
										classnames({
											selected: filterTodo === item
										})
									}
									style={{cursor: 'pointer'}}
									onClick={() => onShow(item)}
								>
									{item}
								</a>
							</li>
						))
					}
				</ul>
				{this.renderClearButton()}
			</footer>
		)
	}
}