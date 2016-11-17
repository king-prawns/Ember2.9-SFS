import Ember from 'ember';

const custWidget = window.customWidget;

export default Ember.Route.extend({
    title: 'User Detail',
        
    actions: {
        updateUser(user){
            user.save();
        },
        sayName(firstName, lastName){
            custWidget.fullName(firstName, lastName);
        }
    },
    
    model(params) {
        return this.get('store').findRecord('user', params.detail_id);
    }
});
