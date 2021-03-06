/* ATUALIZAÇÃO DE ELEMENTOS DE TELA */

function atualizarFTRABAP( cards )
{	
	var idListaEntregue = obterIDLista( NOME_LISTA_ENTREGUE, listasCarregadas );
	
	var quantidadeTicketsFDFMListaEntregue = obterQuantidadeTicketsFDFMLista( idListaEntregue, cards );
	
	var quantidadeTicketsFTRABAPListaEntregue = obterQuantidadeTicketsFTRABAPLista( idListaEntregue, cards );
	
	var percentualTicketsFTRABAPListaEntregue = obterPercentual( quantidadeTicketsFTRABAPListaEntregue, quantidadeTicketsFDFMListaEntregue );
	
	var percentualTicketsFTRABAPListaEntregueArredondado = Math.round( percentualTicketsFTRABAPListaEntregue );
	
	ftrABAP.html( percentualTicketsFTRABAPListaEntregueArredondado.toString() + '%' );
}

function atualizarOTDABAP( cards )
{
	var idListaEntregue = obterIDLista( NOME_LISTA_ENTREGUE, listasCarregadas );
	
	var quantidadeTicketsFDFMListaEntregue = obterQuantidadeTicketsFDFMLista( idListaEntregue, cards );
	
	var quantidadeTicketsOTDABAPListaEntregue = obterQuantidadeTicketsOTDABAPLista( idListaEntregue, cards, camposPersonalizadosCarregados );
	
	var percentualTicketsOTDABAPListaEntregue = obterPercentual( quantidadeTicketsOTDABAPListaEntregue, quantidadeTicketsFDFMListaEntregue );
	
	var percentualTicketsOTDABAPListaEntregueArredondado = Math.round( percentualTicketsOTDABAPListaEntregue );
	
	otdABAP.html( percentualTicketsOTDABAPListaEntregueArredondado.toString() + '%' );
}

function atualizarFTRFUNC( cards )
{
	var idListaEntregue = obterIDLista( NOME_LISTA_ENTREGUE, listasCarregadas );
	
	var quantidadeTicketsFDFMListaEntregue = obterQuantidadeTicketsFDFMLista( idListaEntregue, cards );
	
	var quantidadeTicketsFTRFUNCListaEntregue = obterQuantidadeTicketsFTRFUNCLista( idListaEntregue, cards, camposPersonalizadosCarregados );
	
	var percentualTicketsFTRFUNCListaEntregue = obterPercentual( quantidadeTicketsFTRFUNCListaEntregue, quantidadeTicketsFDFMListaEntregue );
	
	var percentualTicketsFTRFUNCListaEntregueArredondado = Math.round( percentualTicketsFTRFUNCListaEntregue );
	
	ftrFUNC.html( percentualTicketsFTRFUNCListaEntregueArredondado.toString() + '%' );		
}

