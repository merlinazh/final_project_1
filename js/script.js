/*-------------------------Todo List--------------------*/
const formTodo = document.querySelector("#form-todo");
const inputTodo = document.querySelector("#input-popup");
const ulTodo  = document.querySelector("#ul-todo");

document.addEventListener("DOMContentLoaded", loadelist);
formTodo.addEventListener("submit",creatlist);
ulTodo.addEventListener("click", deleteTodo);

function loadelist (){
  if(localStorage.getItem("list") == null){
    list = [];
  }else {
    list = JSON.parse(localStorage.getItem("list"));
  }

  list.forEach((element) => {
    const li = document.createElement("li");
    li.className = "li-todo";
    li.appendChild(document.createTextNode(inputTodo.value));

    const spanTodo = document.createElement("span");
    spanTodo.className = "span-todo";


    const aTodo = document.createElement("a");
    aTodo.className = "a-todo"; 
    aTodo.href = "#"

    const iconTodo = document.createElement("img");
    iconTodo.className = "icon";
    iconTodo.src = "assets/icon/delete.png";  

    li.appendChild(spanTodo);
    li.appendChild(aTodo);
    aTodo.appendChild(iconTodo);  
  
    ulTodo.appendChild(li);
  
    ulTodo.value ="";

  });
}

function creatlist (event){
  event.preventDefault();

  if(inputTodo.value) {
    const li = document.createElement("li");
    li.className = "li-todo";
    li.appendChild(document.createTextNode(inputTodo.value));

    const spanTodo = document.createElement("span");
    spanTodo.className = "span-todo";


    const aTodo = document.createElement("a");
    aTodo.className = "a-todo"; 
    aTodo.href = "#"

    const iconTodo = document.createElement("img");
    iconTodo.className = "icon";
    iconTodo.src = "assets/icon/delete.png";  

    li.appendChild(spanTodo);
    li.appendChild(aTodo);
    aTodo.appendChild(iconTodo);  
  
    ulTodo.appendChild(li);
    
    localStorageTodo(inputTodo.value);
  
    ulTodo.value ="";

  }else{
    alert("Kamu Belum menulis sesuatu")
  }

 
}

function getList (){

  let list;

  if(localStorage.getItem("list")== null){
    list = [];
  }else {
    list = JSON.parse(localStorage.getItem("list"));
  }
  return list;
}

function localStorageTodo (event){
  
  const list = getList();

  list.push({
    status : 0,
    isi : event,
  });
  localStorage.setItem("list",JSON.stringify(list));
}

function deleteTodo (event) {
  
  event.preventDefault();

  if (event.target.classList.contains("icon")){

    if (confirm("Apakah anda yakin mau menghapus list ini?")){

      const element = event.target.parentElement;
      const elemntList = element.parentElement;

    elemntList.remove();
    deleteListLocalStorage(elemntList);
  
    }
  }
}

function deleteListLocalStorage (elemntList){
  const list = getList();

  list.forEach((konten,index) => {
    if (elemntList.firstChild.textContent == konten.isi){
      list.splice(index, 1);
    }
  })
  localStorage.setItem("list", JSON.stringify(list));
}





/*-------------------------End Todo List--------------------*/
/*-------------------------POP UP HOME--------------------*/
document.getElementById("home-btn").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "flex";
})
document.querySelector(".close").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
})
/*-------------------------END POP UP HOME--------------------*/
/*-------------------------POP UP ABOUT--------------------*/
document.getElementById("about-btn").addEventListener("click", function(){
  document.querySelector(".popup-about").style.display = "flex";
})
document.querySelector(".close-about").addEventListener("click", function(){
  document.querySelector(".popup-about").style.display = "none";
})
/*-------------------------END POP UP ABOUT--------------------*/
/*-------------------------POP UP Portofolio--------------------*/
// 1
document.getElementById("btn-portofolio").addEventListener("click", function(){
  document.querySelector(".popup-portofolio").style.display = "flex";
})
document.querySelector(".close-portofolio").addEventListener("click", function(){
  document.querySelector(".popup-portofolio").style.display = "none";
})
// End 1
// 2
document.getElementById("btn-portofolio1").addEventListener("click", function(){
  document.querySelector(".popup-portofolio1").style.display = "flex";
})
document.querySelector(".close-portofolio1").addEventListener("click", function(){
  document.querySelector(".popup-portofolio1").style.display = "none";
})
// End 2
// 3
document.getElementById("btn-portofolio2").addEventListener("click", function(){
  document.querySelector(".popup-portofolio2").style.display = "flex";
})
document.querySelector(".close-portofolio2").addEventListener("click", function(){
  document.querySelector(".popup-portofolio2").style.display = "none";
})
// End 3
// 4
document.getElementById("btn-portofolio3").addEventListener("click", function(){
  document.querySelector(".popup-portofolio3").style.display = "flex";
})
document.querySelector(".close-portofolio3").addEventListener("click", function(){
  document.querySelector(".popup-portofolio3").style.display = "none";
})
// End 4
// 5
document.getElementById("btn-portofolio4").addEventListener("click", function(){
  document.querySelector(".popup-portofolio4").style.display = "flex";
})
document.querySelector(".close-portofolio4").addEventListener("click", function(){
  document.querySelector(".popup-portofolio4").style.display = "none";
})
// End 5
// 6
document.getElementById("btn-portofolio5").addEventListener("click", function(){
  document.querySelector(".popup-portofolio5").style.display = "flex";
})
document.querySelector(".close-portofolio5").addEventListener("click", function(){
  document.querySelector(".popup-portofolio5").style.display = "none";
})
// End 6

/*-------------------------END POP UP PORTOFOLIO--------------------*/
/*-------------------------SEND EMAIL -------------------------*/
function sendEmail(){
    const name = document.getElementById("form-name").value;
    const email = document.getElementById("form-email").value;
    const message = document.getElementById("message").value;

    Email.send({
        SecureToken : "970a19ab-9108-4c0c-8a0d-8c6c24955e1b",   
        To : 'simmba155@gmail.com',
        From : "ds8841521@gmail.com",
        Subject : "New Contact Form Enquiry",
        Body : "Name : " + name + "<br/> User Email : " + email + " <br/> User Message : " + message
    }).then(
      message => alert("Message Sent Succsesfully")
    );
}
/*-----------------------------END  SEND EMAIL-----------------------------------*/