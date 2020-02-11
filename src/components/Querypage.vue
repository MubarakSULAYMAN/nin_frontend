<template>
    <div>

        <b-card border-variant="success" header="The Query Window" align="center">
            <b-card-text>Enjoy your day, be sure of the query.</b-card-text>
            <b-form @submit="onSubmit" @reset="onReset">
                <!-- <b-form @submit="onSubmit" @reset="onReset" v-if="show"> -->
                <b-form-group id="input-group-1" label-for="input-1" description="Ensure a button is on and a correct input is made to activate search button.">
                    <b-form-input id="input-1" type="email" required placeholder="Enter email">
                    </b-form-input>
                    <b-form-checkbox-group :options="options" switches></b-form-checkbox-group>
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
        </b-card>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                options: [
                { text: 'NIN', value: 'nin' },
                { text: 'Issued Date', value: 'issued_date' },
                // { text: 'Yellow (disabled)', value: 'yellow', disabled: true },
                { text: 'Last Name', value: 'last_name' }
                ]
            }
        },

        methods: {
            fx() {
                return ("good")
            }
        },

        computed: {
            selected() {
                return ("I am a boy")
            }
        }
    } 
</script>

<style scoped>

</style>