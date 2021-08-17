new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(){
            alert(Date.now())
        },atualizaValor(event){
            this.valor=event.target.value
        }

    }
})