import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TodoActions from '../actions/index';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

const App = ({todos, actions}) => (
	<div className="App">
		<Header addTodo={actions.addTodo} />
		<MainSection todos={todos} actions={actions} />
	</div>
);

App.prototype = {
	todos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	todos: state.todos
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);