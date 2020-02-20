<template>
    <div>
        <div>
            <b-form @submit="submitForm" @reset="resetAll" v-if="show" @submit.stop.prevent>
                <b-container>
                    <b-row class="justify-content-lg-center mt-3">
                        <b-col sm-6>
                                <!-- class="[ info === false ? 'badInput' ? 'goodInput' : '' ]" -->
                                <b-input v-model='queryTerm' placeholder='Search...' :state="inputVet" />

                            <b-form-invalid-feedback :state="inputVet">
                                {{ infoMessage }}
                            </b-form-invalid-feedback>
                            <b-form-valid-feedback :state="inputVet">
                                Input seems Good.
                            </b-form-valid-feedback>

                            <p v-if='!searching'> Search for <b>{{ queryTerm }}</b> from our records. </p>
                            <p v-else> Searching for <b>{{ queryTerm }}</b> from our records. </p>

                            <span v-for='option in options' :key='option.value'>
                                <input type='radio' :id='option.name' class="radioBtn" name='eradio'
                                    :value='option.value' v-model='selectedOption'>
                                <label :for='option.name'> {{option.text}} </label>
                            </span>
                            <div class="">
                                <b-button type="reset" pill variant="danger">Reset</b-button>
                                <b-button type="submit" pill variant="primary" class="ml-3">Submit</b-button>
                            </div>

                            <p class="hint"> Ensure you input the right detail. </p>

                            <p v-if="info" class="successMessage"> Hope the results are helpful. </p>

                            <p v-if="!queryInfo"> {{ queryMessage }} </p>
                        </b-col>
                    </b-row>
                </b-container>
            </b-form>
        </div>

        <!-- <div :availableResults="queryResponses[index]">
            {{ availableResults.queryResponses }}
        </div> -->
    </div>
</template>



<script>
    let validNIN = /^[0-9]*$/
    // let validIssuedDate = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
    let validTrackingID = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/

    export default {
        data() {
            return {
                queryTerm: '',
                selectedOption: '',
                infoMessage: 'Hello',
                queryMessage: '',

                info: false,
                queryInfo: false,
                searching: false,
                show: true,

                options: [{
                        text: 'NIN',
                        value: 'nin',
                        name: 'nin',
                    },
                    {
                        text: 'Issued Date',
                        value: 'issued_date',
                        name: 'issued_date',
                    },
                    {
                        text: 'Tracking ID',
                        value: 'tracking_id',
                        name: 'tracking_id',
                    }
                ],

                queries: [],
                index: 0
            }
        },

        methods: {
            resetCheckbox(e) {
                e.preventDefault()
                this.selectedOption = ''
            },

            resetAll(e) {
                e.preventDefault()
                this.info = false
                this.queryTerm = ''
                this.selectedOption = ''
            },

            // submitForm(e) {
            //     e.preventDefault()
            //     if (this.queryTerm === '' && this.selectedOption === '') {
            //         this.infoMessage = 'Please select an option and enter a query term.'
            //         this.info = false
            //         this.queryInfo = false
            //     } else if (this.selectedOption === '') {
            //         this.infoMessage = 'Please select an option.'
            //         this.info = false
            //     } else if (this.queryTerm === '') {
            //         this.infoMessage = 'Please enter a query term.'
            //         this.info = false
            //     } else {
            //         let rootURL = 'localhost://somethinghere/'
            //         let url = ''

            //         if (this.selectedOption === 'nin') {
            //             if (!(this.queryTerm.match(validNIN) && this.queryTerm.length === 11 && this.queryTerm > 50000000000)) {
            //                 this.infoMessage =
            //                     'Invalid NIN, NIN can only be 11 digits and cannot be less than 50000000000.'
            //                 this.info = false
            //                 return
            //             }

            //             url = rootURL + 'ninExt/' + this.queryTerm
            //         }
            //         //  else if (this.selectedOption === 'issued_date') {
            //         //     if (!this.queryTerm.match(validIssuedDate)) {
            //         //         this.infoMessage = 'Invalid Issued Date, check format'
            //         //         this.info = false
            //         //         return
            //         //     }

            //         //     url = rootURL + 'issuedDateExt/' + this.queryTerm
            //         // } 
            //         else if (this.selectedOption === 'tracking_id') {
            //             if (!(this.queryTerm.match(validTrackingID))) {
            //                 this.infoMessage = 'Invalid Tracking ID, Tracking ID can only be 15 alphanumeric characters'
            //                 this.info = false
            //                 return
            //             }

            //             url = rootURL + 'trackingIDExt/' + this.queryTerm
            //         }

            //         this.queryMessage = 'The url is ' + url
            //         this.info = true
            //         this.queryInfo = true
            //         this.searching = true
            //     }
            // }
        },

        computed: {
            inputVet() {
                if (this.queryTerm === '' && this.selectedOption === '') {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.infoMessage = 'Please select an option and enter a query term.'
                    return this.info
                } else if (this.selectedOption === '') {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.infoMessage = 'Please select an option.'
                    return this.info
                } else if (this.queryTerm === '') {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.infoMessage = 'Please enter a query term.'
                    return this.info
                } else {
                    if (this.selectedOption === 'nin' && !(this.queryTerm.match(validNIN) && this.queryTerm.length === 11)) {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                        this.infoMessage = 'Invalid NIN, NIN can only be 11 digits and cannot be less than 50000000000.'
                        return this.info
                    }
                    // else if (this.selectedOption === 'issued_date' && !this.queryTerm.match(validIssuedDate)) {
                    //     this.infoMessage === 'Invalid Issued Date'
                    //     this.info === false
                    //     return
                    // } 
                    else if (this.selectedOption === 'tracking_id' && !this.queryTerm.match(validTrackingID)) {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                        this.infoMessage = 'Invalid Tracking ID, Tracking ID can only be between 2 and 40 characters'
                        return this.info
                    }
                }
                return this.info
            }
        },

        mounted: function () {
            fetch('http://127.0.0.1:5000/restricted_raw', {
                    method: 'get'
                })
                .then((response) => {
                    // eslint-disable-next-line no-console
                    // console.log(response.json)
                    return response.json()
                })
                .then((jsonDataResponse) => {
                    this.queries = jsonDataResponse.query_term
                })
            // .then(response => this.posts = response.data.query_term)
            // .catch(error => this.posts = [{tracking_id: "No Query result found."}])
            // .finally(() => console.log("Data loaded completely."));
        }
    }

</script>

<style scoped>
    .badInput {
        border-color: red
    }

    .goodInput {
        border-color: green
    }

    .hint {
        color: green;
        /* size: 5px */
    }

    .warningInfo {
        color: red
    }

    /* .info {
        color: blue
    } */

</style>
