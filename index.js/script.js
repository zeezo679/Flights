


// start hazem




function onSelectForm(e) {
    // debugger
    // e.target.cheched = true;
    showForm(e.target.value)
}
function showForm(selectedsection) {

    // إخفاء جميع النماذج
    document.querySelectorAll('.sec').forEach(function (section) {
        section.style.display = 'none';
    });

    // إظهار النموذج المحدد
    document.getElementById(selectedsection).style.display = 'flex';
}
onload = () => {
    showForm("page1")
}

function onSelectform(e) {
    // debugger
    // e.target.cheched = true;
    showform(e.target.value)
}
function showform(selectedForm) {

    // إخفاء جميع النماذج
    document.querySelectorAll('.formss').forEach(function (form) {
        form.style.display = 'none';
    });

    // إظهار النموذج المحدد
    document.getElementById(selectedForm).style.display = 'block';
}
onload = () => {
    showform("form1")
}

// localStorage

function saveFormDataOne(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form input values
    const from = document.getElementById('from').value;
    const To = document.getElementById('To').value;
    const Depart = document.getElementById('Depart').value;
    const Return = document.getElementById('Return').value;
    const Travellers = document.getElementById('Travellers').value;
    const className = document.getElementById('class').value;


    // Create an object to hold form data
    const formData = {
        from: from,
        To : To , 
        Depart: Depart , 
        Return: Return , 
        Travellers: Travellers , 
        class: className , 
        // Add other form fields as needed
    };


    // Convert formData object to a JSON string
    const formDataJSON = JSON.stringify(formData);

    // Save form data to localStorage
    localStorage.setItem('formData', formDataJSON);

    // Submit the form
    event.target.submit();
}

function saveFormDataTwo(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const from2 = document.getElementById('from2').value;
    const To2 = document.getElementById('To2').value;
    const Depart2 = document.getElementById('Depart2').value;
    const Travellers2 = document.getElementById('Travellers2').value;
    const className2= document.getElementById('class2').value;

    const formData2 = {
        from: from2,
        To : To2 , 
        Depart: Depart2 , 
        Travellers: Travellers2 , 
        class: className2 , 
        // Add other form fields as needed
    };

    // Convert formData object to a JSON string
    const formDataJSON2 = JSON.stringify(formData2);

    // Save form data to localStorage
    localStorage.setItem('formData2', formDataJSON2);

    // Submit the form
    event.target.submit();
}


function saveFormDataThree(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const from3 = document.getElementById('from3').value;
    const To3 = document.getElementById('To3').value;
    const Depart3 = document.getElementById('Depart3').value;
    const Travellers3 = document.getElementById('Travellers3').value;
    const className3= document.getElementById('class3').value;

    const from4 = document.getElementById('from4').value;
    const To4 = document.getElementById('To4').value;
    const Depart4 = document.getElementById('Depart4').value;

    const from5 = document.getElementById('from5').value;
    const To5 = document.getElementById('To5').value;
    const Depart5 = document.getElementById('Depart5').value;

    const formData3 = {
        from1: from3,
        To1 : To3 , 
        Depart1: Depart3 , 
        Travellers1: Travellers3 , 
        class1: className3 , 

        from2: from4,
        To2 : To4 , 
        Depart2: Depart4 ,

        from3: from5,
        To3 : To5 , 
        Depart3: Depart5 ,
        // Add other form fields as needed
    };

    // Convert formData object to a JSON string
    const formDataJSON3 = JSON.stringify(formData3);

    // Save form data to localStorage
    localStorage.setItem('formData3', formDataJSON3);

    // Submit the form
    event.target.submit();
}

// end hazem

// start login
let wrapper = document.querySelector('.wrapper');
let loginLink = document.querySelector('.login-link');
let registerLink = document.querySelector('.register-link');
let iconClose = document.querySelector('.icon-close');
let forgot = document.querySelector('.forgot');



let registerUsername = document.getElementById('username');
let registerEmail = document.getElementById('email');
let registerPassword = document.getElementById('password');
let form = document.getElementById('form');
let button = document.getElementById('button');




let loginButton1 = document.getElementById('login-button1');
let loginForm = document.getElementById('login-form');
let loginEmail = document.getElementById('login-email');
let loginPassword = document.getElementById('login-password');


let popUp = document.getElementById('pop-up');
let oki = document.getElementById('oki');

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

// ________________

