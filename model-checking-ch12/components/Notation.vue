<script setup lang="ts">
import { ref, onMounted } from 'vue'
import katex from 'katex'

const tex = ref(null)

const props = defineProps({
    title: {
        default: '',
        type: String,
    },
})

onMounted(() => {
    katex.render(props.title, tex.value, {
        throwOnError: false
    });
})

</script>

<template>
    <div class="flex flex-col my-2 overflow-hidden">
        <div class="bg-gray-300 dark:bg-zinc-700">
            <div ref="tex" class="mx-2 my-1 text-xl font-bold"/>
        </div>
        <div class="bg-gray-100 dark:bg-zinc-900">
            <div class="px-4 py-1">
                <slot />
            </div>
        </div>
    </div>
</template>