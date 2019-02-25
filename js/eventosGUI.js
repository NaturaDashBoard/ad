/*
function atualizarElementosTelaEDispararReqsAssinc()
{
	atualizarElementosTela();
	
	carregarAssincDadosTrello();
}
*/

/*
function inicializarBotoes()
{
	buttonAtualizarDados.click( atualizarElementosTela );
}
*/

function inicializarTagsPercentuais()
{
	if( soMobile )
	{
		percentualCartoesPorFase.html( TAG_TABELA_PERC_FASE );
		percentualCartoesPorEtiqueta.html( TAG_TABELA_PERC_ETIQUETA );
		
		corpoTabPercentualPorFase = $( '#corpoTabPercentualPorFase' );
		corpoTabPercentualPorEtiqueta = $( '#corpoTabPercentualPorEtiqueta' );		
	}
	else
	{
		percentualCartoesPorFase.html( TAG_CANVAS_PERC_FASE );
		percentualCartoesPorEtiqueta.html( TAG_CANVAS_PERC_ETIQUETA );
		
		grafPercentualCartoesPorFase = $( '#grafPercentualCartoesPorFase' );
		grafPercentualCartoesPorEtiqueta = $( '#grafPercentualCartoesPorEtiqueta' );
	}
}

function inicializarSelectOptions()
{
	selectProjeto.change( atualizarElementosTela );
	
	selectRelease.change( atualizarElementosTela );
}

function inicializarInputs()
{
	//inicializarBotoes();
	
	inicializarSelectOptions();
}

function inicializarCarrosselListaPendencias()
{
	carrosselPendencias.on
	(
		'slid.bs.carousel',
		function( direction )
		{
			if( direction.from > direction.to )
			{
				atualizarItensCarrosselPendencias();
			}
		}
	);
}

function carregarAssincDadosTrello()
{
	carregarAssincCamposPersonalizados( idBoardDadosCarregados );
	
	//carregarAssincCards( idBoardDadosCarregados );
	
	//carregarAssincListas( idBoardDadosCarregados );
	
	//setTimeout( atualizarElementosTelaEDispararReqsAssinc, INTERVALO_TEMPO_REQUISICOES_ASSINC );
}

function documentReady()
{
	soMobile = validarSistemaOperacionalMobile();
	
	inicializarTagsPercentuais();
	
	inicializarInputs();
	
	inicializarCarrosselListaPendencias();
	
	carregarAssincDadosTrello();
	
	setTimeout
	(
		atualizarItensCarrosselPendencias,
		TEMPO_PRIMEIRA_ATUALIZACAO_CARROSSEL_PENDENCIAS
	);
}

$( document ).ready( documentReady );
