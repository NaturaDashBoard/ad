function atualizarElementosTela()
{
	var nomeProjeto = undefined;
	
	var valorSelecionadoProjeto = selectProjeto.val();
	
	if( valorSelecionadoProjeto != OPCAO_FILTRO_TODOS )
	{
		nomeProjeto = valorSelecionadoProjeto;
	}
	
	var dataRelease = undefined;
	
	var valorSelecionadoRelease = selectRelease.val();
	
	if( valorSelecionadoRelease != OPCAO_FILTRO_TODOS )
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
	
	atualizarItensCarrosselPendencias( nomeProjeto, dataRelease )
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
	
	setTimeout( atualizarElementosTelaEDispararReqsAssinc, INTERVALO_TEMPO_REQUISICOES_ASSINC );
}

function documentReady()
{
	inicializarInputs();
	
	carregarAssincDadosTrello()
}

$( document ).ready( documentReady );
