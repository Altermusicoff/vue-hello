// TODO TODAY
// REPO: vue - hello
// GOAL: stampare a schermo il contenuto di una variabile dentro un h1
// BONUS: utilizzare un data come nome del file immagine in un tag img

console.log('sfortunato');
var divApp = new Vue({
    el:'#app',
    data:{
        'saluto': 'ciao mondo',
        'img1': 'cake.png',
        'img2': 'cabin.png',
        'activeImg': 'cake.png'
    },
    methods:{
        clicca(){
            this.saluto = 'bye';
        },
        clickImg(){
            if(this.activeImg==this.img1){
                this.activeImg = this.img2;
            }else{
                this.activeImg = this.img1;
            }
        }
    }
})