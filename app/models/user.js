import DS from 'ember-data';

export default DS.Model.extend({
    //posts: DS.hasMany('post'), //one-to-many
    name: DS.attr('string'),
    username: DS.attr('string'),
    email: DS.attr('string'),
    phone: DS.attr('string')
});
