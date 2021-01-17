class Coins{
    constructor(gp, tibiaCoins, cotacao){
        this.gp = gp;
        this.tibiaCoins = tibiaCoins;
        this.cotacao = cotacao
    }


    getTotalTibiaCois(){
        //retorna quantas tibia coins voce tem com base nas gps informadas
        const suasCoins = this.gp/this.cotacao;
        if(this.tibiaCoins == null){
            this.tibiaCoins = suasCoins 
        }
        return suasCoins;
    }

    getTotalEmReal(){
        const quantidade25Coins = Math.round(this.tibiaCoins/25);
        const dinheiro = quantidade25Coins * this.cotacao;

        return(dinheiro);

    }
}


module.exports = Coins;