<script lang="ts">
	import { PillIcon, CircleUserRound, CalendarDaysIcon } from 'lucide-svelte';
	import { selectedTab } from '$lib/things_to_hold'; // import the store

	const selectTab = (tab: 'home' | 'profile' | 'calendar') => {
		selectedTab.set(tab); // set the store value
	};

	const handleKeyDown = (event: KeyboardEvent, tab: 'home' | 'profile' | 'calendar') => {
		if (event.key === 'Enter' || event.key === ' ') {
			selectTab(tab);
		}
	};
</script>

<div class="flex justify-around bg-teal-700 p-2">
	<div
		role="button"
		tabindex="0"
		class="rounded-full p-2 {$selectedTab === 'home' ? 'bg-white text-teal-700' : 'text-white'}"
		on:click={() => selectTab('home')}
		on:keydown={(event) => handleKeyDown(event, 'home')}
	>
		<PillIcon class="h-6 w-6" />
	</div>
	<div
		role="button"
		tabindex="0"
		class="rounded-full p-2 {$selectedTab === 'profile' ? 'bg-white text-teal-700' : 'text-white'}"
		on:click={() => selectTab('profile')}
		on:keydown={(event) => handleKeyDown(event, 'profile')}
	>
		<CircleUserRound class="h-6 w-6" />
	</div>
	<div
		role="button"
		tabindex="0"
		class="rounded-full p-2 {$selectedTab === 'calendar' ? 'bg-white text-teal-700' : 'text-white'}"
		on:click={() => selectTab('calendar')}
		on:keydown={(event) => handleKeyDown(event, 'calendar')}
	>
		<CalendarDaysIcon class="h-6 w-6" />
	</div>
</div>
