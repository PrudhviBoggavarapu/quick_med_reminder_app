<script>
	import Med from './Med.svelte';
	import { medications } from '$lib/things_to_hold';

	// Function to update the isTaken status
	/**
	 * @param {number} medicationIndex
	 * @param {number} timeIndex
	 * @param {boolean} newIsTaken
	 */
	function updateIsTaken(medicationIndex, timeIndex, newIsTaken) {
		medications.update((currentMedications) => {
			const updatedMedications = [...currentMedications];
			updatedMedications[medicationIndex].timesToTake[timeIndex].isTaken = newIsTaken;
			return updatedMedications;
		});
	}
</script>

<h1>Not Taken</h1>

{#each $medications as medication, medicationIndex}
	{#each medication.timesToTake as timeToTake, timeIndex}
		{#if !timeToTake.isTaken}
			<Med
				time={timeToTake.date}
				MedName={medication.name}
				hasTaken={timeToTake.isTaken}
				onUpdateIsTaken={(/** @type {boolean} */ newIsTaken) =>
					updateIsTaken(medicationIndex, timeIndex, newIsTaken)}
			/>
		{/if}
	{/each}
{/each}

<h1>Taken</h1>

{#each $medications as medication, medicationIndex}
	{#each medication.timesToTake as timeToTake, timeIndex}
		{#if timeToTake.isTaken}
			<Med
				time={timeToTake.date}
				MedName={medication.name}
				hasTaken={timeToTake.isTaken}
				onUpdateIsTaken={(/** @type {boolean} */ newIsTaken) =>
					updateIsTaken(medicationIndex, timeIndex, newIsTaken)}
			/>
		{/if}
	{/each}
{/each}
