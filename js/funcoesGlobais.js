function obterURLBoardActions( idBoard )
{
	return templateURLBoardActions.replace( '[BOARD_ID]', idBoard );
}

function obterURLCardsComBoardID( idBoard )
{
	return templateURLCards.replace( '[BOARD_ID]', idBoard );
}

function obterURLCamposPersonalizadosComBoardID( idBoard )
{
	return templateURLBoardCamposPersonalizados.replace( '[BOARD_ID]', idBoard );
}

function obterURLCardActions( idCard )
{
	return templateURLCardActions.replace( '[CARD_ID]', idCard );
}

function obterURLListasComBoardID( idBoard )
{
	return templateURLListas.replace( '[BOARD_ID]', idBoard );
}

function obterURLCamposPersonalizadosCard( idCard )
{
	return templateURLCamposPersonalizadosCard.replace( '[CARD_ID]', idCard );
}

function obterURLAnexosCard( idCard )
{
	return templateURLAnexosCard.replace( '[CARD_ID]', idCard );
}

function obterQuantidadeSIRsErro( cards )
{
	var quantidadeSIRsErro = 0;
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		if( cards[indiceCard]['name'] != nomeCardSIRExemplo )
		{
			var labels = cards[indiceCard]['labels'];
			
			for( indiceLabel = 0; indiceLabel < labels.length; ++indiceLabel )
			{
				if( labels[indiceLabel]['name'] == nomeLabelSIRErro )
				{
					++quantidadeSIRsErro;
				}
			}
		}
	}
	
	return quantidadeSIRsErro;
}

function obterQuantidadeSIRsFM( cards )
{
	var quantidadeSIRsFM = 0;
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		if( cards[indiceCard]['name'] != nomeCardSIRExemplo )
		{
			var labels = cards[indiceCard]['labels'];
			
			for( indiceLabel = 0; indiceLabel < labels.length; ++indiceLabel )
			{
				if( labels[indiceLabel]['name'] == nomeLabelSIRFM )
				{
					++quantidadeSIRsFM;
				}
			}
		}
	}
	
	return quantidadeSIRsFM;
}

function obterIDLista( nomeLista, listas )
{
	var idLista = undefined;
	
	for( indiceLista = 0; indiceLista < listas.length; ++indiceLista )
	{
		if( listas[indiceLista]['name'] == nomeLista )
		{
			idLista = listas[indiceLista]['id'];
			
			break;
		}
	}
	
	return idLista;
}

function obterQuantidadeCardsLista( idLista, cards )
{
	var quantidadeCards = 0;
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard];
		
		if
		(
			card['idList'] == idLista
			&& card['name'] != nomeCardTicketExemplo
			&& card['name'] != nomeCardSIRExemplo
		)
		{
			++quantidadeCards;
		}
	}
	
	return quantidadeCards;
}

function obterPercentual( quantidade, total )
{
	if( total == 0 )
	{
		return 0;
	}
	return ( quantidade / total ) * 100;
}

function obterPercentualCards( quantidadeCards, cards )
{
	var totalCard = 0;
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard];
		
		if
		(
			card['name'] != nomeCardTicketExemplo
			&& card['name'] != nomeCardSIRExemplo
		)
		{
			++totalCard;
		}
	}
	
	return obterPercentual( quantidadeCards, totalCard );
}

function roundNumber( num, scale )
{
	if( !( '' + num ).includes( 'e' ) )
	{
		return +( Math.round( num + 'e+' + scale )  + 'e-' + scale );
	}
	
	var arr = ( '' + num ).split( 'e' );
	var sig = '';
	if( +arr[1] + scale > 0 )
	{
		sig = '+';
	}
	
    return +( Math.round( +arr[0] + 'e' + sig + ( +arr[1] + scale ) ) + 'e-' + scale );
}

function obterPercentualCardsLista( nomeLista, listas, cards )
{
	var idLista = obterIDLista( nomeLista, listas );
	
	var quantidadeCardsLista = obterQuantidadeCardsLista( idLista, cards );
	
	var percentualCardsLista = obterPercentualCards( quantidadeCardsLista, cards );
	
	return percentualCardsLista;
}

function validarCardTicket( card )
{
	var labels = card['labels'];
			
	if( labels != null )
	{
		var ticketValido = true;
		
		for( indiceLabel = 0; indiceLabel < labels.length; ++indiceLabel )
		{
			var nomeLabel = labels[indiceLabel]['name'];
			
			if
			(
				nomeLabel == nomeLabelSIRErro
				|| nomeLabel == nomeLabelSIRFM
			)
			{
				ticketValido = false;
				
				break;
			}
		}
		
		if
		(
			labels.length > 0
			&& ticketValido
		)
		{
			return ticketValido;
		}
	}
	
	return false;
}

