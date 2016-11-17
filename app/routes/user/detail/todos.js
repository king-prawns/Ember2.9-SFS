import Ember from 'ember';

export default Ember.Route.extend({
    title: 'User Todo List',
    
    renderTemplate(){
        this.render({into: 'application'});
    },
    
    model() {
        var parentRouteId = this.paramsFor('user.detail').detail_id;
        
        var store = this.get('store');
        
        return Ember.RSVP.hash({
            todos: store.findAll('todo').then((todos) => {
                return todos.filter((item)=> {
                    return item.get('userId') === parentRouteId;
                });
            }), 
            userId: parentRouteId
        });
        
        /* 
          I use .findAll + (.filter) because for json-server I need this kind of url: 
          '_urlBase/todos?userId=5'
          
          Using .query:
          this.get('store').query('todo', { filter: { userId: parentRouteId }})
          '_urlBase/todos?filter[userId]=5'
         */
    }
});
