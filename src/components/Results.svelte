<script>
    // Exports a prop named deck to be passed into the component.
    export let deck;
</script>

<!-- Wraps the content of the component -->
<div>
    <!-- Displays the total number of cards in the deck format. -->
    <p>Total Cards: {deck.format}</p>
    <!-- Displays the total number of non-land cards in the deck. -->
    <p>Total Non-Land Cards: {deck.cards}</p>
    <!-- Displays the number of land cards needed to meet the deck format. -->
    <p>Land to fill: {deck.format - deck.cards}</p>
    <!-- Calls the total function on the deck object to display the total mana. -->
    <p>Total Mana: {deck.total()}</p>
    {#if deck.white.ratio}
        <p class="deck white">
            {deck.white.ratio}-{deck.white.ratio + 1} Plains
        </p>
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

<style>
    /* Sets the height of the <div> to 20% of the viewport height. */
    div {
        height: 20svh;
    }

    /* Removes the height constraint for screens with a width of 844 pixels or less. */
    @media only screen and (max-width: 844px) {
        div {
            height: unset;
        }
    }
</style>
