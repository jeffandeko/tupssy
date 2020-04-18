const url = 'http://192.168.100.8:3000/';
const appApi = (data) => new Promise((resolve, reject) => {
    fetch(url, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(result => {
        resolve(result)
    }).catch(e => reject(e))
})
export {
    appApi
}
