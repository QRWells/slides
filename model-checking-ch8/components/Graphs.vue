<template>
    <div class="flex flex-row items-center space-x-2">
        <div class="flex flex-col space-y-4">
            <button class="btn" @click="prev()">↑</button>
            <button class="btn" @click="next()">↓</button>
        </div>
        <div class="text-center">
            <img :src="graph.src">
            <span class="text-xs">{{ graph.title }}</span>
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
}
</style>