<script lang="ts">
import type { GalleryData } from '@/interfaces/store';

export default {
    data() {
        return {
            image: [] as Array<GalleryData>
        }
    },
    mounted() {
        this.image = JSON.parse(localStorage.getItem('image') as string);
    }
};

</script>


<template>
    <div
        class="current-image"
        v-for="data in image"
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
                <v-btn
                    class="current-image__button-back"
                    prepend-icon="mdi-arrow-left-circle"
                >
                    Назад
                </v-btn>
            </router-link>
        </div>
    </div>
</template>

<style>

.current-image {
    margin: 2.5% 0 2.5% 0;
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
    @media (max-width: 1280px) & {
        width: 75%;
    }
}

.current-image__info {
    margin-top: 15px;
    width: 50%;
    @media (max-width: 1280px) & {
        width: 75%;
    }
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

@media (max-width: 1280px) {
    .current-image__image, .current-image__info {
        width: 75%;
    }
}
</style>
