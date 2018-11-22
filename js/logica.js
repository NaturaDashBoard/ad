/* CARREGAMENTOS DE DADOS DE FORMA SÍNCRONA */

// Gestão Demandas Natura

function carregarSincCardsGestaoDemandasNatura()
{
	$.ajax( configsReqSincGetCardsGestaoDemandasNatura )
		.done( doneGetCardsGestaoDemandasNatura )
		.fail( failGetCardsGestaoDemandasNatura );
}

// Quadro de Testes para Dashboard da Natura

function carregarSincCardActionsQuadroTestesDashboardNatura( idCard )
{
	$.ajax( obterConfigsReqSincGetCardActions( idCard ) )
		.done( doneGetCardActionsQuadroTestesDashboardNatura )
		.fail( failGetCardActionsQuadroTestesDashboardNatura );
}

// Outros

function carregarSincCamposPersonalizadosCard( idCard )
{
	$.ajax( obterConfigsReqSincGetCamposPersonalizadosCard( idCard ) )
		.done( doneGetCamposPersonalizadosCard )
		.fail( failGetCamposPersonalizadosCard );
}

function carregarSincAnexosCard( idCard )
{
	$.ajax( obterConfigsReqSincGetAnexosCard( idCard ) )
		.done( doneGetAnexosCard )
		.fail( failGetAnexosCard );
}

/* CARREGAMENTOS DE DADOS DE FORMA ASSÍNCRONA */

// Gestão Demandas Natura

function carregarAssincBoardActionsGestaoDemandasNatura()
{
	$.ajax( configsReqAssincGetBoardActionsGestaoDemandasNatura )
		.done( doneGetBoardActionsGestaoDemandasNatura )
		.fail( failGetBoardActionsGestaoDemandasNatura );
}

function carregarAssincCamposPersonalizadosGestaoDemandasNatura()
{
	$.ajax( configsReqAssincGetCamposPersonalizadosGestaoDemandasNatura )
		.done( doneGetCamposPersonalizadosGestaoDemandasNatura )
		.fail( failGetCamposPersonalizadosGestaoDemandasNatura );	
}

function carregarAssincCardsGestaoDemandasNatura()
{
	$.ajax( configsReqAssincGetCardsGestaoDemandasNatura )
		.done( doneGetCardsGestaoDemandasNatura )
		.fail( failGetCardsGestaoDemandasNatura );
}

function carregarAssincListasGestaoDemandasNatura()
{
	$.ajax( configsReqAssincGetListasGestaoDemandasNatura )
		.done( doneGetListasGestaoDemandasNatura )
		.fail( failGetListasGestaoDemandasNatura );
}

// Quadro de Testes para Dashboard da Natura

function carregarAssincBoardActionsQuadroTestesDashboardNatura()
{
	$.ajax( configsReqAssincGetBoardActionsQuadroTestesDashboardNatura )
		.done( doneGetBoardActionsQuadroTestesDashboardNatura )
		.fail( failGetBoardActionsQuadroTestesDashboardNatura );
}

function carregarAssincCamposPersonalizadosQuadroTestesDashboardNatura()
{
	$.ajax( configsReqAssincGetCamposPersonalizadosQuadroTestesDashboardNatura )
		.done( doneGetCamposPersonalizadosQuadroTestesDashboardNatura )
		.fail( failGetCamposPersonalizadosQuadroTestesDashboardNatura );	
}

function carregarAssincCardsQuadroTestesDashboardNatura()
{
	$.ajax( configsReqAssincGetCardsQuadroTestesDashboardNatura )
		.done( doneGetCardsQuadroTestesDashboardNatura)
		.fail( failGetCardsQuadroTestesDashboardNatura );
}

function carregarAssincListasQuadroTestesDashboardNatura()
{
	$.ajax( configsReqAssincGetListasQuadroTestesDashboardNatura )
		.done( doneGetListasQuadroTestesDashboardNatura )
		.fail( failGetListasQuadroTestesDashboardNatura );
}

/* ATUALIZAÇÃO DE ELEMENTOS DE TELA */

