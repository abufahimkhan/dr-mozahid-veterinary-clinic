<script lang="ts">
  import { Page } from "$lib/types/types";
  import { servicesList } from "$lib/constants/constants";
  let { onNavigate } = $props<{ onNavigate: (page: Page) => void }>();

  // Optional: colors for cards
  const cardGradients = [
    "from-pink-800 via-pink-700 to-pink-900",
    "from-indigo-800 via-indigo-700 to-indigo-900",
    "from-green-800 via-green-700 to-green-900",
    "from-yellow-800 via-yellow-700 to-yellow-900",
    "from-purple-800 via-purple-700 to-purple-900",
    "from-teal-800 via-teal-700 to-teal-900",
    "from-orange-800 via-orange-700 to-orange-900",
    "from-red-800 via-red-700 to-red-900",
  ];

  const iconColors = [
    "text-pink-300",
    "text-indigo-300",
    "text-green-300",
    "text-yellow-300",
    "text-purple-300",
    "text-teal-300",
    "text-orange-300",
    "text-red-300",
  ];
</script>

<section class="py-20 bg-white dark:bg-gray-900">
  <div class="container mx-auto px-6">
    <h2
      class="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
    >
      Our Comprehensive Services
    </h2>
    <p
      class="text-center text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
    >
      At Dr. Mozahid Veterinary Clinic, we provide a wide range of veterinary
      services to ensure your pet lives a long, happy, and healthy life. Each
      service is delivered with care, compassion, and professionalism.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {#each servicesList as service, i}
        <div
          class={`p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center relative overflow-hidden bg-gradient-to-br ${cardGradients[i % cardGradients.length]}  dark:bg-background`}
        >
          <div
            class={`p-6 rounded-full mb-6 flex items-center justify-center bg-white/20 backdrop-blur-sm ${iconColors[i % iconColors.length]}`}
          >
            <svelte:component this={service.icon} class="w-12 h-12" />
          </div>
          <h3 class="text-2xl font-semibold text-white mb-4">
            {service.title}
          </h3>
          <p class="text-white/90 mb-6">
            {service.description} Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Our team ensures the highest standards of veterinary care.
          </p>
          <button
            onclick={() => onNavigate(Page.Appointment)}
            class="mt-auto py-2 px-6 rounded-lg bg-white/50 text-gray-900 font-semibold hover:bg-gray-400 hover:text-white transition-colors"
          >
            Book Appointment
          </button>
        </div>
      {/each}
    </div>
  </div>
</section>
