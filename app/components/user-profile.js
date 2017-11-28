import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    login: service(),

    actions: {
        userDidDeleteAcount() {
            this.get('login').deleteUser();
        }
    }
});
