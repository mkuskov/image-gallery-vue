<script lang="ts">
export default {
    props: {
        dropdownTitle: String
    },
}
</script>

<template>
    <select name="" id="" class="filter__author">
        <option value="" disabled selected hidden>{{ dropdownTitle }}</option>
        <option value="">Автор 1</option>
        <option value="">Автор 2</option>
        <option value="">Автор 3</option>
    </select>
</template>

<style scoped>
select {
    cursor: pointer;
    display: flex;
    padding: 15px 150px 15px 15px;
    text-align: left;
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 8px;
}
</style>
