import Ember from 'ember';

export function completedTodo(params/*, hash*/) {
    let count = 0;
    for(var todo of params[0]) {
        if(todo.get('completed')) {
            count++;
        }
    }
  return count;
}

export default Ember.Helper.helper(completedTodo);
