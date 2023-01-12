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
    <details class="custom-select" id="dropdown">
        <summary class="dropdown__radios">
            <input type="radio" :name="dropdownTitle" id="default" @change="onChange($event as InputRadioEvent)" :title="dropdownTitle" checked>
            <input v-for="items in AuthorsItemsList" type="radio" :name="dropdownTitle" :id="items.itemId + dropdownTitle" @change="onChange($event as InputRadioEvent)"
                :title="items.itemTitle">
        </summary>
        <ul class="dropdown__list bg-white">
            <li v-for="items in AuthorsItemsList">
                <label :for="items.itemId + dropdownTitle">{{ items.itemTitle }}</label>
            </li>
        </ul>
    </details>
</template>

<style>
details {
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
    border: 1px solid;
    list-style: none;
}

details[open] .dropdown__radios {
    border-radius: 10px 10px 0 0;
    border: 1px solid;
    border-bottom: 1px solid;
}

.dropdown__radios::-webkit-details-marker {
    display: none;
}

details[open] .dropdown__radios:before {
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

details[open] .dropdown__radios:after {
    transform: rotate(-45deg) translate(0%, 0%);
}

ul {
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

li {
    margin: 0;
    padding: 5px;
    border-bottom: 1px solid transparent;
}

li:first-child {
    padding-top: 0;
}

li:last-child {
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

input[type=radio] {
    counter-increment: radios;
    appearance: none;
    display: none;
}

input[type=radio]:checked {
    display: inline;
    --display: block;
}

input[type=radio]:after {
    content: attr(title);
    display: inline;
}

ul.list {
    border-top: transparent;
    counter-reset: labels;
}

label {
    width: 100%;
    display: flex;
    cursor: pointer;
    justify-content: space-between;
}

ul::-webkit-scrollbar {
    width: 15px;
}

ul::-webkit-scrollbar-thumb {
    background-color: #777777;
    border-radius: 20px;
    border: 4px solid transparent;
    background-clip: content-box;
}

ul::-webkit-scrollbar-thumb:hover {
    background-color: #5f5f5f;
}
</style>
