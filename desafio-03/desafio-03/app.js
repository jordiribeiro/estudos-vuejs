new Vue({
    el: '#desafio',
    data: {
        valor: 0
    }, watch:{
        valor(){
            setTimeout(()=>{
                this.valor=0
            },5000)
        }
    },methods:{

    },computed:{
        resultado(){
            return this.valor==37 ? 'O valor e 37' : 'O valor nao e 37'
        }
    }
});