<script lang="ts">
	import { CheckCheck  } from "lucide-svelte";

</script>

<div class="animate-fade-in-up">
  <!-- Page Header -->
  <section class="bg-primary/80 text-white py-16 text-center">
    <div class="container mx-auto px-6">
      <h1 class="text-4xl font-bold">About Dr. Mozahid Veterinary Clinic</h1>
      <p class="text-xl mt-2">Serving Allah's Creatures with Faith and Care</p>
    </div>
  </section>

  <!-- Mission & Vision -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <img src="https://images.unsplash.com/photo-1583337130417-2246715f824b?q=80&w=2070&auto=format&fit=crop" alt="Veterinarian with a dog" class="rounded-lg shadow-xl">
        </div>
        <div>
          <h2 class="text-3xl font-bold text-dark mb-4">Our Mission</h2>
          <p class="text-gray-700 mb-6 text-lg">Our mission is to provide the highest quality veterinary care with compassion and expertise. We are dedicated to enhancing the human-animal bond and improving the quality of life for pets and their owners. We treat every patient as if they were our own beloved pet.</p>
          <h2 class="text-3xl font-bold text-dark mb-4">Our Commitment</h2>
          <ul class="space-y-4 text-gray-700">
            <li class="flex items-start">
              <CheckCheck  class="text-primary w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <span><strong>State-of-the-Art Medicine:</strong> We use the latest medical technologies and practices to provide superior care.</span>
            </li>
            <li class="flex items-start">
              <CheckCheck  class="text-primary w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <span><strong>Compassionate Staff:</strong> Our team is comprised of dedicated animal lovers who provide gentle and respectful care.</span>
            </li>
            <li class="flex items-start">
              <CheckCheck  class="text-primary w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <span><strong>Client Education:</strong> We believe in empowering pet owners with the knowledge to make informed decisions about their pet's health.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Meet the Team -->
  <section class="py-20">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold text-dark mb-12">Meet Our Expert Team</h2>
      <div class="flex justify-center">
        <div class="text-center">
            <img src="https://via.placeholder.com/200" alt="Dr. Md. Mozahidul Islam" class="w-48 h-48 rounded-full mx-auto mb-4 shadow-lg object-cover">
            <h3 class="text-2xl font-semibold text-dark">Dr. Md. Mozahidul Islam</h3>
            <p class="text-primary font-medium">DVM (SAU), MS in Medicine (SAU)</p>
            <p class="text-gray-600">Veterinary Surgeon & Pet Specialist</p>
        </div>
      </div>
    </div>
  </section>
</div>
