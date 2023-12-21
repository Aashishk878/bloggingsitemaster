let ui=new firebaseui.auth.AuthUI(auth);
let login=document.querySelector('.login');

auth.onAuthStateChanged((user)=>{
    if(user){
        login.style.display ="none";

    }else{
        setuploginButton();
    }
})

const setuploginButton = () => {
    ui.start("#loginUI",{
        callbacks:{
            signInSuccessWithAuthResult:function(authResult,redirectURL){
                login.style.display ="none";
                return false;
            }

        },
        signInflow:"popup",
        signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID]
    })
}

