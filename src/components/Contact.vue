<template>
    <li class="contact" :data-tip="name">
        <a :href="link" target="_blank" :alt="name" rel="noopener" class="contact__link">
            <img :src="'/assets/images/contact/' + name.toLowerCase() + '.png'" :alt="name" class="contact__image" />
        </a>
    </li>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "Contact",
        props: {
            name: {
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true
            }
        }
    });
</script>

<style lang="scss">
    .contacts {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 1.5rem 0;
    }

    .contact__link {
        text-decoration: none;
    }

    .contact__image {
        width: 3rem;
        margin: 0.5rem;
        transition: filter 0.15s ease;
        border-radius: 0.25rem;

        &:hover {
            filter: brightness(75%);
        }
    }

    @media screen and (max-width: 50rem) {
        .contact__image {
            width: 2.5rem;
        }
    }
</style>
