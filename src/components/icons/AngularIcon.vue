<template>
    <Icon viewBox="250 250">
        <g fill="#ff4f76" style="transform: scale(1.25) translate(-2rem, -2rem);">
            <polygon points="108,135.4 125,135.4 125,135.4 125,135.4 142,135.4 125,94.5" />
            <path
                d="M125,30L125,30L125,30L31.9,63.2l14.2,123.1L125,230l0,0l0,0l78.9-43.7l14.2-123.1L125,30z M183.1,182.6h-21.7h0 l-11.7-29.2H125h0h0h-24.7l-11.7,29.2h0H66.9h0L125,52.1l0,0l0,0l0,0l0,0L183.1,182.6L183.1,182.6z"
            />
        </g>
    </Icon>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    import Icon from "@/components/icons/Icon.vue";

    export default defineComponent({
        name: "AngularIcon",
        components: {
            Icon
        }
    });
</script>
