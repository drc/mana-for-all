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

<form class="flex" on:submit|preventDefault={calculateForm}>
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
        <label for="white"><span>White</span> <i class="ms ms-w ms-cost"></i></label>
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
        <label for="blue"><span>Blue</span> <i class="ms ms-u ms-cost"></i></label>
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
        <label for="black"><span>Black</span> <i class="ms ms-b ms-cost"></i></label>
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
        <label for="red"><span>Red</span> <i class="ms ms-r ms-cost"></i></label>
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
        <label for="green"><span>Green</span> <i class="ms ms-g ms-cost"></i></label>
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
        <input type="submit" value="Calculate" />
        <input type="reset" value="Reset" />
    </div>
</form>

<Results {deck} />

<style>
    input {
        font-size: inherit;
    }

    input[type="submit"] {
        margin-bottom: 4svh;
        height: 5svh;
        background-color: var(--text);
        color: var(--background);
        border: 0;
        border-radius: 40px;
    }

    input[type="reset"] {
        background-color: var(--background);
        border: unset;
        color: var(--text);
        border-radius: 40px;
    }

    input[type="number"] {
        background-color: var(--background);
        color: var(--text);
        box-sizing: border-box;
        width: 100%;
        min-width: 15ch;
        max-width: 30ch;
        border: 1px solid var(--text);
        border-radius: 0.25rem;
        padding: 0.25rem 0.5rem;
        line-height: 1.1;
    }

    input[type="number"]::placeholder {
        color: var(--text);
    }

    select {
        all: unset;
        font-size: inherit;
        box-sizing: border-box;
        width: 100%;
        min-width: 15ch;
        max-width: 30ch;
        border: 1px solid var(--text);
        border-radius: 0.25em;
        padding: 0.25em 0.5em;
        cursor: pointer;
        line-height: 1.1;
    }

    select::before,
    select::after {
        box-sizing: border-box;
    }

    select::after {
        content: "";
        width: 0.8em;
        height: 0.5em;
        background-color: var(--text);
        clip-path: polygon(100% 0%, 0 0%, 50% 100%);
        justify-content: end;
    }

    /* Chrome, Safari, Edge, Opera */
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type="number"] {
        -moz-appearance: textfield;
    }

    @media only screen and (min-width: 845px) {
        .flex {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            height: 30svh;
            align-items: center;
        }

        .flex > div {
            display: flex;
            flex-direction: column;
            /* border: 1px solid blue; */
        }

        .flex > div:last-child {
            /* background: red; */
            flex-grow: 1;
            flex-basis: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        input[type="submit"],
        input[type="reset"] {
            width: 40%;
        }
    }

    /* 1170×2532 pixels at 460ppi */
    @media only screen and (max-width: 844px) {
        label {
            display: block;
            margin: 2svh 0;
            font-size: 1.5rem;
        }

        label > span {
            display: none;
        }

        select {
            display: block;
            width: 100%;
            box-sizing: border-box;
            max-width: unset;
        }
        input {
            display: block;
            width: 100%;
            box-sizing: border-box;
            max-width: initial;
        }

        input[type="number"] {
            max-width: unset;
        }

        input[type="submit"],
        input[type="reset"] {
            margin-top: 2svh;
        }

        input[type="submit"] {
            height: 3rem;
        }

        input[type="reset"] {
            border: unset;
        }
    }
</style>
