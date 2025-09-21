<script lang="ts">
  import { Page } from '$lib/types/types';
  import Header from '$lib/components/header.svelte';
  import Footer from '$lib/components/footer.svelte';
  import Home from '$lib/components/landing.svelte';
  import About from '$lib/components/about.svelte';
  import Services from '$lib/components/services.svelte';
  import Pricing from '$lib/components/pricing.svelte';
  import Appointment from '$lib/components/appointment.svelte';
  import { slide } from 'svelte/transition';

  let currentPage = $state(Page.Home);

  function handleNavClick(page: Page) {
    currentPage = page;
    window.scrollTo(0, 0);
  }
</script>

<div class="flex flex-col min-h-screen font-sans bg-light text-dark">
  <Header {currentPage} onNavClick={handleNavClick} />
  
  <main class="flex-grow">
    {#if currentPage === Page.Home}
      <div transition:slide={{ duration: 300 }}>
        <Home onNavigate={handleNavClick} />
      </div>
    {:else if currentPage === Page.About}
      <div transition:slide={{ duration: 300 }}>
        <About />
      </div>
    {:else if currentPage === Page.Services}
      <div transition:slide={{ duration: 300 }}>
        <Services onNavigate={handleNavClick}  />
      </div>
    {:else if currentPage === Page.Pricing}
      <div transition:slide={{ duration: 300 }}>
        <Pricing />
      </div>
    {:else if currentPage === Page.Appointment}
      <div transition:slide={{ duration: 300 }}>
        <Appointment />
      </div>
    {/if}
  </main>
  
  <Footer onNavigate={handleNavClick} />
</div>
