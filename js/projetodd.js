//define a data e a hora
const dataLimite = new Date("September 31, 2023 22:00:00").getTime();

//atualiza o cronômetro a cada segundo
const contagemRegreciva = setInterval(() => {

    //pega data e hora atual
    const agoraDH = new Date().getTime();

    //Calcular a diferença de tempo entre a data/hora atual e a data/hora de destino
    const diferencaTempo = dataLimite - agoraDH;

    //Calcula Dias, horas, minutos e segundos
    //A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
    const dias = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));
    const horas = Math.floor(diferencaTempo%(1000 * 60 * 60 * 24) / (1000 * 60 * 60 * 24));
    const minutos = Math.floor((diferencaTempo%(1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencaTempo % (1000 * 60)) / (1000));

    //Mostrar o tempo calculado nos elementos HTML
    //A propriedade textContent representa o conteúdo de texto de um nó e dos seus descendentes.
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("min").textContent = minutos;
    document.getElementById("seg").textContent = segundos;

    //Verifica se o cronômetro chegou ao fim
    if(diferencaTempo < 0){
        clearInterval(contagemRegreciva);
        document.getElementById("tempo").innerHTML = "O contador chegou ao fim";
    }

}, 1000);