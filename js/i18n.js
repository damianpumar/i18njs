document.addEventListener("DOMContentLoaded", function(event) { 
  initializeComponents();
});

function initialize(){
	var lang = navigator.language.split('-')[0];
	translate(lang);
	$(".loader").fadeOut("slow");
	$("body").finish();

	$('.translate').click(function () {
		var lang = $(this).attr('id');
		translate(lang);
	});
}

function translate(lang) {
	showTranslateAllButtons();
	hideTranslateButtonApply(lang);
	animateBody();
	applyTranslations(lang);
};

function showTranslateAllButtons() {
	$('.translate').each(function (index, element) {
		this.style.display = 'block';
	});
};

function hideTranslateButtonApply(lang) {
    document.getElementById(lang).style.display='none';
};

function animateBody() {
	$('body').css("display", "none");
	$('body').fadeIn(1000);
};

function applyTranslations(lang){
	$('.lang').each(function (index, element) {
		$(this).text(languages[lang][$(this).attr('key')])
	});
}

function initializeComponents(){
	loadJQuery();
	loadCSS();
}

function loadJQuery(){
	//Jquery
    var script = document.createElement("script");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = loadTranslations;
    document.getElementsByTagName("head")[0].appendChild(script);
}

function loadCSS(){
    //CSS
    var link = document.createElement( "link" );
	link.href = "css/i18n.css"
	link.type = "text/css";
	link.rel = "stylesheet";
	document.getElementsByTagName("head")[0].appendChild(link);
}

function loadTranslations(){
	//Js Translations
    var script = document.createElement("script");
    script.src = 'js/translation.js';
    script.type = 'text/javascript';
    script.onload = initialize;
    document.getElementsByTagName("head")[0].appendChild(script);
}