function obterQuantidadeTicketsLista( idLista, cards )
{
	var quantidadeTickets = 0;
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard]; 
		
		if
		(
			card['idList'] == idLista
			&& card['name'] != nomeCardTicketExemplo
			&& validarCardTicket( card )
		)
		{
			++quantidadeTickets;
		}
	}
	
	return quantidadeTickets;
}

function validarCardTicketFDFM( card )
{
	var labels = card['labels'];
			
	if( labels != null )
	{
		var ticketFDFMValido = true;
		
		for( indiceLabel = 0; indiceLabel < labels.length; ++indiceLabel )
		{
			var nomeLabel = labels[indiceLabel]['name'];
			
			if
			(
				nomeLabel != nomeLabelFD
				&& nomeLabel != nomeLabelFM
			)
			{
				ticketFDFMValido = false;
				
				break;
			}
		}
		
		if
		(
			labels.length > 0
			&& ticketFDFMValido
		)
		{
			return ticketFDFMValido;
		}				
	}
	
	return false;
}

function obterQuantidadeTicketsFDFMLista( idLista, cards )
{
	var quantidadeTicketsFDFM = 0;
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard]; 
		
		if
		(
			card['idList'] == idLista
			&& card['name'] != nomeCardTicketExemplo
			&& validarCardTicketFDFM( card )
		)
		{
			++quantidadeTicketsFDFM;
		}
	}
	
	return quantidadeTicketsFDFM;
}

function obterCardsTicketLista( idLista, cards )
{
	var cardsTicket = [];
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard]; 
		
		if
		(
			card['idList'] == idLista
			&& validarCardTicket( card )
		)
		{
			cardsTicket.push( card );
		}
	}
	
	return cardsTicket;
}

function obterCardsTicketFDFMLista( idLista, cards )
{
	var cardsTicketFDFM = [];
	
	var cardsTicketLista = obterCardsTicketLista( idLista, cards );
	
	for( indiceCardTicket = 0; indiceCardTicket < cardsTicketLista.length; ++indiceCardTicket )
	{
		var cardTicket = cardsTicketLista[indiceCardTicket];
		
		if( validarCardTicketFDFM( cardTicket ) )
		{
			cardsTicketFDFM.push( cardTicket );
		}
	}
	
	return cardsTicketFDFM;
}

function validarCardSIR( card )
{
	var labels = card['labels'];
			
	if( labels != null )
	{
		var SIRValida = true;
		
		for( indiceLabel = 0; indiceLabel < labels.length; ++indiceLabel )
		{
			var nomeLabel = labels[indiceLabel]['name'];
			
			if
			(
				nomeLabel != nomeLabelSIRErro
				&& nomeLabel != nomeLabelSIRFM
			)
			{
				SIRValida = false;
				
				break;
			}
		}
		
		if
		(
			labels.length > 0
			&& SIRValida
		)
		{
			return SIRValida;
		}				
	}
	
	return false;
}

function obterNumeroTicketDaSIR( cardSIR )
{
	var nomeCardSIR = cardSIR['name'];
	
	if( nomeCardSIR != null )
	{
		var indicePrimeiroDigitoNumeroSIR = nomeCardSIR.indexOf( '[N' ) + 2;
		var indiceAposUltimoDigitoNumeroSIR = nomeCardSIR.indexOf( ']' );
		
		if( indicePrimeiroDigitoNumeroSIR < indiceAposUltimoDigitoNumeroSIR )
		{
			var numeroTicketDaSIRString = '';
		
			for( indiceCaractere = indicePrimeiroDigitoNumeroSIR; indiceCaractere < indiceAposUltimoDigitoNumeroSIR; ++indiceCaractere )
			{
				numeroTicketDaSIRString += nomeCardSIR[indiceCaractere];
			}
			
			var numeroTicketDaSIR = Number( numeroTicketDaSIRString );
			
			if( !isNaN( numeroTicketDaSIR ) )
			{
				return numeroTicketDaSIR;
			}
		}
	}
	
	return -1;
}

function obterQuantidadeTicketsComSIRLista( idLista, cards )
{
	var quantidadeTicketsComSIR = 0;
	
	var cardsTicketFDFM = obterCardsTicketFDFMLista( idLista, cards );
	
	for( indiceCardTicket = 0; indiceCardTicket < cardsTicketFDFM.length; ++indiceCardTicket )
	{
		var numeroTicket = cardsTicketFDFM[indiceCardTicket]['idShort'];
		
		for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
		{
			var card = cards[indiceCard];
			
			if
			(
				validarCardSIR( card )
				&& numeroTicket == obterNumeroTicketDaSIR( card )
			)
			{
				++quantidadeTicketsComSIR;
				
				break;
			}
		}
	}
	
	return quantidadeTicketsComSIR;
}

