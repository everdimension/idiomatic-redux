import addTodo from '../actions/addTodo';
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';

export default connect(null,
  dispatch => ({
    addTodo: text => dispatch(addTodo(text)),
  })
)(AddTodo);
