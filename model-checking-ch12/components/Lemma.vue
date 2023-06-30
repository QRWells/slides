<script setup lang="ts">

const props = defineProps({
    title: {
        default: '',
        type: String,
    },
})

</script>

<template>
    <div class="flex flex-col font-serif my-2 rounded-md overflow-hidden">
        <div class="bg-cyan-600 dark:bg-zinc-700">
            <span class="mx-2 text-xl font-bold">
                Lemma {{ props.title }}
            </span>
        </div>
        <div class="bg-cyan-100 dark:bg-zinc-900">
            <div class="px-4 py-1">
                <slot />
            </div>
        </div>
    </div>
</template>