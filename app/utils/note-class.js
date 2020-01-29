import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';

export default Route.extend({
    MAX:100,
    content:'Entrez votre texte',

    size : computed('content', 'MAX', function(){
        let content = this.get('content');
        let MAX = this.get('MAX');  
        return `${MAX - content.length}`;
    }),

    info : computed('content', function(){

    }),

    style : computed('content', 'MAX',function(){
        
    }),

    save : computed('content',function(){
        
    }),

    clear : computed('content', function(){
        
    })

});
