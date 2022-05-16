function calcular(){

    let votos 

    let quantc1 = 0 , quantc2 = 0, quantc3 = 0, quantc4 =0, quantc5 = 0
    do{  // para nao deixar o primeiro numero inserido ser 0
    votos = Number(prompt(`Informe os votos Opções
    1 para apenas Teams
    2 para apenas Papel
    3 para apenas WhatsApp
    4 para apenas Email
    5 para Tanto Faz
    0 para terminar a pesquisa`))
    }
    while(votos == 0)// enquanto o primeiro numero inserido for 0 faca de novo
    

    do{
        switch(votos){  // quando o voto entra conta +1 aonde ele foi votado
            case 1: quantc1++; break
            case 2: quantc2++; break
            case 3: quantc3++; break
            case 4: quantc4++; break
            case 5: quantc5++; break
            case 0: alert(`Esta Opção Encerra o Programa`); break 
            default: alert(`Opção invalida`)
        }
    
        //mostrar o voto
        votos = Number(prompt(`Informe os votos Opções 
        1 para apenas Teams
        2 para apenas Papel
        3 para apenas WhatsApp
        4 para apenas Email
        5 para Tanto Faz
        0 para terminar a pesquisa`))
    
    }
    
    while(votos != 0) // se for diferente de zero continue fazendo
    
    // mostrar resutado
    
    let total = quantc1 + quantc2 + quantc3 + quantc4 + quantc5 // soma todos os itens

   
    
    //mostrar resultados 
    document.getElementById(`result`).innerHTML = `
    Votos em Teams = ${quantc1} <br>
    Votos em Papel = ${quantc2} <br>
    Votos em WhatsApp = ${quantc3} <br>
    Votos em Email = ${quantc4} <br>
    Votos em Tanto Faz = ${quantc5}<br>
    Porcentagem de Votos em Tanto Faz = ${(quantc5/total*100).toFixed(2)}% <br>
    Total de Pessoas que participaram = ${total}`
    
    let contador = 1
    let aux = 0
    let troca = ''

    let nome1 = "= Teams"
    let nome2 = "= Papel"
    let nome3 = "= WhatsApp"
    let nome4 = "= Email"
    let nome5 = "= Tanto Faz"

    while(contador <=4 ){
        if (quantc1 > quantc2){
            aux = quantc1; quantc1 = quantc2 ; quantc2 = aux;
            troca = nome1; nome1 = nome2; nome2 = troca
        }
      
        if(quantc2 > quantc3){
        aux = quantc2; quantc2 = quantc3; quantc3 = aux;
        troca = nome2; nome2 = nome3; nome3 = troca
        }
    
        if(quantc3 > quantc4){
            aux = quantc3; quantc3 = quantc4; quantc4 = aux;
            troca = nome3; nome3 = nome4; nome4 = troca
        }

        if(quantc4 > quantc5){
            aux = quantc4; quantc4 = quantc5; quantc5 = aux;
            troca = nome4; nome4 = nome5; nome5 = troca
        }

        
        contador ++
    }
    
   
   document.getElementById(`result2`).innerHTML = `${quantc1 + nome1} ${quantc2 + nome2} ${quantc3 + nome3} ${quantc4 + nome4} ${quantc5 + nome5}`
    
}