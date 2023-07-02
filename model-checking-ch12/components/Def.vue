<template>
    <div class="flex flex-col font-serif my-2 overflow-hidden">
        <div class="bg-green-600 dark:bg-neutral-700">
            <span class="mx-2 text-xl font-bold">
                Definition
            </span>
        </div>
        <div class="bg-green-100 dark:bg-neutral-900">
            <div class="px-4 py-1">
                <slot />
            </div>
        </div>
    </div>
</template>