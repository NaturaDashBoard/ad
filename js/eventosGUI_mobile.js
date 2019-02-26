function inicializarTagsPercentuais()
{
	soMobile = true;

	percentualCartoesPorFase.html( TAG_TABELA_PERC_FASE );
	percentualCartoesPorEtiqueta.html( TAG_TABELA_PERC_ETIQUETA );
	
	corpoTabPercentualPorFase = $( '#corpoTabPercentualPorFase' );
	corpoTabPercentualPorEtiqueta = $( '#corpoTabPercentualPorEtiqueta' );
}

function inicializarSelectOptions()
{
	selectProjeto.change( atualizarElementosTela );
	
	selectRelease.change( atualizarElementosTela );
}

function inicializarInputs()
{
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
