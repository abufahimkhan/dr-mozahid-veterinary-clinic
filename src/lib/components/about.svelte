<script lang="ts">
  import { CheckCheck } from "lucide-svelte";
  import { allImages } from "$lib/assets/images"; // Assuming you have drMojahid here
</script>

<div class="animate-fade-in-up">
  <!-- Page Header -->
  <section
    class="bg-pink-500/80 dark:bg-pink-700/80 text-white py-16 text-center"
  >
    <div class="container mx-auto px-6">
      <h1 class="text-4xl font-bold">About Dr. Mozahid Veterinary Clinic</h1>
      <p class="text-xl mt-2 text-white/90">
        Serving Allah's Creatures with Faith and Care
      </p>
    </div>
  </section>

  <!-- Mission & Vision -->
  <section class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <!-- If you have a specific image in allImages for this, use it. Otherwise, keep Unsplash. -->
          <img
            src="https://img.freepik.com/premium-photo/photo-portrait-smiling-veterinarian-doctor-holding-dog_1077802-121752.jpg"
            alt="Dr. Md. Mozahidul Islam"
            class="w-64 h-64 rounded-full mx-auto mb-4 shadow-lg object-contain dark:shadow-gray-700/50"
          />
        </div>
        <div>
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Our Mission
          </h2>
          <p class="text-gray-700 dark:text-gray-300 mb-6 text-lg">
            Our mission is to provide the highest quality veterinary care with
            compassion and expertise. We are dedicated to enhancing the
            human-animal bond and improving the quality of life for pets and
            their owners. We treat every patient as if they were our own beloved
            pet.
          </p>
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Our Commitment
          </h2>
          <ul class="space-y-4 text-gray-700 dark:text-gray-300">
            <li class="flex items-start">
              <CheckCheck
                class="text-pink-500 dark:text-pink-400 w-6 h-6 mr-3 mt-1 flex-shrink-0"
              />
              <span
                ><strong>State-of-the-Art Medicine:</strong> We use the latest medical
                technologies and practices to provide superior care.</span
              >
            </li>
            <li class="flex items-start">
              <CheckCheck
                class="text-pink-500 dark:text-pink-400 w-6 h-6 mr-3 mt-1 flex-shrink-0"
              />
              <span
                ><strong>Compassionate Staff:</strong> Our team is comprised of dedicated
                animal lovers who provide gentle and respectful care.</span
              >
            </li>
            <li class="flex items-start">
              <CheckCheck
                class="text-pink-500 dark:text-pink-400 w-6 h-6 mr-3 mt-1 flex-shrink-0"
              />
              <span
                ><strong>Client Education:</strong> We believe in empowering pet
                owners with the knowledge to make informed decisions about their
                pet's health.</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Meet the Team -->
  <section class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-12">
        Meet Our Expert Team
      </h2>
      <div class="flex justify-center">
        <div class="text-center">
          <!-- Using your drMojahid image from allImages.ts -->
          <img
            src={allImages.drMojahid}
            alt="Dr. Md. Mozahidul Islam"
            class="w-64 h-64 rounded-full mx-auto mb-4 shadow-lg object-contain dark:shadow-gray-700/50"
          />

          <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
            Dr. Md. Mozahidul Islam
          </h3>
          <p class="text-pink-500 dark:text-pink-400 font-medium">
            DVM (SAU), MS in Medicine (SAU)
          </p>
          <p class="text-gray-600 dark:text-gray-300">
            Veterinary Surgeon & Pet Specialist
          </p>
        </div>
      </div>
    </div>
  </section>
</div>
