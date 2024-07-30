document.getElementById("myChart").addEventListener("click", (e) => { e.preventDefault() })
const ctx = document.getElementById('myChart');

// Índice del elemento que quieres resaltar por defecto (0 para el primer elemento)
const highlightedIndex = 2; // Cambia este valor al índice que desees resaltar

const data = {
    labels: [
        'Advisors 2%                             ',
        'Foundation 17.7%                           ',
        'Seed Round 12.3%                           ',
        'Team 15%                                 ',
        'Airdrop & Community 4%                   ',
        'Ecosystem & Rewards 3%                  ',
        'Marketing 15%                            ',
        'Liquidity & Listing 4%                   '],
    datasets: [{
        label: '# of Votes',
        data: [2.0, 17.7, 12.3, 15.0, 4.0, 3.0, 15.0, 4.0],
        borderWidth: 1,
        backgroundColor: [
            'rgba(179, 61, 80, 0.3)',    // Rojo oscuro
            'rgba(36, 110, 159, 0.3)',   // Azul oscuro
            'rgba(179, 146, 61, 0.4)',   // Amarillo oscuro
            'rgba(52, 135, 135, 0.3)',   // Verde oscuro
            'rgba(107, 72, 179, 1)',   // Púrpura oscuro
            'rgba(179, 111, 45, 0.3)'    // Naranja oscuro
        ],
        hoverBackgroundColor: [
            'rgba(255, 129, 155, 1)',    // Rojo claro brillante
            'rgba(36, 110, 159, 1)',    // Azul claro brillante
            'rgba(255, 232, 129, 1)',    // Amarillo claro brillante
            'rgba(129, 255, 255, 1)',    // Verde claro brillante
            'rgba(107, 72, 179, 1)',    // Púrpura claro brillante
            'rgba(255, 188, 129, 1)'     // Naranja claro brillante
        ]
    }]
};

var myChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: {
        layout: {
            padding: 20
        },
        hoverOffset: 50,
        plugins: {
            tooltip: {
                enabled: true
            },
            legend: {
                labels: {
                    color: '#ffffff'  // Color de las etiquetas de la leyenda
                },
                align: 'start',
                fullSize: false,
                maxWidth: 20
            }
        }
    }
});

myChart.setActiveElements([
    { datasetIndex: 0, index: 4 },
]);