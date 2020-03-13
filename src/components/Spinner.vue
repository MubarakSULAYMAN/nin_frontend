<template>
    <div>
        <div class="d-flex justify-content-center align-items-center">
            <b-spinner :style="`width: ${size}rem; height: ${size}rem;`" label="Large Spinner" variant="success"></b-spinner>

            <!-- <strong class="text-center text-muted"> Kindly wait while we fetch your query... </strong>
            <b-spinner style="width: 2rem; height: 2rem;" label="Kindly wait while we fetch your query..."
                variant="success" type="grow"></b-spinner> -->
        </div>
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
