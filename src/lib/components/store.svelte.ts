import { writable } from 'svelte/store';

import type { Writable } from 'svelte/store';

export let currency: Writable<any[]> = writable([]);
export let values: Writable<any[]> = writable([]);
export let countryName: Writable<any[]> = writable([]);
let response, data, currencyData;
let test: any;

let i;
let to = $state('');
let from = $state('');

export const fetchValues = async () => {
	response = await fetch(
		'https://api.fastforex.io/fetch-all?api_key=?&api_key=130787062a-fb7068b224-sqmgki'
	);
	data = await response.json();
	values.set(data.results);
};
