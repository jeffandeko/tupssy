const url = 'http://74.208.251.115/api/v1/';
const appApi = (data) => new Promise((resolve, reject) => {
    // alert(url + data.page
    fetch(url + data.page, {
        method: data.method,
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data.datam)
    }).then(res => res.json()).then(result => {
        resolve(result)
    }).catch(e => reject(e))
})
export {
    appApi
}