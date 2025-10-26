<!-- src/lib/components/Marquee.svelte -->
<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let { images } = $props<{ images: string[] }>();

  let marqueeRef: HTMLElement;
  let animationFrameId: number;
  let scrollPos = 0;

  const scrollMarquee = () => {
    if (!marqueeRef) return;

    // Check if content width is less than container width, if so, no need to scroll
    if (marqueeRef.scrollWidth <= marqueeRef.clientWidth) {
      animationFrameId = requestAnimationFrame(scrollMarquee);
      return;
    }

    scrollPos += 0.5; // Adjust scroll speed here
    if (scrollPos >= marqueeRef.scrollWidth / 2) {
      scrollPos = 0; // Reset scroll if it reaches the duplicate content's start
    }
    marqueeRef.scrollLeft = scrollPos;
    animationFrameId = requestAnimationFrame(scrollMarquee);
  };

onMount(() => {
  if (typeof window !== 'undefined' && window.innerWidth < 768 && marqueeRef) {
    images = [...images, ...images];
    animationFrameId = requestAnimationFrame(scrollMarquee);
  }
});

onDestroy(() => {
  if (typeof window !== 'undefined') {
    cancelAnimationFrame(animationFrameId);
  }
});

</script>

<div bind:this={marqueeRef} class="flex overflow-hidden space-x-4 py-4 md:hidden">
  {#each images as src, i}
    <div class="flex-shrink-0 w-40 h-40 rounded-lg overflow-hidden shadow-md">
      <img {src} alt={"Pet " + (i + 1)} class="object-cover w-full h-full" />
    </div>
  {/each}
</div>

<style>
  /* You can add custom styles here if needed, but Tailwind should handle most.
     The JavaScript directly manipulates scrollLeft for the marquee effect. */
</style>