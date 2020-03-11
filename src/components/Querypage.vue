<template>
    <div>
        <Topnav />
        <div>
            <b-form @reset="resetAll" v-if="show" @submit.prevent="submitForm">
                <b-row class="justify-content-sm-center justify-content-md-center justify-content-lg-center mt-3">
                    <b-col sm="9" md="7" lg="4">
                        <b-input v-model='queryTerm' size="sm" placeholder='Search...' :state="inputVet"
                            :maxlength="this.$store.getters.selectedOption === 'tracking_id' ? 15 : this.$store.getters.selectedOption === 'nin' ? 11 : 10 "
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
    import { mapState } from 'vuex'

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
                infoMessage: '',
                queryMessage: '',
                max: '',

                info: false,
                queryInfo: false,
                searching: false,
                show: true,
                disabled: false,

                // options: [{
                //         text: 'NIN',
                //         value: 'nin',
                //         name: 'nin',
                //     },
                //     {
                //         text: 'Issued Date',
                //         value: 'issued_date',
                //         name: 'issued_date',
                //     },
                //     {
                //         text: 'Tracking ID',
                //         value: 'tracking_id',
                //         name: 'tracking_id',
                //     }
                // ],
            }
        },

        methods: {
            resetAll(e) {
                e.preventDefault()
                this.info = false
                this.queryTerm = ''
                this.selectedOption = ''
            },

            verifications() {
                if (this.$store.getters.queryTerm === '' && this.$store.getters.selectedOption === '') {
                    this.infoMessage = 'Please select an option and enter a query term.'
                    return this.info
                }

                if (this.$store.getters.selectedOption === '') {
                    this.infoMessage = 'Please select an option.'
                    return this.info
                }

                if (this.$store.getters.queryTerm === '') {
                    this.infoMessage = 'Please enter a query term.'
                    return this.info
                }

                if (this.$store.getters.selectedOption === 'nin' && !(this.$store.getters.queryTerm.match(numFormat))) {
                    this.infoMessage = 'Invalid NIN, can only be digits.'
                    return this.info
                }

                if (this.$store.getters.selectedOption === 'nin' && (this.$store.getters.queryTerm.length < 11 || this
                        .$store.getters.queryTerm.length > 11)) {
                    this.infoMessage = 'NIN can only be 11 digits.'
                    return this.info
                }

                if (this.$store.getters.selectedOption === 'nin' && (parseInt(this.$store.getters.queryTerm) <
                        12345678901)) {
                    this.infoMessage = 'NIN cannot be less than 12345678901.'
                    return this.info
                }

                if (this.$store.getters.selectedOption === 'issued_date' && !(this.$store.getters.queryTerm.match(
                        dateFormat))) {
                    this.infoMessage === 'Invalid Issued Date, check format as YYYY-MM-DD'
                    return this.info
                }

                if (this.$store.getters.selectedOption === 'issued_date' && !((this
                        .queryTerm[1] < 1 || this.$store.getters.queryTerm[1] > 31) && (this.$store.getters
                        .queryTerm[2] < 1 || this.$store.getters
                        .queryTerm[2] > 12) && (this.$store.getters.queryTerm[3] < 2007 || this.$store.getters
                        .queryTerm[3] > (new Date())
                        .getFullYear()))) {
                    this.infoMessage === 'Invalid Issued Date, date can only range from 2007-01-01 till date'
                    return this.info
                }

                if (this.$store.getters.selectedOption === 'tracking_id' && !(this.$store.getters.queryTerm.match(
                        alphaNumFormat))) {
                    this.infoMessage = 'Invalid Tracking ID, can only be alphanumeric.'
                    return this.info
                }

                if (this.$store.getters.selectedOption === 'tracking_id' && (this.$store.getters.queryTerm.length <
                        15 || this.$store.getters.queryTerm.length >
                        15)) {
                    this.infoMessage = 'Invalid Tracking ID, Tracking ID can only be 15 alphanumeric characters'
                    return this.info
                }

                return !this.info
            },

            submitForm() {
                this.$store.dispatch('loadQueryResult')
                // let ext = ''

                // if (this.selectedOption === 'nin') {
                //     ext = 'filter_by_nin/' + this.queryTerm
                // } else if (this.selectedOption === 'issued_date') {
                //     ext = 'filter_by_date/' + this.queryTerm
                // } else if (this.selectedOption === 'tracking_id') {
                //     ext = 'filter_by_id/' + this.queryTerm
                // }

                // this.searching = true
                // this.info = true

                // return Api()
                //     .get(ext)
                //     // eslint-disable-next-line no-console
                //     // .then((response) => console.log(this.$store.getters.queryResult = response.data.query_term))
                //     .then((response) => {
                //     // eslint-disable-next-line no-console
                //         console.log(response.data.query_term)
                //         this.$store.getters.queryResult = response.data.query_term
                //     })
                // // eslint-disable-next-line no-console
                // .then(response => console.log(response.data.query_term))
                // // eslint-disable-next-line no-console
                // .catch(error => console.log(error))
                // .finally(() => this.loading = false)
                // // resetAll()
            },

        },

        computed: {
            inputVet() {
                return this.verifications()
            },

            queryTerm: {
                set(term) {
                    this.$store.dispatch('setQueryTerm', term)
                },
                get() {
                    return this.$store.getters.queryTerm
                }
            },

            selectedOption: {
                set(option) {
                    this.$store.dispatch('setSelectedOption', option)
                },
                get() {
                    return this.$store.getters.selectedOption
                }
            },

            loadQueryResult: {
                set(result) {
                    this.$store.dispatch('setQueryResult', result)
                },
                get() {
                    return this.$store.getters.queryResult
                }
            },

            options: {
                set(item) {
                    this.$store.dispatch('setOption', item)
                },
                get() {
                    return this.$store.getters.options
                }
            },

            ...mapState([
                'queryResult',
                'loading'
            ])
        }
    }

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
