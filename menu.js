	var msg='	<ul id=tafrit1>'+
	'	<li><a href="contact.html" target="_top">צור קשר</a>'+
	'	<li><a href="gallery.html"  target="_top">גלריה</a>'+
	'	<li><a href="hilel.html"  target="_top">ארגוני סיוע</a>'+	
	'		<ul  class=submenu >'+
	'		<li><a href="hilel.html">הלל</a>'+
	'		<li><a href="leshinuy.html">יוצאים לשינוי</a>'+
	'		<li><a href="ubaharta.html">ובחרת</a></ul>'+
	'	<li><a href="exharedim.html"  target="_top">יציאה בשאלה</a>	'+
	'		<ul  class=submenu >'+
	'		<li><a href="exharedim.html">יציאה בשאלה</a>	'+
	'		<li><a href="reasons.html">גורמים</a>'+
	'		<li><a href="difficulties.html">קשיים</a></ul>'+
	'	<li><a href="haredim.html"  target="_top">חרדים</a>'+
	'		<ul  class=submenu >'+
	'		<li><a href="haredim.html">חרדים</a>'+
	'		<li><a href="litaim.html">ליטאים</a>'+
	'		<li><a href="hasidim.html">חסידים</a>'+
	'		<li><a href="sfaradim.html">ספרדים</a></ul>'+
	'	<li><a href="index.html"  target="_top">דף הבית</a>'+
	'		<ul  class=submenu >'+
	'		<li><a href="index.html">דף הבית</a>'+
	'		<li><a href="about.html">אודות</a></ul>'+
	'	</ul>'

    function mark() {
		var page=window.location.href ;// page url
		var obj=document.getElementById("tafrit1") ;
		var elements = obj.getElementsByTagName("a");// Array of links

		for (i=elements.length-1;  i> 0 ; i--) { //search form bottom to up
			var kuku=page.indexOf(elements[i].href) ;
			if (kuku >= 0 ) 
				break;	}
		elements[i].className="current_bold"

		var objli=elements[i].parentNode.parentNode ; // goes to UL
		if (objli.id=="tafrit1") {
			elements[i].parentNode.className="current_white";
			return	}  // page has no children
		document.getElementById("side").innerHTML=objli.innerHTML ;
		objli.parentNode.className = "current_white";  //page has children
	}
	function play() { 
            Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
            Galleria.run('.galleria');
        }
	 var rights='כל הזכויות שמורות ליאיר שור'
	 var title1='<h1><ins>חרדים ויציאה בשאלה</ins></h1>'
