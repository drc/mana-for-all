<script>
    import Results from "./Results.svelte";

    import Deck, { limited, constructed } from "../util/Deck";

    let deck;

    let init = () => {
        deck = new Deck();
    };

    let calculateLand = (color, f, t) => {
        return Math.floor((color / totalManaSymbols) * (f - t));
    };
    init();

    $: console.log(deck);
    $: deck
</script>

<form on:submit|preventDefault={deck.update()}>
    <div>
        <label for="format">Format</label>
        <select
            name="format"
            id="format"
            bind:value={deck.format}
            on:input={deck.update()}
        >
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
            inputmode="numeric"
            id="totalCards"
            min="0"
            max="40"
            bind:value={deck.cards}
            on:input={deck.update()}
        />
    </div>
    <div>
        <label for="white">White <i class="ms ms-w ms-cost"></i></label>
        <input
            type="number"
            inputmode="numeric"
            min="0"
            max="40"
            bind:value={deck.white.mana}
            on:input={deck.update()}
        />
    </div>
    <div>
        <label for="blue">Blue <i class="ms ms-u ms-cost"></i></label>
        <input
            type="number"
            inputmode="numeric"
            min="0"
            max="40"
            bind:value={deck.blue.mana}
            on:input={deck.update()}
        />
    </div>
    <div>
        <label for="black">Black <i class="ms ms-b ms-cost"></i></label>
        <input
            type="number"
            inputmode="numeric"
            min="0"
            max="40"
            bind:value={deck.black.mana}
            on:input={deck.update()}
        />
    </div>
    <div>
        <label for="red">Red <i class="ms ms-r ms-cost"></i></label>
        <input
            type="number"
            inputmode="numeric"
            min="0"
            max="40"
            bind:value={deck.red.mana}
            on:input={deck.update()}
        />
    </div>
    <div>
        <label for="green">Green <i class="ms ms-g ms-cost"></i></label>
        <input
            type="number"
            inputmode="numeric"
            min="0"
            max="40"
            bind:value={deck.green.mana}
            on:input={deck.update()}
            on:keydown={e =>
                e.key === "Tab"
                    ? document.getElementById("format").focus()
                    : null}
        />
    </div>
    <button type="submit">Calculate</button>
</form>

<!-- TODO: Nested component> -->
<Results {deck} />

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

    .deck {
        border: 1px solid black;
        border-radius: 5px;
    }
</style>
