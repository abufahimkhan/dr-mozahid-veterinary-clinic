<script lang="ts">
  import { Page } from "$lib/types/types";
  import { navLinks, CLINIC_NAME } from "$lib/constants/constants";
  import { Menu, X, PhoneIcon } from "lucide-svelte";
  import { allImages } from "$lib/assets/images";
  import { toggleMode } from "mode-watcher";

  import SunIcon from "@lucide/svelte/icons/sun";
  import MoonIcon from "@lucide/svelte/icons/moon";
  import { Button } from "$lib/components/ui/button/index.js";

  let { currentPage, onNavClick } = $props<{
    currentPage: Page;
    onNavClick: (page: Page) => void;
  }>();

  let isMobileMenuOpen = $state(false);

  function handleMobileNavClick(page: Page) {
    onNavClick(page);
    isMobileMenuOpen = false;
  }
</script>

<header
  class="sticky top-0 z-50 backdrop-blur-md bg-white/20 dark:bg-slate-900/100 transition-colors duration-300"
>
  <div class="container mx-auto px-6 py-4 flex justify-between items-center">
    <!-- Logo -->
    <button
      class="flex items-center space-x-3 cursor-pointer group"
      onclick={() => onNavClick(Page.Home)}
    >
      <div
        class="p-2 rounded-full group-hover:scale-110 transition-transform duration-300"
      >
        <!-- Light logo -->
        <img
          src={allImages.lWhite}
          alt="Clinic Logo Light"
          class="h-8 md:h-20 w-auto block dark:hidden"
        />
        <!-- Dark logo -->
        <img
          src={allImages.lDark}
          alt="Clinic Logo Dark"
          class="h-8 md:h-20 w-auto hidden dark:block"
        />
      </div>
    </button>

    <!-- Desktop Nav -->
    <!-- Desktop Nav -->
    <nav class="hidden md:flex items-center space-x-8">
      {#each navLinks as link}
        <button
          onclick={() => onNavClick(link.page)}
          class="relative text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-white/80 font-medium tracking-wide transition duration-300
        {currentPage === link.page
            ? 'text-indigo-600 dark:text-white/80 font-semibold'
            : ''}"
        >
          {link.name}
          {#if currentPage === link.page}
            <span
              class="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"
            ></span>
          {/if}
        </button>
      {/each}
    </nav>

    <!-- Theme + Appointment -->
    <div class="hidden md:flex items-center space-x-4">
      <a
        href="tel:+8801716297665"
        class="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-teal-500 text-white p-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
      >
        <PhoneIcon class="w-5 h-5" />
      </a>

      <button
        onclick={() => onNavClick(Page.Appointment)}
        class="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-5 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
      >
        Book Appointment
      </button>
      <!-- Theme Toggle -->
      <Button
        class="rounded-full p-5"
        onclick={toggleMode}
        variant="outline"
        size="icon"
      >
        <SunIcon
          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0"
        />
        <MoonIcon
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 !transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </div>

    <!-- Mobile Menu Toggle -->
    <div class="md:hidden flex items-center space-x-4">
      <a
        href="tel:+8801716297665"
        class="w-4/5 flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-teal-500 text-white p-1.5 rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        <PhoneIcon class="w-4 h-4" />
      </a>

      <button
        onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
        class="text-indigo-600 dark:text-pink-400 hover:scale-110 transition"
      >
        {#if isMobileMenuOpen}
          <X size={28} />
        {:else}
          <Menu size={28} />
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile Nav -->
  {#if isMobileMenuOpen}
    <div class="md:hidden">
      <nav class="flex flex-col items-center space-y-6 py-6">
        {#each navLinks as link}
          <button
            onclick={() => handleMobileNavClick(link.page)}
            class="w-4/5 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-pink-400 transition duration-300
            {currentPage === link.page
              ? 'text-indigo-600 dark:text-pink-400 font-semibold'
              : ''}"
          >
            {link.name}
          </button>
        {/each}

        <!-- Separate Appointment Button -->
        <button
          onclick={() => handleMobileNavClick(Page.Appointment)}
          class="w-4/5 bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Book Appointment
        </button>
      </nav>
    </div>
  {/if}
</header>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fadeIn {
    animation: fadeIn 0.25s ease-out;
  }
</style>
