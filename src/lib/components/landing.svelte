<script lang="ts">
	import { Page } from '$lib/types/types';
	import { APPOINTMENT_PHONE, petImages, servicesList } from '$lib/constants/constants';
	import { ArrowRight } from 'lucide-svelte';
	import DrIntro from './dr-intro.svelte';
	import ChooseUs from './choose-us.svelte';

	let { onNavigate } = $props<{ onNavigate: (page: Page) => void }>();

	// Combined Card Gradients for Services Overview (Light & Dark)
	const cardGradients = [
		'from-pink-50 via-pink-100 to-pink-100 dark:from-pink-950 dark:via-pink-900 dark:to-pink-800',
		'from-indigo-50 via-indigo-100 to-indigo-100 dark:from-indigo-950 dark:via-indigo-900 dark:to-indigo-800',
		'from-green-50 via-green-100 to-green-100 dark:from-green-950 dark:via-green-900 dark:to-green-800',
		'from-yellow-50 via-yellow-100 to-yellow-100 dark:from-yellow-950 dark:via-yellow-900 dark:to-yellow-800', // Yellow might need more contrast in dark
		'from-purple-50 via-purple-100 to-purple-100 dark:from-purple-950 dark:via-purple-900 dark:to-purple-800',
		'from-teal-50 via-teal-100 to-teal-100 dark:from-teal-950 dark:via-teal-900 dark:to-teal-800',
		'from-orange-50 via-orange-100 to-orange-100 dark:from-orange-950 dark:via-orange-900 dark:to-orange-800',
		'from-red-50 via-red-100 to-red-100 dark:from-red-950 dark:via-red-900 dark:to-red-800',
	];

	// Combined Icon Colors for Services Overview (Light & Dark)
	const iconColors = [
		'text-pink-600 dark:text-pink-400',
		'text-indigo-600 dark:text-indigo-400',
		'text-green-600 dark:text-green-400',
		'text-yellow-600 dark:text-yellow-400',
		'text-purple-600 dark:text-purple-400',
		'text-teal-600 dark:text-teal-400',
		'text-orange-600 dark:text-orange-400',
		'text-red-600 dark:text-red-400',
	];
</script>

<!-- Hero Section -->
<main class="dark:bg-gray-900 bg-white relative overflow-hidden min-h-screen flex items-center">
	<!-- Background gradient blobs -->
	<div
		class="absolute top-10 -left-40 w-72 h-72 sm:w-96 sm:h-96 bg-pink-400/50 rounded-full blur-3xl
        dark:bg-pink-700/30"
	/>
	<div
		class="absolute bottom-10 -right-40 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-400/30 rounded-full blur-3xl
        dark:bg-indigo-700/20"
	/>

	<div
		class="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 max-w-7xl relative z-10"
	>
		<!-- Left Section -->
		<div class="flex flex-col items-start text-left lg:w-1/2">
			<span class="w-16 sm:w-20 h-2 bg-gray-800 dark:bg-white mb-6" />

			<h1
				class="font-bebas-neue uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight dark:text-white text-gray-800"
			>
				Compassionate Care
				<span class="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-pink-500 dark:text-pink-400"
					>For Your Beloved Pets</span
				>
			</h1>

			<p class="mt-6 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300">
				We are dedicated to providing the highest level of veterinary medicine along with friendly,
				compassionate service.
			</p>

			<div class="flex mt-8 gap-4 flex-wrap">
				<button
					onclick={() => onNavigate(Page.Appointment)}
					class="uppercase py-3 px-6 rounded-lg bg-pink-500 border-2 border-transparent text-white text-sm sm:text-base hover:bg-pink-400 transition-colors
                    dark:bg-pink-600 dark:hover:bg-pink-500"
				>
					Book an Appointment
				</button>
				<button
					onclick={() => onNavigate(Page.Services)}
					class="uppercase py-3 px-6 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-sm sm:text-base transition-colors
                    dark:border-pink-600 dark:text-pink-600 dark:hover:bg-pink-600 dark:hover:text-white"
				>
					Our Services
				</button>
			</div>
		</div>

		<!-- Right Section: Grid of Pets -->
		<div class="grid grid-cols-1 md:grid-cols-1 gap-10 items-start p-2">
			<div class="r overflow-hidden animate-fade-in-left">
				<div class="columns-2 sm:columns-4 gap-4">
					{#each petImages as src, i}
						<div
							class="overflow-hidden rounded-xl shadow-md mb-4 break-inside-avoid hover:scale-105 transition-transform duration-100
                            dark:shadow-lg dark:shadow-gray-800/50"
						>
							<img {src} alt={'Pet ' + (i + 1)} class="object-cover w-full h-full" />
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</main>

<!-- Services Overview Section -->
<section class="py-20 bg-gray-50 dark:bg-gray-900">
	<div class="container mx-auto px-6 text-center">
		<h2 class="text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Core Services</h2>
		<p class="text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
			We offer a wide range of veterinary services to ensure your pet lives a long, happy, and healthy life.
		</p>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each servicesList as service, i}
				<div
					class={`bg-gradient-to-br ${cardGradients[i % cardGradients.length]} rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-transform duration-100 flex flex-col items-center p-8 text-gray-800 dark:text-gray-100`}
				>
					<div
						class={`p-4 rounded-full bg-white/80 dark:bg-gray-800/60 mb-4 ${iconColors[i % iconColors.length]}`}
					>
						<svelte:component this={service.icon} class="w-12 h-12" />
					</div>
					<h3 class="text-2xl font-bold mb-3">{service.title}</h3>
					<p class="text-gray-500 dark:text-gray-300 flex-grow mb-4 text-center">{service.description}</p>
					<button
						onclick={() => onNavigate(Page.Appointment)}
						class="mt-2 bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-50 transition-colors
                            dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
					>
						Book Appointment
					</button>
				</div>
			{/each}
		</div>

		<button
			onclick={() => onNavigate(Page.Services)}
			class="mt-12 text-pink-500 dark:text-pink-400 font-semibold hover:text-pink-600 dark:hover:text-pink-500 transition group inline-flex items-center gap-2"
		>
			View All Services
			<ArrowRight class="ml-2 group-hover:translate-x-1 transition-transform" />
		</button>
	</div>
</section>

<DrIntro />
<!-- About Us Section -->
<ChooseUs />

<!-- Call to Action Section -->
<section class="bg-pink-500 dark:bg-pink-700">
	<div class="container mx-auto px-6 py-16 text-center">
		<h2 class="text-3xl font-bold text-white mb-4">Have an Emergency?</h2>
		<p class="text-white/90 text-xl mb-6">We are here to help. Call us immediately for urgent care.</p>
		<a
			href="tel:{APPOINTMENT_PHONE}"
			class="text-2xl md:text-4xl font-extrabold text-pink-500 bg-white py-4 px-8 rounded-full inline-block hover:bg-gray-100 transition-colors duration-100
            dark:bg-pink-900 dark:text-white dark:hover:bg-pink-800"
		>
			Call: {APPOINTMENT_PHONE}
		</a>
	</div>
</section>