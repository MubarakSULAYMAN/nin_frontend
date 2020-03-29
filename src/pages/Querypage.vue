<template>
    <div>
        <Topnav />
        <div>
            <b-form @reset="resetAll" v-if="show" @submit.prevent="submitForm">
                <b-row class="justify-content-sm-center justify-content-md-center justify-content-lg-center mt-3">
                    <b-col sm="9" md="7" lg="4">
                        <b-input v-model='queryTerm' size="sm" placeholder='Search...' class="mb-2" :state="inputVet"
                            :maxlength="maxLength" :required="selectedOption === 'option.value'" autofocus />
                        <b-form-invalid-feedback :state="inputVet"> {{ infoMessage }} </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="inputVet"> Input seems Good. </b-form-valid-feedback>

                        <p v-show="queryTerm.length > 9" v-if='!searching'> Checking with <b>{{ selectedOption }}</b> if
                            <b>{{ queryTerm }}</b> exists in our
                            records. </p>
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
                            <b-button type="submit" pill variant="primary" class="ml-3" :disabled="!inputVet">
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
    import Topnav from '@/components/Topnav'

    let dateFormat = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
    let alphaNumFormat = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/

    export default {
        components: {
            Topnav,
        },

        data() {
            return {
                infoMessage: '',
                queryMessage: '',

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
                this.queryTerm = ''
                this.selectedOption = ''
            },

            verifications() {
                if (this.queryTerm === '' && this.selectedOption === '') {
                    this.infoMessage = 'Please select an option and enter a query term.'
                    return false
                } else if (this.selectedOption === '') {
                    this.infoMessage = 'Please select an option.'
                    return false
                } else if (this.queryTerm === '') {
                    this.infoMessage = 'Please enter a query term.'
                    return false
                } else if (this.selectedOption === 'nin') {
                    if (isNaN(this.queryTerm)) {
                        this.infoMessage = 'Invalid NIN, can only be digits.'
                        return false
                    } else if (this.queryTerm.length !== 11) {
                        this.infoMessage = 'NIN must be 11 digits.'
                        return false
                    } else if (parseInt(this.queryTerm) < 12345678901   ) {
                        this.infoMessage = 'NIN cannot be less than 12345678901.'
                        return false
                    }
                } else if (this.selectedOption === 'issued_date') {
                    let regs = this.queryTerm.match(dateFormat)
                    let startDate = new Date("07-01-2013") //MM-DD-YYYY
                    let date = new Date()
                    let today = new Date(date.getFullYear(), date.getMonth(), date.getDate())
                    let month30 = [4, 6, 9, 11]
                    let month31 = [1, 3, 5, 7, 8, 10, 12]
                    let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

                    if (!(this.queryTerm.match(dateFormat))) {
                        this.infoMessage = 'Invalid Issued Date, check format as DD-MM-YYYY.'
                        return false
                    } else if (regs[1] < 1) {
                        this.infoMessage = 'Day can not be less than 1.'
                        return false
                    }
                     else if (!(((regs[3] % 4 === 0) && (regs[3] % 100 !== 0)) || (regs[3] % 400 === 0)) && (parseInt(regs[2]) === 2 && parseInt(regs[1]) > 28)) {
                        this.infoMessage = `February of ${regs[3]} has 28 days, check day value.`
                        return false
                    }
                    else if ((((regs[3] % 4 === 0) && (regs[3] % 100 !== 0)) || (regs[3] % 400 === 0)) && (parseInt(regs[2]) === 2 && parseInt(regs[1]) > 29)) {
                            this.infoMessage = `February of ${regs[3]} has 29 days, check day value.`
                            return false
                    }
                    else if (month30.includes(parseInt(regs[2])) && regs[1] > 31) {
                            this.infoMessage = `${monthName[parseInt(regs[2])-1]} only has 30 days, check month value.`
                            return false
                    } 
                    else if (month31.includes(parseInt(regs[2])) && regs[1] > 31) {
                        this.infoMessage = `${monthName[parseInt(regs[2])-1]} only has 31 days, check month value.`
                        return false
                    }
                    else if (regs[2] < 1 || regs[2] > 12) {
                        this.infoMessage = 'Month only range from 1 to 12.'
                        return false
                    } else if (new Date(`${regs[2]}-${regs[1]}-${regs[3]}`) < startDate) {
                        this.infoMessage = 'Date started on 01-07-2013.'
                        return false
                    } else if (new Date(`${regs[2]}-${regs[1]}-${regs[3]}`) > today) {
                        this.infoMessage = 'Date can not be after today, cross-check values.'
                        return false
                    }
                } else if (this.selectedOption === 'tracking_id') {
                    if (!(this.queryTerm.match(alphaNumFormat))) {
                        this.infoMessage = 'Invalid Tracking ID, can only be alphanumeric.'
                        return false
                    } else if (this.selectedOption === 'tracking_id' && (this.queryTerm.length !== 15)) {
                        this.infoMessage =
                            'Invalid Tracking ID, Tracking ID can only be 15 alphanumeric characters.'
                        return false
                    }

                }
                return true
            },

            submitForm() {
                this.$router.push(`/search/${this.queryTerm}?filter=${this.selectedOption}`)
            },

        },

        computed: {
            inputVet() {
                return this.verifications()
            },

            maxLength() {
                return this.selectedOption === 'tracking_id' ? 15 : this.selectedOption === 'nin' ? 11 : 10
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

            queryResult: {
                set(result) {
                    this.$store.dispatch('loadQueryResult', result)
                },
                get() {
                    return this.$store.getters.queryResult
                }
            },

            loading: {
                set(loader) {
                    this.$store.dispatch('setLoading', loader)
                },
                get() {
                    return this.$store.getters.loading
                }
            }
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
    }

    .warningInfo {
        color: red
    }

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
        margin-left: 5px;
    }

    [type="radio"]:checked+label:after,
    [type="radio"]:not(:checked)+label:after {
        content: '';
        width: 12px;
        height: 12px;
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
