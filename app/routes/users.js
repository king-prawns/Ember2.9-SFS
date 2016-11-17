import Ember from 'ember';

export default Ember.Route.extend({
    title: 'User List',
    
    model() {
        return this.get('store').findAll('user', {reload: true}).
        then(orders => orders.sortBy('name'));
        
//        post('posts', { data: { title: 'Ember' } }) 
//        put('posts/1', { data: { title: 'Ember' } })
//        patch('posts/1', { data: { title: 'Ember' } })
//        del('posts/1')
    }
});
 