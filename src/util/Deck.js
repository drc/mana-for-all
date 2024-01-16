// Constants defining deck size limits for different formats
const limited = 40; // Limited format deck size
const constructed = 60; // Constructed format deck size

// Class representing a Magic: The Gathering deck
class Deck {
    constructor() {
        // Mana color properties with initial values
        this.white = { mana: 0, ratio: 0 };
        this.blue = { mana: 0, ratio: 0 };
        this.black = { mana: 0, ratio: 0 };
        this.red = { mana: 0, ratio: 0 };
        this.green = { mana: 0, ratio: 0 };
        // Total mana symbols and cards in the deck
        this.symbols = 0;
        this.cards = 0;
        // Default deck format size set to limited
        this.format = limited;
    }

    // Method to calculate and return the total number of mana symbols in the deck
    total() {
        return this.symbols;
    }

    // Method to update deck information, including total symbols and mana ratios
    update() {
        // Calculate the total mana symbols in the deck
        this.symbols =
            this.white.mana +
            this.blue.mana +
            this.black.mana +
            this.red.mana +
            this.green.mana;

        // Check if there are mana symbols in the deck
        if (this.symbols > 0) {
            // Calculate and set mana ratios for each color based on the total symbols
            this.white.ratio = this._getRatio(this.white.mana);
            this.blue.ratio = this._getRatio(this.blue.mana);
            this.black.ratio = this._getRatio(this.black.mana);
            this.red.ratio = this._getRatio(this.red.mana);
            this.green.ratio = this._getRatio(this.green.mana);
        }
    }

    // Private method to calculate and return the ratio of a specific mana color
    _getRatio(mana) {
        return Math.floor((mana / this.symbols) * (this.format - this.cards));
    }
}

// Export the Deck class and deck size constants for external use
export { Deck, limited, constructed };
