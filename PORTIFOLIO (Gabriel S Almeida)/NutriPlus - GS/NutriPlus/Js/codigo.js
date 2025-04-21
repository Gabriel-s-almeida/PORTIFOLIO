function testa_form(){

    var paciente = document.forms["nutriplus"]["paciente"].value;
    
    var cpf = document.forms["nutriplus"]["cpf"].value;

    var telefone= document.forms["nutriplus"]["telefone"].value;


        if (paciente == ""){
            alert("Nome do paciente precisa ser informado.");
            
            document.forms["nutriplus"]["paciente"].focus();

            return false;
        }

        if (cpf == ""){
            alert("CPF do paciente precisa ser informado.");
            
            document.forms["nutriplus"]["cpf"].focus();

            return false;
        }

        if (telefone == ""){
            alert("O Telefone do paciente precisa ser informado")

            document.forms["nutriplus"]["telefone"].focus();

            return false;
        }

    return true;
}

function mascara(input) {
  
    var v = input.value;
    
     if (isNaN(v[v.length - 1])) {
      
      input.value = v.substring(0, v.length - 1);
    
     return;
    }
  
    var tipo = input.getAttribute("data-mask");
  
     if (tipo === "cpf") {
      
      input.setAttribute("maxlength", "14");
     
     if (v.length === 3 || v.length === 7) input.value += ".";
     if (v.length === 11) input.value += "-";
    }
    
     if (tipo === "cep") {
      
      input.setAttribute("maxlength", "9");
      
     if (v.length === 5) input.value += "-";
    }
    
     if (tipo === "telefone") {
      
      input.setAttribute("maxlength", "15");
      
     if (v.length === 1) input.value = "(" + v;
      
     if (v.length === 3) input.value += ") ";
      
     if (v.length === 10) input.value += "-";
    }
  }