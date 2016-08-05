import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const propTypes = {
  addTodo: PropTypes.func.isRequired,
};

class AddTodo extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const field = evt.target.elements.todo;
    this.props.addTodo(field.value);
    field.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="todo" type="text" placeholder="add todo..." />
      </form>
    );
  }
}

AddTodo.propTypes = propTypes;

export default connect()(AddTodo);
