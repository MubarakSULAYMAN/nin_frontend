<template>
    <div>
        <div class="d-flex justify-content-center align-items-center">
            <b-spinner :style="`width: ${size}rem; height: ${size}rem;`" label="Large Spinner" variant="success">
            </b-spinner>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            size: {
                type: Number,
                default:17
            }
        }
    }

</script>

<style>

</style>
