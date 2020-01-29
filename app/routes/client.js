import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return{ nom:'Alpha Man',
                detail:'Le plus grand de tous les héros'}
    }
});
