import {User} from '../../imports/api/user'
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.userlist.helpers({
    users: User.find({})
})

Template.createuser.onCreated(function userOnCreated(){
    this.user = ReactiveVar({})
})

Template.createuser.events({
    'change .custom-input'(event,instance){
        event.preventDefault()
        instance.user.set({...instance.user.get(),[event.target.name]:event.target.value})
    },
    'click .custom-submit'(event,instance){
        event.preventDefault()
        User.insert(instance.user.get())
    }
})


