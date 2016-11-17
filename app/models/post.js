import DS from 'ember-data';

export default DS.Model.extend({
    //user: DS.belongsTo('user'),
    userId: DS.attr('string'),
    title: DS.attr('string'),
    body: DS.attr('string')
});
