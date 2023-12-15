

var conteiner = document.querySelector(".conteiner")

var input = document.querySelector(".input")

var add_btn = document.querySelector(".add_btn")

var list = document.querySelector(".list")



add_btn.addEventListener("click",function(){



if( input.value.trim()==""){
    alert("Inputu bow saxlama ")
    input.value =  "";

} else{
    var li = document.createElement("li")  //li yaradirig
    list.appendChild(li)   //li -ni  UL e elave edirik

    var span = document.createElement("span") //span yaradiriq
   li.appendChild(span)        //li-ye span elave edirik

   span.textContent=input.value //spana qeyd edirikki inputda yazilan deyeri spana menimset

   var newbtn = document.createElement("button") //yeni button yaradirig edit ucun
   newbtn.classList.add("add_btn") //class adi veririkki ADD buttonunun syyle lerin gotursun
   newbtn.innerText = "edit" //teze btn ya metn veririk
   li.appendChild(newbtn) //yeni buttona li ye elave edirikki yazilarin yaninda cixsin


   newbtn.classList.add("btn_new_style") // yeni yaratdigimiz btn da elave style yaratmag ucun yeni yeni 2 ci klass veririk ve scss de cagiirib style veririk    ve ya newbtn.style.backgroundColor="reng" background yerine istediyimiz color yaza bilerik
   input.value=""   // bu o demekdiki inputa nese daxil edib add edenen sora inputdaki yazi silinsin

   newbtn.addEventListener("click" , function(){  //burada yeni btn yeni EDIT e click etdikde neynesin onu qeyd edirkk
    var new_value = prompt("" ,span.textContent.trim() ) //EDIT e click etdikde yazilan deyer prompta cixsin , Trim i yaziriqki edit etdikde eger kimsee birnece probel buraxib ve nese yazibsa edit etdikde promptda probeller cixmasin
       //promptda deyisdiyimiz deyeri ekranda yeni spanda gostersin
    if(new_value.trim()){
        span.innerText = new_value;
    }else{
        alert("inputu bow saxlama")
    }
})






}
})


