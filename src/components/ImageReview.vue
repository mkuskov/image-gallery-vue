<script lang="ts">
import type { Image } from '@/interfaces/store';
import { makeFuncWithDelay } from '@/utils/makeFuncWithDelay';

export default {
    data() {
        return {
        }
    },
    mounted() {
        this.$store.dispatch("galleryJSON");

        makeFuncWithDelay(() => {
            const image = this.$store.state.gallery.galleryJSON.filter((item: Image) => item.id === this.$route.params.id);

            return this.$store.dispatch("image", image);
        }, 250)
    }
};

</script>


<template>
    <div
        class="current-image"
        v-for="data in $store.state.gallery.image"
        :key="data.id"
    >
        <img
            class="current-image__image"
            :src="data.img"
            alt="b"
        >
        <div class="current-image__info">
            <h1>
                {{data.name}}
            </h1>
            <h4>
               <span class="current-image__info-by">by</span>&nbsp;{{ data.author }}
            </h4>
            <p class="current-image__description">
                {{ data.description }}
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
    margin-top: 15px;
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
