// let formLogin = document.querySelector("#loginf");

//     db.collection('register').get().then( regis =>{
//         function submit(x,y){
//             if(y == ''+'"'+formLogin.pwd.value+'"' &&  x == ''+'"'+formLogin.username.value+'"'){
//                 alert('ok');
//             }else{
//                 alert('Try username or password again.');
//             }

//         }
//         var user ='';
//         var pass = '';
//         regis.docs.forEach(doc => {
//             console.log(doc.data());
//             user += doc.data().username;
//             pass += doc.data().password;
//         });


//         submit(user,pass);
//     }); 

function submit(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('pwd').value;
    // alert(username + " " + password)
    if(username == 'admin' && password == '1234'){
        window.location.href="admin.html";
    }else{
        var err = 'wrong Username or Password';
        document.getElementById('wrong').innerHTML = err ;
    }
}