<template>
    <div>
        <div>
            <b-navbar type="light">
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#">Home</b-nav-item>

                    <b-nav-item-dropdown text="User" right>
                        <b-dropdown-item href="#">Account</b-dropdown-item>
                        <b-dropdown-item href="#">Settings</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-navbar>
        </div>
        <div>
            <!-- <form
  id="app"
  @submit="checkForm"
  action="https://vuejs.org/"
  method="post"
> -->
            <b-form @reset="resetAll" v-if="show" @submit.stop.prevent="submitForm">
                <!-- <b-row class="justify-content-lg-center justify-content-md-center justify-content-sm-center mt-3">
                    <b-col align-self="center"> -->
                <b-row class="justify-content-sm-center justify-content-md-center justify-content-lg-center mt-3">
                    <b-col sm="9" md="7" lg="4">
                        <b-input v-model='queryTerm' size="sm" placeholder='Search...' :state="inputVet"
                            :maxlength="selectedOption === 'tracking_id' ? 15 : selectedOption === 'nin' ? 11 : 10 "
                            required="required" autofocus />
                        <b-form-invalid-feedback :state="inputVet"> {{ infoMessage }} </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="inputVet"> Input seems Good. </b-form-valid-feedback>

                        <p v-if='!searching'> Search for <b>{{ queryTerm }}</b> from our records. </p>
                        <p v-else> Searching for <b>{{ queryTerm }}</b> from our records. </p>

                        <span v-for='option in options' :key='option.value'>
                            <input type='radio' :id='option.name' class="radioBtn" name='eradio' :value='option.value'
                                v-model='selectedOption'>
                            <label :for='option.name'> {{option.text}} </label>
                        </span>
                        <div class="buttons align-center justify-center">
                            <b-button type="reset" pill variant="danger"> <b-icon icon="bootstrap-reboot"></b-icon> Reset </b-button>

                            <b-button type="submit" pill variant="primary" class="ml-3"
                                :disabled="inputVet ? disabled : !disabled"> <b-icon icon="search"></b-icon> Search </b-button>
                        </div>

                        <p class="hint"> Ensure you input the right detail. </p>

                        <p v-if="info" class="successMessage"> Hope the results are helpful. </p>

                        <p v-if="!queryInfo"> {{ queryMessage }} </p>
                    </b-col>
                </b-row>
            </b-form>
        </div>

        <!-- <div :availableResults="queryResponses[index]">
            {{ availableResults.queryResponses }}
        </div> -->
    </div>
</template>



<script>
    let numFormat = /^[0-9]*$/

    let dateFormat = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    let alphaNumFormat = /^[a-zA-Z0-9]+$/;
    // /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/

    export default {
        data() {
            return {
                queryTerm: '',
                selectedOption: '',
                infoMessage: 'Hello',
                queryMessage: '',
                max: '',
                // regs: '',

                info: false,
                queryInfo: false,
                searching: false,
                show: true,
                disabled: false,

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

            submitForm(e) {
                e.preventDefault()
                let rootURL = 'localhost://somethinghere/'
                let url = ''

                if (this.selectedOption === 'nin') {
                    url = rootURL + 'ninExt/' + this.queryTerm
                    // eslint-disable-next-line no-console
                    console.log(this.queryTerm.length)
                } else if (this.selectedOption === 'issued_date') {
                    url = rootURL + 'issuedDateExt/' + this.queryTerm
                } else if (this.selectedOption === 'tracking_id') {
                    url = rootURL + 'trackingIDExt/' + this.queryTerm
                }


                this.searching = true
                this.info = true
                this.queryMessage = 'The url is ' + url
            }
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
                    if (this.selectedOption === 'nin' && !this.queryTerm.match(numFormat) && this.queryTerm.length !==
                        11 && this.queryTerm > 12345678906) {
                        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                        this.infoMessage = 'Invalid NIN, NIN can only be 11 digits and cannot be less than 12345678907.'
                        return this.info
                    } else if (this.selectedOption === 'issued_date' && !this.queryTerm.match(dateFormat) && !((this
                            .queryTerm[1] < 1 || this.queryTerm[1] > 31) && (this.queryTerm[2] < 1 || this
                            .queryTerm[2] > 12) && (this.queryTerm[3] < 2007 || this.queryTerm[3] > (new Date())
                            .getFullYear()))) {
                        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                        this.infoMessage === 'Invalid Issued Date'
                        return this.info
                    } else if (this.selectedOption === 'tracking_id' && this.queryTerm.length !== 15 && this.queryTerm
                        .match(alphaNumFormat)) {
                        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                        this.infoMessage = 'Invalid Tracking ID, Tracking ID can only be 15 alphanumeric characters'
                        return this.info
                    }
                }
                return !this.info
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
        border-color: #009340;
    }

    .hint {
        color: #00933f;
        /* size: 5px */
    }

    .warningInfo {
        color: red
    }

    /* .info {
        color: blue
    } */

    .buttons {
        display: flex;
        justify-content: center;
    }



    [type="radio"]:checked,
    [type="radio"]:not(:checked) {
        position: absolute;
        left: -9999px;
    }

    [type="radio"]:checked+label,
    [type="radio"]:not(:checked)+label {
        position: relative;
        padding-left: 28px;
        cursor: pointer;
        line-height: 20px;
        display: inline-block;
        /* color: #666; */
        color: rgb(24, 22, 22);
        margin-left: 12px
    }

    [type="radio"]:checked+label:before,
    [type="radio"]:not(:checked)+label:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 18px;
        height: 18px;
        border: 1px solid #ddd;
        border-radius: 100%;
        background: #fff;
        margin-left: 5px;
    }

    [type="radio"]:checked+label:after,
    [type="radio"]:not(:checked)+label:after {
        content: '';
        width: 12px;
        height: 12px;
        /* background: #F87DA9; */
        background: #009340;
        position: absolute;
        top: 3px;
        left: 4px;
        border-radius: 100%;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
        margin-left: 4px;
    }

    [type="radio"]:not(:checked)+label:after {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
    }

    [type="radio"]:checked+label:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }

</style>