function atualizarFTRABAP( nomeProjeto, dataRelease )
{	
	var cards = obterCardsPorProjeto( nomeProjeto, cardsQuadroTestesDashboardNatura, camposPersonalizadosQuadroTestesDashboardNatura );
	
	cards = obterCardsPorRelease( dataRelease, cards, camposPersonalizadosQuadroTestesDashboardNatura );

	var idListaEntregue = obterIDLista( NOME_LISTA_ENTREGUE, listasQuadroTestesDashboardNatura );
	
	var quantidadeTicketsFDFMListaEntregue = obterQuantidadeTicketsFDFMLista( idListaEntregue, cards );
	
	var quantidadeTicketsFTRABAPListaEntregue = obterQuantidadeTicketsFTRABAPLista( idListaEntregue, cards );
	
	var percentualTicketsFTRABAPListaEntregue = obterPercentual( quantidadeTicketsFTRABAPListaEntregue, quantidadeTicketsFDFMListaEntregue );
	
	var percentualTicketsFTRABAPListaEntregueArredondado = Math.round( percentualTicketsFTRABAPListaEntregue );
	
	ftrABAP.html( percentualTicketsFTRABAPListaEntregueArredondado.toString() + '%' );
}

function atualizarOTDABAP( nomeProjeto, dataRelease )
{
	var cards = obterCardsPorProjeto( nomeProjeto, cardsQuadroTestesDashboardNatura, camposPersonalizadosQuadroTestesDashboardNatura );
	
	cards = obterCardsPorRelease( dataRelease, cards, camposPersonalizadosQuadroTestesDashboardNatura );
	
	var idListaEntregue = obterIDLista( NOME_LISTA_ENTREGUE, listasQuadroTestesDashboardNatura );
	
	var quantidadeTicketsFDFMListaEntregue = obterQuantidadeTicketsFDFMLista( idListaEntregue, cards );
	
	var quantidadeTicketsOTDABAPListaEntregue = obterQuantidadeTicketsOTDABAPLista( idListaEntregue, cards, camposPersonalizadosQuadroTestesDashboardNatura );
	
	var percentualTicketsOTDABAPListaEntregue = obterPercentual( quantidadeTicketsOTDABAPListaEntregue, quantidadeTicketsFDFMListaEntregue );
	
	var percentualTicketsOTDABAPListaEntregueArredondado = Math.round( percentualTicketsOTDABAPListaEntregue );
	
	otdABAP.html( percentualTicketsOTDABAPListaEntregueArredondado.toString() + '%' );
}

function atualizarFTRFUNC( nomeProjeto, dataRelease )
{
	var cards = obterCardsPorProjeto( nomeProjeto, cardsQuadroTestesDashboardNatura, camposPersonalizadosQuadroTestesDashboardNatura );
	
	cards = obterCardsPorRelease( dataRelease, cards, camposPersonalizadosQuadroTestesDashboardNatura );
	
	var idListaEntregue = obterIDLista( NOME_LISTA_ENTREGUE, listasQuadroTestesDashboardNatura );
	
	var quantidadeTicketsFDFMListaEntregue = obterQuantidadeTicketsFDFMLista( idListaEntregue, cards );
	
	var quantidadeTicketsFTRFUNCListaEntregue = obterQuantidadeTicketsFTRFUNCLista( idListaEntregue, cards );
	
	var percentualTicketsFTRFUNCListaEntregue = obterPercentual( quantidadeTicketsFTRFUNCListaEntregue, quantidadeTicketsFDFMListaEntregue );
	
	var percentualTicketsFTRFUNCListaEntregueArredondado = Math.round( percentualTicketsFTRFUNCListaEntregue );
	
	ftrFUNC.html( percentualTicketsFTRFUNCListaEntregueArredondado.toString() + '%' );		
}

