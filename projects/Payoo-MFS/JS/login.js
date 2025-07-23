// // step-1 set event handler
// document.getElementById('button-login')
//     .addEventListener('click', function (event) {
//          //step-2 prevent default behaviour (reloding browser)
//         event.preventDefault();
//         console.log('login click');
//         // step-3 get the phone number
//         const phoneNumber = document.getElementById('phone-number').value;
//         const pinNumber = document.getElementById('pin-number').value; 
//         console.log(phoneNumber , pinNumber);
//     })
//     //step 4 validate pin and phone
//     // this is temporary . you should not do like this
//     if(phoneNumber === '5' && pinNumber === '1234'){
//         console.log('you are logged in');
//         // allow user to the websitesss
//     }
//     else{
//         alert('Wrong phone number or pin');
//     }

document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();

    // get phone number and pin number
    const phoneNumber = document.getElementById('phone-number').value; 
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber , pinNumber);

    // bad way to validate
    if(phoneNumber === '5' && pinNumber ==='1234'){
        console.log('your logged in'); 
        window.location.href = '\home.html';
    }else{
        alert('Wrong phone number or pin.')
    }
});