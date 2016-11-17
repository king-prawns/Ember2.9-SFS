import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel() {
        //redirect to users
        this.transitionTo('users');
//        this._super(...arguments);
//        this.replaceWith('users');
    }
});
