import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';

export default class Header extends Component{
	constructor(props) {
		super(props);
		this.handleSave = this.handleSave.bind(this);
	}

	static propTypes = {
		addTodo: PropTypes.func.isRequired
	}

	handleSave(text){
		if(text.length !== 0){
			this.props.addTodo(text);
		}
	}

	render(){
		return(
			<header className="header">
				<h1>Todos</h1>
				<TodoTextInput newTodo 
					placeholder="What needs to be done?"
					onSave={this.handleSave}
				/>
			</header>
		)
	}
}