class Char{
    constructor(level, vidaBase, manaBase){
        this.level = level;
        this.manaBase = manaBase;
        this.vidaBase = vidaBase;
    }

    getXp(){
        const exp = parseInt((50/3) * (Math.pow(this.level, 3)) - (100*(Math.pow(this.level, 2))) + ((850/3)*this.level) -200);
        return exp;
    }


    getHuntSharedXp(){
        const lvlMax = ((this.level/100) * 50) + (this.level);
        const lvlMin = Math.ceil(((this.level/100) * ((100/3)*2)));

        return [lvlMax, lvlMin];
    }

    getLife(){
        const life = (this.level - 8)*this.vidaBase + (185);
        return life;

    }

    getMana(){
        const mana = (this.level - 8)*this.manaBase + (90);
        return mana;
    }
}

module.exports = Char;