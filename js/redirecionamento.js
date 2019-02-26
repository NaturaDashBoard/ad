/* CONSTANTES */
const URL_HOME 		  = 'home.html';
const URL_HOME_MOBILE = 'home_mobile.html';

const SO_ANDROID 	= 'Android';
const SO_IOS_IPHONE = 'iPhone';

/* FUNÇÕES AUXILIARES */
function validarSistemaOperacionalMobile()
{
	var osMobile = false;
	
	var appVersionString = navigator.appVersion.toString();
	
	if
	(
		appVersionString.includes( SO_ANDROID )
		|| appVersionString.includes( SO_IOS_IPHONE )
	)
	{
		osMobile = true;
	}
	
	return osMobile;
}

/* PONTO DE ENTRADA */
function documentReady()
{
	if( validarSistemaOperacionalMobile() )
	{
		window.location.replace( URL_HOME_MOBILE );
	}
	else
	{
		window.location.replace( URL_HOME );
	}
}

/* DEFININDO A FUNÇÃO DE PONTO DE ENTRADA */
$( document ).ready( documentReady );
