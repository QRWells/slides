<script setup lang="ts">

const props = defineProps({
    title: {
        default: '',
        type: String,
    },
})

</script>

<template>
    <div class="flex flex-col font-serif my-2 overflow-hidden">
        <div class="bg-teal-600 dark:bg-stone-700">
            <span class="mx-2 text-xl font-bold">
                Theorem {{ props.title }}
            </span>
        </div>
        <div class="bg-teal-100 dark:bg-stone-800">
            <div class="px-4 py-1">
                <slot />
            </div>
        </div>
    </div>
</template>