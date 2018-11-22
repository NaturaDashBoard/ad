function atualizarElementosTela()
{
	var nomeProjeto = undefined;
	
	var valorSelecionadoProjeto = selectProjeto.val();
	
	if( valorSelecionadoProjeto != opcaoFiltroTodos )
	{
		nomeProjeto = valorSelecionadoProjeto;
	}
	
	var dataRelease = undefined;
	
	var valorSelecionadoRelease = selectRelease.val();
	
	if( valorSelecionadoRelease != opcaoFiltroTodos )
	{
		dataRelease = valorSelecionadoRelease;
	}
	
	atualizarFTRABAP( nomeProjeto, dataRelease );
	
	atualizarOTDABAP( nomeProjeto, dataRelease );
	
	atualizarFTRFUNC( nomeProjeto, dataRelease );
	
	atualizarOTDFUNC( nomeProjeto, dataRelease );
	
	atualizarQuantidadeSIRs( nomeProjeto, dataRelease );
	
	atualizarDisponibilidadeTimeABAP();
	
	atualizarPercentualCartoesPorFase( nomeProjeto, dataRelease );
	
	atualizarTotalHorasABAPEntregue( nomeProjeto, dataRelease );
	
	atualizarTotalHorasABAPBacklog( nomeProjeto, dataRelease );
	
	atualizarPercentualCartoesPorEtiqueta( nomeProjeto, dataRelease );
	
	atualizarFiltroProjeto();
	
	atualizarFiltroRelease();
}

function atualizarElementosTelaEDispararReqsAssinc()
{
	atualizarElementosTela();
	
	carregarAssincDadosTrello();
}

/*
function inicializarBotoes()
{
	buttonAtualizarDados.click( atualizarElementosTela );
}
*/

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

function carregarAssincDadosTrello()
{
	//carregarAssincCamposPersonalizadosGestaoDemandasNatura();
	carregarAssincCamposPersonalizadosQuadroTestesDashboardNatura();
	
	//carregarAssincCardsGestaoDemandasNatura();
	carregarAssincCardsQuadroTestesDashboardNatura();
	
	//carregarAssincListasGestaoDemandasNatura();
	carregarAssincListasQuadroTestesDashboardNatura();
	
	setTimeout( atualizarElementosTelaEDispararReqsAssinc, intervaloTempoEntreRequisicoesAssincronas );
}

function documentReady()
{
	inicializarInputs();
	
	carregarAssincDadosTrello()
}

$( document ).ready( documentReady );
