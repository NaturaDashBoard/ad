function inicializarTagsPercentuais()
{
	soMobile = false;

	percentualCartoesPorFase.html( TAG_CANVAS_PERC_FASE );
	percentualCartoesPorEtiqueta.html( TAG_CANVAS_PERC_ETIQUETA );
	
	grafPercentualCartoesPorFase = $( '#grafPercentualCartoesPorFase' );
	grafPercentualCartoesPorEtiqueta = $( '#grafPercentualCartoesPorEtiqueta' );
}

function inicializarBotoes()
{
	botaoIrParaRelatorio.click
	(
		function ()
		{
			window.location.replace( URL_RELATORIO_CARDS_TRELLO );
		}
	);
}

function inicializarTextAreas()
{
	campoTextoMes[0].oninput = atualizarElementosTela;
	campoTextoAno[0].oninput = atualizarElementosTela;
}

function inicializarSelectOptions()
{
	selectProjeto.change( atualizarElementosTela );
	
	selectRelease.change( atualizarElementosTela );
}

function inicializarInputs()
{
	inicializarBotoes();
	
	inicializarTextAreas();
	
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
}

function documentReady()
{
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
