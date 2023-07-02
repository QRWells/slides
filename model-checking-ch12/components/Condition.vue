<script setup lang="ts">

const props = defineProps({
    title: {
        default: '',
        type: String,
    },
})

</script>

<template>
    <div class="flex flex-row my-2">
        <div class="bg-emerald-300 dark:bg-zinc-700 p-2 w-12 text-xl font-bold">
            {{ props.title }}
        </div>
        <div class="bg-emerald-50 dark:bg-zinc-900 w-full">
            <div class="px-4 py-1">
                <slot />
            </div>
        </div>
    </div>
</template>