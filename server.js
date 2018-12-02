const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

//handlebar to render
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.route('/').get(function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.route('/index.html').get(function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.route('/sobre.html').get(function(req, res) {
  res.sendFile(path.join(__dirname + '/sobre.html'))
})

app.route('/produtos.html').get(function(req, res) {
  res.sendFile(path.join(__dirname + '/produtos.html'))
})

app.route('/contato.html').get(function(req, res) {
  res.sendFile(path.join(__dirname + '/contato.html'))
});

app.post('/send', (req, res) => {
  console.log(req.body);
  var name = req.body.name;
  var phone = req.body.phone;
  var mail = req.body.mail;
  var text = req.body.textmsg;

  const msg = {
    to: 'ricardofurtado26@hotmail.com',
    from: mail,
    subject: 'Contato realizado pelo Website',
    // text: req.body.textmsg,
    html: '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">' +
      '<div class="jumbotron jumbotron-fluid bg-dark text-white border-custom">' +
      '<div class="container">' +
      '<p>Mensagem De : ' + name + '</p>' +
      '<p>E-mail : ' + mail + '</p>' +
      '<p>Telefone para Contato : ' + phone + '</p><hr>' +
      '<p>Mensagem : ' + text + '</p><hr>' +
      '</div></div>'
  };
  sgMail.send(msg);
// apos envio de email renderiza pagina com Mensagem de envio de email sucesso
  res.render('contactSuccess')
});

app.post('/contato', (req, res) => {
  res.render('contactError')
});
app.listen(PORT)
