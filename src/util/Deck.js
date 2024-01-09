const limited = 40;
const constructed = 60;
class Deck {
    constructor() {
        this.white = { mana: 0, ratio: 0 };
        this.blue = { mana: 0, ratio: 0 };
        this.black = { mana: 0, ratio: 0 };
        this.red = { mana: 0, ratio: 0 };
        this.green = { mana: 0, ratio: 0 };
        this.symbols = 0;
        this.cards = 0;
        this.format = limited;
    }

    total() {
        return this.symbols;
    }

    update() {
        this.symbols =
            this.white.mana +
            this.blue.mana +
            this.black.mana +
            this.red.mana +
            this.green.mana;

        if (this.symbols > 0) {
            this.white.ratio = this._getRatio(this.white.mana);
            this.blue.ratio = this._getRatio(this.blue.mana);
            this.black.ratio = this._getRatio(this.black.mana);
            this.red.ratio = this._getRatio(this.red.mana);
            this.green.ratio = this._getRatio(this.green.mana);
        }
    }

    _getRatio(mana) {
        return Math.floor(
            (mana / this.symbols) * (this.format - this.cards)
        );
    }
}
export {limited, constructed};
export default Deck;