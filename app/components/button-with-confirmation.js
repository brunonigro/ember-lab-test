import Component from '@ember/component';

export default Component.extend({
    actions: {
        lauchConfirmDialog() {
            this.set('confirmShow', true);
        },

        submitConfirm() {
            //call the onConfirm property to invoke the passed in action
            this.get('onConfirm')();
        },

        cancelConfirm() {
            this.set('confirmShow', false);
        }
    }
});