let informationUser;
    if(localStorage.Data != null){
        informationUser = JSON.parse(localStorage.Data)
    }else{
        informationUser = [];
    }
    button.onclick = function() {
    const usernameValue = registerUsername.value.trim();
    const emailValue = registerEmail.value.trim();
    const passwordValue = registerPassword.value.trim();

    if(validateInputs(usernameValue, emailValue, passwordValue)){
        let object = {
            username:usernameValue,
            email:emailValue,
            password:passwordValue,
        }
        informationUser.push(object)
        localStorage.setItem('Data', JSON.stringify(informationUser))
        clearData()  
    }}
    oki.onclick = function(){
        popUp.classList.remove('open');
    }

    loginButton1.addEventListener('click',function() {
        const emailValue1 = loginEmail.value.trim();
        const passwordValue1 = loginPassword.value.trim();
    function show_pop() {
        popUp.classList.add('open');
    }

        if(validateLoginInputs(emailValue1, passwordValue1)){
        let userExists = false;
        for(let i=0; i<informationUser.length; i++){
            if(informationUser[i].email === emailValue1 && informationUser[i].password === passwordValue1){
                userExists = true;
                break;
            }
        }

        if(userExists){
        } else {
            show_pop();
        }

        clearDataLogin();
    }
    });

    function clearDataLogin() {
        loginEmail.value='';
        loginPassword.value='';
    }

    function clearData(){
        registerUsername.value='';
        registerEmail.value='';
        registerPassword.value='';
    }
        

// validation
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');

    errorDisplay.innerText = message;
}

const setSuccess = element => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');

    errorDisplay.innerText = '';
};

const isValidEmail = registerEmail => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(registerEmail).toLowerCase());
}

const validateInputs = (usernameValue, emailValue, passwordValue) => {
    
    if(usernameValue === ''){
        setError(registerUsername, 'Username is required');
        return false;
    } else {
        setSuccess(registerUsername);
    }

    if(emailValue === ''){
        setError(registerEmail, 'Email is required');
        return false;
    } else if (!isValidEmail(emailValue)){
        setError(registerEmail, 'Provide a valid email address');
        return false;
    } else {
        setSuccess(registerEmail)
    }

    if(passwordValue === ''){
        setError(registerPassword, 'Password is required');
        return false;
    } else if (passwordValue.length < 8){
        setError(registerPassword, 'Password must be at least 8 character.');
        return false;
    } else {
        setSuccess(registerPassword);
    }

    return true;
};

form.addEventListener('submit', e => {
    e.preventDefault();

    validateLoginInputs();
});

const validateLoginInputs = (emailValue1, passwordValue1) => {
    if(emailValue1 === ''){
        setError(loginEmail, 'Email is required');
        return false;
    }else if (!isValidEmail(emailValue1)){
        setError(loginEmail, 'Provide a valid email address');
        return false;
    } else {
        setSuccess(loginEmail);
    }

    if(passwordValue1 === ''){
        setError(loginPassword, 'Password is required');
        return false;
    } else if (passwordValue1.length < 8){
        setError(loginPassword, 'Password must be at least 8 character.');
        return false;
    } else {
        setSuccess(loginPassword);
    }
    return true;
};







// end login


// start zeyad
let theme1 = document.getElementById("theme1");
let theme2 = document.getElementById("theme2");
let link = document.getElementById("cssTheme");


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


//zeyad settings validation strt

let user;
let userName;
let Email;
let Password;

let headerName = document.getElementById("profile-change");

let userData = localStorage.getItem('Data');    //getting the data from the login form local storage
    if(userData != null){
        let data = JSON.parse(userData);       //to convert the data to a JS Object
        if(data.length > 0){    //if there is data...
            user = data[0];                 //the first object set (first user details)
            userName = user.username;       //getting the username
            Email = user.email;
            Password = user.password;
            headerName.innerHTML = `What's Flyin, ${userName}`;
        }
}

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("mail");
let saveBtn = document.getElementById("submit")

let lgpop = document.getElementById("lgpop-up");
let ok = document.getElementById("ok");

submit.onclick = function(){
        event.preventDefault();
        if(nameInput.value !== "" && userData != null){
            let newName = nameInput.value;
            let newEmail = emailInput.value;
            let userData = localStorage.getItem('Data');
            if(userData != null){
                let data = JSON.parse(userData);
                if(data.length > 0){
                    data[0].username = newName;
                    data[0].email = newEmail;
                    localStorage.setItem('Data', JSON.stringify(data))            //updating the data to localStorage
                    headerName.innerHTML = `What's Flyin, ${newName}`
                }
            }
        }
        else{
            lgpop.style.transform = 'translate(-50%, -50%) scale(1)';
            ok.onclick = function() {
            lgpop.style.transform = 'translate(-500%, -50%) scale(0)';
            }
        }

}





//zeyad settings validation end

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
    if(userData != null){
        uploadBtn.click();
    }
    else{
        lgpop.style.transform = 'translate(-50%, -50%) scale(1)';
        ok.onclick = function() {
        lgpop.style.transform = 'translate(-500%, -50%) scale(0)';
        }
    }
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
let pop = document.getElementById("popup");
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


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".search-input").forEach(inputField=>{
        const tableRows = document.querySelectorAll(".tbody tr");
        const headerCell = inputField.closest("th");     //dtermine the column index of search
        const otherHeaderCells = inputField.closest("tr").querySelectorAll("th");
        const columnIndex = Array.from(otherHeaderCells).indexOf(headerCell); //turning into array first rather than a NodeList so we can use the indexOf method.
        const searchableCells = Array.from(tableRows)
        .map(row => row.querySelectorAll("td")[columnIndex]); 

    
        inputField.addEventListener("input", ()=>{
            const searchQuery = inputField.value.toLowerCase();

            for(const tableCell of searchableCells){
                const row = tableCell.closest("tr");   //gets the whole row of the current cell
                const value = tableCell.textContent   //the value of the table cell
                        .toLowerCase()
                        .replace(",", "");  // Remove commas to allow searching by number
                
                row.style.visibility = null;     //to show all the rows after search

                if(value.search(searchQuery) === -1){
                    row.style.visibility = "collapse";
                }
            }
        })
    })
})




