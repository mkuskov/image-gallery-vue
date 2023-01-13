<script lang="ts">
interface InputRadioEvent extends Event {
    target: HTMLInputElement
    event: Event
}

export default {
    data() {
        return {
            dropdownValue: '',
            AuthorsItemsList: [
                {
                    itemTitle: 'Author 1',
                    itemId: 'item1'

                },
                {
                    itemTitle: 'Author 2',
                    itemId: 'item2'
                },
                {
                    itemTitle: 'Author 3',
                    itemId: 'item3'
                },
                {
                    itemTitle: 'Author 4',
                    itemId: 'item4'
                },
                {
                    itemTitle: 'Author 5',
                    itemId: 'item5'
                },
                {
                    itemTitle: 'Author 6',
                    itemId: 'item6'
                },
                {
                    itemTitle: 'Author 7',
                    itemId: 'item7'
                },
                {
                    itemTitle: 'Author 8',
                    itemId: 'item8'
                },
            ]
        }
    },
    methods: {
        onChange(event: InputRadioEvent) {
            const data = event.target.title;
            return this.dropdownValue = data;
        }
    },

    // доделать сворачивание dropdown при клике вне его блока

    // mounted() {
    //     const dropdown = document.getElementById('dropdown') as HTMLDetailsElement;
    //     document.onclick = function(event: any) {
    //         if (event.target.id !== 'dropdown') {
    //             dropdown.open = false;
    //         }
    //     };
    // },

    props: {
        dropdownTitle: String,
    },
}
</script>

<template>
    <details class="dropdown" id="dropdown">
        <summary class="dropdown__radios">
            <input type="radio" class="dropdown__input" :name="dropdownTitle" id="default" @change="onChange($event as InputRadioEvent)"
                :title="dropdownTitle" checked>
            <input v-for="items in AuthorsItemsList" type="radio" class="dropdown__input" :name="dropdownTitle"
                :id="items.itemId + dropdownTitle" @change="onChange($event as InputRadioEvent)"
                :title="items.itemTitle">
        </summary>
        <ul class="dropdown__list">
            <li v-for="items in AuthorsItemsList" class="dropdown__list-item">
                <label :for="items.itemId + dropdownTitle" class="dropdown__label">{{ items.itemTitle }}</label>
            </li>
        </ul>
    </details>
</template>

<style>
.dropdown {
    margin-left: 1rem;
    position: relative;
    width: 300px;
}

details[open] {
    z-index: 1;
}

.dropdown__radios {
    border-radius: 10px;
    padding: 1rem;
    cursor: pointer;
    border: 1px solid rgb(var(--v-theme-border-color));
    list-style: none;
}

.dropdown[open] .dropdown__radios {
    border-radius: 10px 10px 0 0;
    border: 1px solid;
    border-bottom: 1px solid rgb(var(--v-theme-border-color));
}

.dropdown__radios::-webkit-details-marker {
    display: none;
}

.dropdown[open] .dropdown__radios:before {
    content: '';
    display: block;
    background: transparent;
    position: fixed;
    top: 0;
    left: 0;
}

.dropdown__radios:after {
    content: '';
    float: right;
    margin-top: 5px;
    width: .5rem;
    height: .5rem;
    border-bottom: 1px solid currentColor;
    border-left: 1px solid currentColor;
    transform: rotate(45deg) translate(50%, 0%);
    transform-origin: center center;
    transition: transform ease-in-out 100ms
}

.dropdown__radios:focus {
    outline: none;
}

.dropdown[open] .dropdown__radios:after {
    transform: rotate(-45deg) translate(0%, 0%);
}

.dropdown__list {
    background: rgb(var(--v-theme-white));
    border-radius: 0 0 10px 10px;
    list-style: none;
    width: 100%;
    position: absolute;
    left: 0;
    padding: 1rem;
    margin: 0;
    box-sizing: border-box;
    border: 1px solid;
    max-height: 200px;
    overflow-y: auto;
    border-top: 1px solid transparent;
}

.dropdown__list-item {
    margin: 0;
    padding: 5px;
    border-bottom: 1px solid transparent;
}

.dropdown__list-item:first-child {
    padding-top: 0;
}

.dropdown__list-item:last-child {
    padding-bottom: 0;
    border-bottom: none;
}

/* FAKE SELECT */

.dropdown__radios.radios {
    counter-reset: radios;
}

.dropdown__radios.radios:before {
    content: var(--selection);
}

.dropdown__input[type=radio] {
    counter-increment: radios;
    appearance: none;
    display: none;
}

.dropdown__input[type=radio]:checked {
    display: inline;
    --display: block;
}

.dropdown__input[type=radio]:after {
    content: attr(title);
    display: inline;
}

.dropdown__list.list {
    border-top: transparent;
    counter-reset: labels;
}

.dropdown__label {
    width: 100%;
    display: flex;
    cursor: pointer;
    justify-content: space-between;
}

.dropdown__list::-webkit-scrollbar {
    width: 15px;
}

.dropdown__list::-webkit-scrollbar-thumb {
    background-color: #777777;
    border-radius: 20px;
    border: 4px solid transparent;
    background-clip: content-box;
}

.dropdown__list::-webkit-scrollbar-thumb:hover {
    background-color: #5f5f5f;
}
</style>
