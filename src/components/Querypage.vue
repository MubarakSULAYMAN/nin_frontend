<template>
    <div>
        <b-row class="justify-content-md-center mt-5">
            <b-col-md-6>
                <b-card border-variant="success" header="The Query Window" align="center" header-bg-variant="success" header-text-variant="white">
                    <b-card-text>Enjoy your day and be sure of the queries you make.</b-card-text>

                    <b-form @submit="onSubmit" @reset="onReset">
        <!-- <b-form @submit="onSubmit" @reset="onReset" v-if="show"> -->

        <b-form-group id="query_pane" label-for="query_pane">
                            <b-form-input id="input_area" placeholder="Enter a NIN, Issued Date or Last Name to make a query..."> </b-form-input>
                            <span class="small" v-show="checki"> {{ warning }} </span>
                            <b-form-checkbox-group class="limiter mt-3" v-model="option.checked" @change="updateBoxes" :value="option.value" :checked="option.checked" :disabled="option.disabled" switches></b-form-checkbox-group>
                            <!-- <b-form-checkbox-group class="limiter mt-3" :options="options" switches></b-form-checkbox-group> -->
                            <!-- <b-form-checkbox-group class="limiter mt-3" :options="options" :disabled="option.disabled" v-model="option.checked" @change="updateLimit" switches></b-form-checkbox-group> -->
                        </b-form-group>

                        <b-button class="mr-3" type="reset" variant="danger">Reset</b-button>

                        <b-button class="ml-3" type="submit" variant="primary"
                            :disabled="(checkboxSelected === false && fulfilledAllConditions == false || this.queried == true)"
                            @click="checki">Search</b-button>
                    </b-form>
                </b-card>
            </b-col-md-6>
        </b-row>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                tickLimit: 1,
                ticks: [],
                options: [{
                        text: 'NIN',
                        value: 'nin',
                        checked: 'false',
                        disabled: false
                    },
                    {
                        text: 'Issued Date',
                        value: 'issued_date',
                        checked: 'false',
                        disabled: false
                    },
                    {
                        text: 'Last Name',
                        value: 'last_name',
                        checked: 'false',
                        disabled: false
                    }
                ],
                checked: '',
                fulfilledAllConditions: false,
                warning: ''
            }
        },

        methods: {
            checkboxSelected() {
                if(this.checked > 1) {
                    this.checked = false
                }
            },

            checki() {
                if (this.checkboxSelected === null && this.fulfilledAllConditions == false)
                    prompt(this.message =
                        "Ensure a button is on and a correct input is made to activate search button.")
            }
        },

        computed: {
            selectedsda() {
                return ("I am a boy")
            }
        },

        watch: {
        // button selection
        // query link
            makeQuery: {
                immediate: true,
                // main condition
                handler() {
                    this.checkboxSelected = false
                }
            }
        }

        // methods: {
        //     updateLimit() {
        //         if (this.ticks.length < this.tickLimit) {
        //             // keep current selection and activate remaining options
        //             this.boxes.forEach(box => {
        //                 if (box.disabled) box.disabled = false;
        //             });
        //         }

        //         if (this.ticks.length > this.tickLimit) {
        //             // revert last selections (roughly) and update boxes based on new limit
        //             let tickDiff = this.ticks.length - this.tickLimit;
        //             for (var i = this.ticks.length - 1; i >= (this.ticks.length - tickDiff); i--) {
        //                 this.boxes.find(box => {
        //                     if (box.value == this.ticks[i].value) box.checked = false;
        //                 })
        //             };
        //         }

        //         this.updateBoxes();
        //     },

        //     updateBoxes() {
        //         // update the number of ticks...
        //         this.ticks = this.boxes.filter(box => box.checked);

        //         // re-enable checkboxes if back under the limit...
        //         if (this.ticks.length < this.tickLimit) {
        //             this.boxes.forEach(box => {
        //                 if (box.checked == false) box.disabled = false;
        //             });
        //         }

        //         // disable empty checkboxes if at the limit...
        //         if (this.ticks.length == this.tickLimit) {
        //             this.boxes.forEach(box => {
        //                 if (box.checked == false) box.disabled = true;
        //             });
        //         }
        //     },

        //     nukeTicks() {
        //         this.boxes.forEach(box => {
        //             box.checked = false;
        //             box.disabled = false;
        //         });
        //         this.ticks = [];
        //     }
        // },
    }

</script>

<style scoped>

</style>
