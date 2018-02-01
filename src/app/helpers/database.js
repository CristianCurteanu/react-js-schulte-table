const name = 'schulte_storage'

var idb = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

var request = idb.open(name, 2);

request.onupgradeneeded = (event) => {
    let db = event.target.result
    let store = db.createObjectStore('statistics', {
        autoIncrement: true,
        keyPath: 'id'
    })
    let index = store.createIndex('timestamp', 'timestamp')
}

module.exports = request