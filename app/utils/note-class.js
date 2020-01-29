import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';

export default Route.extend({
    MAX:100,
    content:'Entrez votre texte',
    saved:'',

    size : computed('content', 'MAX', function(){
        let content = this.get('content');
        let MAX = this.get('MAX');  
        return `${MAX - content.length}`;
    }),

    style : computed('content', 'MAX',function(){
        let size = this.get("size");
        let MAX = this.get('MAX');
        if(size > (MAX/2))
            return `alert alert-primary`;
        if(size > (MAX/5))
            return `alert alert-warning`;
        return `alert alert-danger`;
    }),

    info : computed('content','saved', function(){
        let content = this.get('content');
        let saved = this.get('saved');
        if(saved == content && saved != '')    
            return `note sauvegardée`;
        if(content.length == 0 || content==saved)
            return ``;
        return `note modifiée`;
    }),

    alertVisible : computed('content','saved', function(){
        let content = this.get('content');
        let saved = this.get('saved');
        if(content.length==0)
            return ``;
        if(content == saved)
            return `alert alert-success`;
        return `alert alert-primary`;
    }),
    

    

});