function atualizarOTDFUNC( cards )
{
	var idListaEntregue = obterIDLista( NOME_LISTA_ENTREGUE, listasCarregadas );
	
	var quantidadeTicketsFDFMListaEntregue = obterQuantidadeTicketsFDFMLista( idListaEntregue, cards );
	
	var quantidadeTicketsOTDFUNCListaEntregue = obterQuantidadeTicketsOTDFUNCLista( idListaEntregue, cards, camposPersonalizadosCarregados );
	
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

function atualizarQuantidadeSIRs( cards )
{
	atualizarQuantidadeSIRsErro( cards );
	atualizarQuantidadeSIRsFM( cards );
}

function atualizarDisponibilidadeTimeABAP()
{
	disponibilidadeTimeABAP.html
	(
		obterTimelineDisponibilidadeTimeABAP
		(
			cardsCarregados,
			camposPersonalizadosCarregados,
			listasCarregadas
		)
	);
}

function atualizarPercentualCartoesPorFase( cards )
{
	var percentualCardsListaBacklogDemandas = obterPercentualCardsLista( NOME_LISTA_BACKLOG_DEMANDAS, listasCarregadas, cards );
	
	var percentualCardsListaBacklogSIR = obterPercentualCardsLista( NOME_LISTA_BACKLOG_SIR, listasCarregadas, cards );
	
	var percentualCardsListaEmAtendimento = obterPercentualCardsLista( NOME_LISTA_EM_ATENDIMENTO, listasCarregadas, cards );
	
	var percentualCardsListaPendenciasReprovados = obterPercentualCardsLista( NOME_LISTA_PENDENCIAS_REPROVADOS, listasCarregadas, cards );
	
	var percentualCardsListaEmRevisao = obterPercentualCardsLista( NOME_LISTA_EM_REVISAO, listasCarregadas, cards );
	
	var percentualCardsListaEntregue = obterPercentualCardsLista( NOME_LISTA_ENTREGUE, listasCarregadas, cards );
	
	if( soMobile )
	{
		var textoCorpoTabPercentualPorFase = '<tr><td>' + NOME_LISTA_BACKLOG_DEMANDAS 	   + '</td><td>' + roundNumber( percentualCardsListaBacklogDemandas, 2 ).toString().replace( '.', ',' ) 	  + '</td></tr>' +
											 '<tr><td>' + NOME_LISTA_BACKLOG_SIR 	  	   + '</td><td>' + roundNumber( percentualCardsListaBacklogSIR, 2 ).toString().replace( '.', ',' ) 		  	  + '</td></tr>' +
											 '<tr><td>' + NOME_LISTA_EM_ATENDIMENTO 	   + '</td><td>' + roundNumber( percentualCardsListaEmAtendimento, 2 ).toString().replace( '.', ',' ) 		  + '</td></tr>' +
											 '<tr><td>' + NOME_LISTA_PENDENCIAS_REPROVADOS + '</td><td>' + roundNumber( percentualCardsListaPendenciasReprovados, 2 ).toString().replace( '.', ',' )  + '</td></tr>' +
											 '<tr><td>' + NOME_LISTA_EM_REVISAO 		   + '</td><td>' + roundNumber( percentualCardsListaEmRevisao, 2 ).toString().replace( '.', ',' ) 			  + '</td></tr>' +
											 '<tr><td>' + NOME_LISTA_ENTREGUE 			   + '</td><td>' + roundNumber( percentualCardsListaEntregue, 2 ).toString().replace( '.', ',' ) 			  + '</td></tr>';
		
		corpoTabPercentualPorFase.html( textoCorpoTabPercentualPorFase );
	}
	else
	{
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
}

function atualizarTotalHorasABAPEntregue( cards )
{
	totalHorasABAPEntregue.html
	(
		obterQuantidadeHorasEntregueTicketsFDFM
		(
			cards,
			camposPersonalizadosCarregados,
			listasCarregadas
		)
	);
}

function atualizarTotalHorasABAPBacklog( cards )
{
	totalHorasABAPBacklog.html
	(
		obterQuantidadeHorasBacklogTicketsFDFM
		(
			cards,
			camposPersonalizadosCarregados,
			listasCarregadas
		)
	);
}

function atualizarPercentualCartoesPorEtiqueta( cards )
{
	var percentualCardsEtiquetaCCM = obterPercentualCardsPorEtiqueta( NOME_LABEL_CCM, cards );
	
	var percentualCardsEtiquetaDebug = obterPercentualCardsPorEtiqueta( NOME_LABEL_DEBUG, cards );
	
	var percentualCardsEtiquetaFD = obterPercentualCardsPorEtiqueta( NOME_LABEL_FD, cards );
	
	var percentualCardsEtiquetaSmallEnhancement = obterPercentualCardsPorEtiqueta( NOME_LABEL_SMALL_ENHANCEMENT, cards );
	
	var percentualCardsEtiquetaEstimativa = obterPercentualCardsPorEtiqueta( NOME_LABEL_ESTIMATIVA, cards );
	
	var percentualCardsEtiquetaSIRFM = obterPercentualCardsPorEtiqueta( NOME_LABEL_SIR_FM, cards );

	var percentualCardsEtiquetaFM = obterPercentualCardsPorEtiqueta( NOME_LABEL_FM, cards );
	
	var percentualCardsEtiquetaSIRERRO = obterPercentualCardsPorEtiqueta( NOME_LABEL_SIR_ERRO, cards );
	
	if( soMobile )
	{
		var textoCorpoTabPercentualPorEtiqueta = '<tr><td>' + NOME_LABEL_CCM 	   		   + '</td><td>' + roundNumber( percentualCardsEtiquetaCCM, 2 ).toString().replace( '.', ',' ) 	  		 	 + '</td></tr>' +
												 '<tr><td>' + NOME_LABEL_DEBUG 	  	   	   + '</td><td>' + roundNumber( percentualCardsEtiquetaDebug, 2 ).toString().replace( '.', ',' ) 		  	 + '</td></tr>' +
												 '<tr><td>' + NOME_LABEL_FD 	   		   + '</td><td>' + roundNumber( percentualCardsEtiquetaFD, 2 ).toString().replace( '.', ',' ) 		  		 + '</td></tr>' +
												 '<tr><td>' + NOME_LABEL_SMALL_ENHANCEMENT + '</td><td>' + roundNumber( percentualCardsEtiquetaSmallEnhancement, 2 ).toString().replace( '.', ',' )  + '</td></tr>' +
												 '<tr><td>' + NOME_LABEL_ESTIMATIVA 	   + '</td><td>' + roundNumber( percentualCardsEtiquetaEstimativa, 2 ).toString().replace( '.', ',' ) 	     + '</td></tr>' +
												 '<tr><td>' + NOME_LABEL_SIR_FM 		   + '</td><td>' + roundNumber( percentualCardsEtiquetaSIRFM, 2 ).toString().replace( '.', ',' ) 			 + '</td></tr>' +
												 '<tr><td>' + NOME_LABEL_FM 			   + '</td><td>' + roundNumber( percentualCardsEtiquetaFM, 2 ).toString().replace( '.', ',' ) 			  	 + '</td></tr>' +
												 '<tr><td>' + NOME_LABEL_SIR_ERRO 		   + '</td><td>' + roundNumber( percentualCardsEtiquetaSIRERRO, 2 ).toString().replace( '.', ',' ) 		 	 + '</td></tr>';
		
		corpoTabPercentualPorEtiqueta.html( textoCorpoTabPercentualPorEtiqueta );		
	}
	else
	{
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
}

function atualizarFiltroProjeto()
{
	var valorSelecionado = selectProjeto.val();
	
	selectProjeto.html( obterProjetosParaFiltro( camposPersonalizadosCarregados ) );
	
	selectProjeto.val( valorSelecionado );
}

function atualizarFiltroRelease()
{
	var valorSelecionado = selectRelease.val();
	
	selectRelease.html
	(
		obterReleasesParaFiltro
		(
			cardsCarregados,
			camposPersonalizadosCarregados
		)
	);
	
	selectRelease.val( valorSelecionado );
}

function atualizarItensCarrosselPendencias()
{
	var cards = cardsCarregados;
	
	var textoItensCarrosselPendencias = obterItensCarrosselPendencias( cards, listasCarregadas, camposPersonalizadosCarregados );
	
	if( textoItensCarrosselPendencias == '' )
	{
		itensCarrosselPendencias.html( TEXTO_CARROSSEL_PENDENCIAS_VAZIO );
	}
	else
	{
		itensCarrosselPendencias.html( textoItensCarrosselPendencias );
	}
}

function atualizarElementosTela()
{
	var nomeProjeto = obterNomeProjetoSelecionado();
	
	var dataRelease = obterDataReleaseSelecionada();
	
	var cardsFiltrados = obterCardsFiltrados
	(
		cardsCarregados,
		listasCarregadas,
		camposPersonalizadosCarregados,
		nomeProjeto,
		dataRelease
	);
	
	atualizarFTRABAP( cardsFiltrados );
	
	atualizarOTDABAP( cardsFiltrados );
	
	atualizarFTRFUNC( cardsFiltrados );
	
	atualizarOTDFUNC( cardsFiltrados );
	
	atualizarQuantidadeSIRs( cardsFiltrados );
	
	atualizarDisponibilidadeTimeABAP();
	
	atualizarPercentualCartoesPorFase( cardsFiltrados );
	
	atualizarTotalHorasABAPEntregue( cardsFiltrados );
	
	atualizarTotalHorasABAPBacklog( cardsFiltrados );
	
	atualizarPercentualCartoesPorEtiqueta( cardsFiltrados );
	
	atualizarFiltroProjeto();
	
	atualizarFiltroRelease();
}
