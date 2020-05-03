function isStorageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
};

function openNav() {
	var $StorageAvailable = isStorageAvailable('localStorage');
	if ($StorageAvailable != true) {
		console.warn("[docnavwiki] localStorage seem to be not available. no open/close state store: {",$StorageAvailable,"}");
	}
	if ( $StorageAvailable) {
		try {
			localStorage.setItem('sidebar','open');
		} catch (e){
			console.error("something went wrong when trying to access local storage : {",e,"}");
		}
	}
	document.getElementById("navbar").style.visibility = "visible";
	document.getElementById("main").style.left = "18em";
	document.getElementById("openbtn").style.visibility = "hidden";
}

function closeNav() {
	var $StorageAvailable = isStorageAvailable('localStorage');
	if ($StorageAvailable != true) {
		console.warn("[docnavwiki] localStorage seem to be not available. no open/close state store: {",$StorageAvailable,"}");
	}
	if ( $StorageAvailable) {
		try {
			localStorage.setItem('sidebar','closed');
		} catch (e){
			console.error("something went wrong when trying to access local storage : {",e,"}");
		}
	}
	document.getElementById("navbar").style.visibility = "hidden";
	document.getElementById("main").style.left = "0";
	document.getElementById("openbtn").style.visibility = "unset";
	
}

