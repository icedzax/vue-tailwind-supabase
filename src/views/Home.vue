<script setup>
  import ButtonRepo from "@/components/ButtonRepo.vue";
</script>

<template>
  <div class="container mx-auto flex flex-wrap items-center px-5 py-24">
    <div
      class="mx-auto mt-10 flex w-full flex-col rounded-lg bg-gray-100 p-8 md:ml-auto md:mt-0 lg:w-2/6"
    >
      <div class="pow my-0.5">
        <div
          class="mb-0.5 flex flex-row items-center rounded bg-red-400 text-center text-black"
        >
          <div class="mx-auto w-4/12 font-bold text-white">AP</div>
          <div class="mx-auto my-0.5 w-8/12 rounded bg-white">30+0</div>
          <div class="m-0.5 w-2/12 rounded bg-white">Lv.2</div>
          <div
            class="mr-0.5 flex w-2/12 items-center justify-between rounded bg-white"
          >
            <div>x</div>
            <div>0</div>
            <div class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          class="mb-0.5 flex flex-row items-center rounded bg-red-400 text-center text-black"
        >
          <div class="mx-auto w-4/12 font-bold text-white">AC</div>
          <div class="mx-auto my-0.5 w-8/12 rounded bg-white">30+0</div>
          <div class="m-0.5 w-2/12 rounded bg-white">Lv.2</div>
          <div class="mr-0.5 w-2/12 rounded bg-white">3</div>
        </div>
        <div
          class="mb-0.5 flex flex-row items-center rounded bg-red-400 text-center text-black"
        >
          <div class="mx-auto w-4/12 font-bold text-white">DX</div>
          <div class="mx-auto my-0.5 w-8/12 rounded bg-white">30+0</div>
          <div class="m-0.5 w-2/12 rounded bg-white">Lv.2</div>
          <div class="mr-0.5 w-2/12 rounded bg-white">3</div>
        </div>
      </div>

      <div class="pow my-0.5">
        <div
          class="mb-0.5 flex flex-row items-center rounded bg-blue-400 text-center text-black"
        >
          <div class="mx-auto w-4/12 font-bold text-white">MP</div>
          <div class="mx-auto my-0.5 w-8/12 rounded bg-white">30+0</div>
          <div class="m-0.5 w-2/12 rounded bg-white">Lv.2</div>
          <div class="mr-0.5 w-2/12 rounded bg-white">3</div>
        </div>
        <div
          class="mb-0.5 flex flex-row items-center rounded bg-blue-400 text-center text-black"
        >
          <div class="mx-auto w-4/12 font-bold text-white">MA</div>
          <div class="mx-auto my-0.5 w-8/12 rounded bg-white">30+0</div>
          <div class="m-0.5 w-2/12 rounded bg-white">Lv.2</div>
          <div class="mr-0.5 w-2/12 rounded bg-white">3</div>
        </div>
        <div
          class="mb-0.5 flex flex-row items-center rounded bg-blue-400 text-center text-black"
        >
          <div class="mx-auto w-4/12 font-bold text-white">MD</div>
          <div class="mx-auto my-0.5 w-8/12 rounded bg-white">30+0</div>
          <div class="m-0.5 w-2/12 rounded bg-white">Lv.2</div>
          <div class="mr-0.5 w-2/12 rounded bg-white">3</div>
        </div>
      </div>

      <div class="pow my-0.5">
        <div
          class="mb-0.5 flex flex-row items-center rounded bg-purple-400 text-center text-black"
        >
          <div class="mx-auto w-4/12 font-bold text-white">WT</div>
          <div class="mx-auto my-0.5 w-8/12 rounded bg-white">30+0</div>
          <div class="m-0.5 w-2/12 rounded bg-white">Lv.2</div>
          <div class="mr-0.5 w-2/12 rounded bg-white">3</div>
        </div>
        <div
          class="mb-0.5 flex flex-row items-center rounded bg-purple-400 text-center text-black"
        >
          <div class="mx-auto w-4/12 font-bold text-white">DA</div>
          <div class="mx-auto my-0.5 w-8/12 rounded bg-white">30+0</div>
          <div class="m-0.5 w-2/12 rounded bg-white">Lv.2</div>
          <div class="mr-0.5 w-2/12 rounded bg-white">3</div>
        </div>
        <div
          class="mb-0.5 flex flex-row items-center rounded bg-purple-400 text-center text-black"
        >
          <div class="mx-auto w-4/12 font-bold text-white">LK</div>
          <div class="mx-auto my-0.5 w-8/12 rounded bg-white">30+0</div>
          <div class="m-0.5 w-2/12 rounded bg-white">Lv.2</div>
          <div class="mr-0.5 w-2/12 rounded bg-white">3</div>
        </div>
      </div>

      <div class="charm my-0.5">
        <div
          class="mb-0.5 flex flex-row items-center rounded bg-yellow-300 text-center text-black"
        >
          <div class="mx-auto w-4/12 font-bold text-white">HP</div>
          <div class="mx-auto my-0.5 w-8/12 rounded bg-white">30+0</div>
          <div class="m-0.5 w-2/12 rounded bg-white">Lv.2</div>
          <div class="mr-0.5 w-2/12 rounded bg-white">3</div>
        </div>
        <div
          class="mb-0.5 flex flex-row items-center rounded bg-yellow-300 text-center text-black"
        >
          <div class="mx-auto w-4/12 font-bold text-white">DP</div>
          <div class="mx-auto my-0.5 w-8/12 rounded bg-white">30+0</div>
          <div class="m-0.5 w-2/12 rounded bg-white">Lv.2</div>
          <div class="mr-0.5 w-2/12 rounded bg-white">3</div>
        </div>
        <div
          class="mb-0.5 flex flex-row items-center rounded bg-yellow-300 text-center text-black"
        >
          <div class="mx-auto w-4/12 font-bold text-white">HV</div>
          <div class="mx-auto my-0.5 w-8/12 rounded bg-white">30+0</div>
          <div class="m-0.5 w-2/12 rounded bg-white">Lv.2</div>
          <div class="mr-0.5 w-2/12 rounded bg-white">3</div>
        </div>
      </div>
    </div>
    <pre>{{ DBResponse }}</pre>
  </div>
</template>
