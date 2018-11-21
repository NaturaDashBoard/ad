/* GET BOARD ACTIONS GESTÃO DEMANDAS NATURA */

function beforeSendGetBoardActionsGestaoDemandasNatura()
{
	console.log( 'Enviando Requisição AJAX para obter Actions do Board Gestão Demandas Natura' );
}

function doneGetBoardActionsGestaoDemandasNatura( data )
{
	boardActionsGestaoDemandasNatura = data;
	
	console.group( "boardActionsGestaoDemandasNatura" );
	console.log( boardActionsGestaoDemandasNatura );
	console.groupEnd( "boardActionsGestaoDemandasNatura" );		
}

function failGetBoardActionsGestaoDemandasNatura( jqXHR, textStatus, data )
{
	console.log( 'Ocorreu um Erro na Requisição AJAX para obter Actions do Board Gestão Demandas Natura' );
	
	console.group( "jqXHR" );
	console.log( jqXHR );
	console.groupEnd( "jqXHR" );
	
	console.group( "textStatus" );
	console.log( textStatus );
	console.groupEnd( "textStatus" );	
	
	console.group( "data" );
	console.log( data );
	console.groupEnd( "data" );			
}

/* GET BOARD ACTIONS QUADRO DE TESTES PARA DASHBOARD DA NATURA */

function beforeSendGetBoardActionsQuadroTestesDashboardNatura()
{
	console.log( 'Enviando Requisição AJAX para obter Actions do Board Quadro de Testes para Dashboard da Natura' );
}

function doneGetBoardActionsQuadroTestesDashboardNatura( data )
{
	boardActionsQuadroTestesDashboardNatura = data;
	
	console.group( "boardActionsQuadroTestesDashboardNatura" );
	console.log( boardActionsQuadroTestesDashboardNatura );
	console.groupEnd( "boardActionsQuadroTestesDashboardNatura" );		
}

function failGetBoardActionsQuadroTestesDashboardNatura( jqXHR, textStatus, data )
{
	console.log( 'Ocorreu um Erro na Requisição AJAX para obter Actions do Board Quadro de Testes para Dashboard da Natura' );
	
	console.group( "jqXHR" );
	console.log( jqXHR );
	console.groupEnd( "jqXHR" );
	
	console.group( "textStatus" );
	console.log( textStatus );
	console.groupEnd( "textStatus" );	
	
	console.group( "data" );
	console.log( data );
	console.groupEnd( "data" );			
}

/* GET CARD ACTIONS GESTÃO DEMANDAS NATURA */

function beforeSendGetCardActionsGestaoDemandasNatura()
{
	console.log( 'Enviando Requisição AJAX para obter Actions de Card do Board Gestão Demandas Natura' );	
}

function doneGetCardActionsGestaoDemandasNatura( data )
{
	cardActionsGestaoDemandasNatura = data;
	
	console.group( "cardActionsGestaoDemandasNatura" );
	console.log( cardActionsGestaoDemandasNatura );
	console.groupEnd( "cardActionsGestaoDemandasNatura" );
}

function failGetCardActionsGestaoDemandasNatura( jqXHR, textStatus, data )
{
	console.log( 'Ocorreu um Erro na Requisição AJAX para obter Actions de Card do Board Gestão Demandas Natura' );
	
	console.group( "jqXHR" );
	console.log( jqXHR );
	console.groupEnd( "jqXHR" );
	
	console.group( "textStatus" );
	console.log( textStatus );
	console.groupEnd( "textStatus" );	
	
	console.group( "data" );
	console.log( data );
	console.groupEnd( "data" );	
}

/* GET CARD ACTIONS QUADRO DE TESTES PARA DASHBOARD DA NATURA */

function beforeSendGetCardActionsQuadroTestesDashboardNatura()
{
	console.log( 'Enviando Requisição AJAX para obter Actions de Card do Board Quadro de Testes para Dashboard da Natura' );	
}

function doneGetCardActionsQuadroTestesDashboardNatura( data )
{
	cardActionsQuadroTestesDashboardNatura = data;
	
	console.group( "cardActionsQuadroTestesDashboardNatura" );
	console.log( cardActionsQuadroTestesDashboardNatura );
	console.groupEnd( "cardActionsQuadroTestesDashboardNatura" );
}

function failGetCardActionsQuadroTestesDashboardNatura( jqXHR, textStatus, data )
{
	console.log( 'Ocorreu um Erro na Requisição AJAX para obter Actions de Card do Board Quadro de Testes para Dashboard da Natura' );
	
	console.group( "jqXHR" );
	console.log( jqXHR );
	console.groupEnd( "jqXHR" );
	
	console.group( "textStatus" );
	console.log( textStatus );
	console.groupEnd( "textStatus" );	
	
	console.group( "data" );
	console.log( data );
	console.groupEnd( "data" );	
}

/* GET CAMPOS PERSONALIZADOS GESTÃO DEMANDAS NATURA */

