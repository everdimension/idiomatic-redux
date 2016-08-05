import { v4 } from 'node-uuid';

export default function addToto(text) {
  return {
    type: 'ADD_TODO',
    text,
    id: v4(),
  };
}
