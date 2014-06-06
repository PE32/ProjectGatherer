 var fixed = false;		//variable détermine si le menue onglet est fixe ou flottant
 
 /*Fonction appeler lors du scoll*/  
$(document).scroll(function() {	
    if( $(this).scrollTop() > 110 ) {				// Se lance à partir de 115px de défilement
		if( !fixed ) {								// S'il est pas fixe on le rend fixe	
		fixed = true;
		$('#menu').css({position:'fixed', top:70});
		}
	} else {
		if( fixed ) {
		fixed = false;
		$('#menu').css({position:'relative', top:0}, 500);	//se remet bien au retour
		}
	}
});

/*Fait défiler une page jusqu'à l'onglet quand on clique dessus*/
	
function afficher(elem, id) {
	var liens = ['presentation', 'forum', 'diagramme', 'agenda', 'dropdoc', 'dispo', 'discussion','diaporama'];
	for (lien in liens) {
		$("#"+liens[lien]).hide();	//On les cache tous puis parce qu'on ne sait pas lequel est affiché en ce moment	
		$(".bouton[value="+liens[lien]+"]").removeClass('active');
	}
		
	$("#"+id).show();			//On affiche la page demandée
	$(".bouton[value="+id+"]").addClass('active');
	
	jQuery('html,body').animate({scrollTop:0},500,'swing',function(){	//anime le scrolltop pour le mettre en haut en 1000ms avec un effet swing
				window.location.hash = '#';
			});	
}

/*Créer un mode travail */
$("#work").click(function() {
	if($(this).hasClass("selected")){		
		$(this).removeClass("selected"),
		$("article").attr('contenteditable','false'),
		$("article").animate({
			width:'572'
			}, 800, "linear"),
		$("section").animate({
			width:'920px',
			}, 1000, "swing"),		
		$("#work").css({
			background:'green'
			}, 1000, "swing"),
		$("nav").fadeIn(1000),
		$(".case").delay(800).fadeIn(1000);
	}
	else {	
		$("nav").fadeOut(800),
		$(".case").fadeOut(800),
		$("section").animate({
			width:'1200px',
			}, 1000, "swing"),
		$("#work").css({
			background : 'red'
			}, 1000, "swing"),
		$("article").delay(800).animate({
			width:'920'
			}, 1000, "linear"),
		$("#work").addClass("selected"),
		$("article").attr('contenteditable','true');	//Rend les articles éditables
	}
});

/* zone de texte editable */
//Il faut réussir à mettre les themes et plug-in sur le server

/* Drag and Drop */

/* Diaporama */

$(".bouton[value=diaporama]").click(function() {
		$("#start").fadeIn(3000);
});

$("#start").click(function() {
	$(this).fadeOut(1000);
});

