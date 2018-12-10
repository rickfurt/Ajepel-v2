$(document).ready(function() {
  $('#celofane').hide();
  $('#cupom').hide();
  $('#descartaveis').hide();
  $('#embalagens').hide();
  $('#escritorio').hide();
  $('#etiquetas').hide();
  $('#fitas').hide();
  $('#limpeza').hide();
  $('#maquinas').hide();
  // $('#plastico').hide();
  // $('#sacolas').hide();
  // $('#sacos').hide();


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

$('#btn1').click(function () {
  $('#celofane').show();
  $('#cupom').hide();
  $('#descartaveis').hide();
  $('#embalagens').hide();
  $('#escritorio').hide();
  $('#etiquetas').hide();
  $('#fitas').hide();
  $('#limpeza').hide();
  $('#maquinas').hide();
  $('#plastico').hide();
  $('#sacolas').hide();
  $('#sacos').hide();
  }
)
$('#btn2').click(function () {
  $('#celofane').hide();
  $('#cupom').show();
  $('#descartaveis').hide();
  $('#embalagens').hide();
  $('#escritorio').hide();
  $('#etiquetas').hide();
  $('#fitas').hide();
  $('#limpeza').hide();
  $('#maquinas').hide();
  $('#plastico').hide();
  $('#sacolas').hide();
  $('#sacos').hide();
  }
)
$('#btn3').click(function () {
  $('#celofane').hide();
  $('#cupom').hide();
  $('#descartaveis').show();
  $('#embalagens').hide();
  $('#escritorio').hide();
  $('#etiquetas').hide();
  $('#fitas').hide();
  $('#limpeza').hide();
  $('#maquinas').hide();
  $('#plastico').hide();
  $('#sacolas').hide();
  $('#sacos').hide();
  }
)
$('#btn4').click(function () {
  $('#celofane').hide();
  $('#cupom').hide();
  $('#descartaveis').hide();
  $('#embalagens').show();
  $('#escritorio').hide();
  $('#etiquetas').hide();
  $('#fitas').hide();
  $('#limpeza').hide();
  $('#maquinas').hide();
  $('#plastico').hide();
  $('#sacolas').hide();
  $('#sacos').hide();
  }
)
$('#btn5').click(function () {
  $('#celofane').hide();
  $('#cupom').hide();
  $('#descartaveis').hide();
  $('#embalagens').hide();
  $('#escritorio').show();
  $('#etiquetas').hide();
  $('#fitas').hide();
  $('#limpeza').hide();
  $('#maquinas').hide();
  $('#plastico').hide();
  $('#sacolas').hide();
  $('#sacos').hide();
  }
)
$('#btn6').click(function () {
  $('#celofane').hide();
  $('#cupom').hide();
  $('#descartaveis').hide();
  $('#embalagens').hide();
  $('#escritorio').hide();
  $('#etiquetas').show();
  $('#fitas').hide();
  $('#limpeza').hide();
  $('#maquinas').hide();
  $('#plastico').hide();
  $('#sacolas').hide();
  $('#sacos').hide();
  }
)
$('#btn7').click(function () {
  $('#celofane').hide();
  $('#cupom').hide();
  $('#descartaveis').hide();
  $('#embalagens').hide();
  $('#escritorio').hide();
  $('#etiquetas').hide();
  $('#fitas').show();
  $('#limpeza').hide();
  $('#maquinas').hide();
  $('#plastico').hide();
  $('#sacolas').hide();
  $('#sacos').hide();
  }
)
$('#btn8').click(function () {
  $('#celofane').hide();
  $('#cupom').hide();
  $('#descartaveis').hide();
  $('#embalagens').hide();
  $('#escritorio').hide();
  $('#etiquetas').hide();
  $('#fitas').hide();
  $('#limpeza').show();
  $('#maquinas').hide();
  $('#plastico').hide();
  $('#sacolas').hide();
  $('#sacos').hide();
  }
)
$('#btn9').click(function () {
  $('#celofane').hide();
  $('#cupom').hide();
  $('#descartaveis').hide();
  $('#embalagens').hide();
  $('#escritorio').hide();
  $('#etiquetas').hide();
  $('#fitas').hide();
  $('#limpeza').hide();
  $('#maquinas').show();
  $('#plastico').hide();
  $('#sacolas').hide();
  $('#sacos').hide();
  }
)
$('#btn10').click(function () {
  $('#celofane').hide();
  $('#cupom').hide();
  $('#descartaveis').hide();
  $('#embalagens').hide();
  $('#escritorio').hide();
  $('#etiquetas').hide();
  $('#fitas').hide();
  $('#limpeza').hide();
  $('#maquinas').hide();
  $('#plastico').show();
  $('#sacolas').hide();
  $('#sacos').hide();
  }
)
$('#btn11').click(function () {
  $('#celofane').hide();
  $('#cupom').hide();
  $('#descartaveis').hide();
  $('#embalagens').hide();
  $('#escritorio').hide();
  $('#etiquetas').hide();
  $('#fitas').hide();
  $('#limpeza').hide();
  $('#maquinas').hide();
  $('#plastico').hide();
  $('#sacolas').show();
  $('#sacos').hide();
  }
)
$('#btn12').click(function () {
  $('#celofane').hide();
  $('#cupom').hide();
  $('#descartaveis').hide();
  $('#embalagens').hide();
  $('#escritorio').hide();
  $('#etiquetas').hide();
  $('#fitas').hide();
  $('#limpeza').hide();
  $('#maquinas').hide();
  $('#plastico').hide();
  $('#sacolas').hide();
  $('#sacos').show();
  }
)
