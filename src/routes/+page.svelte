<script>
	import Header from '$lib/things/Header.svelte';
	import ShouldTakeView from '$lib/things/ShouldTakeView.svelte';
	import BottomBar from '$lib/things/BottomBar.svelte';

	import { selectedTab } from '$lib/things_to_hold';
</script>

<div class="bg-teal-700">
	<div class="flex h-screen flex-col">
		<header class="h-1/10 bg-slate-100">
			<Header />
		</header>
		<main class="flex-grow rounded-b-[2rem] bg-slate-100">
			{#if $selectedTab == 'home'}
				<ShouldTakeView />
			{:else}
				<h1>not impl yet</h1>
			{/if}
		</main>
		<footer class="h-1/10 rounded-b-md bg-teal-700">
			<BottomBar />
		</footer>
	</div>
</div>
