export function getHeaders(){
    let config = {
        headers : {
            Authorization : `Bearer ${window.sessionStorage.getItem("access_token")}`
        }
    }
    return config
}