function obterQuantidadeTicketsFTRABAPLista( idLista, cards )
{
	var quantidadeTicketsFDFMLista = obterQuantidadeTicketsFDFMLista( idLista, cards );
	
	var quantidadeTicketsComSIRLista = obterQuantidadeTicketsComSIRLista( idLista, cards );
	
	var quantidadeTicketsFTRABAPLista = quantidadeTicketsFDFMLista - quantidadeTicketsComSIRLista;
	
	return quantidadeTicketsFTRABAPLista;
}

function validarTicketSemFTRFUNC( card )
{
	var idCard = card['id'];
	
	var actionsCard = card['actions'];
	
	for( indiceCardAction = 0; indiceCardAction < actionsCard.length; ++indiceCardAction )
	{
		var cardAction = actionsCard[indiceCardAction];
		
		var dadosCardAction = cardAction['data'];
		
		var nomeListaDestino = undefined;
		
		var listaDestino = dadosCardAction['list'];
		if( listaDestino == undefined )
		{
			listaDestino = dadosCardAction['listAfter'];
		}
		
		
		if( listaDestino != undefined )
		{
			nomeListaDestino = listaDestino['name'];	
		}
		
		if
		(
			cardAction['type'] == tipoActionUpdateCard
			&& nomeListaDestino == nomeListaPendenciasReprovados
		)
		{
			return true;
		}
	}
	return false;
}

function obterQuantidadeTicketsSemFTRFUNCLista( idLista, cards )
{
	var quantidadeTicketsSemFTRFUNC = 0;
	
	var cardsTicketFDFM = obterCardsTicketFDFMLista( idLista, cards );
	
	for( indiceCardTicket = 0; indiceCardTicket < cardsTicketFDFM.length; ++indiceCardTicket )
	{
		var card = cardsTicketFDFM[indiceCardTicket];
		
		if( validarTicketSemFTRFUNC( card ) )
		{
			++quantidadeTicketsSemFTRFUNC;
		}
	}
	
	return quantidadeTicketsSemFTRFUNC;
}

function obterQuantidadeTicketsFTRFUNCLista( idLista, cards )
{
	var quantidadeTicketsFDFMLista = obterQuantidadeTicketsFDFMLista( idLista, cards );
	
	var quantidadeTicketsSemFTRFUNCLista = obterQuantidadeTicketsSemFTRFUNCLista( idLista, cards );
	
	var quantidadeTicketsFTRFUNCLista = quantidadeTicketsFDFMLista - quantidadeTicketsSemFTRFUNCLista;
	
	return quantidadeTicketsFTRFUNCLista;
}

function obterIDCampoPersonalizado( nomeCampoPersonalizado, camposPersonalizados )
{
	var idCampoPersonalizado = undefined;
	
	for( indiceCampoPersonalizado = 0; indiceCampoPersonalizado < camposPersonalizados.length; ++indiceCampoPersonalizado )
	{
		var campoPersonalizado = camposPersonalizados[indiceCampoPersonalizado];
		
		if( campoPersonalizado['name'] == nomeCampoPersonalizado )
		{
			idCampoPersonalizado = campoPersonalizado['id'];
			
			break;
		}
	}
	
	return idCampoPersonalizado;
}

function obterValorCampoPersonalizadoCard( idCampoPersonalizado, itemsCamposPersonalizadosCard, camposPersonalizadosBoard )
{
	var valorCampoPersonalizado = undefined;
	
	for( indiceCampoPersonalizado = 0; indiceCampoPersonalizado < itemsCamposPersonalizadosCard.length; ++indiceCampoPersonalizado )
	{
		var campoPersonalizado = itemsCamposPersonalizadosCard[indiceCampoPersonalizado];
		
		if( campoPersonalizado['idCustomField'] == idCampoPersonalizado )
		{
			valorCampoPersonalizado = campoPersonalizado['value'];
			
			if( valorCampoPersonalizado == undefined )
			{
				var idValorCampoPersonalizado = campoPersonalizado['idValue'];
				
				var opcoesCampoPersonalizadoBoard = obterCampoPersonalizadoPeloID( idCampoPersonalizado, camposPersonalizadosBoard )['options'];
				
				for( indiceOpcaoCampoPersonalizadoBoard = 0; indiceOpcaoCampoPersonalizadoBoard < opcoesCampoPersonalizadoBoard.length; ++indiceOpcaoCampoPersonalizadoBoard )
				{
					var opcaoCampoPersonalizadoBoard = opcoesCampoPersonalizadoBoard[indiceOpcaoCampoPersonalizadoBoard];
					
					if( opcaoCampoPersonalizadoBoard['id'] == idValorCampoPersonalizado )
					{
						valorCampoPersonalizado = opcaoCampoPersonalizadoBoard['value'];
						
						break;
					}
				}
			}
			
			break;
		}
	}
	
	return valorCampoPersonalizado;
}

