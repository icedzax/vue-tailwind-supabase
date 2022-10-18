<template>
  <div
    class="mx-auto mt-10 flex w-full flex-col rounded-lg bg-slate-100 p-4 md:ml-auto md:mt-0 lg:w-3/6"
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
          <div class="arrow -scale-x-100">
            <ButtonArrow />
          </div>
          <div>0</div>
          <div class="arrow up"><ButtonArrow class="" /></div>
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
</template>
<script setup>
  import ButtonArrow from "@/components/ButtonArrow.vue";
</script>

<style scoped>
  .arrow {
    @apply flex  cursor-pointer text-gray-400 hover:text-gray-500 active:text-blue-600;
  }
  .up {
    @apply text-yellow-500;
  }
</style>
