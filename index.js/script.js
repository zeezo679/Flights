


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

let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let button = document.getElementById('button');


iconClose.addEventListener('click',function(){
    wrapper.style.display = 'none';
});

registerLink.addEventListener('click',function(){
    event.preventDefault();
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',function(){
    event.preventDefault();
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
    location.reload();
}







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

let userData = localStorage.getItem('Data');
    if(userData != null){
        let data = JSON.parse(userData);
        if(data.length > 0){
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


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".search-input").forEach(inputField=>{
        const tableRows = document.querySelectorAll("tbody tr");
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
console.log(i1)
console.log(i2)
console.log(i3)
console.log(i4)
console.log(i5)
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