import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        save(model){
            model.set("saved", model.content);
            console.log(model.saved);
        },
        clear(model){
            model.set("content", '');
        }
    }
})