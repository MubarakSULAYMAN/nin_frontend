<template>
    <div>
        <b-spinner :style="`width: ${size}rem; height: ${size}rem;`" label="Loading..." variant="success">
        </b-spinner>
    </div>
</template>

<script>
    export default {
        props: {
            size: {
                type: Number,
                default: 17
            }
        }
    }

</script>

<style>

</style>
