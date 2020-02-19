<template>
    <div>
        <div>
            <b-form @submit="submitForm" @reset="resetAll">
                <!-- <b-form @submit="onSubmit" @reset="onReset" v-if="show"> -->
                <b-container>
                    <b-row class="justify-content-lg-center mt-3">
                        <b-col sm-6>
                            <!-- <div class="col-sm-6 offset-3"> -->
                            <b-input v-model='queryTerm' placeholder='Search...'
                                class="[ info === false ? 'badInput' ? 'goodInput' : '' ]" />
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
                            <!-- 
                        <p v-if="info === false" class="warningInfo"> {{ infoMessage }} </p>
                        <p v-else-if="info === true" class="info"> Hope the results are helpful. </p> -->

                            <p v-if="queryInfo"> {{ queryMessage }} </p>
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
    let validNIN = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
    let validIssuedDate = ''
    // let validIssuedDate = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
    let validLastName = /^[a-zA-Z]{2,40}$/

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
                        text: 'Last Name',
                        value: 'last_name',
                        name: 'last_name',
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
                this.queryTerm = ''
                this.selectedOption = ''
            },

            submitForm(e) {
                e.preventDefault()
                if (this.queryTerm === '' && this.selectedOption === '') {
                    this.infoMessage = 'Please select an option and enter a query term.'
                    this.info = false
                    this.queryInfo = false
                } else if (this.selectedOption === '') {
                    this.infoMessage = 'Please select an option.'
                    this.info = true
                } else if (this.queryTerm === '') {
                    this.infoMessage = 'Please enter a query term.'
                    this.info = false
                } else {
                    let rootURL = 'localhost://somethinghere/'
                    let url = ''

                    if (this.selectedOption === 'nin') {
                        if (!(this.queryTerm.match(validNIN) && this.queryTerm.length === 11)) {
                            this.infoMessage = 'Invalid NIN, NIN can only be 11 alphanumeric characters.'
                            this.info = false
                            return
                        }

                        url = rootURL + 'lastNameExt/' + this.queryTerm
                    } else if (this.selectedOption === 'issued_date') {
                        if (!this.queryTerm.match(validIssuedDate)) {
                            this.infoMessage = 'Invalid Issued Date'
                            this.info = false
                            return
                        }

                        url = rootURL + 'issuedDateExt/' + this.queryTerm
                    } else if (this.selectedOption === 'last_name') {
                        if (!(this.queryTerm.match(validLastName))) {
                            this.infoMessage = 'Invalid Last Name, name can only be between 2 and 40 characters'
                            this.info = false
                            return
                        }

                        url = rootURL + 'lastNameExt/' + this.queryTerm
                    }

                    this.queryMessage = 'The url is ' + url
                    this.info = true
                    this.queryInfo = true
                    this.searching = true
                }
            }
        },

        computed: {
            validation() {
                if (this.selectedOption === 'nin') {
                    if (!(this.queryTerm.match(validNIN) && this.queryTerm.length === 11)) {
                        this.infoMessage === 'Invalid NIN, NIN can only be 11 characters.'
                        this.info === false
                        return
                    }

                } else if (this.selectedOption === 'issued_date') {
                    if (!this.queryTerm.match(validIssuedDate)) {
                        this.infoMessage === 'Invalid Issued Date'
                        this.info === false
                        return
                    }
                } else if (this.selectedOption === 'last_name') {
                    if (!(this.queryTerm.match(validLastName))) {
                        this.infoMessage === 'Invalid Last Name, name can only be between 2 and 40 characters'
                        this.info === false
                        return
                    }
                }
                return (this.info === true)
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
            // .catch(error => this.posts = [{last_name: "No Query result found."}])
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
