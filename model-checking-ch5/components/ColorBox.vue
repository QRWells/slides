<script setup lang="ts">

import { computed } from 'vue'

const props = defineProps({
    title: {
        default: '',
        type: String,
    },
    accentColor: {
        default: 'lime',
        type: String,
    },
})

const titleClass = computed(() => {
    return `bg-${props.accentColor}-500`
})

const contentClass = computed(() => {
    return `bg-${props.accentColor}-100`
})

</script>

<template>
    <div class="flex flex-col font-serif mt-2 mb-2">
        <div :class="titleClass">
            <span class="m-2 text-xl font-bold">
                {{ props.title }}
            </span>
        </div>
        <div :class="contentClass">
            <div class="mx-4 -mt-2 mb-2">
                <slot />
            </div>
        </div>
    </div>
</template>