function validarTicketSemOTDABAP( card, cards, camposPersonalizadosBoard )
{
	var idCard = card['id'];
	
	var idCampoPersonalizadoFimConstrucao = obterIDCampoPersonalizado( nomeCampoPersonalizadoFimConstrucao, camposPersonalizadosBoard );
	
	var actionsCard = card['actions'];
	
	for( indiceCardAction = 0; indiceCardAction < actionsCard.length; ++indiceCardAction )
	{
		var cardAction = actionsCard[indiceCardAction];
		
		var dadosCardAction = cardAction['data'];
		
		var nomeListaDestino = undefined;
		
		var listaDestino = dadosCardAction['list'];
		if( listaDestino == undefined )
		{
			listaDestino = dadosCardAction['listAfter'];
		}
		
		
		if( listaDestino != undefined )
		{
			nomeListaDestino = listaDestino['name'];	
		}
		
		if
		(
			cardAction['type'] == tipoActionUpdateCard
			&& nomeListaDestino == nomeListaEntregue
		)
		{
			var itensCamposPersonalizadosCard = card['customFieldItems'];
			
			var valorCampoPersonalizadoFimConstrucao = obterValorCampoPersonalizadoCard( idCampoPersonalizadoFimConstrucao, itensCamposPersonalizadosCard, camposPersonalizadosBoard );
			
			if( valorCampoPersonalizadoFimConstrucao['date'] < cardAction['date'] )
			{
				return true;
			}
		}
	}
	return false;
}

function obterQuantidadeTicketsSemOTDABAPLista( idLista, cards, camposPersonalizadosBoard )
{
	var quantidadeTicketsSemOTDABAP = 0;
	
	var cardsTicketFDFM = obterCardsTicketFDFMLista( idLista, cards );
	
	for( indiceCardTicket = 0; indiceCardTicket < cardsTicketFDFM.length; ++indiceCardTicket )
	{
		var card = cardsTicketFDFM[indiceCardTicket];
		
		if( validarTicketSemOTDABAP( card, cards, camposPersonalizadosBoard ) )
		{
			++quantidadeTicketsSemOTDABAP;
		}
	}
	
	return quantidadeTicketsSemOTDABAP;
}

function obterQuantidadeTicketsOTDABAPLista( idLista, cards, camposPersonalizadosBoard )
{
	var quantidadeTicketsFDFMLista = obterQuantidadeTicketsFDFMLista( idLista, cards );
	
	var quantidadeTicketsSemOTDABAPLista = obterQuantidadeTicketsSemOTDABAPLista( idLista, cards, camposPersonalizadosBoard );
	
	var quantidadeTicketsOTDABAPLista = quantidadeTicketsFDFMLista - quantidadeTicketsSemOTDABAPLista;
	
	return quantidadeTicketsOTDABAPLista;	
}

function validarTicketSemOTDFUNC( card, cards, camposPersonalizadosBoard )
{
	var resultadoValidacao = false;
	
	var idCard = card['id'];
	
	var anexosCard = card['attachments'];
	
	if
	(
		anexosCard == undefined ||
		anexosCard.length == 0
	)
	{
		resultadoValidacao = true;
		
		return resultadoValidacao;
	}
	
	var idCampoPersonalizadoDataEF = obterIDCampoPersonalizado( nomeCampoPersonalizadoDataEF, camposPersonalizadosBoard );
	
	var itensCamposPersonalizadosCard = card['customFieldItems'];
	
	var valorCampoPersonalizadoDataEF = obterValorCampoPersonalizadoCard( idCampoPersonalizadoDataEF, itensCamposPersonalizadosCard, camposPersonalizadosBoard );
	
	for( indiceAnexo = 0; indiceAnexo < anexosCard.length; ++indiceAnexo )
	{
		var anexo = anexosCard[indiceAnexo];
		
		if( anexo['name'].startsWith( inicioNomeAnexoEF ) )
		{
			if( valorCampoPersonalizadoDataEF['date'] < anexo['date'] )
			{
				resultadoValidacao = true;
			}
			
			break;
		}
	}
	
	return resultadoValidacao;
}

