<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { SunIcon, X, Check, Sun } from 'lucide-svelte';
	export let onUpdateIsTaken: Function; // Function to update the isTaken status in the store
	export let time = new Date('2024-01-21T13:45:00Z');

	export let MedName = 'CEFIX DS 30ML';
	export let hasTaken: Boolean;

	$: {
		console.log(hasTaken);
		onUpdateIsTaken(hasTaken);
	}
</script>

<div
	class={hasTaken
		? 'bg-green-300' + ' mx-auto my-2 max-w-sm overflow-hidden rounded-3xl '
		: 'bg-rose-300' + ' mx-auto my-2 max-w-sm overflow-hidden rounded-3xl '}
>
	<div class="flex items-center justify-between bg-inherit py-2 pr-4">
		<div class="flex flex-shrink-0 items-center">
			<svg
				class="mr-2 h-4 fill-current text-gray-800"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
			>
			</svg>
			<div class="flex flex-col">
				<div class="flex items-center text-center text-sm text-gray-800">
					<Sun class="mr-2 w-5" />
					{time
						.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
						.toLocaleLowerCase()}
				</div>
				<div class="text-md font-bold text-gray-800">{MedName}</div>
			</div>
		</div>
		<SunIcon class="h-12 w-12" />
	</div>
	<Separator class="self-center bg-slate-600" />
	<div class="bg-inherit px-4 py-2">
		<div class="flex w-full items-center justify-between px-10">
			<button
				class="flex items-center"
				on:click={() => {
					hasTaken = false;
				}}
			>
				<X class="text-red-600" />
				<span class="text-md text-red-600">Missed</span>
			</button>
			<button
				class="flex items-center"
				on:click={() => {
					hasTaken = true;
				}}
			>
				<Check class="text-green-600" />
				<span class="text-md text-green-600">Taken</span>
			</button>
		</div>
	</div>
</div>
