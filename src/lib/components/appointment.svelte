<script lang="ts">
  import { ADDRESS, APPOINTMENT_PHONE } from "$lib/constants/constants";
  import { Clock, MapPin, Phone } from "lucide-svelte";

  let formStatus = $state<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: SubmitEvent) {
    formStatus = "submitting";
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    formStatus = "success";
    form.reset();
    setTimeout(() => (formStatus = "idle"), 5000);
  }
</script>

<div class="animate-fade-in-up">
  <!-- Page Header -->
  <section class="bg-background text-white py-16 text-center">
    <div class="container mx-auto px-6">
      <h1 class="text-4xl font-bold text-gray-50 dark:text-gray-90">
        Book an Appointment
      </h1>
      <p class="text-xl mt-2">We're excited to meet you and your pet!</p>
    </div>
  </section>

  <section
    class="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
  >
    <div class="container mx-auto px-6">
      <div class="grid lg:grid-cols-5 gap-12">
        <!-- Form -->
        <div
          class="lg:col-span-3 bg-white dark:bg-slate-800 p-8 rounded-lg shadow-xl"
        >
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Appointment Request Form
          </h2>
          {#if formStatus === "success"}
            <div
              class="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-300 px-4 py-3 rounded relative mb-6"
              role="alert"
            >
              <strong class="font-bold">Thank you!</strong>
              <span class="block sm:inline">
                Your appointment request has been sent. We will contact you
                shortly to confirm.</span
              >
            </div>
          {/if}
          <form onsubmit={handleSubmit}>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="ownerName"
                placeholder="Owner's Name"
                required
                class="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                name="petName"
                placeholder="Pet's Name"
                required
                class="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                class="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                required
                class="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="date"
                name="preferredDate"
                required
                class="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-500 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <select
                name="service"
                required
                class="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-500 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="" disabled selected>Reason for Visit</option>
                <option value="wellness">Wellness Exam</option>
                <option value="vaccination">Vaccination</option>
                <option value="dental">Dental Care</option>
                <option value="surgery">Surgery Consultation</option>
                <option value="grooming">Grooming</option>
                <option value="other">Other</option>
              </select>
            </div>
            <textarea
              name="message"
              rows="5"
              placeholder="Additional notes or questions..."
              class="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary mb-6"
            ></textarea>
            <button
              type="submit"
              disabled={formStatus === "submitting"}
              class="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-lg hover:shadow-xl dark:text-gray-300 hover:text-white/100 dark:hover:text-white/80 tracking-wide font-bold py-3 px-8 rounded-full transition duration-300 disabled:bg-gray-400 dark:disabled:bg-gray-700"
            >
              {formStatus === "submitting"
                ? "Sending Request..."
                : "Request Appointment"}
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="lg:col-span-2">
          <div class="bg-light dark:bg-slate-800 p-8 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Contact Us Directly
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-6">
              For emergencies or immediate assistance, please call us directly.
              Online requests will be confirmed by phone.
            </p>
            <div class="space-y-4">
              <div class="flex items-center">
                <Phone class="w-6 h-6 text-primary mr-4" />
                <a
                  href="tel:{APPOINTMENT_PHONE}"
                  class="text-lg text-gray-800 dark:text-white hover:text-primary"
                  >{APPOINTMENT_PHONE}</a
                >
              </div>
              <div class="flex items-start">
                <MapPin class="w-6 h-6 text-primary mr-4 mt-1" />
                <p class="text-lg text-gray-800 dark:text-white">{ADDRESS}</p>
              </div>
              <div class="flex items-start">
                <Clock class="w-6 h-6 text-primary mr-4 mt-1" />
                <div>
                  <h4
                    class="font-semibold text-lg text-gray-800 dark:text-white"
                  >
                    Hours
                  </h4>
                  <p class="text-gray-800 dark:text-gray-300">
                    Sat–Thu: 5:00pm – 9:00pm
                  </p>
                  <p class="text-gray-800 dark:text-gray-300">
                    Fri & Holiday: 10am–12pm & 5pm–9pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