function obterQuantidadeTicketsSemOTDFUNCLista( idLista, cards, camposPersonalizadosBoard )
{
	var quantidadeTicketsSemOTDFUNC = 0;
	
	var cardsTicketFDFM = obterCardsTicketFDFMLista( idLista, cards );
	
	for( indiceCardTicket = 0; indiceCardTicket < cardsTicketFDFM.length; ++indiceCardTicket )
	{
		var card = cardsTicketFDFM[indiceCardTicket];
		
		if( validarTicketSemOTDFUNC( card, cards, camposPersonalizadosBoard ) )
		{
			++quantidadeTicketsSemOTDFUNC;
		}
	}
	
	return quantidadeTicketsSemOTDFUNC;
}

function obterQuantidadeTicketsOTDFUNCLista( idLista, cards, camposPersonalizadosBoard )
{
	var quantidadeTicketsFDFMLista = obterQuantidadeTicketsFDFMLista( idLista, cards );
	
	var quantidadeTicketsSemOTDFUNCLista = obterQuantidadeTicketsSemOTDFUNCLista( idLista, cards, camposPersonalizadosBoard );
	
	var quantidadeTicketsOTDFUNCLista = quantidadeTicketsFDFMLista - quantidadeTicketsSemOTDFUNCLista;
	
	return quantidadeTicketsOTDFUNCLista;		
}

function obterCampoPersonalizadoPeloID( idCampoPersonalizado, camposPersonalizadosBoard )
{
	var campoPersonalizado = undefined;
	
	for( indiceCampoPersonalizado = 0; indiceCampoPersonalizado < camposPersonalizadosBoard.length; ++indiceCampoPersonalizado )
	{
		var campoPersonalizadoBoard = camposPersonalizadosBoard[indiceCampoPersonalizado];
		
		if( campoPersonalizadoBoard['id'] == idCampoPersonalizado )
		{
			campoPersonalizado = campoPersonalizadoBoard;
			
			break;
		}
	}
	
	return campoPersonalizado;
}

function obterValoresOpcoesCampoPersonalizado( nomeCampoPersonalizado, camposPersonalizadosBoard )
{
	var valoresOpcoesCampoPersonalizado = [];
	
	var idCampoPersonalizado = obterIDCampoPersonalizado( nomeCampoPersonalizado, camposPersonalizadosBoard );
	
	var campoPersonalizado = obterCampoPersonalizadoPeloID( idCampoPersonalizado, camposPersonalizadosBoard );
	
	var opcoesCampoPersonalizado = campoPersonalizado['options'];
	
	for( indiceOpcaoCampoPersonalizado = 0; indiceOpcaoCampoPersonalizado < opcoesCampoPersonalizado.length; ++indiceOpcaoCampoPersonalizado )
	{
		var opcaoCampoPersonalizado = opcoesCampoPersonalizado[indiceOpcaoCampoPersonalizado];
		
		valoresOpcoesCampoPersonalizado.push( opcaoCampoPersonalizado['value']['text'] );
	}
	
	return valoresOpcoesCampoPersonalizado;
}

function addDays( date, days )
{
	var result = new Date( date.valueOf() );
	
	result.setDate( result.getDate() + days );
	
	return result;
}

function obterProximaDataDisponibilidadeABAP( nomeABAP, cards, camposPersonalizadosBoard, listas )
{
	var proximaDataDisponibilidadeABAP = { ABAP: nomeABAP, proximaDataDisponibilidade: '' };
	
	var idCampoPersonalizadoFimConstrucao = obterIDCampoPersonalizado( nomeCampoPersonalizadoFimConstrucao, camposPersonalizadosBoard );
	var idCampoPersonalizadoABAP = obterIDCampoPersonalizado( nomeCampoPersonalizadoABAP, camposPersonalizadosBoard );
	
	var idListaEntregue = obterIDLista( nomeListaEntregue, listas );
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard];
		
		var idListCard = card['idList'];
		
		if( idListCard != idListaEntregue )
		{
			var nomeCard = card['name'];
		
			if
			(
				nomeCard != nomeCardTicketExemplo
				&& nomeCard != nomeCardSIRExemplo
			)
			{
				var itensCamposPersonalizadosCard = card['customFieldItems'];
				
				var valorCampoPersonalizadoABAP = obterValorCampoPersonalizadoCard( idCampoPersonalizadoABAP, itensCamposPersonalizadosCard, camposPersonalizadosBoard );
				
				if
				(
					valorCampoPersonalizadoABAP != undefined
					&& valorCampoPersonalizadoABAP['text'] == nomeABAP
				)
				{
					var valorCampoPersonalizadoFimConstrucao = obterValorCampoPersonalizadoCard( idCampoPersonalizadoFimConstrucao, itensCamposPersonalizadosCard, camposPersonalizadosBoard );
					
					var dataFimConstrucao = new Date( valorCampoPersonalizadoFimConstrucao['date'] );
					
					var umDiaAposDataFimConstrucao = addDays( dataFimConstrucao, 1 );
					
					if
					(
						proximaDataDisponibilidadeABAP.proximaDataDisponibilidade == ''
						|| proximaDataDisponibilidadeABAP.proximaDataDisponibilidade < umDiaAposDataFimConstrucao
					)
					{
						proximaDataDisponibilidadeABAP.proximaDataDisponibilidade = umDiaAposDataFimConstrucao;
					}
				}
			}
		}
	}
	
	if( proximaDataDisponibilidadeABAP.proximaDataDisponibilidade == '' )
	{
		proximaDataDisponibilidadeABAP.proximaDataDisponibilidade = new Date();
	}
	
	return proximaDataDisponibilidadeABAP;
}

