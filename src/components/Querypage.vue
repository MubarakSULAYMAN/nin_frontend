<template>
    <div>
        <Topnav />
        <div>
            <!-- <form
  id="app"
  @submit="checkForm"
  action="https://vuejs.org/"
  method="post"
> -->
            <b-form @reset="resetAll" v-if="show" @submit.stop.prevent="submitForm">
                <b-row class="justify-content-sm-center justify-content-md-center justify-content-lg-center mt-3">
                    <b-col sm="9" md="7" lg="4">
                        <!-- <b-input v-model='queryTermValue' size="sm" placeholder='Search...' :state="inputVet" -->
                        <b-input :value="queryTerm" @input="submitForm" size="sm" placeholder='Search...' :state="inputVet"
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
                            <b-button type="reset" pill variant="danger">
                                <b-icon icon="bootstrap-reboot"></b-icon> Reset
                            </b-button>

                            <b-button type="submit" pill variant="primary" class="ml-3"
                                :disabled="inputVet ? disabled : !disabled">
                                <b-icon icon="search"></b-icon> Search
                            </b-button>
                        </div>

                        <p class="hint"> Ensure you input the right detail. </p>
                    </b-col>
                </b-row>
            </b-form>
        </div>
    </div>
</template>



<script>
    // import Api from '@/Api'
    // import router from '../router'
    import Topnav from './Topnav'
    import { mapState, mapGetters, } from 'vuex'

    import store from '../store/store';

    let numFormat = /^[0-9]*$/
    let dateFormat = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    let alphaNumFormat = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/

    export default {
        components: {
            Topnav,
            // Table
        },

        data() {
            return {
                // queryTerm: '',
                selectedOption: '',
                infoMessage: '',
                queryMessage: '',
                max: '',

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
            }
        },

        methods: {
            resetAll(e) {
                e.preventDefault()
                this.info = false
                this.queryTerm = ''
                // this.$store.state.queryTerm = ''
                this.selectedOption = ''
            },

            verifications() {
                if (this.queryTerm === '' && this.selectedOption === '') {
                    this.infoMessage = 'Please select an option and enter a query term.'
                    return this.info
                }

                if (this.selectedOption === '') {
                    this.infoMessage = 'Please select an option.'
                    return this.info
                }

                if (this.queryTerm === '') {
                    this.infoMessage = 'Please enter a query term.'
                    return this.info
                }

                if (this.selectedOption === 'nin' && !(this.queryTerm.match(numFormat))) {
                    this.infoMessage = 'Invalid NIN, can only be digits.'
                    return this.info
                }

                if (this.selectedOption === 'nin' && (this.queryTerm.length < 11 || this.queryTerm.length > 11)) {
                    this.infoMessage = 'NIN can only be 11 digits.'
                    return this.info
                }

                if (this.selectedOption === 'nin' && (parseInt(this.queryTerm) < 12345678901)) {
                    this.infoMessage = 'NIN cannot be less than 12345678901.'
                    return this.info
                }

                if (this.selectedOption === 'issued_date' && !(this.queryTerm.match(dateFormat))) {
                    this.infoMessage === 'Invalid Issued Date, check format as YYYY-MM-DD'
                    return this.info
                }

                if (this.selectedOption === 'issued_date' && !((this
                        .queryTerm[1] < 1 || this.queryTerm[1] > 31) && (this.queryTerm[2] < 1 || this
                        .queryTerm[2] > 12) && (this.queryTerm[3] < 2007 || this.queryTerm[3] > (new Date())
                        .getFullYear()))) {
                    this.infoMessage === 'Invalid Issued Date, date can only range from 2007-01-01 till date'
                    return this.info
                }

                if (this.selectedOption === 'tracking_id' && !(this.queryTerm.match(alphaNumFormat))) {
                    this.infoMessage = 'Invalid Tracking ID, can only be alphanumeric.'
                    return this.info
                }

                if (this.selectedOption === 'tracking_id' && (this.queryTerm.length < 15 || this.queryTerm.length >
                        15)) {
                    this.infoMessage = 'Invalid Tracking ID, Tracking ID can only be 15 alphanumeric characters'
                    return this.info
                }

                return !this.info
            },

            submitForm(e) {
                e.preventDefault()

                // let ext = ''

                // if (this.selectedOption === 'nin') {
                //     ext = 'filter_by_nin/' + this.queryTerm
                // } else if (this.selectedOption === 'issued_date') {
                //     ext = 'filter_by_date/' + this.queryTerm
                // } else if (this.selectedOption === 'tracking_id') {
                //     ext = 'filter_by_id/' + this.queryTerm
                // }

                this.searching = true
                this.info = true

                // this.$store.commit('submitForm', e.target.value)

                // return this.$store.dispatch('formSubmit', Api()
                //     .get(ext)
                //     .then(response => (this.state.queryTerm = response.queryTerm))
                //     // eslint-disable-next-line no-console
                //     .catch(error => console.log(error))
                //     .finally(() => this.loading = false))

                // return this.resetAll()
            },

        },

        computed: {
            inputVet() {
                return this.verifications()
            },

            ...mapState([
                'queryTerm',
                // 'selectedOption',
            ]),

            ...mapGetters([
                'getSubmitForm'
            ])
        },

        // watch: {
        //     queryTerm() {
        //         this.queryTerm = this.queryTerm.replace(/[^0-9]/g, '')
        //             .replace(/^(\d{4}) (\d{3}) (\d{4})/g, '$1 - $2 - $3');
        //             // .replace(/^(\d{4}) ? (\d{3}) ? (\d{4}) ? /g, '($1) - $2 - $3');
        //     }
        // }
    }

    // eslint-disable-next-line no-console
    console.log(store.getters.getSubmitForm)

</script>

<style scoped>
    /* .main_page {
        box-sizing: border-box;
        color: rgb(133, 135, 150);
        flex-basis: auto;
        flex-grow: 1;
        flex-shrink: 0;
        font-family: Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
    } */

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
        width: 20px;
        height: 20px;
        border: 2px solid #ddd;
        border-radius: 100%;
        /* background: #fff; */
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
        top: 4px;
        left: 5px;
        border-radius: 100%;
        -webkit-transition: all 0.2s ease;
        transition: all 0.1s ease;
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
