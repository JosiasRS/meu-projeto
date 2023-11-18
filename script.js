function abrirPopup() {
    var popup = window.open("", "popup", "width=400,height=500", "align: center");
    popup.document.write("<html><head><title>Calculadora</title></head><body></body></html>");
  
    var body = popup.document.body;
  
    var h1 = popup.document.createElement("h1");
    h1.innerHTML = "Calculando soma e média";
    body.appendChild(h1);

    var h3 = popup.document.createElement("h3");
    h3.innerHTML = "Digite os valores nos campos abaixo:";
    body.appendChild(h3);

    var vlr1 = popup.document.createElement("input");
    vlr1.setAttribute("type", "number");
    vlr1.setAttribute("id", "valor1");
    vlr1.setAttribute("placeholder", "Valor 1");
    body.appendChild(vlr1);
    body.appendChild(popup.document.createElement("br"));
  
    var vlr2 = popup.document.createElement("input");
    vlr2.setAttribute("type", "number");
    vlr2.setAttribute("id", "valor2");
    vlr2.setAttribute("placeholder", "Valor 2");
    body.appendChild(vlr2);
    body.appendChild(popup.document.createElement("br"));
  
    var vlr3 = popup.document.createElement("input");
    vlr3.setAttribute("type", "number");
    vlr3.setAttribute("id", "valor3");
    vlr3.setAttribute("placeholder", "Valor 3");
    body.appendChild(vlr3);
    body.appendChild(popup.document.createElement("br"));
  
    var calcularb= popup.document.createElement("button");
    calcularb.innerHTML = "Calcular";
    calcularb.onclick = function() {
      calcular();
    };
    body.appendChild(calcularb);
    body.appendChild(popup.document.createElement("br"));
  
    var resultadoDiv = popup.document.createElement("div");
    resultadoDiv.setAttribute("id", "resultado");
    body.appendChild(resultadoDiv);
  
    function calcular() {
      var vlr1 = parseFloat(popup.document.getElementById('valor1').value);
      var vlr2 = parseFloat(popup.document.getElementById('valor2').value);
      var vlr3 = parseFloat(popup.document.getElementById('valor3').value);
      var soma = vlr1 + vlr2 + vlr3;
      var media = soma / 3;
      var resultado = "Soma: " + soma + "<br>Média: " + media;
      popup.document.getElementById('resultado').innerHTML = resultado;
    }
  }
