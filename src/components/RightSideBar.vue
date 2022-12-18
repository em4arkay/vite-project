<template>
    <div class="flex flex-col p-6 bg-blue-700 rounded-lg gap-y-6">
        <div>
            <label class="block text-sm font-medium text-white">Photo</label>
            <div class="mt-1 flex justify-center items-center">
                <span class="inline-block h-40 w-32 overflow-hidden items-center bg-gray-100">
                    <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </span>
            </div>
            <div class="flex justify-center text-sm text-gray-600">
                <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                <span>Upload a file</span>
                <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                </label>
            </div>
        </div>

        <div>
            <label class="block text-sm font-medium text-white">CV / Resume</label>
            <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div class="space-y-1 text-center">
                    <!-- <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> -->
                    <div class="flex text-sm text-white">
                        <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                </div>
            </div>
        </div>
        <hr class="border-gray-200" />
        <div class="flex flex-col gap-y-3">
            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-200">
                <div class="bg-blue-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 45%"> 45%</div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import ChevronDownIcon from "../icons/chevron-down.svg";
  const mostOrdered = [
    {
      name: "Burger King Halloween Whopper ",
      image: "food-1.png",
      count: 150,
    },
    {
      name: "King Whopper Sandwich Hamburger",
      image: "food-2.png",
      count: 170,
    },
    {
      name: "Red Robin Gourmet Burger",
      image: "food-3.png",
      count: 180,
    },
  ];
  </script>