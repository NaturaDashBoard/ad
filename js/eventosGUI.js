function documentReady()
{
	inicializarInputs();
	
	//carregarAssincBoardActionsGestaoDemandasNatura();
	//carregarAssincBoardActionsQuadroTestesDashboardNatura();
	
	//carregarAssincCamposPersonalizadosGestaoDemandasNatura();
	carregarAssincCamposPersonalizadosQuadroTestesDashboardNatura();
	
	//carregarAssincCardsGestaoDemandasNatura();
	carregarAssincCardsQuadroTestesDashboardNatura();
	
	//carregarAssincListasGestaoDemandasNatura();
	carregarAssincListasQuadroTestesDashboardNatura();
}

function inicializarInputs()
{
	inicializarBotoes();
}

function inicializarBotoes()
{
	buttonAtualizarDados.click( atualizarDados );
}

function atualizarDados()
{
	atualizarFTRABAP();
	atualizarOTDABAP();
	atualizarFTRFUNC();
	atualizarOTDFUNC();
	atualizarQuantidadeSIRs();
	atualizarDisponibilidadeTimeABAP();
	atualizarPercentualCartoesPorFase();
}

$( document ).ready( documentReady );
