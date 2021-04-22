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
        input: false,
        correction: {
            text: '',
            index: null,
            visibility: false,
        },
     },
        methods:{
            nuovaRicetta(){
                this.input = true;
                console.log(this.addText)
                if(!this.addText == ''){
                    this.ricette.push({
                        text: this.addText,
                        tested: false,
                    });
                
                    this.addText = '';
                    this.$refs.input.focus();
                };
            },
            elimina(index){
                console.log(index);
                this.ricette.splice(index, 1);

            },
            check(index){
                console.log(index);
                this.ricette[index].tested = !this.ricette[index].tested

                console.log(this.ricette[index].tested)
            },
            modificaRicetta(index){
            //   correction: {
            //         text: '',
            //         index: null,
            //         visibility: false,
            //     }
            
            this.correction.text = this.ricette[index].text;
            this.correction.index = index;
            this.correction.visibility = true;
            },
            riscriviRicetta(){
                this.ricette[this.correction.index].text =this.correction.text, 
                
                this.eliminaModifiche();
            },
            eliminaModifiche(){
                this.correction.text = '';
                this.correction.index = null;
                this.correction.visibility = false;
            },
            add(){
                this.input = ! this.input;

            }
    },
});