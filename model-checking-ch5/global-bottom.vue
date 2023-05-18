<template>
    <footer class="absolute bottom-0 left-0 right-0 p-2 text-gray-500">
        <div class="absolute left-2 bottom-0">
            {{ new Date().toLocaleDateString() }}
        </div>
        <div class="absolute right-2 bottom-0">
            {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
        </div>
    </footer>
</template>