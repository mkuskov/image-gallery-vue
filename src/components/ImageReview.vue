<script lang="ts">

export default {
    data() {
        return {
        }
    },
};

</script>

<template>
    <div class="current-image" v-for="data in $store.state.currentImage">
        <img class="current-image__image" :src="data.img" alt="b">
        <div class="current-image__info">
            <h1>
                {{data.name}}
            </h1>
            <h4>
               <span class="current-image__info-by">by</span>&nbsp;{{ data.author }}
            </h4>
            <p class="current-image__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris   nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatatnon  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <router-link to="/">
                <v-btn class="current-image__button-back">
                    Вернуться
                </v-btn>
            </router-link>
        </div>
    </div>
</template>

<style>
.current-image {
    margin: 2.5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.current-image__info-by {
    font-weight: 300;
}

.current-image__image {
    border-radius: 8px;
    width: 50%;
}

.current-image__info {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}

.current-image__description {
    margin: 20px 0 20px 0;
    font-size: 18px;
}

a {
    text-decoration: none;
}

.current-image__button-back {
    color: rgb(var(--v-theme-primary-900));
}
</style>