function atualizarOTDFUNC( nomeProjeto, dataRelease )
{
	var cards = obterCardsPorProjeto( nomeProjeto, cardsQuadroTestesDashboardNatura, camposPersonalizadosQuadroTestesDashboardNatura );
	
	cards = obterCardsPorRelease( dataRelease, cards, camposPersonalizadosQuadroTestesDashboardNatura );
	
	var idListaEntregue = obterIDLista( NOME_LISTA_ENTREGUE, listasQuadroTestesDashboardNatura );
	
	var quantidadeTicketsFDFMListaEntregue = obterQuantidadeTicketsFDFMLista( idListaEntregue, cards );
	
	var quantidadeTicketsOTDFUNCListaEntregue = obterQuantidadeTicketsOTDFUNCLista( idListaEntregue, cards, camposPersonalizadosQuadroTestesDashboardNatura );
	
	var percentualTicketsOTDFUNCListaEntregue = obterPercentual( quantidadeTicketsOTDFUNCListaEntregue, quantidadeTicketsFDFMListaEntregue );
	
	var percentualTicketsOTDFUNCListaEntregueArredondado = Math.round( percentualTicketsOTDFUNCListaEntregue );
	
	otdFUNC.html( percentualTicketsOTDFUNCListaEntregueArredondado.toString() + '%' );		
}

function atualizarQuantidadeSIRsErro( cards )
{
	var quantidadeSIRsErro = obterQuantidadeSIRsErro( cards );
	
	sirErro.html( quantidadeSIRsErro );
}

function atualizarQuantidadeSIRsFM( cards )
{
	var quantidadeSIRsFM = obterQuantidadeSIRsFM( cards );
	
	sirFM.html( quantidadeSIRsFM );	
}

function atualizarQuantidadeSIRs( nomeProjeto, dataRelease )
{
	var cards = obterCardsPorProjeto( nomeProjeto, cardsQuadroTestesDashboardNatura, camposPersonalizadosQuadroTestesDashboardNatura );
	
	cards = obterCardsPorRelease( dataRelease, cards, camposPersonalizadosQuadroTestesDashboardNatura );
	
	atualizarQuantidadeSIRsErro( cards );
	atualizarQuantidadeSIRsFM( cards );
}

function atualizarDisponibilidadeTimeABAP()
{
	disponibilidadeTimeABAP.html
	(
		obterTimelineDisponibilidadeTimeABAP
		(
			cardsQuadroTestesDashboardNatura,
			camposPersonalizadosQuadroTestesDashboardNatura,
			listasQuadroTestesDashboardNatura
		)
	);
}

