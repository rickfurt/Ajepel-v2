const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const exphbs  = require('express-handlebars');
var mailgun = require("mailgun-js");
var api_key = 'key-c61398ae1c9650d6a7e2f73a8f81e5f9';
var DOMAIN = 'https://api.mailgun.net/v3/sandboxa3abcd588ea44d5083b76ca76719eeb9.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});''
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const PORT = process.env.PORT || 5000;
const app = express();





app.use(express.static('public'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//handlebar to render
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
// app.get('/contact', function (req, res) {
//     res.render('contactSuccesss');
// });


app.route('/').get(function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
  })

app.route('/index.html').get(function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
  })

app.route('/sobre.html').get(function (req, res) {
  res.sendFile(path.join(__dirname + '/sobre.html'))
  })

app.route('/produtos.html').get(function (req, res) {
  res.sendFile(path.join(__dirname + '/produtos.html'))
  })

app.route('/contato.html').get(function (req, res) {
  res.sendFile(path.join(__dirname + '/contato.html'))
});

app.post('/send',(req, res)=> {
  console.log(req.body);
  var name = req.body.nome;
  var phone = req.body.fone;
  var mail = req.body.mail;
  var mensagem = req.body.msg;

  const msg = {
    to: 'ricardofurtado26@hotmail.com',
    from: mail,
    subject: 'From Website',
    text: mensagem 
    // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg);

    res.render('contactSuccess')
  });
//   });


app.post('/contato',(req, res)=> {
  console.log(req.body);

// const output = `
//       <p>You have a new contact request</p>
//       <h3>Contact Details :</h3>
//       <ul>
//         <li>Name: $(req.body.name)</li>
//       </ul>
// `;
res.render('contactError')

});

app.listen(PORT)
