import Component from 'vue-class-component';

import components from '../../../components';
import directives from '../../../directives';

@Component({
    components,
    directives,
    template: require('./image.html')
})
export default class ImageCard {
    data() {
        return {
            size: 'medium',
            titleInImage: true
        }
    }
}