function beforeSendGetCamposPersonalizadosGestaoDemandasNatura()
{
	console.log( 'Enviando Requisição AJAX para obter Campos Personalizados do Board Gestão Demandas Natura' );
}

function doneGetCamposPersonalizadosGestaoDemandasNatura( data )
{
	camposPersonalizadosGestaoDemandasNatura = data;
	
	console.group( "camposPersonalizadosGestaoDemandasNatura" );
	console.log( camposPersonalizadosGestaoDemandasNatura );
	console.groupEnd( "camposPersonalizadosGestaoDemandasNatura" );

	/*
	atualizarOTDABAP();
	atualizarOTDFUNC();
	atualizarDisponibilidadeTimeABAP();
	*/
}

function failGetCamposPersonalizadosGestaoDemandasNatura( jqXHR, textStatus, data )
{
	console.log( 'Ocorreu um Erro na Requisição AJAX para obter Campos Personalizados do Board Gestão Demandas Natura' );
	
	console.group( "jqXHR" );
	console.log( jqXHR );
	console.groupEnd( "jqXHR" );
	
	console.group( "textStatus" );
	console.log( textStatus );
	console.groupEnd( "textStatus" );	
	
	console.group( "data" );
	console.log( data );
	console.groupEnd( "data" );		
}

/* GET CAMPOS PERSONALIZADOS QUADRO DE TESTES PARA DASHBOARD DA NATURA */

function beforeSendGetCamposPersonalizadosQuadroTestesDashboardNatura()
{
	console.log( 'Enviando Requisição AJAX para obter Campos Personalizados do Board Quadro de Testes para Dashboard da Natura' );
}

function doneGetCamposPersonalizadosQuadroTestesDashboardNatura( data )
{
	camposPersonalizadosQuadroTestesDashboardNatura = data;
	
	console.group( "camposPersonalizadosQuadroTestesDashboardNatura" );
	console.log( camposPersonalizadosQuadroTestesDashboardNatura );
	console.groupEnd( "camposPersonalizadosQuadroTestesDashboardNatura" );
	
	/*
	atualizarOTDABAP();
	atualizarOTDFUNC();
	atualizarDisponibilidadeTimeABAP();
	*/
}

function failGetCamposPersonalizadosQuadroTestesDashboardNatura( jqXHR, textStatus, data )
{
	console.log( 'Ocorreu um Erro na Requisição AJAX para obter Campos Personalizados do Board Quadro de Testes para Dashboard da Natura' );
	
	console.group( "jqXHR" );
	console.log( jqXHR );
	console.groupEnd( "jqXHR" );
	
	console.group( "textStatus" );
	console.log( textStatus );
	console.groupEnd( "textStatus" );	
	
	console.group( "data" );
	console.log( data );
	console.groupEnd( "data" );		
}

/* GET CARDS GESTÃO DEMANDAS NATURA */

function beforeSendGetCardsGestaoDemandasNatura()
{
	console.log( 'Enviando Requisição AJAX para obter Cards do Board Gestão Demandas Natura' );	
}

function doneGetCardsGestaoDemandasNatura( data )
{
	cardsGestaoDemandasNatura = data;
	
	console.group( "cardsGestaoDemandasNatura" );
	console.log( cardsGestaoDemandasNatura );
	console.groupEnd( "cardsGestaoDemandasNatura" );
	
	/*
	atualizarFTRABAP();
	atualizarOTDABAP();
	atualizarFTRFUNC();
	atualizarOTDFUNC();
	atualizarQuantidadeSIRs();
	atualizarDisponibilidadeTimeABAP();
	atualizarPercentualCartoesPorFase();
	*/
}

function failGetCardsGestaoDemandasNatura( jqXHR, textStatus, data )
{
	console.log( 'Ocorreu um Erro na Requisição AJAX para obter Cards do Board Gestão Demandas Natura' );
	
	console.group( "jqXHR" );
	console.log( jqXHR );
	console.groupEnd( "jqXHR" );
	
	console.group( "textStatus" );
	console.log( textStatus );
	console.groupEnd( "textStatus" );	
	
	console.group( "data" );
	console.log( data );
	console.groupEnd( "data" );	
}

/* GET CARDS QUADRO DE TESTES PARA DASHBOARD DA NATURA */

function beforeSendGetCardsQuadroTestesDashboardNatura()
{
	console.log( 'Enviando Requisição AJAX para obter Cards do Board Quadro de Testes para Dashboard da Natura' );	
}

function doneGetCardsQuadroTestesDashboardNatura( data )
{
	cardsQuadroTestesDashboardNatura = data;
	
	console.group( "cardsQuadroTestesDashboardNatura" );
	console.log( cardsQuadroTestesDashboardNatura );
	console.groupEnd( "cardsQuadroTestesDashboardNatura" );
	
	/*
	atualizarFTRABAP();
	atualizarOTDABAP();
	atualizarFTRFUNC();
	atualizarOTDFUNC();
	atualizarQuantidadeSIRs();
	atualizarDisponibilidadeTimeABAP();
	atualizarPercentualCartoesPorFase();
	*/
}