function obterProximaDataDisponibilidadeABAPs( nomesABAP, cards, camposPersonalizadosBoard, listas )
{
	var proximaDataDisponibilidadeABAPs = [];
	
	for( indiceNomeABAP = 0; indiceNomeABAP < nomesABAP.length; ++indiceNomeABAP )
	{
		var nomeABAP = nomesABAP[indiceNomeABAP];
		
		proximaDataDisponibilidadeABAPs.push( obterProximaDataDisponibilidadeABAP( nomeABAP, cards, camposPersonalizadosBoard, listas ) );
	}
	
	return proximaDataDisponibilidadeABAPs;
}

function funcaoComparacaoDisponibilidadeABAP( disponibilidadeA, disponibilidadeB )
{
	return ( disponibilidadeA.proximaDataDisponibilidade > disponibilidadeB.proximaDataDisponibilidade ) -
		   ( disponibilidadeA.proximaDataDisponibilidade < disponibilidadeB.proximaDataDisponibilidade );
}

function obterDataSemTempo( dataComTempo )
{
	var dataSemTempo = undefined;
	
	dataSemTempo = new Date
	(
		dataComTempo.getFullYear(),
		dataComTempo.getMonth(),
		dataComTempo.getDate()
	);
	
	return dataSemTempo;
}

function obterDisponibilidadeTimeABAPPorData( proximaDataDisponibilidadeABAPs )
{
	var disponibilidadeTimeABAPPorData = [];
	
	var datasDisponibilidade = [];
	
	for( indiceProximaDataDisponibilidadeABAP = 0; indiceProximaDataDisponibilidadeABAP < proximaDataDisponibilidadeABAPs.length; ++indiceProximaDataDisponibilidadeABAP )
	{
		var proximaDataDisponibilidadeABAP = proximaDataDisponibilidadeABAPs[indiceProximaDataDisponibilidadeABAP];
		
		var proximaDataDisponibilidadeABAPSomenteData = obterDataSemTempo( proximaDataDisponibilidadeABAP.proximaDataDisponibilidade );
		
		var dataDisponibilidadeJaAdicionada = false;
		
		for( indiceDataDisponibilidade = 0; indiceDataDisponibilidade < datasDisponibilidade.length; ++indiceDataDisponibilidade )
		{
			var dataDisponibilidade = datasDisponibilidade[indiceDataDisponibilidade];
			
			if( dataDisponibilidade.getTime() == proximaDataDisponibilidadeABAPSomenteData.getTime() )
			{
				dataDisponibilidadeJaAdicionada = true;
				
				break;
			}
		}
		
		if( !dataDisponibilidadeJaAdicionada )
		{
			datasDisponibilidade.push( proximaDataDisponibilidadeABAPSomenteData );
		}
	}
	
	for( indiceDataDisponibilidade = 0; indiceDataDisponibilidade < datasDisponibilidade.length; ++indiceDataDisponibilidade )
	{
		var dataDisponibilidade = datasDisponibilidade[indiceDataDisponibilidade];
		
		var ABAPsDisponiveis = [];
			
		for( indiceProximaDataDisponibilidadeABAP = 0; indiceProximaDataDisponibilidadeABAP < proximaDataDisponibilidadeABAPs.length; ++indiceProximaDataDisponibilidadeABAP )
		{
			var proximaDataDisponibilidadeABAP = proximaDataDisponibilidadeABAPs[indiceProximaDataDisponibilidadeABAP];
			
			var proximaDataDisponibilidadeABAPSomenteData = obterDataSemTempo( proximaDataDisponibilidadeABAP.proximaDataDisponibilidade );
			
			if( proximaDataDisponibilidadeABAPSomenteData.getTime() == dataDisponibilidade.getTime() )
			{
				ABAPsDisponiveis.push( proximaDataDisponibilidadeABAP.ABAP );
			}
		}
		
		ABAPsDisponiveis.sort();
		
		var disponibilidadeData = { dataDisponibilidadeABAP: dataDisponibilidade, ABAPsDisponiveisData: ABAPsDisponiveis };
		
		disponibilidadeTimeABAPPorData.push( disponibilidadeData );
	}
	
	return disponibilidadeTimeABAPPorData;
}

