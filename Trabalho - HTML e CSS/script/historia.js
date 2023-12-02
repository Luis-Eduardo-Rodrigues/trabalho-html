let textos = [
    "Tudo começou no início do século passado, com máquinas mecânicas como a Máquina Analítica concebida por Charles Babbage em 1837. Embora nunca tenha sido construída em sua época, essa máquina é considerada um protótipo dos computadores modernos, com capacidade de realizar cálculos complexos. A virada do século testemunhou o surgimento dos primeiros computadores eletromecânicos, como o Mark I, desenvolvido por Howard Aiken e sua equipe em parceria com a IBM em 1944. Esse computador ocupava uma sala inteira e era utilizado principalmente para cálculos científicos.",
    "A verdadeira revolução, no entanto, ocorreu com o advento dos computadores eletrônicos. O ENIAC (Electronic Numerical Integrator and Computer), construído em 1946, foi o primeiro computador totalmente eletrônico e programável. Desenvolvido pelos engenheiros John Presper Eckert e John Mauchly, o ENIAC marcou o início da era dos computadores digitais. A década de 1950 viu o surgimento dos computadores de segunda geração, que utilizavam transistores em vez de válvulas eletrônicas, tornando-os mais compactos, rápidos e eficientes. O IBM 1401, lançado em 1959, foi um dos pioneiros dessa geração, popularizando o uso de computadores na indústria e negócios.",
    "A evolução persistiu com os computadores de terceira geração na década de 1960, que utilizaram circuitos integrados, possibilitando uma redução significativa do tamanho dos sistemas. A IBM lançou a série System/360, estabelecendo um padrão de compatibilidade entre diferentes modelos. A década de 1970 foi marcada pelo advento dos microprocessadores, como o Intel 4004, lançado em 1971, que consolidou a ideia de computadores pessoais. A Apple, fundada por Steve Jobs e Steve Wozniak, lançou o Apple II em 1977, tornando os computadores mais acessíveis ao público em geral.",
    "Os anos seguintes testemunharam uma rápida evolução com o surgimento de computadores pessoais, laptops e, eventualmente, dispositivos móveis. O IBM PC, lançado em 1981, distribuiu o padrão para os computadores pessoais, enquanto a Microsoft lançou o sistema operacional MS-DOS. A história dos computadores é uma narrativa de inovação contínua, indo além da cronologia mencionada. Hoje, vivemos na era dos supercomputadores, inteligência artificial e computação em nuvem, mostrando como essa história continua a se desdobrar em particulares surpreendentes.",
]

const pText = document.getElementById("pText")
const btnVoltarTexto = document.getElementById("btnVoltarTexto")
const btnAvancarTexto = document.getElementById("btnAvancarTexto")
let cont = 0;

pText.innerHTML = textos[cont]

window.onload = () => console.log(cont)

btnAvancarTexto.addEventListener("click", () => {
    cont += 1
    pText.innerHTML = textos[cont]

    if(cont >= 3 || cont == 4){
        cont = -1
    }
})

btnVoltarTexto.addEventListener("click", () => {
    cont = cont - 1
    if(cont < 0 || cont == -1){
        cont = 0
    }

    pText.innerHTML = textos[cont]
})