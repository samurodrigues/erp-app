import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

export default function clientesPDF(clientes) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [
        {
            text: 'Clientes e Fornecedores',
            fontSize: 15,
            bold: true,
            margin: [15, 20, 0, 45] //Left, Right, Top, Bottom
        }
    ];

    const dados = clientes.map((cliente) => {
        return[
            {text: cliente.rzSocial, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: cliente.cnpj, fontSize: 9, margin: [0, 2, 0, 2]},
        ];
    })
    
    const details = [
        {
            table: {
                headerRows: 1,
                widths: ['*', '*'],
                body: [
                    // Header (Table Header - Cabecalho)
                    [
                        {text: 'Razão Social', style: 'tableHeader', fontSize: 10, bold: true},
                        {text: 'Atividade', style: 'tableHeader', fontSize: 10, bold: true},
                    ], 
                    // Content (Conteúdo)
                    ...dados
                ]
            },
            layout: {
                fillColor: function (rowIndex, node, columnIndex) { return (rowIndex % 2 === 0) ? '#CCCCCC' : null

                }
            } // headerLineOnly, lightHorizontalLines
        }
    ];

    function Rodape(currentPage, pageCount) {
        return [
            {
                text: currentPage + ' / ' + pageCount,
                alignment: 'right',
                fontSize: 9,
                margin: [0, 10, 20, 0]
            }
        ]
    };

    const docDefinition = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40], 

        header: [reportTitle],
        content: [details],
        footer: Rodape
    }

    pdfMake.createPdf(docDefinition).download();
}