function failGetCardsQuadroTestesDashboardNatura( jqXHR, textStatus, data )
{
	console.log( 'Ocorreu um Erro na Requisição AJAX para obter Cards do Board Quadro de Testes para Dashboard da Natura' );
	
	console.group( "jqXHR" );
	console.log( jqXHR );
	console.groupEnd( "jqXHR" );
	
	console.group( "textStatus" );
	console.log( textStatus );
	console.groupEnd( "textStatus" );	
	
	console.group( "data" );
	console.log( data );
	console.groupEnd( "data" );	
}

/* GET LISTAS GESTÃO DEMANDAS NATURA */

function beforeSendGetListasGestaoDemandasNatura()
{
	console.log( 'Enviando Requisição AJAX para obter Listas do Board Gestão Demandas Natura' );
}

function doneGetListasGestaoDemandasNatura( data )
{
	listasGestaoDemandasNatura = data;
	
	console.group( "listasGestaoDemandasNatura" );
	console.log( listasGestaoDemandasNatura );
	console.groupEnd( "listasGestaoDemandasNatura" );

	/*
	atualizarFTRABAP();
	atualizarOTDABAP();
	atualizarFTRFUNC();
	atualizarOTDFUNC();
	atualizarPercentualCartoesPorFase();
	*/
}

function failGetListasGestaoDemandasNatura( jqXHR, textStatus, data )
{
	console.log( 'Ocorreu um Erro na Requisição AJAX para obter Listas do Board Gestão Demandas Natura' );
	
	console.group( "jqXHR" );
	console.log( jqXHR );
	console.groupEnd( "jqXHR" );
	
	console.group( "textStatus" );
	console.log( textStatus );
	console.groupEnd( "textStatus" );	
	
	console.group( "data" );
	console.log( data );
	console.groupEnd( "data" );		
}

/* GET LISTAS QUADRO DE TESTES PARA DASHBOARD DA NATURA */

function beforeSendGetListasQuadroTestesDashboardNatura()
{
	console.log( 'Enviando Requisição AJAX para obter Listas do Board Quadro de Testes para Dashboard da Natura' );
}

function doneGetListasQuadroTestesDashboardNatura( data )
{
	listasQuadroTestesDashboardNatura = data;
	
	console.group( "listasQuadroTestesDashboardNatura" );
	console.log( listasQuadroTestesDashboardNatura );
	console.groupEnd( "listasQuadroTestesDashboardNatura" );

	/*
	atualizarFTRABAP();
	atualizarOTDABAP();
	atualizarFTRFUNC();
	atualizarOTDFUNC();
	atualizarPercentualCartoesPorFase();
	*/
}

function failGetListasQuadroTestesDashboardNatura( jqXHR, textStatus, data )
{
	console.log( 'Ocorreu um Erro na Requisição AJAX para obter Listas do Board Quadro de Testes para Dashboard da Natura' );
	
	console.group( "jqXHR" );
	console.log( jqXHR );
	console.groupEnd( "jqXHR" );
	
	console.group( "textStatus" );
	console.log( textStatus );
	console.groupEnd( "textStatus" );	
	
	console.group( "data" );
	console.log( data );
	console.groupEnd( "data" );	
}

/* GET CAMPOS PERSONALIZADOS DE CARD' */

function beforeSendGetCamposPersonalizadosCard()
{
	console.log( 'Enviando Requisição AJAX para obter Campos Personalizados de Card' );
}

function doneGetCamposPersonalizadosCard( data )
{
	camposPersonalizadosCard = data;
	
	console.group( "camposPersonalizadosCard" );
	console.log( camposPersonalizadosCard );
	console.groupEnd( "camposPersonalizadosCard" );		
}

function failGetCamposPersonalizadosCard( jqXHR, textStatus, data )
{
	console.log( 'Ocorreu um Erro na Requisição AJAX para obter Campos Personalizados de Card' );
	
	console.group( "jqXHR" );
	console.log( jqXHR );
	console.groupEnd( "jqXHR" );
	
	console.group( "textStatus" );
	console.log( textStatus );
	console.groupEnd( "textStatus" );	
	
	console.group( "data" );
	console.log( data );
	console.groupEnd( "data" );		
}

/* GET ANEXOS DE CARD' */

function beforeSendGetAnexosCard()
{
	console.log( 'Enviando Requisição AJAX para obter Anexos de Card' );
}

function doneGetAnexosCard( data )
{
	anexosCard = data;
	
	console.group( "anexosCard" );
	console.log( anexosCard );
	console.groupEnd( "anexosCard" );		
}

function failGetAnexosCard( jqXHR, textStatus, data )
{
	console.log( 'Ocorreu um Erro na Requisição AJAX para obter Anexos de Card' );
	
	console.group( "jqXHR" );
	console.log( jqXHR );
	console.groupEnd( "jqXHR" );
	
	console.group( "textStatus" );
	console.log( textStatus );
	console.groupEnd( "textStatus" );	
	
	console.group( "data" );
	console.log( data );
	console.groupEnd( "data" );		
}
