<template>
    <div class="flex flex-col items-center space-x-2">
        <div class="text-center">
            <img :src="graph.src">
            <span class="text-xs">{{ graph.title }}</span>
        </div>
        <div class="flex flex-row space-x-8">
            <button class="btn" @click="prev()" :disabled="current == 0">Prev</button>
            <button class="btn" @click="next()" :disabled="current == total - 1">Next</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

type Graph = {
    title: string,
    src: string,
}

const props = defineProps({
    src: {
        type: Array<Graph>,
        default: () => [],
    }, count: {
        default: 0,
    },
})

var total = props.src.length
const current = ref(props.count)
var graph = computed(() => props.src[current.value])

const prev = () => {
    if (current.value > 0) {
        current.value--
    }
    else {
        current.value = total - 1
    }
}

const next = () => {
    if (current.value < total - 1) {
        current.value++
    }
    else {
        current.value = 0
    }
}
</script>

<style scoped>
button.btn {
    @apply text-teal-600;

    &:disabled {
        @apply text-gray-400;
    }
}
</style>