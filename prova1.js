function calcular(){ //botao calcular html
    
    let metragem = 0
    let garagem = 0
    let andar = 0
    contador = 1
    let posicao
    let valor = 0
    aux = 0
    aux1 = 0
    aux2 = 0
           
         metragem = Number(prompt(`Insira a Metragem desejada do apartamento`))
         andar =Number(prompt(`Insira o andar desejado sendo do 1° ao 3° andar`))
         garagem =Number(prompt(`Informe o numero desejado de garagens sendo de 1 a 3 vagas`))
         posicao =prompt(`Insira posição da garagem
         M = Sol pela manhã
         T = Para sol a tarde
         `).toUpperCase() //funcao touppercase transforma todas as letras em maiusculas
         
        //metragem
        
        if(metragem >=0 && metragem <= 80){ 
        valor = 300000
        }

        else if(metragem > 80 && metragem <= 120){
        valor = 400000
        }
        
        else{
        valor = 500000
        }
       
         // garagem
        if(garagem == 1){
        aux = valor 
        }

        else if(garagem == 2){
        aux = valor + 20000
        }
        
        else{
        aux = valor + 40000
        }
       

        if (aux != -1){//andar
            if(andar == 1){
            aux1 = aux + 10000
            }

            else if(andar == 2){
            aux1 = aux + 20000
            }

            else{
            aux1 = aux + 30000
            }
            
            // posição garagem 

            if(posicao == "M"){
            aux2 = aux1 * 1.05
            }
            else{
            aux2 = aux1 * 1.08
            }   
        //mostrar resultados

        
        document.getElementById("result").innerHTML= `
        A metragem do apartamento é = ${metragem}<br>
        A quantidade de garagens escolhida é = ${garagem} <br>
        O andar excolhido é = ${andar}° <br> 
        A posição escolhida foi = ${posicao}<br>
        O valor final do Apartamento ecolhido é ${aux2}
    `}
}