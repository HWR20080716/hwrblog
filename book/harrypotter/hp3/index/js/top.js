<!--
function KB_keepItInIE(theName,theWantTop,theWantLeft) {
theRealTop=parseInt(document.body.scrollTop)
theTrueTop=theWantTop+theRealTop
document.all[theName].style.top=theTrueTop
theRealLeft=parseInt(document.body.scrollLeft)
theTrueLeft=theWantLeft+theRealLeft
document.all[theName].style.left=theTrueLeft
}
function KB_keepItInNN(theName,theWantX,theWantY) {
theRealLay=document.layers[theName]
theBadX=self.pageYOffset
theBadY=self.pageXOffset
theRealX=theBadX+theWantX
theRealY=theBadY+theWantY
theRealLay.moveTo(theRealY,theRealX)
}
IE4=(document.all)?1:0
NN4=(document.layers)?1:0
if (IE4)
setInterval('KB_keepItInIE("KBStatic",0,0)',1)
if (NN4)
setInterval('KB_keepItInNN("KBStatic",0,0)',1)
//-->
