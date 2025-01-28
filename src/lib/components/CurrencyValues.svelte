<script lang="ts">
	import { fetchValues, values } from './store.svelte';

	let b: any;
	let from = $state('');

	let result = { ['']: [''] };
	let currencyDesc = $state(0.0);
	let total = $derived(from * currencyDesc);
	let promise = fetchValues();
</script>

<section>
	<div class="converter-container">
		<h2>Currency Converter</h2>
		{#await promise}
			<div>pls wait</div>
		{:then results}
			<div class="content">
				<input class="input-currency-text" bind:value={from} />

				<div>
					<input type="text" disabled placeholder="USD" />
					<div class="select-container">
						<select bind:value={currencyDesc2}>
							{#each Object.entries($values) as [key2, index2]}
								<option value={index2}>{key2}</option>
							{/each}
						</select>
					</div>

					<div class="result">$ {total.toFixed(3)}</div>
				</div>
			</div>
		{/await}
	</div>
</section>
