<template>
    <div>
        <b-row class="justify-content-md-center mt-5">
            <b-col md="6">
                <b-form-group label="Inline switch style checkboxes">
                    <b-form-checkbox-group :options="options" v-model="options" switches>
                    </b-form-checkbox-group>
                </b-form-group>
            </b-col>
        </b-row>
    </div>
</template>



<script>
    export default {
        data() {
            return {
                selectedIndex: null,
                options: [{
                        text: 'NIN',
                        value: 'nin',
                        name: 'nin',
                        disabled: false
                    },
                    {
                        text: 'Issued Date',
                        value: 'issued_date',
                        name: 'issued_date',
                        disabled: false
                    },
                    {
                        text: 'Last Name',
                        value: 'last_name',
                        name: 'last_name',
                        disabled: false
                    }
                ],
            }
        },
        watch: {
            options: function () {
                // eslint-disable-next-line no-console
                console.log("Hello")
            }
        }
    }

</script>
