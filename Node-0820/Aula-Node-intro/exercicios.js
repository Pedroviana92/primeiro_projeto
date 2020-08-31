function adicionarHttp(url) {
    return ("http://" + url)
}

function processar( sitesWeb , callback){

    for( let i=0; i<sitesWeb.length; i++) {
        sitesWeb[i] = callback(sitesWeb[i])
    }
    return sitesWeb
    
}

let sitesWeb = ["www.google.com", "www.g1.com.br"]

processar(sitesWeb, adicionarHttp)
console.log(sitesWeb)