<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	export let name = 'NAME';
</script>

<div class="flex flex-col items-center justify-center">
	<Avatar.Root class="bg-slate-500">
		<Avatar.Image
			src="https://gravatar.com/avatar/10b52bb2016s71b9975f20faaa193bf4f?s=400&d=robohash&r=x"
			alt="@shadcn"
		/>
		<Avatar.Fallback>CN</Avatar.Fallback>
	</Avatar.Root>

	<h1 class="mt-1 text-center">Hello, {name}</h1>
	<h2 class="mt-1 text-center">
		<strong>Your medicines for <span class="text-teal-700">today</span> </strong>
	</h2>
</div>