function atualizarPercentualCartoesPorFase( nomeProjeto, dataRelease )
{
	var cards = obterCardsPorProjeto( nomeProjeto, cardsQuadroTestesDashboardNatura, camposPersonalizadosQuadroTestesDashboardNatura );
	
	cards = obterCardsPorRelease( dataRelease, cards, camposPersonalizadosQuadroTestesDashboardNatura );
	
	var percentualCardsListaBacklogDemandas = obterPercentualCardsLista( NOME_LISTA_BACKLOG_DEMANDAS, listasQuadroTestesDashboardNatura, cards );
	
	var percentualCardsListaBacklogSIR = obterPercentualCardsLista( NOME_LISTA_BACKLOG_SIR, listasQuadroTestesDashboardNatura, cards );
	
	var percentualCardsListaEmAtendimento = obterPercentualCardsLista( NOME_LISTA_EM_ATENDIMENTO, listasQuadroTestesDashboardNatura, cards );
	
	var percentualCardsListaPendenciasReprovados = obterPercentualCardsLista( NOME_LISTA_PENDENCIAS_REPROVADOS, listasQuadroTestesDashboardNatura, cards );
	
	var percentualCardsListaEmRevisao = obterPercentualCardsLista( NOME_LISTA_EM_REVISAO, listasQuadroTestesDashboardNatura, cards );
	
	var percentualCardsListaEntregue = obterPercentualCardsLista( NOME_LISTA_ENTREGUE, listasQuadroTestesDashboardNatura, cards );
	
	var dadosDataSetGrafico =
	[
		roundNumber( percentualCardsListaBacklogDemandas, 2 ),
		roundNumber( percentualCardsListaBacklogSIR, 2 ),
		roundNumber( percentualCardsListaEmAtendimento, 2 ),
		roundNumber( percentualCardsListaPendenciasReprovados, 2 ),
		roundNumber( percentualCardsListaEmRevisao, 2 ),
		roundNumber( percentualCardsListaEntregue, 2 )
	];
	
	if( graficoPercentualCartoesPorFase == undefined )
	{
		var labelsGrafico = 
		[
			NOME_LISTA_BACKLOG_DEMANDAS,
			NOME_LISTA_BACKLOG_SIR,
			NOME_LISTA_EM_ATENDIMENTO,
			NOME_LISTA_PENDENCIAS_REPROVADOS,
			NOME_LISTA_EM_REVISAO,
			NOME_LISTA_ENTREGUE
		];
		
		var dadosGrafico =
		{
			datasets: 
			[
				{
					data: dadosDataSetGrafico,
					backgroundColor: CORES_GRAFICO_PERCENTUAL_CARTOES_POR_FASE,
					label: TITULO_GRAFICO_PERCENTUAL_CARTOES_POR_FASE
				}
			],
			labels: labelsGrafico
		};
		
		var opcoesGrafico = 
		{
			title:
			{
				display: true,
				text: TITULO_GRAFICO_PERCENTUAL_CARTOES_POR_FASE
			},
			legend:
			{
				position: POSICAO_LEGENDA_GRAFICO_ESQUERDA,
			},
			responsive: true
		};
		
		var configsGrafico =
		{
			type: TIPO_GRAFICO_DOUGHNUT,
			data: dadosGrafico,
			options: opcoesGrafico
		};

		var contextGrafico = grafPercentualCartoesPorFase.get(0).getContext( TIPO_CONTEXT_2D );
		
		graficoPercentualCartoesPorFase = new Chart( contextGrafico, configsGrafico );
	}
	else
	{
		graficoPercentualCartoesPorFase.config.data.datasets[0].data = dadosDataSetGrafico;
		
		graficoPercentualCartoesPorFase.update();
	}
}

function atualizarTotalHorasABAPEntregue( nomeProjeto, dataRelease )
{
	var cards = obterCardsPorProjeto( nomeProjeto, cardsQuadroTestesDashboardNatura, camposPersonalizadosQuadroTestesDashboardNatura );
	
	cards = obterCardsPorRelease( dataRelease, cards, camposPersonalizadosQuadroTestesDashboardNatura );
	
	totalHorasABAPEntregue.html
	(
		obterQuantidadeHorasEntregueTicketsFDFM
		(
			cards,
			camposPersonalizadosQuadroTestesDashboardNatura,
			listasQuadroTestesDashboardNatura
		)
	);
}

function atualizarTotalHorasABAPBacklog( nomeProjeto, dataRelease )
{
	var cards = obterCardsPorProjeto( nomeProjeto, cardsQuadroTestesDashboardNatura, camposPersonalizadosQuadroTestesDashboardNatura );
	
	cards = obterCardsPorRelease( dataRelease, cards, camposPersonalizadosQuadroTestesDashboardNatura );
	
	totalHorasABAPBacklog.html
	(
		obterQuantidadeHorasBacklogTicketsFDFM
		(
			cards,
			camposPersonalizadosQuadroTestesDashboardNatura,
			listasQuadroTestesDashboardNatura
		)
	);
}

