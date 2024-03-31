para = document.getElementById('para');
trans = document.getElementById('translate');
trans.addEventListener('click',()=>{
        if(para.textContent == "You Have Seen It Enough,Go Now🤣"){
            para.textContent = "Chusindhi Chalu Le, Po Inka🤣";
        }
  else{
    para.textContent = "You Have Seen It Enough,Go Now🤣";
  }
});
