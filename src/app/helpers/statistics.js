import storage from './database.js'

module.exports = () => {
    return {
        update: function() {
            var canvas = document.getElementById('stats-chart')
            var datas

            storage.onsuccess = () => {
                var db = storage.result
                var trx = db.transaction('statistics', 'readwrite')
                var store = trx.objectStore('statistics')

                // Storage operations
                var request = store.getAll()

                request.onsuccess = () => {
                    datas = request.result
                    var labels = []
                    var values = []
                    for (let i = 0; i < datas.length; i++) {
                        labels[i] = new Date(datas[i].timestamp).toTimeString()
                        values[i] = datas[i].result
                    }
                    var data = {
                        labels,
                        datasets: [{
                            label: "Game result",
                            data: values,
                            fill: false,
                            borderColor: "rgb(75, 192, 192)",
                            lineTension: 0.1
                        }]
                    }

                    var statisticsChart = new Chart(canvas, {
                        type: 'line',
                        data: data,
                        options: {
                            scales: {
                                yAxes: [{
                                    stacked: true
                                }]
                            }
                        }
                    })
                }

                request.oncomplete = () => {
                    request.result.close()
                }
            }
        }
    }
}