function atualizarPercentualCartoesPorEtiqueta( nomeProjeto, dataRelease )
{
	var cards = obterCardsPorProjeto( nomeProjeto, cardsQuadroTestesDashboardNatura, camposPersonalizadosQuadroTestesDashboardNatura );
	
	cards = obterCardsPorRelease( dataRelease, cards, camposPersonalizadosQuadroTestesDashboardNatura );
	
	var percentualCardsEtiquetaCCM = obterPercentualCardsPorEtiqueta( NOME_LABEL_CCM, cards );
	
	var percentualCardsEtiquetaDebug = obterPercentualCardsPorEtiqueta( NOME_LABEL_DEBUG, cards );
	
	var percentualCardsEtiquetaFD = obterPercentualCardsPorEtiqueta( NOME_LABEL_FD, cards );
	
	var percentualCardsEtiquetaSmallEnhancement = obterPercentualCardsPorEtiqueta( NOME_LABEL_SMALL_ENHANCEMENT, cards );
	
	var percentualCardsEtiquetaEstimativa = obterPercentualCardsPorEtiqueta( NOME_LABEL_ESTIMATIVA, cards );
	
	var percentualCardsEtiquetaSIRFM = obterPercentualCardsPorEtiqueta( NOME_LABEL_SIR_FM, cards );

	var percentualCardsEtiquetaFM = obterPercentualCardsPorEtiqueta( NOME_LABEL_FM, cards );
	
	var percentualCardsEtiquetaSIRERRO = obterPercentualCardsPorEtiqueta( NOME_LABEL_SIR_ERRO, cards );
	
	var dadosDataSetGrafico =
	[
		roundNumber( percentualCardsEtiquetaCCM, 2 ),
		roundNumber( percentualCardsEtiquetaDebug, 2 ),
		roundNumber( percentualCardsEtiquetaFD, 2 ),
		roundNumber( percentualCardsEtiquetaSmallEnhancement, 2 ),
		roundNumber( percentualCardsEtiquetaEstimativa, 2 ),
		roundNumber( percentualCardsEtiquetaSIRFM, 2 ),
		roundNumber( percentualCardsEtiquetaFM, 2 ),
		roundNumber( percentualCardsEtiquetaSIRERRO, 2 )
	];
	
	if( graficoPercentualCartoesPorEtiqueta == undefined )
	{
		var labelsGrafico = 
		[
			NOME_LABEL_CCM,
			NOME_LABEL_DEBUG,
			NOME_LABEL_FD,
			NOME_LABEL_SMALL_ENHANCEMENT.substr( 0, 12 ) + '.',
			NOME_LABEL_ESTIMATIVA,
			NOME_LABEL_SIR_FM,
			NOME_LABEL_FM,
			NOME_LABEL_SIR_ERRO
		];
		
		var dadosGrafico =
		{
			datasets: 
			[
				{
					data: dadosDataSetGrafico,
					backgroundColor: CORES_GRAFICO_PERCENTUAL_CARTOES_POR_ETIQUETA,
					label: TITULO_GRAFICO_PERCENTUAL_CARTOES_POR_ETIQUETA
				}
			],
			labels: labelsGrafico
		};
		
		var opcoesGrafico = 
		{
			title:
			{
				display: true,
				text: TITULO_GRAFICO_PERCENTUAL_CARTOES_POR_ETIQUETA
			},
			legend:
			{
				position: POSICAO_LEGENDA_GRAFICO_TOPO,
			},
			responsive: true
		};
		
		var configsGrafico =
		{
			type: TIPO_GRAFICO_BAR,
			data: dadosGrafico,
			options: opcoesGrafico
		};

		var contextGrafico = grafPercentualCartoesPorEtiqueta.get(0).getContext( TIPO_CONTEXT_2D );
		
		graficoPercentualCartoesPorEtiqueta = new Chart( contextGrafico, configsGrafico );
	}
	else
	{
		graficoPercentualCartoesPorEtiqueta.config.data.datasets[0].data = dadosDataSetGrafico;
		
		graficoPercentualCartoesPorEtiqueta.update();
	}
}

function atualizarFiltroProjeto()
{
	var valorSelecionado = selectProjeto.val();
	
	selectProjeto.html( obterProjetosParaFiltro( camposPersonalizadosQuadroTestesDashboardNatura ) );
	
	selectProjeto.val( valorSelecionado );
}

function atualizarFiltroRelease()
{
	var valorSelecionado = selectRelease.val();
	
	selectRelease.html
	(
		obterReleasesParaFiltro
		(
			cardsQuadroTestesDashboardNatura,
			camposPersonalizadosQuadroTestesDashboardNatura
		)
	);
	
	selectRelease.val( valorSelecionado );
}
