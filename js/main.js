const app = new Vue({
    
    el: '#app',
    data: {
        ricette:[
            {
                text: 'Torta della Nonna',
                tested: false,
            },
            {
                text: 'Tiramisù',
                tested: false,
            },
            {
                text: 'Crema pasticcera',
                tested: false,
            },
        ],
       
        addText: '',
     },
        methods:{
            nuovaRicetta(){

                console.log(this.addText)
                if(!this.addText == ''){
                    this.ricette.push({
                        text: this.addText,
                        tested: false,
                    });
                
                    this.addText = '';
                };
            },
            elimina(index){
                console.log(index);
                this.ricette.splice(index, 1);

            },
        
    },
});