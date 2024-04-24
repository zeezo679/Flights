// start settings
let theme1 = document.getElementById("theme1");
let theme2 = document.getElementById("theme2");
let link = document.getElementById("cssTheme");

w

theme2.addEventListener('click', function(){
    link.href = "css/theme1.css"
    theme2.classList.add('active');
    theme1.classList.remove('active');
})

theme1.addEventListener('click', function(){
   link.href = "css/theme2.css"
   theme1.classList.add('active');
    theme2.classList.remove('active');
})

////

let changePfp = document.getElementById("upload");
let uploadBtn = document.getElementById("chose"); //input the file
let image = document.getElementById("profile"); //pfp pic
let remove = document.getElementById("remove");



window.addEventListener('load', function(){
    let displayImg = localStorage.getItem("newImg");
    if (displayImg) {
        image.src = displayImg;
    }
})

changePfp.addEventListener('click', function(){
    uploadBtn.click();
})

uploadBtn.onchange = function(){  //means when we change the image
    let newImg = URL.createObjectURL(uploadBtn.files[0])
    localStorage.setItem("newImg", newImg)
    image.src=newImg;
    remove.style.display = "block";
}


remove.onclick = function(){
    
    if(localStorage.getItem("newImg") == null){
        alert("Please choose an image first!");
    }
    else{
        localStorage.removeItem("newImg")
        image.src = "images/no-profile-picture-icon.png";
    }
}


let range = document.getElementById("range");
let ps = document.querySelectorAll("p");
let change = document.getElementById("change");


change.onclick = function(){
    if(isNaN(range.value)){
        alert("Please Enter An Integer Value");
    }
    else{
        ps.forEach((p)=>{
        p.style.fontSize = range.value + 'px';
   })
    }
}

let reset = document.getElementById("reset");

reset.onclick = function(){
    ps.forEach((p)=>{
        p.style.fontSize = '16px';
   })
   link.href = "css/theme2.css"
   window.scrollTo(0,0)
}

let scroll = document.getElementById('scroll');

scroll.onclick = function(){
    window.scrollTo(0,0);
}

window.addEventListener('scroll', (e) => {
    let y = this.scrollY;
    // console.log(y);
    if(y>2630){
        scroll.style.opacity= '1'
    }
    else{
        scroll.style.opacity = '0'
    }
})


let deletAcct = document.getElementById("delete-account");
let pop = document.getElementById("pop-up");
let no = document.getElementById("no");
let yes = document.getElementById("yes");

deletAcct.onclick = function(){
    pop.style.transform = 'translate(-50%, -50%) scale(1)';
}

no.onclick = function() {
    pop.style.transform = 'translate(-500%, -50%) scale(0)';
}

yes.addEventListener('click', function(e){
    localStorage.clear()
    pop.style.transform = 'translate(-500%, -50%) scale(0)';
    window.location.reload();
})

// end settings

// start login
let wrapper = document.querySelector('.wrapper');
let loginLink = document.querySelector('.login-link');
let registerLink = document.querySelector('.register-link');
let iconClose = document.querySelector('.icon-close');
let forgot = document.querySelector('.forgot');

let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let button = document.getElementById('button');


iconClose.addEventListener('click',function(){
    wrapper.style.display = 'none';
});

registerLink.addEventListener('click',function(){
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',function(){
    wrapper.classList.remove('active');
});

forgot.addEventListener('click',function(){
    wrapper.classList.add('active');
});











let informationUser;

if(localStorage.Data != null){
    informationUser = JSON.parse(localStorage.Data)
}else{
    informationUser = [];
}

button.onclick = function() {
    let object = {
        username:username.value,
        email:email.value,
        password:password.value,
    }
    informationUser.push(object)
    localStorage.setItem('Data', JSON.stringify(informationUser))
    clearData()
}

function clearData(){
    username.value='';
    email.value='';
    password.value='';
}



// end login
