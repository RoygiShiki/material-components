import Component from 'vue-class-component';

import mdDropdown from '../../../components/dropdown';
import mdDropdownItem from '../../../components/dropdown-item';

@Component({
    components: {
        mdDropdown,
        mdDropdownItem
    },
    template: require('./default.html')
})
export default class DefaultDropdown {
    data() {
        return {
            value: ''
        }
    }
}

