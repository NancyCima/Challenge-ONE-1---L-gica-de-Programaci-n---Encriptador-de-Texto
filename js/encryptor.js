function encrypt() {
  var text = document.getElementById("text").value.toLowerCase();
  //g and m are added so that the replacement affects the text globally and on all the multiple lines it could have
  var encryptedText=text.replace(/e/gm, "enter");
  var encryptedText=encryptedText.replace(/o/gm, "ober");
  var encryptedText=encryptedText.replace(/i/gm, "imes");
  var encryptedText=encryptedText.replace(/a/gm, "ai");
  var encryptedText=encryptedText.replace(/u/gm, "ufat");

  document.getElementById("result-img").style.display="none";
  document.getElementById("result-text").style.display="none";
  document.getElementById("encrypted-text").innerHTML=encryptedText;
  document.getElementById("encrypted-text").style.display="block";
  document.getElementById("copy").style.display="block";
}

function decrypt() {
  var text = document.getElementById("text").value.toLowerCase();
  //g and m are added so that the replacement affects the text globally and on all the multiple lines it could have
  var decryptedText=text.replace(/enter/gm, "e");
  var decryptedText=decryptedText.replace(/ober/gm, "o");
  var decryptedText=decryptedText.replace(/imes/gm, "i");
  var decryptedText=decryptedText.replace(/ai/gm, "a");
  var decryptedText=decryptedText.replace(/ufat/gm, "u");

  document.getElementById("result-img").style.display="none";
  document.getElementById("result-text").style.display="none";
  document.getElementById("encrypted-text").innerHTML=decryptedText;
  document.getElementById("encrypted-text").style.display="block";
  document.getElementById("copy").style.display="block";
}

function copy() {
  var textToCopy=document.getElementById("encrypted-text").value;
  navigator.clipboard.writeText(textToCopy)
    .then(() => { alert('¡Copiado!') })
    .catch((error) => { alert('Hubo un error al copiar el texto :c') })
}