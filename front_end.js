
var gun = Gun(['http://localhost:8765/gun', 'https://gun-manhattan.herokuapp.com/gun']);
var user = gun.user();
$('#form').on('submit', function(e){
  e.preventDefault();

  if(!user.is){ return }
  user.get('#form').set($('#text').val());
  $('#text').val("");
});

function UI(say, id){
  var li = $(id).get(0) || $('<li>').attr('id', id).appendTo('ul');
  $(li).text(say);
};

gun.on('auth', function(){
  user.get('#form').map().once(UI);
});