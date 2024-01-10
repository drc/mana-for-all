<script>
    export let deck;
</script>

<div>
    <p>Total Cards: {deck.format}</p>
    <p>Total Non-Land Cards: {deck.cards}</p>
    <p>Land to fill: {deck.format - deck.cards}</p>
    <p>Total Mana: {deck.total()}</p>
    {#if deck.white.ratio}
    <p class="deck white">{deck.white.ratio}-{deck.white.ratio + 1} Plains</p>
    {/if}
    {#if deck.blue.ratio}
        <p class="deck blue">{deck.blue.ratio}-{deck.blue.ratio + 1} Islands</p>
    {/if}
    {#if deck.black.ratio}
        <p class="deck black">
            {deck.black.ratio}-{deck.black.ratio + 1} Swamps
        </p>
    {/if}
    {#if deck.red.ratio}
        <p class="deck red">{deck.red.ratio}-{deck.red.ratio + 1} Mountains</p>
    {/if}
    {#if deck.green.ratio}
        <p class="deck green">
            {deck.green.ratio}-{deck.green.ratio + 1} Forests
        </p>
    {/if}
</div>