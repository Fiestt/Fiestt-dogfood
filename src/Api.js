class Api {
    constructor(token) {
        this.path = "https://api.react-learning.ru";
        this.token = token;
    }
    getProducts() {
        return fetch(`${this.path}/products`, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        .then(res => res.json())
        .then(data => data);
    }
    getProduct() {

    }
    addProduct() {

    }
    updProduct() {

    }
    delProduct() {

    }
    logIn() {

    }
    signUp() {

    }
}

export default Api;