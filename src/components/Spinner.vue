<template>
    <div>
        <div class="text-center">
            <b-spinner label="Spinning"></b-spinner>
            <b-spinner type="grow" label="Spinning"></b-spinner>
            <b-spinner variant="primary" label="Spinning"></b-spinner>
            <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
            <b-spinner variant="success" label="Spinning"></b-spinner>
            <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
        </div>

        <!-- variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark'] -->

        <div>
            <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
            <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow"></b-spinner>
        </div>

        <div>
            <div class="d-flex justify-content-center mb-3">
                <b-spinner label="Loading..."></b-spinner>
            </div>

            <div class="d-flex align-items-center">
                <strong>Loading...</strong>
                <b-spinner class="ml-auto"></b-spinner>
            </div>
        </div>

        <div class="text-center">
            <b-spinner variant="primary" label="Text Centered"></b-spinner>
        </div>

        <div>
            <b-button variant="primary" disabled>
                <b-spinner small></b-spinner>
                <span class="sr-only">Loading...</span>
            </b-button>

            <b-button variant="primary" disabled>
                <b-spinner small type="grow"></b-spinner>
                Loading...
            </b-button>
        </div>
    </div>
</template>

<script>
    export default {

    }

</script>

<style>

</style>
