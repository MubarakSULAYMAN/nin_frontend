<template>
    <div>
        <b-row class="justify-content-md-center mt-5">
            <b-col md="6">
                <b-form-group>
                    <!-- <b-form-group v-model="selectedOption"> -->
                    <!-- <b-form-checkbox-group :options="options" v-model="options" switches> -->
                    <b-form-checkbox v-for="(option, index) in options" :key="option.value" @change="checked" switch>
                        <!-- <b-form-checkbox v-for="(option, index) in options" :key="option.value" switch> -->
                        {{option.value}} {{index}}
                    </b-form-checkbox>
                    <!-- </b-form-checkbox-group> -->
                </b-form-group>
            </b-col>
        </b-row>
    </div>
</template>



<script>
    export default {
        data() {
            return {
                // selectedOption: [],
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
        methods: {
            checked(option, index) {
                if (index === index) {
                    // eslint-disable-next-line no-console
                    console.log(option);
                }
            }
        }
        // computed: {
        // selectedOption: function () {

        // { return this.items.filter((item) => /* YOUR IF CONDITION */); }
        // }
        //     let a = "Hello"
        //     return this.options(() => 
        //    { if((a) === (a)) {
        //         // return ("Hello")
        //         // eslint-disable-next-line no-console
        //         console.log("Hello")
        //         }}
        //     )}
        // }
    }

</script>
