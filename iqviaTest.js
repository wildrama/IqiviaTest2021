// my js code


// declarations
const consentYes = document.getElementById('consentYes');
const consentNo = document.getElementById('consentNo');
const result = document.getElementById('resultA');

const msg = document.getElementById('message');
const voice = document.getElementById('voice')
const email = document.getElementById('email')

const step1Tittle = document.querySelector('.s1');
const step2Tittle = document.querySelector('.s2');
const step3Tittle = document.querySelector('.s3');

const step1 = document.querySelector('#first-step');
const step2 = document.querySelector('#second-step');
const step3 = document.querySelector('#third-step');


const buttonSend = document.querySelector('.buttonSend');
const codeAlert = document.querySelector('#codeAlert');

const reSend = document.querySelector('#reSend');
const verify = document.querySelector('#verify');
const inputCode = document.querySelector('#inputCode');
const inputError = document.querySelector('error');

const allRadio = document.querySelectorAll('.radios')

// empty state
consentYes.checked = false;
consentNo.checked = false;
msg.checked = false;
voice.checked = false;
email.checked = false;
buttonSend.disabled= true;
reSend.style.visibility = "hidden";
// consentYes.addEventListener('click', nextStep1);


// event listener for first step radio inputs
consentYes.addEventListener('change', stepNext1);

consentNo.addEventListener('change', stepBack1);


// move forward to step 2
function stepNext1(e) {
  let target1 = e.target;

  switch (target1.id) {
    case 'consentYes':
      step1.classList.add('current');
      step1.classList.add('is-done');

      step1Tittle.classList.add('finished');

      step2.classList.remove('muted');
      buttonSend.disabled= false;

      break;

  }

  resultA.textContent = "";
}
// do not give consent
function stepBack1(e) {
  let target = e.target;

  switch (target.id) {
    case 'consentNo':
      message = 'You need to give your consent to continue';

       resultA.textContent = message;


  step1.classList.remove('current');
  step1.classList.remove('is-done');
  step1Tittle.classList.remove('finished');
  step2.classList.add('muted');
  step2.classList.remove('current');
  step2.classList.remove('is-done');
  step3.classList.remove('current');
  step3.classList.add('muted');
  step3.classList.remove('is-done')
  verify.classList.remove('verified');

  codeAlert.innerHTML= "";
  codeAlert.classList.remove('codeAlert');
  inputCode.style.borderColor = "#8f8f9d";
  inputCode.style.outline = "0px solid #8f8f9d";
  buttonSend.disabled= true;
  msg.checked = false;
  voice.checked = false;
  email.checked = false;
  buttonSend.disabled= true;
  reSend.style.visibility = "hidden";
      break;

  }
 

}



// step 2 

let messageCode = document.querySelector('#messageCode');


const rbs = document.querySelectorAll('input[name="second-step"]')

for(const rb of rbs){
    rb.addEventListener('change', function (e) {
        let target = e.target;
        let message;
        switch (target.id) {
            case 'message':
                message = `An SMS has been sent to your mobile phone.
                             Please check your messages ( *** *** 3456 ) to obtain the validation code.`;
                break;
            case 'voice':
                message = `A Code has been sent to your mobile phone via VoiceCall.
                      Please check your phone ( *** *** 3456 ) to listen and obtain the validation code.`;
                break;
            case 'email':
                message = `An Email has been sent to your Email Adress.
                      Please check your messages ( f****@iqvia.com ) to obtain the validation code.`;
                break;
        }
        messageCode.textContent = message;
        step2.classList.add('current');


    });
}

// button send code 

buttonSend.addEventListener('click', sendCode);


function sendCode (){
let random1 =  Math.floor(100 + Math.random() * 900);
let random2 =  Math.floor(100 + Math.random() * 900);
let random3 =  Math.floor(100 + Math.random() * 900);
let random4 =  Math.floor(100 + Math.random() * 900);


 codeAlert.innerHTML = `${random1} - ${random2} - ${random3} - ${random4}`;


  step2.classList.add('is-done');
  codeAlert.classList.add('codeAlert');
  step3.classList.remove('muted');


  reSend.style.visibility = "visible";
  reSend.style.transitionDelay = "1s";
  verify.classList.remove("disabled");
  verify.style.backgroundColor = "#0768fd"

}

function reSendCode(){
let random1 =  Math.floor(100 + Math.random() * 900);
let random2 =  Math.floor(100 + Math.random() * 900);
let random3 =  Math.floor(100 + Math.random() * 900);
let random4 =  Math.floor(100 + Math.random() * 900);


 codeAlert.innerHTML = `${random1} - ${random2} - ${random3} - ${random4}`;

 codeAlert.classList.add('codeAlert');
 inputCode.style.borderColor = "#8f8f9d";
 inputCode.style.outline = "#8f8f9d";
}

// reSend button

reSend.addEventListener('click',reSendCode);


// verify a code
verify.addEventListener('click', validateCode);

let errorMsg1 = document.getElementById('errorMsg');


function validateCode (){
  
 if(inputCode.value == codeAlert.textContent){

  verify.classList.add('verified');
  step3.classList.add('is-done');

  inputCode.style.borderColor = "green";

  verify.innerHTML= "Verified";

  inputCode.style.outline = "2px solid green";

  errorMsg1.style.color= "white";


 }
 else {
  inputCode.classList.toggle("notVerified");
  inputCode.style.borderColor = "red";

  
 }

}



// Ramiro Balladares Chacoma, Argentina
