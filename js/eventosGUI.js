function atualizarElementosTela()
{
	var nomeProjeto = undefined;
	
	var valorSelecionado = selectProjeto.val();
	
	if( valorSelecionado != opcaoFiltroProjetoTodos )
	{
		nomeProjeto = valorSelecionado;
	}
	
	atualizarFTRABAP( nomeProjeto );
	
	atualizarOTDABAP( nomeProjeto );
	
	atualizarFTRFUNC( nomeProjeto );
	
	atualizarOTDFUNC( nomeProjeto );
	
	atualizarQuantidadeSIRs( nomeProjeto );
	
	atualizarDisponibilidadeTimeABAP();
	
	atualizarPercentualCartoesPorFase( nomeProjeto );
	
	atualizarTotalHorasABAPEntregue( nomeProjeto );
	
	atualizarTotalHorasABAPBacklog( nomeProjeto );
	
	atualizarPercentualCartoesPorEtiqueta( nomeProjeto );
	
	atualizarFiltroProjeto();
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
