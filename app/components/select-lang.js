import Ember from 'ember';

export default Ember.Component.extend({
    i18n: Ember.inject.service(),
    actions: {
        changeLang(lang) {
            this.set('i18n.locale', lang);
        }
    }
    
});
