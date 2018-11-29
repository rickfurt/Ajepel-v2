const express = require('express');
const path = require('path');
const helmet = require('helmet');
const bodyParser = require('body-parser')
const exphbs  = require('express-handlebars');
const nodemailer = require('nodemailer');
var mailgun = require("mailgun-js");
var api_key = 'key-c61398ae1c9650d6a7e2f73a8f81e5f9';
var DOMAIN = 'https://app.mailgun.com/app/domains/sandboxa3abcd588ea44d5083b76ca76719eeb9.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});
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


app.route('https://ajepel.herokuapp.com/').get(function (req, res) {
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
  })

app.post('/send',(req, res)=> {
  console.log(req.body);

  var data = {
    from: 'WEBSITE <"req.body.nome">',
    to: 'ricardofurtado@hotmail.com',
    subject: 'Hello',
    text: 'req.body.msg'
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });

// const output = `
//       <p>You have a new contact request</p>
//       <h3>Contact Details :</h3>
//       <ul>
//         <li>Nome: $(req.body.nome)</li>
//         <li>Fone: $(req.body.fone)</li>
//         <li>Mail: $(req.body.mail)</li>
//       </ul>
//       <h3>Mensagem :</h3>
//       <p>$(req.body.msg)</p>
// `;
//
// nodemailer.createTestAccount((err, account) => {
//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//             user:'ricardofurtado2609@gmail.com', // generated ethereal user
//             pass: 'ricardo26091989' // generated ethereal password
//         },
//         tls:{
//           rejectUnauthorized:false
//         }
//     });
//
//     // setup email data with unicode symbols
//     let mailOptions = {
//         from: '"WEBSITE MAIL" <ricardofurtado2609@gmail.com>', // sender address
//         to: 'ricardofurtado2609@gmail.com', // list of receivers
//         subject: 'Node Contact Request', // Subject line
//         html: output // html body
//     };
//
//     // send mail with defined transport object
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('Message sent: %s', info.messageId);
//         // Preview only available when sending through an Ethereal account
//         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
//
//         // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//         // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//     });
//     res.render('contactSuccess')
//   });
//   });
//

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
});

app.listen(3000)
