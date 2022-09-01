function CloseTxt() {
    document.getElementById("Txt").style.opacity = "0"; 
}

function ImageRefresh() {
    document.getElementById("Sigla").style.opacity ="1";
}


function srcChangeAcasa()    {   document.getElementById("Sigla").src = "res/sigla1.png"; }
function srcChangePanouri()  {   document.getElementById("Sigla").src = "res/sigla2.png"; }
function srcChangeMaterial() {   document.getElementById("Sigla").src = "res/sigla3.png"; }
function srcChangeAcoperis() {   document.getElementById("Sigla").src = "res/sigla4.png"; }



function ChangeImgSrcAcasa() {
    document.getElementById("Sigla").style.opacity ="0";
    setTimeout(srcChangeAcasa,1000);
    setTimeout(ImageRefresh,1000);
}

function ChangeImgSrcPanouri() {
    document.getElementById("Sigla").style.opacity ="0";
    setTimeout(srcChangePanouri,1000);
    setTimeout(ImageRefresh,1000);
}

function ChangeImgSrcMaterial() {
    document.getElementById("Sigla").style.opacity ="0";
    setTimeout(srcChangeMaterial,1000);
    setTimeout(ImageRefresh,1000);
}

function ChangeImgSrcAcoperis() {
    document.getElementById("Sigla").style.opacity ="0";
    setTimeout(srcChangeAcoperis,1000);
    setTimeout(ImageRefresh,1000);
}
