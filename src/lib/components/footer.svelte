<script lang="ts">
	import { ADDRESS, APPOINTMENT_PHONE, CLINIC_NAME } from '$lib/constants/constants';
	import { Page } from '$lib/types/types';
	import { Facebook, Instagram, PawPrint, Youtube } from 'lucide-svelte';

	let { onNavigate } = $props<{
		onNavigate: (page: Page) => void;
	}>();

	const currentYear = new Date().getFullYear();
</script>

<footer class="relative bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 overflow-hidden">
	<!-- Colorful background blobs -->
	<div
		class="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full opacity-30 blur-3xl pointer-events-none"
	></div>
	<div
		class="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full opacity-30 blur-3xl pointer-events-none"
	></div>

	<div class="relative max-w-screen-xl mx-auto px-6 py-16 lg:py-24 space-y-16">
		<!-- Top Footer -->
		<div class="lg:flex lg:items-start lg:gap-12 space-y-12 lg:space-y-0">
			<!-- Logo & About -->
			<div class="lg:flex-1 space-y-4">
				<div class="flex items-center space-x-3">
					<PawPrint class="w-10 h-10 text-gradient-to-r from-teal-500 to-purple-500" />
					<h3 class="text-3xl font-bold text-gray-900 dark:text-white">{CLINIC_NAME}</h3>
				</div>
				<p class="text-gray-600 dark:text-gray-400 leading-relaxed">
  <span class="bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent font-semibold">
    Serving Allah's Creatures with Faith and Care
  </span>
</p>

				<div class="flex space-x-4 mt-4">
					<a href="#" aria-label="Facebook" class="transition transform hover:scale-110 hover:text-blue-500"
						><Facebook class="w-7 h-7 text-blue-500" /></a
					>
					<a href="#" aria-label="Instagram" class="transition transform hover:scale-110 hover:text-pink-500"
						><Instagram class="w-7 h-7 text-pink-500" /></a
					>
					<a href="#" aria-label="Youtube" class="transition transform hover:scale-110 hover:text-red-500"
						><Youtube class="w-7 h-7 text-red-500" /></a
					>
				</div>
			</div>

			<!-- Quick Links -->
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 flex-1">
				<div>
					<h4 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
					<ul class="space-y-2">
						<ul class="space-y-2">
							<li>
								<button
									on:click={() => onNavigate(Page.Home)}
									class="font-semibold bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent hover:opacity-90 transition duration-300"
								>
									Home
								</button>
							</li>
							<li>
								<button
									on:click={() => onNavigate(Page.About)}
									class="font-semibold bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent hover:opacity-90 transition duration-300"
								>
									About Us
								</button>
							</li>
							<li>
								<button
									on:click={() => onNavigate(Page.Services)}
									class="font-semibold bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent hover:opacity-90 transition duration-300"
								>
									Services
								</button>
							</li>
							<li>
								<button
									on:click={() => onNavigate(Page.Pricing)}
									class="font-semibold bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent hover:opacity-90 transition duration-300"
								>
									Pricing
								</button>
							</li>
							<li>
								<button
									on:click={() => onNavigate(Page.Appointment)}
									class="font-semibold bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent hover:opacity-90 transition duration-300"
								>
									Appointment
								</button>
							</li>
						</ul>
					</ul>
				</div>

				<div>
					<h4 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact Us</h4>
					<address class="not-italic space-y-2 text-gray-600 dark:text-gray-400">
						<p>{ADDRESS}</p>
						<p>Phone: {APPOINTMENT_PHONE}</p>
					</address>
					<div class="mt-4">
						<h5 class="font-semibold text-gray-900 dark:text-white">Hours</h5>
						<p>Sat-Thu: 5:00pm - 9:00pm</p>
						<p>Fri & Holiday: 10am-12pm & 5pm-9pm</p>
					</div>
				</div>

				<div>
					<h4 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Services</h4>
					<ul class="space-y-2 text-gray-600 dark:text-gray-400">
						<li>1on1 Coaching</li>
						<li>Company Review</li>
						<li>Accounts Review</li>
						<li>HR Consulting</li>
						<li>SEO Optimisation</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Bottom Footer -->
		<div
			class="border-t border-gray-200 dark:border-gray-700 pt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4"
		>
			<p class="text-sm text-gray-500 dark:text-gray-400">
				&copy; {currentYear}
				{CLINIC_NAME}. All Rights Reserved.
			</p>
			<ul class="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
				<li>
					<a
						href="#"
						class="hover:text-gradient-to-r from-teal-500 to-purple-500 transition bg-clip-text text-transparent font-semibold"
						>Terms & Conditions</a
					>
				</li>
				<li>
					<a
						href="#"
						class="hover:text-gradient-to-r from-teal-500 to-purple-500 transition bg-clip-text text-transparent font-semibold"
						>Privacy Policy</a
					>
				</li>
				<li>
					<a
						href="#"
						class="hover:text-gradient-to-r from-teal-500 to-purple-500 transition bg-clip-text text-transparent font-semibold"
						>Cookies</a
					>
				</li>
			</ul>
		</div>
	</div>
</footer>
