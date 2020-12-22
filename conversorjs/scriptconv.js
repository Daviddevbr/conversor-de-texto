let entradado=document.querySelector("textarea#entra")
let saidado=document.querySelector("textarea#sai")

let tmaiusculo=document.querySelector("input#tudomaiusculo")
let pmaiusculo=document.querySelector("input#primeiramaisculo")
let minusculo=document.querySelector("input#minusculo")
let quantcaracters=document.querySelector("input#quantcar")

tmaiusculo.addEventListener("click",maior)
minusculo.addEventListener("click",menor)
pmaiusculo.addEventListener("click",pmaior)
quantcaracters.addEventListener("click",qtscara)


let textesai=saidado


function maior(){
   
    if(entradado.value=="" && saidado.value==""){
        
        tmaiusculo.style.background="#e06b6b"
        window.alert("não foi reconhecido o texto")
        
    }else{


        textesai.innerHTML=`${entradado.value.toUpperCase()}`
        tmaiusculo.style.background="#6ddd6d"
    }

}

function pmaior(){
    
    if(entradado.value=="" && saidado.value==""){

        
        pmaiusculo.style.background="#e06b6b"
        window.alert("não foi reconhecido texto")

    }else{

        pmaiusculo.style.background="#6ddd6d"

        
        primaior=entradado.value[0].toUpperCase()+entradado.value.substr(1);

        textesai.innerHTML=`${primaior}`
    }
}


function menor(){
    if(entradado.value=="" && saidado.value==""){

       
        minusculo.style.background="#e06b6b"
        window.alert("não foi reconhedio o text")

    }else{

        textesai.innerHTML=`${entradado.value.toLowerCase()}`
        minusculo.style.background="#6ddd6d"
        
    }
}
function qtscara(){
    if(entradado.value=="" && saidado.value==""){
        
       
        quantcaracters.style.background="#e06b6b"
        window.alert("não foi reconhecido o texto")

    } else{

        textesai.innerHTML=`O texto digitado é ${entradado.value} E A SOMA DE CARACTERES COM ESPAÇO É ${entradado.value.length}`
        quantcaracters.style.background="#6ddd6d"

    }
}

