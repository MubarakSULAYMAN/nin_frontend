<template>
    <div>
        <hr>
        <p class="text-muted text-center small"> Designed and built with all the love in the world.
            <br>
            App is optimised for use. While using this, you agree to have
            read and accepted our terms of use, cookie and privacy policy.
            <br>
            &copy; {{ rights }}, National Identity Management Commission (NIMC). All Rights Reserved
        </p>
    </div>
</template>

<script>
    var startYear = 2007
    var thisYear = parseInt(new Date().getFullYear())
    var year_range = startYear + ((startYear != thisYear) ? '-' + thisYear : '')

    export default {
        data() {
            return {
                copyrights: ''
            }
        },

        methods: {
            copyrightsInfo() {
                return this.copyrights = year_range
            }
        },

        computed: {
            rights() {
                return this.copyrightsInfo()
            }
        }
    }

</script>

<style>

</style>
