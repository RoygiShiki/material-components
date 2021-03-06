import Component from 'vue-class-component';

import directives from '../../directives';
import mixins from '../../mixins';
import components from '../../components/docs';

@Component({
    props: {
        api: {
            required: true
        }
    },
    directives,
    components,
    mixins,
    template: require('./doc-api.html')
})
export default class ApiDoc {
    private api: any;

    get apis() {
        if (Array.isArray(this.api)) {
            return this.api;
        }
        return [{
            api: this.api
        }]
    }
}