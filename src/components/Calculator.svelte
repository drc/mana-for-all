<script>
    import Results from "./Results.svelte";

    import Deck, { limited, constructed } from "../util/Deck";

    let deck;

    let init = () => {
        deck = new Deck();
    };

    let calculateForm = e => {
        const formData = new FormData(e.target);
        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = parseInt(value) || 0;
        }
        console.log(data);
        deck.format = data.format;
        deck.cards = data.cards;
        deck.white.mana = data.white;
        deck.blue.mana = data.blue;
        deck.black.mana = data.black;
        deck.red.mana = data.red;
        deck.green.mana = data.green;

        deck.update();

        console.log(deck);
    };
    init();
</script>

<form on:submit|preventDefault={calculateForm}>
    <div>
        <label for="format">Format</label>
        <select name="format" id="format">
            <option value={limited}>Limited</option>
            <option value={constructed}>Constructed</option>
        </select>
    </div>
    <div>
        <label for="cards">
            Non-Land Cards <i class="ms ms-rarity ms-rare"></i>
        </label>
        <input
            type="number"
            inputmode="numeric"
            pattern="[0-9]*"
            id="cards"
            name="cards"
            placeholder="0"
            min="0"
            max="40"
            value=""
        />
    </div>
    <div>
        <label for="white"> White <i class="ms ms-w ms-cost"></i></label>
        <input
            type="number"
            id="white"
            name="white"
            placeholder="0"
            inputmode="numeric"
            min="0"
            max="40"
            value=""
        />
    </div>
    <div>
        <label for="blue">Blue <i class="ms ms-u ms-cost"></i></label>
        <input
            type="number"
            id="blue"
            name="blue"
            placeholder="0"
            inputmode="numeric"
            min="0"
            max="40"
            value=""
        />
    </div>
    <div>
        <label for="black">Black <i class="ms ms-b ms-cost"></i></label>
        <input
            type="number"
            id="black"
            name="black"
            placeholder="0"
            inputmode="numeric"
            min="0"
            max="40"
            value=""
        />
    </div>
    <div>
        <label for="red">Red <i class="ms ms-r ms-cost"></i></label>
        <input
            type="number"
            id="red"
            name="red"
            placeholder="0"
            inputmode="numeric"
            min="0"
            max="40"
            value=""
        />
    </div>
    <div>
        <label for="green">Green <i class="ms ms-g ms-cost"></i></label>
        <input
            type="number"
            id="green"
            name="green"
            placeholder="0"
            inputmode="numeric"
            min="0"
            max="40"
            value=""
            on:keydown={e =>
                e.key === "Tab"
                    ? document.getElementById("format").focus()
                    : null}
        />
    </div>
    <div>
        <label for="submit" style="display: none;" aria-label="Calculate"
            >Calculate</label
        >
        <input type="submit" value="Calculate" />
    </div>
</form>

<Results {deck} />

<style>
    input {
        font-size: inherit;
    }

    select {
        font-size: inherit;
    }

    /* 1170×2532 pixels at 460ppi */
    @media only screen and (max-width: 844px) {
        label {
            display: block;
            margin: 2svh 0;
        }
        select {
            display: block;
            width: 100%;
            box-sizing: border-box;
        }
        input {
            display: block;
            width: 100%;
            box-sizing: border-box;
        }

        input[type="submit"] {
            margin-top: 2svh;
        }
    }
</style>
