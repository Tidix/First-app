import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return{ nom:'Nyx',
                detail:'Trop forte'}
    }
});
