class Produs {
 constructor(nume,cantitate){
	this.name = nume;
	this.cantitate=cantitate;
 }
 show(){
	var info=" "+this.name+" "+this.cantitate;
	window.alert(info);
 }
 ret(){
	var info=" "+this.name+" "+this.cantitate;
	return info;
 }
}



function salvareDate() {
  let produs = new Produs(document.getElementById('numeprodus').value, document.getElementById('cantitate').value);
  localStorage.setItem('produs',produs.ret());
	
  
produs.show();
}

