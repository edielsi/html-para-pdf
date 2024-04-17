
function gerar_pdf() {
    var conteudo = document.getElementById('conteudo');

    const doc = new jsPDF();

    doc.fromHTML(conteudo, 15, 15);
    
    doc.save("arquivo.pdf");
}