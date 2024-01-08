<script>
    const limited = 40;
    const constructed = 60;

    class Deck {
        limited = 40;
        constructed = 60;

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
            return this.white.mana + this.blue.mana + this.black.mana + this.red.mana + this.green.mana;
        }

    }

    let deck;

    let init = () => {
        deck = new Deck();
    };

    let calculateLand = (color, f, t) => {
        return Math.floor(color / totalManaSymbols) * (f - t);
    };
    init();

    $: console.log(deck)
</script>

<form on:submit|preventDefault={init}>
    <div>
        <label for="format">Format</label>
        <select name="format" id="format" bind:value={deck.format}>
            <option value={limited}>Limited</option>
            <option value={constructed}>Constructed</option>
        </select>
    </div>
    <div>
        <label for="cards"
            >Non-Land Cards <i class="ms ms-rarity ms-rare"></i></label
        >
        <input
            type="number"
            id="totalCards"
            min="0"
            max="40"
            bind:value={deck.cards}
        />
    </div>
    <div>
        <label for="white">White <i class="ms ms-w ms-cost"></i></label>
        <input type="number" min="0" max="40" bind:value={deck.white.mana} />
    </div>
    <div>
        <label for="blue">Blue <i class="ms ms-u ms-cost"></i></label>
        <input type="number" min="0" max="40" bind:value={deck.blue.mana} />
    </div>
    <div>
        <label for="black">Black <i class="ms ms-b ms-cost"></i></label>
        <input type="number" min="0" max="40" bind:value={deck.black.mana} />
    </div>
    <div>
        <label for="red">Red <i class="ms ms-r ms-cost"></i></label>
        <input type="number" min="0" max="40" bind:value={deck.red.mana} />
    </div>
    <div>
        <label for="green">Green <i class="ms ms-g ms-cost"></i></label>
        <input
            type="number"
            min="0"
            max="40"
            bind:value={deck.green.mana}
            on:keydown={e =>
                e.key === "Tab"
                    ? document.getElementById("format").focus()
                    : null}
        />
    </div>
    <button type="submit">Reset</button>
</form>

<div>
    <p>Total Cards: {deck.format}</p>
    <p>Total Non-Land Cards: {deck.cards}</p>
    <p>Total Mana: {deck.total()}</p>
    {#if deck.white.ratio}
        <p>{deck.white.ratio}-{deck.white.ratio + 1} Plains</p>
    {/if}
    {#if deck.blue.ratio}
        <p>{deck.blue.ratio}-{deck.blue.ratio + 1} Islands</p>
    {/if}
    {#if deck.black.ratio}
        <p>{deck.black.ratio}-{deck.black.ratio + 1} Swamps</p>
    {/if}
    {#if deck.red.ratio}
        <p>{deck.red.ratio}-{deck.red.ratio + 1} Mountains</p>
    {/if}
    {#if deck.green.ratio}
        <p>{deck.green.ratio}-{deck.green.ratio + 1} Forests</p>
    {/if}
</div>

<style>
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type="number"] {
        -moz-appearance: textfield;
    }

    input {
        text-align: center;
    }
</style>
