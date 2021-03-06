import Component from 'vue-class-component';
import docRaisedButtons from './raised';
import docFloatingButtons from './floating';
import docFabButtons from './fab';
import docFabHorizontalButtons from './fab-horizontal';
import docFabClickButtons from './fab-click';

@Component({
    components: {
        docRaisedButtons,
        docFloatingButtons,
        docFabButtons,
        docFabHorizontalButtons,
        docFabClickButtons
    },
    template: require('./buttons.html')
})
export default class Butons {
    data() {
        return {
            api: require("../../components/button/button-api.json"),
            snippets: {
                raisedButtons: require('./raised/raised.snippet.html'),
                floatingButtons: require('./floating/floating.snippet.html'),
                fabButtons: require('./fab/fab.snippet.html'),
                fabHorizontalButtons: require('./fab-horizontal/fab.snippet.html'),
                fabClickButtons: require('./fab-click/fab.snippet.html')    
            },
            src: {
                script: require("!!html!highlightjs?lang=ts!../../components/button/index.ts"),
                template: require('!!html!highlightjs?lang=html!../../components/button/btn.html')
            }
        }
    }
}