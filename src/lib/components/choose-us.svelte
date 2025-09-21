<script lang="ts">
	import { petImages, points } from '$lib/constants/constants';
	const iconColors = [
		'text-pink-600',
		'text-indigo-600',
		'text-green-600',
		'text-yellow-600',
		'text-purple-600',
		'text-teal-600',
		'text-orange-600',
		'text-red-600',
	];
</script>

<section class="relative py-16 sm:py-20 bg-white dark:bg-gray-950">
	<div class="container mx-auto px-4 sm:px-6 max-w-7xl">
		<!-- Title -->
		<h2 class="text-center text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-14 animate-fade-in">
			Why Choose Us?
		</h2>

		<div class="flex flex-col md:flex-row items-start gap-8">
			<!-- Left - Image matching right side height -->
			<div class="flex-1 rounded-2xl overflow-hidden shadow-lg animate-fade-in-left">
				<img
					src="https://images.unsplash.com/photo-1638468382965-b9afcb96e9b1?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="choose us"
					class="object-cover w-full h-full max-h-[calc(4*7rem+3*20px)] rounded-2xl"
				/>
			</div>

			<!-- Right - Points -->
			<div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5 animate-fade-in-right">
				{#each points as point, i}
					<div
						class="flex items-start gap-4 p-5 rounded-2xl shadow-md bg-white dark:bg-gray-800 transition-transform hover:scale-105"
					>
						<div class={`flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 shadow-lg shrink-0 ${iconColors[i % iconColors.length]}`}>
							<svelte:component this={point.icon} class="h-5 w-5" />
						</div>
						<p class="text-gray-800 dark:text-white text-base sm:text-lg leading-snug">{point.text}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes fade-in {
		from { opacity: 0; }
		to { opacity: 1; }
	}
	.animate-fade-in {
		animation: fade-in 0.8s ease-out forwards;
	}

	@keyframes fade-in-left {
		from { opacity: 0; transform: translateX(-20px); }
		to { opacity: 1; transform: translateX(0); }
	}
	.animate-fade-in-left {
		animation: fade-in-left 0.8s ease-out forwards;
	}

	@keyframes fade-in-right {
		from { opacity: 0; transform: translateX(20px); }
		to { opacity: 1; transform: translateX(0); }
	}
	.animate-fade-in-right {
		animation: fade-in-right 0.8s ease-out forwards;
	}
</style>