// end zeyad


// hamed start
let section=document.getElementById('sec')
console.log(section)
let i1=document.getElementById('1')
let i2=document.getElementById('2')
let i3=document.getElementById('3')
let i4=document.getElementById('4')
let i5=document.getElementById('5')
let login = document.getElementsByClassName("k");
console.log(login)
login[0].onclick = function(){
    wrapper.style.display = 'flex';
}

i1.onclick=function()
{
section.style.backgroundImage='url("images/img1.gif")';
}
i2.onclick=function()
{
section.style.backgroundImage='url("images/img2.png")';
}
i3.onclick=function()
{
section.style.backgroundImage='url("images/img3.png")';
}
i4.onclick=function()
{
section.style.backgroundImage='url("images/img4.png")';
}
i5.onclick=function()
{
section.style.backgroundImage='url("images/last.png")';
}
// hamed end



// ahmed start
let btn1 = document.getElementById('btn1');
        let btn2 = document.getElementById('btn2');
        let btn3 = document.getElementById('btn3');
        let btn4 = document.getElementById('btn4');
        let box1 = document.getElementById('box1');
        let box2 = document.getElementById('box2');
        let box3 = document.getElementById('box3');
        let box4 = document.getElementById('box4');

        btn1.onclick=function(){
           box1.classList.remove("hide");
            box2.classList.add("hide");
            box3.classList.add("hide");
            box4.classList.add("hide");
        }

        btn2.onclick=function(){
           box2.classList.remove("hide");
            box1.classList.add("hide");
            box3.classList.add("hide");
            box4.classList.add("hide");
        }

        btn3.onclick=function(){
           box3.classList.remove("hide");
            box1.classList.add("hide");
            box2.classList.add("hide");
            box4.classList.add("hide");
        }

        btn4.onclick=function(){
            box4.classList.remove("hide");
            box1.classList.add("hide");
            box2.classList.add("hide");
            box3.classList.add("hide");
        }
// ahmed end


// khaled gallery
let bton1 = document.getElementById('btn1');
let bton2 = document.getElementById('btn2');
let bton3 = document.getElementById('btn3');
let bton4 = document.getElementById('btn4');
let bton5 = document.getElementById('btn5');
let bton6 = document.getElementById('btn6');
let bton7 = document.getElementById('btn7');
let bton8 = document.getElementById('btn8');
let bton9 = document.getElementById('btn9');

bton1.addEventListener('click',function(){
    location.assign('https://ar.wikipedia.org/wiki/%D8%AA%D9%85%D8%AB%D8%A7%D9%84_%D8%A7%D9%84%D8%AD%D8%B1%D9%8A%D8%A9');
});

bton2.addEventListener('click',function(){
    location.assign('https://www.ajnet.me/encyclopedia/2024/2/9/%D8%A8%D8%B1%D8%AC-%D8%A8%D9%8A%D8%B2%D8%A7-%D8%A7%D9%84%D9%85%D8%A7%D8%A6%D9%84');
});

bton3.addEventListener('click',function(){
    location.assign('https://www.sis.gov.eg/Story/121619/%D8%A7%D9%84%D8%A3%D9%87%D8%B1%D8%A7%D9%85%D8%A7%D8%AA?lang=ar');
});

bton4.addEventListener('click',function(){
    location.assign('https://www.un.org/ungifts/ar/%D8%A7%D9%84%D8%B3%D9%88%D8%B1-%D8%A7%D9%84%D8%B9%D8%B8%D9%8A%D9%85');
});

bton5.addEventListener('click',function(){
    location.assign('https://www.japan.travel/ar/spot/1691/');
});

bton6.addEventListener('click',function(){
    location.assign('https://ar.wikipedia.org/wiki/%D8%A8%D8%B1%D8%AC_%D8%AE%D9%84%D9%8A%D9%81%D8%A9');
});

bton7.addEventListener('click',function(){
    location.assign('https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6');
});

bton8.addEventListener('click',function(){
    location.assign('https://ar.wikipedia.org/wiki/%D8%A5%D8%B3%D8%B7%D9%86%D8%A8%D9%88%D9%84');
});

bton9.addEventListener('click',function(){
    location.assign('https://mawdoo3.com/%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA_%D8%AD%D9%88%D9%84_%D8%AC%D8%B2%D8%B1_%D8%A7%D9%84%D9%85%D8%A7%D9%84%D8%AF%D9%8A%D9%81');
});
// khaled gallery