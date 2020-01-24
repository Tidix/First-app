import Route from '@ember/routing/route';
import Note from 'first-app/utils/note-class'
export default Route.extend({
    model(){
        return Note.create();
    }
});
    