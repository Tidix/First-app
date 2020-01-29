import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        save(model){
            console.log("yes");
            model.set("saved", content)
        },
        clear(model){
            console.log("no");
        }
    }
});
