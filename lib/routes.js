import {User} from '../imports/api/user'



Router.route('/', function () {
    this.layout('defaultlayout')
    this.render('tasks');
  });

  Router.route('/account', function () {
    this.layout('defaultlayout')
    this.render('account');
  });


Router.route('/user/:_id',function(){
    this.layout('defaultlayout')
    this.render('userprofile')
},{name:'user.show',data:function(){
return User.findOne({_id:this.params._id})
}})