function obterStringNumeroZerosEsquerda( numero, quantidadeMaximaZeros )
{
	var stringNumero = numero.toString();
	
	var quantidadeMaximaDigitos = quantidadeMaximaZeros + 1;
	
	if( stringNumero.length == quantidadeMaximaDigitos )
	{
		return stringNumero;
	}
	
	var quantidadeZerosInseridos = 0;
	
	while( quantidadeZerosInseridos < quantidadeMaximaZeros )
	{
		stringNumero = '0' + stringNumero;
		
		++quantidadeZerosInseridos;
	}
	
	return stringNumero;
}

function obterTimelineDisponibilidadeTimeABAP( cards, camposPersonalizadosBoard, listas )
{
	var textoDisponibilidadeABAP = '';
	
	var nomesABAP = obterValoresOpcoesCampoPersonalizado( nomeCampoPersonalizadoABAP, camposPersonalizadosBoard );
	
	var proximaDataDisponibilidadeABAPs = obterProximaDataDisponibilidadeABAPs( nomesABAP, cards, camposPersonalizadosBoard, listas );
	
	proximaDataDisponibilidadeABAPs.sort( funcaoComparacaoDisponibilidadeABAP );
	
	var disponibilidadeTimeABAPPorData = obterDisponibilidadeTimeABAPPorData( proximaDataDisponibilidadeABAPs );
	
	for( indiceDisponibilidadeTimeABAPPorData = 0; indiceDisponibilidadeTimeABAPPorData < disponibilidadeTimeABAPPorData.length; ++indiceDisponibilidadeTimeABAPPorData )
	{
		var dataDisponibilidadeTimeABAP = disponibilidadeTimeABAPPorData[indiceDisponibilidadeTimeABAPPorData];
		
		var diaDataDisponibilidadeABAP = dataDisponibilidadeTimeABAP.dataDisponibilidadeABAP.getDate();
		var mesDataDisponibilidadeABAP = dataDisponibilidadeTimeABAP.dataDisponibilidadeABAP.getMonth() + 1;
		var anoDataDisponibilidadeABAP = dataDisponibilidadeTimeABAP.dataDisponibilidadeABAP.getFullYear();
		
		var indiceDisponibilidadeTimeABAPPorDataPar = ( indiceDisponibilidadeTimeABAPPorData % 2 ) == 0;
		
		if( indiceDisponibilidadeTimeABAPPorDataPar )
		{
			textoDisponibilidadeABAP += '<div class="timeline-container timeline-container-left">';
		}
		else
		{
			textoDisponibilidadeABAP += '<div class="timeline-container timeline-container-right">';
		}
		
		textoDisponibilidadeABAP += '<div class="timeline-content"><h3>'
									+ obterStringNumeroZerosEsquerda( diaDataDisponibilidadeABAP, 1 ) + '/'
									+ obterStringNumeroZerosEsquerda( mesDataDisponibilidadeABAP, 1 ) + '/'
									+ anoDataDisponibilidadeABAP + '</h3>';
		
		for( indiceABAPDisponivelData = 0; indiceABAPDisponivelData < dataDisponibilidadeTimeABAP.ABAPsDisponiveisData.length; ++indiceABAPDisponivelData )
		{
			var ABAPDisponivelData = dataDisponibilidadeTimeABAP.ABAPsDisponiveisData[indiceABAPDisponivelData];
			
			textoDisponibilidadeABAP += '<p>' + ABAPDisponivelData + '</p>';
		}
		
		textoDisponibilidadeABAP += '</div></div>';
	}
	
	return textoDisponibilidadeABAP;
}

