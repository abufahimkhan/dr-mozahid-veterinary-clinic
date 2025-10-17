<script lang="ts">
  import { pricingData } from "$lib/constants/constants";
</script>

<div class="animate-fade-in-up">
  <!-- Page Header -->
  <section
    class="bg-primary/80 dark:bg-background text-white py-16 text-center"
  >
    <div class="container mx-auto px-6">
      <h1 class="text-4xl font-bold">Transparent Pricing</h1>
      <p class="text-xl mt-2 text-white/90">
        Affordable, high-quality care for your furry family members.
      </p>
    </div>
  </section>

  <!-- Pricing Tables -->
  <section class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-6">
      {#each pricingData as categoryData}
        <div class="mb-12">
          <h2
            class="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center md:text-left"
          >
            {categoryData.category}
          </h2>
          <div
            class="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg"
          >
            <table
              class="w-full text-sm text-left text-gray-700 dark:text-gray-300"
            >
              <thead
                class="text-xs text-primary dark:text-primary-light uppercase bg-light dark:bg-gray-700"
              >
                <tr>
                  <th scope="col" class="px-6 py-3 min-w-[250px]"
                    >Particulars</th
                  >
                  <th scope="col" class="px-6 py-3">Large/Small Animal</th>
                  <th scope="col" class="px-6 py-3">Cat</th>
                  <th scope="col" class="px-6 py-3">Dog</th>
                  <th scope="col" class="px-6 py-3">Avian/Exotic</th>
                  <th scope="col" class="px-6 py-3">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {#each categoryData.items as item}
                  <tr
                    class="border-b border-gray-200 dark:border-gray-700 hover:bg-primary/5 dark:hover:bg-primary/10"
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {item.particulars}
                    </th>
                    <td class="px-6 py-4">{item.largeSmallAnimal ?? "-"}</td>
                    <td class="px-6 py-4">{item.cat ?? "-"}</td>
                    <td class="px-6 py-4">{item.dog ?? "-"}</td>
                    <td class="px-6 py-4">{item.avianExotic ?? "-"}</td>
                    <td class="px-6 py-4">{item.remarks}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>
