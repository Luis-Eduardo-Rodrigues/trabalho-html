const texts = [
    {
        problema: "Ventoinhas obstruídas, dissipadores de calor sujos ou falhas no sistema de resfriamento podem levar ao superaquecimento",
        solucao: "Além de limpar as ventoinhas e dissipadores, certifique-se de que o gabinete do computador tenha ventilação adequada. Considere adicionar ventoinhas extras para melhorar o fluxo de ar. Se o problema persistir, pode ser necessário substituir o cooler da CPU ou o sistema de resfriamento.",
    },
    {
        problema: "Setores defeituosos, mau funcionamento do cabeçote de leitura/gravação",
        solucao: " Faça backups frequentes e utilize ferramentas como o CHKDSK no Windows ou o fsck no Linux para verificar e reparar setores defeituosos. Considere substituir o disco rígido se os problemas persistirem."
    },
    {
        problema: "Conexões soltas ou cabos danificados",
        solucao: "Além de verificar as conexões, certifique-se de que os cabos estejam em bom estado. Considere o uso de abraçadeiras ou organizadores de cabos para evitar sobrecargas desnecessárias. Em caso de cabos danificados, substitua-os imediatamente."
    },
    {
        problema: "Erros de memória, falhas frequentes.",
        solucao: " Execute testes de memória prolongada usando ferramentas como o Memtest86. Se identificar módulos defeituosos, substitua-os. Certifique-se de que a RAM esteja instalada corretamente nos slots da placa-mãe."
    },
    {
        problema: "Falhas na placa-mãe podem resultar em mau funcionamento geral.",
        solucao: "Diagnosticar problemas usando ferramentas específicas, como o software de diagnóstico da placa-mãe. -se de que a placa-mãe esteja atualizada com as últimas atualizações de BIOS. Se a placa estiver além do reparo, considere uma substituição."
    },
    {
        problema: "Artefatos gráficos, trabalhos em jogos.",
        solucao: "Além de atualizar os drivers, monitore a temperatura da GPU usando ferramentas como o MSI Afterburner. Considere a limpeza do dissipador de calor e, se necessário, aplique nova pasta térmica. Se os problemas persistirem, pode ser necessário substituir a placa de vídeo."
    },
    {
        problema: "Instabilidade sem energia, desligamentos aleatórios.",
        solucao: "Utilize um multímetro para verificar a tensão da fonte de alimentação. certifique-se de que a capacidade de garantir energia suficiente atende às demandas do sistema. Se a fonte estiver defeituosa, substitua-a por uma de qualidade e com capacidade suficiente para suportar todos os componentes."
    }
]

let cont = 0

function atualizarConteudo() {

    const h2Problema = document.createElement("h2");
    h2Problema.innerHTML = texts[cont].problema;

    const pSolucao = document.createElement("p");
    pSolucao.innerHTML = texts[cont].solucao;

    const contentArea = document.querySelector(".content-area");
    contentArea.innerHTML = '';

    contentArea.appendChild(h2Problema);
    contentArea.appendChild(pSolucao);
}

const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        cont = index;
        atualizarConteudo();
    });
});

atualizarConteudo();