function obterQuantidadeHorasABAPCards( cards, camposPersonalizadosBoard )
{
	var quantidadeHorasABAP = 0;
	
	var idCampoPersonalizadoHorasABAP = obterIDCampoPersonalizado( nomeCampoPersonalizadoHorasABAP, camposPersonalizadosBoard );
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard];
		
		var nomeCard = card['name'];
		
		if( nomeCard != nomeCardTicketExemplo )
		{
			var itemsCamposPersonalizadosCard = card['customFieldItems'];
			
			var valorCampoPersonalizadoHorasABAP = obterValorCampoPersonalizadoCard( idCampoPersonalizadoHorasABAP, itemsCamposPersonalizadosCard, camposPersonalizadosBoard );
			
			quantidadeHorasABAP += Number( valorCampoPersonalizadoHorasABAP['number'] );	
		}
	}
	
	return quantidadeHorasABAP;
}

function obterQuantidadeHorasEntregueTicketsFDFM( cards, camposPersonalizadosBoard, listas )
{
	var idListaEntregue = obterIDLista( nomeListaEntregue, listas );
	
	var cardsTicketFDFMListaEntregue = obterCardsTicketFDFMLista( idListaEntregue, cards );
	
	var quantidadeHorasABAPEntregue = obterQuantidadeHorasABAPCards( cardsTicketFDFMListaEntregue, camposPersonalizadosBoard );
	
	return quantidadeHorasABAPEntregue;	
}

function obterQuantidadeHorasBacklogTicketsFDFM( cards, camposPersonalizadosBoard, listas )
{
	var idListaBacklogDemandas = obterIDLista( nomeListaBacklogDemandas, listas );
	
	var cardsTicketFDFMListaBacklog = obterCardsTicketFDFMLista( idListaBacklogDemandas, cards );
	
	var quantidadeHorasABAPBacklog = obterQuantidadeHorasABAPCards( cardsTicketFDFMListaBacklog, camposPersonalizadosBoard );
	
	return quantidadeHorasABAPBacklog;	
}

function obterQuantidadeCardsPorEtiqueta( nomeEtiqueta, cards )
{
	var quantidadeCards = 0;
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard];
		
		var labelsCard = card['labels'];
		
		if
		(
			labelsCard != undefined
			&& labelsCard.length > 0
		)
		{
			var nomeCard = card['name'];
			
			var nomeEtiquetaCard = card['labels'][0]['name'];
		
			if
			(
				nomeEtiquetaCard == nomeEtiqueta
				&& nomeCard != nomeCardTicketExemplo
				&& nomeCard != nomeCardSIRExemplo
			)
			{
				++quantidadeCards;
			}
		}
	}
	
	return quantidadeCards;
}

function obterPercentualCardsPorEtiqueta( nomeEtiqueta, cards )
{
	var quantidadeCardsEtiqueta = obterQuantidadeCardsPorEtiqueta( nomeEtiqueta, cards );
	
	var percentualCardsEtiqueta = obterPercentualCards( quantidadeCardsEtiqueta, cards );
	
	return percentualCardsEtiqueta;
}

function obterProjetosParaFiltro( camposPersonalizadosBoard )
{
	var projetos = '<option value="Todos">Todos</option>';
	
	var valoresOpcoesProjeto = obterValoresOpcoesCampoPersonalizado( nomeCampoPersonalizadoProjeto, camposPersonalizadosBoard );
	
	for( indiceValorOpcaoProjeto = 0; indiceValorOpcaoProjeto < valoresOpcoesProjeto.length; ++indiceValorOpcaoProjeto )
	{
		var valorOpcaoProjeto = valoresOpcoesProjeto[indiceValorOpcaoProjeto];
		
		projetos += '<option value="' + valorOpcaoProjeto + '">' + valorOpcaoProjeto + '</option>';
	}
	
	return projetos;
}

function obterCardsPorProjeto( nomeProjeto, cards, camposPersonalizadosBoard )
{
	var cardsPorProjeto = [];
	
	if( nomeProjeto == undefined )
	{
		cardsPorProjeto = cards;
		
		return cardsPorProjeto;
	}		
	
	var idCampoPersonalizadoProjeto = obterIDCampoPersonalizado( nomeCampoPersonalizadoProjeto, camposPersonalizadosBoard );
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard];
		
		var itensCamposPersonalizadosCard = card['customFieldItems'];
				
		var valorCampoPersonalizadoProjeto = obterValorCampoPersonalizadoCard( idCampoPersonalizadoProjeto, itensCamposPersonalizadosCard, camposPersonalizadosBoard );
		
		if
		(
			valorCampoPersonalizadoProjeto != undefined
			&& valorCampoPersonalizadoProjeto['text'] == nomeProjeto
		)
		{
			cardsPorProjeto.push( card );
		}
	}
	
	return cardsPorProjeto;
}
