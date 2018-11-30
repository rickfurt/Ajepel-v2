$(document).ready(function() {

$('.card').click(function () {
    // $(".testing").removeClass("fa-arrow-right");
    // $("#arrowBehaviour").addClass("fa-arrow-down");
    alert('working');
  }
);

// Form validation
  $('#contato-fone').keyup(function () {
    var nome = document.getElementById('contato-nome').value;

    if (nome === "" | nome === " ") {
      $('#error-nome').show();
    }
    else
    {
      $('#error-nome').hide();
    }
  });

  $('#contato-mail').keyup(function () {
    var fone = document.getElementById('contato-fone').value;

    if (fone === "" |fone === " ") {
      $('#error-fone').show();
    }
    else
    {
      $('#error-fone').hide();
    }
  });

  $('#contato-msg').keyup(function () {
  var mail= document.getElementById('contato-mail').value;

  if (mail === "" | mail === " ") {
    $('#error-mail').show();
  }
  else
  {
    $('#error-mail').hide();
  }
});

  $('#contato-nome,#contato-fone,#contato-mail,#contato-msg').keyup(function () {
    if ($('#contato-nome').val().length >1 && $('#contato-fone').val().length >1 && $('#contato-mail').val().length >1 && $('#contato-msg').val().length >1 )
    {
        $('#submit-btn').removeClass('disab');
        $('#submit-btn').removeAttr('disabled');
    }
    else
    {
      $('#submit-btn').addClass('disab');
    }
  })
});

function valida() {
  document.getElementById("submit-btn").addEventListener("click", function(event){
    event.preventDefault()
  });

  var nome = document.getElementById('contato-nome').value;
  var fone = document.getElementById('contato-fone').value;
  var mail = document.getElementById('contato-mail').value;
  var msg = document.getElementById('contato-msg').value;

  if (nome.length <2) {
    $('#error-nome').show();
  };

  if (fone.length <2) {
    $('#error-fone').show();
  };

  if (mail.length <2) {
    $('#error-mail').show();
  };

  if (msg.length <2) {
    $('#error-msg').show();
  };
  if (nome.length >2 && fone.length>2 && mail.length >2 && msg.length>2) {
    $( "#form-fields" ).attr( "action", "send" );
  }else{
    $( "#form-fields" ).attr( "action", "contato" );
  }
};
