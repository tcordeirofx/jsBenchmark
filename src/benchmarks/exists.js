const prepArr = [
	'a', 'e', 'o', 'ao', 
	'as', 'os', 'aos', 
	'à', 'às', 
	'de', 'do', 'da', 'dos', 'das', 
	'em', 'no', 'na', 'nos', 'nas', 
	'por', 'pelo', 'pela', 'pelos', 'pelas', 
	'um', 'uma', 'uns', 'umas', 
	'dum', 'duma', 'duns', 'dumas', 
	'num', 'numa', 'nuns', 'numas'
];

const prepObj = {
	'a':true, 'e':true, 'o':true, 'ao':true, 
	'as':true, 'os':true, 'aos':true, 
	'à':true, 'às':true, 
	'de':true, 'do':true, 'da':true, 'dos':true, 'das':true, 
	'em':true, 'no':true, 'na':true, 'nos':true, 'nas':true, 
	'por':true, 'pelo':true, 'pela':true, 'pelos':true, 'pelas':true, 
	'um':true, 'uma':true, 'uns':true, 'umas':true, 
	'dum':true, 'duma':true, 'duns':true, 'dumas':true, 
	'num':true, 'numa':true, 'nuns':true, 'numas':true
};

export function existArrayMode(item) {
    return !!prepArr.indexOf(item);
}

export function existObjectMode(item){
  return !!prepObj[item];
}