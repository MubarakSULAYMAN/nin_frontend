<template>
    <div>
        <div>
            <b-form @submit="submitForm" @reset="resetAll" v-if="show" @submit.stop.prevent>
                <b-container>
                    <b-row class="justify-content-lg-center mt-3">
                        <b-col sm-6>
                            <!-- <div class="col-sm-6 offset-3"> -->
                            <b-input v-model='queryTerm' placeholder='Search...'
                                class="[ info === false ? 'badInput' ? 'goodInput' : '' ]" :state="inputVet" />

                            <b-form-invalid-feedback :state="inputVet">
                                {{ infoMessage }}
                            </b-form-invalid-feedback>
                            <b-form-valid-feedback :state="inputVet">
                                Input seems Good.
                            </b-form-valid-feedback>

                            <p v-if='!searching'> Search for <b>{{ queryTerm }}</b> from our records. </p>
                            <p v-else> Searching for <b>{{ queryTerm }}</b> from our records. </p>

                            <span>
                                <p v-if="info === false" class="warningInfo"> {{ infoMessage }} </p>
                                <p v-else-if="info === true" class="info"> Input seems good. </p>
                            </span>

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

                            <p v-if="info === true" class="info"> Hope the results are helpful. </p>

                            <p v-if="queryInfo"> {{ queryMessage }} </p>
                        </b-col>
                    </b-row>
                </b-container>
            </b-form>
        </div>
    </div>
</template>



<script>
    let validNIN = /^[0-9]{15}$/
    let validIssuedDate = ''
    // let validIssuedDate = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
    let validTrackingID = /^[a-zA-Z0-9]{15}$/

    export default {
        data() {
            return {
                queryTerm: '',
                selectedOption: '',
                infoMessage: '',
                queryMessage: '',

                info: '',
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
        computed: {
            inputVet() {
                if (this.queryTerm === '' && this.selectedOption === '') {
                    this.infoMessage === 'Please select an option and enter a query term.'
                    this.info === false
                    this.queryInfo === true
                } else if (this.selectedOption === '') {
                    this.infoMessage === 'Please select an option.'
                    this.info === false
                } else if (this.queryTerm === '') {
                    this.infoMessage === 'Please enter a query term.'
                    this.info === false
                } else {

                    if (this.selectedOption === 'nin' && !(this.queryTerm.match(validNIN) && this.queryTerm.length ===
                            11 && this.queryTerm < 50000000000)) {
                        this.infoMessage ===
                            'Invalid NIN, NIN can only be 11 digits and cannot be less than 50000000000.'
                        this.info === false
                        return
                    } else if (this.selectedOption === 'issued_date' && !this.queryTerm.match(validIssuedDate)) {
                        this.infoMessage === 'Invalid Issued Date'
                        this.info === false
                        return
                    } else if (this.selectedOption === 'tracking_id' && !this.queryTerm.match(validTrackingID)) {
                        this.infoMessage === 'Invalid Tracking ID, Tracking ID can only be between 2 and 40 characters'
                        this.info === false
                        return
                    }
                }
                return this.info === true
            }
        },
    }
</script>
