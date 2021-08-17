new Vue({
    el: '#desafio',
    data: {
        nome: 'Jordi',
        idade: 19,
        link: 'http://www.biovert.com.br/wp-content/uploads/2019/03/%C3%A1gua-e-floresta.jpg',
        input: 'Jordi Ribeiro'
    },
    methods: {
        soma(){
            return this.idade*3;
        },
        aleatorio(){
            return Math.random()*10;
        }
    }
})