import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Tasks } from '../imports/api/tasks';

import './main.html';


Template.tasks.helpers({
  list: Tasks.find({ })
})

Template.tasks.events({
  'click .custom-checkbox'(event){
    Tasks.update(this._id,{$set:{checked:!this.checked}})
  },
})

Template.inputbox.onCreated(function taskOnCreated(){
  this.newTask = new ReactiveVar('')
})

Template.inputbox.events({
  'change .task-input'(event,instance){
    instance.newTask.set(event.target.value)
  },
  'click .submit'(event,instance){
    event.preventDefault()
    Tasks.insert({name: instance.newTask.get(),checked:false})
    instance.newTask.set(null)
  }
})


Template.inputbox.helpers({
  taskText(){
    return Template.instance().newTask.get()
  }
})