<script setup lang="ts">
</script>

<template>
    <div class="pages-count">
        <button>&lt;</button>
        <button>1</button>
        <button>2</button>
        <button>...</button>
        <button>></button>
    </div>
</template>

<style scoped>
.pages-count {
    margin-top: 44px;
    font-size: 18px;
    text-align: right;
}

button {
    padding: 12px 18px 12px 18px;
    background-color: rgb(255, 255, 255);
    border: 1px solid black;
}

button:first-child {
    border-radius: 10px 0 0 10px;
}

button:last-child {
    border-radius: 0 10px 10px 0;
}

button:hover {
    cursor: pointer;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
}

@media (max-width: 660px) {
    .pages-count {
    margin-top: 44px;
    font-size: 18px;
    text-align: center;
}
    button {
        padding: 20px 28px 20px 28px;
        background-color: rgb(255, 255, 255);
        border: 1px solid black;
    }
}
</style>
