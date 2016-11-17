import Ember from 'ember';

export default Ember.Route.extend({
    title: 'Post List',
    
    model() {
        return this.get('store').findAll('post', {reload: true});
    }
});
