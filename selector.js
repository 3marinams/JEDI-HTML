function borrarvermell(){
	document.getElementById('vermell').style.display='none';
}

function borrarblau(){
	var v = document.getElementsByClassName('blau');
	for (i =0; i < v.length; ++i){
		v[i].style.display='none';
	}

}

function borrartot(){
	borrarvermell();
	borrarblau();
}