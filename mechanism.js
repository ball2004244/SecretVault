var gun = Gun(['http://localhost:8765/gun', 'https://gun-manhattan.herokuapp.com/gun']);
var user = gun.user();

$('#sign_up').on('click', function(e){
  user.create($('#username').val(), $('#password').val());
});

$('#sign_in_form').on('submit', function(e){
  e.preventDefault();
  user.auth($('#username').val(), $('#password').val());
});

$('#text_send_form').on('submit', function(e){
  e.preventDefault();
  if(!user.is){ return }
  user.get('text_send_form').set($('#text_send').val());
  $('#text_send').val("");
});

function UI(say, id){
  var li = $('#' + id).get(0) || $('<li>').attr('id', id).appendTo('ul');
  $(li).text(say);
};

gun.on('auth', function(){
  $("#sign_in_form").css("display", "none");
  $("#text_send_form").css("display", "block");
  user.get('text_send_form').map().once(UI);
});

$(document).ready(function() {
  $("#live-chat").draggable().resizable();
});ball