<script lang="ts">
  import {
    ADDRESS,
    APPOINTMENT_PHONE,
    CLINIC_NAME,
  } from "$lib/constants/constants";
  import { Page } from "$lib/types/types";
  // No need to import Lucide icons anymore if you're using image assets
  // import { Facebook, Instagram, Youtube } from 'lucide-svelte';
  import {
    allImages,
    socialImages,
    type SocialImageKeys,
  } from "$lib/assets/images"; // Import type

  let { onNavigate } = $props<{ onNavigate: (page: Page) => void }>();

  // Reactive logo based on theme
  let currentLogo = $state(allImages.lWhite);
  $effect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    currentLogo = isDarkMode ? allImages.lDark : allImages.lWhite;
  });

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", page: Page.Home },
    { name: "About Us", page: Page.About },
    { name: "Services", page: Page.Services },
    { name: "Pricing", page: Page.Pricing },
    { name: "Appointment", page: Page.Appointment },
  ];

  const services = [
    "1on1 Coaching",
    "Company Review",
    "Accounts Review",
    "HR Consulting",
    "SEO Optimisation",
  ];

  // Define a type for your social link objects
  type SocialLink = {
    label: string;
    href: string;
    imageKey: SocialImageKeys; // This will enforce that imageKey must be a key from socialImages
    alt: string; // Add alt text for accessibility
  };

  // Define social links using the imported image assets
  const socialLinks: SocialLink[] = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/@Dr.MozahidVeterinaryClinic",
      imageKey: "facebook",
      alt: "Facebook icon",
    },
    {
      label: "Instagram",
      href: "https://instagram.com/MohammadMozahid",
      imageKey: "instagram",
      alt: "Instagram icon",
    },
    {
      label: "Youtube",
      href: "youtube.com/@Dr.%20Mozahid%20Veterinary%20Clinic",
      imageKey: "youtube",
      alt: "YouTube icon",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dr-md-al-mozahid-73453aaa/",
      imageKey: "linkedin",
      alt: "LinkedIn icon",
    },
    {
      label: "X (Twitter)",
      href: "https://twitter.com/DMozahid",
      imageKey: "twitter",
      alt: "X (Twitter) icon",
    },
    {
      label: "Skype",
      href: "skype:mozahid1980?chat",
      imageKey: "skype",
      alt: "Skype icon",
    },
    // If you add a WhatsApp link later:
    // { label: 'WhatsApp', href: 'https://wa.me/YOUR_PHONE_NUMBER', imageKey: 'whatsapp', alt: 'WhatsApp icon' },
  ];

  const legalLinks = [
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Cookies", href: "#" },
  ];
</script>

<footer
  class="relative bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 overflow-hidden"
>
  <!-- Background blobs -->
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
          <img
            src={currentLogo}
            alt="Clinic Logo"
            class="h-10 md:h-24 w-auto"
          />
          <!-- <h3 class="text-3xl font-bold text-gray-800 dark:text-white">{CLINIC_NAME}</h3> -->
        </div>
        <p
          class="leading-relaxed font-semibold text-lg bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent"
        >
          Serving Allah's Creatures with Faith and Care
        </p>

        <div class="flex space-x-4 mt-4">
          {#each socialLinks as link}
            <a
              href={link.href}
              aria-label={link.label}
              class="transition transform hover:scale-110"
            >
              <img
                src={socialImages[link.imageKey]}
                alt={link.alt}
                class="w-7 h-7"
              />
            </a>
          {/each}
        </div>
      </div>

      <!-- Quick Links & Info -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 flex-1">
        <!-- Quick Links -->
        <div>
          <h4
            class="text-lg font-semibold mb-4 bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent"
          >
            Quick Links
          </h4>
          <ul class="space-y-2">
            {#each quickLinks as link}
              <li>
                <button
                  on:click={() => onNavigate(link.page)}
                  class="hover:text-teal-500 transition"
                >
                  {link.name}
                </button>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4
            class="text-lg font-semibold mb-4 bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent"
          >
            Contact Us
          </h4>
          <address
            class="not-italic space-y-2 text-gray-600 dark:text-gray-400"
          >
            <p>{ADDRESS}</p>
            <p>Phone: {APPOINTMENT_PHONE}</p>
          </address>
          <div class="mt-4">
            <h5 class="font-semibold text-gray-900 dark:text-white">Hours</h5>
            <p>Sat–Thu: 5:00pm – 9:00pm</p>
            <p>Fri & Holiday: 10am–12pm & 5pm–9pm</p>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h4
            class="text-lg font-semibold mb-4 bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent"
          >
            Services
          </h4>
          <ul class="space-y-2 text-gray-600 dark:text-gray-400">
            {#each services as service}
              <li class="hover:text-teal-500 transition">{service}</li>
            {/each}
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
      <ul class="flex flex-wrap gap-4 text-sm">
        {#each legalLinks as link}
          <li>
            <a
              href={link.href}
              class="transition duration-300 hover:opacity-80 bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent font-semibold"
            >
              {link.name}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</footer>
