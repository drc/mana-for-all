<script>

    const constructed = 40;

    let white = 0;
    let blue = 0;
    let black = 0;
    let red = 0;
    let green = 0;
    let total = 0;

    $: {
        total = white + blue + black + red + green;
    }

    var resetVal = () => {
        white = blue = black = red = green = 0;
    }
</script>

<form>
    <div>
        <label for="white">White <i class="ms ms-w ms-cost"></i></label>
        <input type="number" min="0" max="40" bind:value={white} />
    </div>
    <div>
        <label for="blue">Blue <i class="ms ms-u ms-cost"></i></label>
        <input type="number" min="0" max="40" bind:value={blue} />
    </div>
    <div>
        <label for="black">Black <i class="ms ms-b ms-cost"></i></label>
        <input type="number" min="0" max="40" bind:value={black} />
    </div>
    <div>
        <label for="red">Red <i class="ms ms-r ms-cost"></i></label>
        <input type="number" min="0" max="40" bind:value={red} />
    </div>
    <div>
        <label for="green">Green <i class="ms ms-g ms-cost"></i></label>
        <input type="number" min="0" max="40" bind:value={green} />
    </div>
    <div>
        Total : {total}
    </div>
    <button on:click|preventDefault={resetVal}>Reset</button>
</form>

<style>
    input {
        font-family: monospace;
    }
</style>
