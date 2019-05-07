import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import * as TodoActions from './store/actions/todosAction';

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button type="submit" onClick={() => removeTodo(todo.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
    <button type="submit" onClick={() => addTodo('New todo')}>
      Add Todo
    </button>
  </>
);

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ).isRequired,
};

const mapStatetoProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStatetoProps,
  mapDispatchToProps,
)(TodoList);
