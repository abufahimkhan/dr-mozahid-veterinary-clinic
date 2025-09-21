<script lang="ts">
  import { Page } from '$lib/types/types';
  import { navLinks, CLINIC_NAME } from '$lib/constants/constants';
  import { PawPrint, Menu, X } from 'lucide-svelte';

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

<header class="sticky top-0 z-50 bg-gradient-to-r from-indigo-100 via-white to-pink-100 
               dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 
               backdrop-blur-lg shadow-md border-b border-gray-200 dark:border-gray-700">
  <div class="container mx-auto px-6 py-4 flex justify-between items-center">
    
    <!-- Logo -->
    <button
      class="flex items-center space-x-3 cursor-pointer group"
      onclick={() => onNavClick(Page.Home)}
    >
      <div class="p-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 shadow-md group-hover:scale-110 transition-transform duration-300">
        <PawPrint class="w-6 h-6 text-white" />
      </div>
      <span class="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
        {CLINIC_NAME}
      </span>
    </button>

    <!-- Desktop Nav -->
    <nav class="hidden md:flex items-center space-x-8">
      {#each navLinks as link}
        <button
          onclick={() => onNavClick(link.page)}
          class="relative text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-pink-400 font-medium tracking-wide transition duration-300
            {currentPage === link.page ? 'text-indigo-600 dark:text-pink-400 font-semibold' : ''}
            {link.page === Page.Appointment
              ? 'ml-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-5 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform'
              : ''}"
        >
          {link.name}
          {#if currentPage === link.page && link.page !== Page.Appointment}
            <span class="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></span>
          {/if}
        </button>
      {/each}
    </nav>

    <!-- Mobile Menu Toggle -->
    <div class="md:hidden">
      <button onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)} class="text-indigo-600 dark:text-pink-400 hover:scale-110 transition">
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
    <div class="md:hidden bg-gradient-to-b from-white to-indigo-50 dark:from-slate-800 dark:to-slate-900 shadow-lg border-t border-gray-200 dark:border-gray-700 animate-fadeIn">
      <nav class="flex flex-col items-center space-y-6 py-6">
        {#each navLinks as link}
          <button
            onclick={() => handleMobileNavClick(link.page)}
            class="w-4/5 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-pink-400 transition duration-300
              {currentPage === link.page ? 'text-indigo-600 dark:text-pink-400 font-semibold' : ''}
              {link.page === Page.Appointment
                ? 'bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform'
                : ''}"
          >
            {link.name}
          </button>
        {/each}
      </nav>
    </div>
  {/if}
</header>

<style>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-6px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.25s ease-out;
  }
</style>
