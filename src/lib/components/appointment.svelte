<script lang="ts">
	import { ADDRESS, APPOINTMENT_PHONE } from "$lib/constants/constants";
	import { Clock, MapPin, Phone } from "lucide-svelte";



  let formStatus = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  async function handleSubmit(event: SubmitEvent) {
    formStatus = 'submitting';
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // This is a dummy submission handler. In a real app, you would send this
    // data to a server or an email service.
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate success
    formStatus = 'success';
    form.reset();
    setTimeout(() => formStatus = 'idle', 5000);
  }
</script>

<div class="animate-fade-in-up">
  <!-- Page Header -->
  <section class="bg-primary text-white py-16 text-center">
    <div class="container mx-auto px-6">
      <h1 class="text-4xl font-bold">Book an Appointment</h1>
      <p class="text-xl mt-2">We're excited to meet you and your pet!</p>
    </div>
  </section>

  <section class="py-20">
    <div class="container mx-auto px-6">
      <div class="grid lg:grid-cols-5 gap-12">
        <!-- Form -->
        <div class="lg:col-span-3 bg-white p-8 rounded-lg shadow-xl">
          <h2 class="text-2xl font-bold text-dark mb-6">Appointment Request Form</h2>
          {#if formStatus === 'success'}
            <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
              <strong class="font-bold">Thank you!</strong>
              <span class="block sm:inline"> Your appointment request has been sent. We will contact you shortly to confirm.</span>
            </div>
          {/if}
          <form onsubmit={handleSubmit}>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input type="text" name="ownerName" placeholder="Owner's Name" required class="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary">
              <input type="text" name="petName" placeholder="Pet's Name" required class="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary">
              <input type="email" name="email" placeholder="Your Email" required class="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary">
              <input type="tel" name="phone" placeholder="Your Phone" required class="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary">
              <input type="date" name="preferredDate" required class="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-gray-500">
              <select name="service" required class="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-gray-500">
                <option value="" disabled selected>Reason for Visit</option>
                <option value="wellness">Wellness Exam</option>
                <option value="vaccination">Vaccination</option>
                <option value="dental">Dental Care</option>
                <option value="surgery">Surgery Consultation</option>
                <option value="grooming">Grooming</option>
                <option value="other">Other</option>
              </select>
            </div>
            <textarea name="message" rows="5" placeholder="Additional notes or questions..." class="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary mb-6"></textarea>
            <button type="submit" disabled={formStatus === 'submitting'} class="w-full bg-secondary hover:bg-primary text-white font-bold py-3 px-8 rounded-full transition duration-300 disabled:bg-gray-400">
              {formStatus === 'submitting' ? 'Sending Request...' : 'Request Appointment'}
            </button>
          </form>
        </div>
        <!-- Contact Info -->
        <div class="lg:col-span-2">
          <div class="bg-light p-8 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold text-dark mb-6">Contact Us Directly</h3>
            <p class="text-gray-700 mb-6">For emergencies or immediate assistance, please call us directly. Online requests will be confirmed by phone.</p>
            <div class="space-y-4">
              <div class="flex items-center">
                <Phone class="w-6 h-6 text-primary mr-4"/>
                <a href="tel:{APPOINTMENT_PHONE}" class="text-lg text-gray-800 hover:text-primary">{APPOINTMENT_PHONE}</a>
              </div>
              <div class="flex items-start">
                <MapPin class="w-6 h-6 text-primary mr-4 mt-1"/>
                <p class="text-lg text-gray-800">{ADDRESS}</p>
              </div>
              <div class="flex items-start">
                <Clock class="w-6 h-6 text-primary mr-4 mt-1"/>
                <div>
                  <h4 class="font-semibold text-lg">Hours</h4>
                  <p class="text-gray-800">Sat-Thu: 5:00pm - 9:00pm</p>
                  <p class="text-gray-800">Fri & Holiday: 10am-12pm & 5pm-9pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
