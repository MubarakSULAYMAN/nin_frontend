<template>
    <div class="footer">
        <hr>
        <p class="text-muted text-center small"> Designed and built with all the love in the world.
            <br>
            App is optimised for use. While using this, you agree to have
            read and accepted our terms of use, cookie and privacy policy.
            <br>
            Copyright &copy; {{ rights }}, National Identity Management Commission (NIMC). All Rights Reserved.
            <br>
            <pre> About | Privacy Policy | Term of Use | Terms &amp; Conditions | Help </pre>
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

<style scoped>

</style>>
