import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class TodoTextInput extends Component{

	static propTypes = {
		onSave: PropTypes.func.isRequired,
		text: PropTypes.string,
		newTodo: PropTypes.bool,
		placeholder: PropTypes.string,
		editing: PropTypes.bool
	}

	state = {
		text: this.props.text || ''
	}

	hanleChange(e){
		this.setState({
			text: e.target.value
		})
	}

	handleBlur(e){
		if(!this.props.newTodo){
			this.props.onSave(e.target.value);
		}
	}

	handleSubmit(e){
		const text = e.target.value.trim();

		if(e.which === 13){
			this.props.onSave(text);
			if(this.props.newTodo){
				this.setState({
					text: ''
				})
			}
		}
	}

	render(){
		return(
			<input
				className={
					classnames({
						edit: this.props.editing,
						'new-todo': this.props.newTodo
					})
				}
				type="text"
				placeholder={this.props.placeholder}
				autoFocus="true"
				value={this.state.text}
				onChange={this.hanleChange.bind(this)}
				onBlur={this.handleBlur.bind(this)}
				onKeyDown={this.handleSubmit.bind(this)}
			/>
		)
	}
}