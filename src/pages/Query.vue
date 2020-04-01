<template>
    <div>
        <p class="text-center lead pt-3"> The query app uses your input to check if a record exists in our database and
            gives
            a picture of it. </p>
        <h1 class="text-center lead text-monospace mt-5 mb-5"> {{hourMessage}} </h1>

        <b-form @reset="resetAll" v-if="show" @submit.prevent="submitForm">
            <b-row class="justify-content-sm-center justify-content-md-center justify-content-lg-center pt-3 pb-5">
                <b-col sm="9" md="7" lg="4">
                    <b-input v-model='queryTerm' size="sm" placeholder='Search...' :state="inputVet"
                        :maxlength="maxLength" :required="selectedOption === 'option.value'" autofocus />
                    <b-form-invalid-feedback :state="inputVet"> {{ infoMessage }} </b-form-invalid-feedback>
                    <b-form-valid-feedback :state="inputVet"> Input seems Good. </b-form-valid-feedback>

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
                </b-col>
            </b-row>

            <p class="text-center text-muted pt-5 pb-3"> We ensure your activities are safe, so keep your credentials
                away from <span class="text-danger">attackers</span>. </p>
            <p class="text-center lead pt-3"> Happy working, hope you enjoy your day. </p>
        </b-form>
    </div>
</template>



<script>
    let dateFormat = /^(\d{4})-(\d{1,2})-(\d{1,2})$/; // YYYY-MM-DD
    let alphaNumFormat = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/

    export default {
        components: {

        },

        data() {
            return {
                dayMessage: '',
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
            checkDay() {
                var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                var now = new Date().getHours()
                var dayDate = new Date().getDay()
                if (dayDate === 0 || dayDate === 6) {
                    return this.dayMessage =
                        `We understand how special your ${days[parseInt(dayDate)]}s are to you, we appreciate your hard work.`
                } else {
                    if (now < 8) {
                        return this.dayMessage =
                            `Hello, it is quite early to resume work on a ${days[parseInt(dayDate)]} morning.`
                    }
                    if (now === 8 || now < 12) {
                        return this.dayMessage = `Welcome back, it is another beautiful ${days[parseInt(dayDate)]}.`
                    } else if (now === 12 || now < 15) {
                        return this.dayMessage = `Welcome back, hope your ${days[parseInt(dayDate)]} has been wonderful.`
                    } else if (now === 15 || now < 17) {
                        return this.dayMessage = `It is great working with you every ${days[parseInt(dayDate)]}.`
                    } else {
                        return this.dayMessage = "It is a great sacrifice to work extra-hours, it is nice meeting you."
                    }
                }
            },
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
                    } else if (parseInt(this.queryTerm) < 12345678901) {
                        this.infoMessage = 'NIN cannot be less than 12345678901.'
                        return false
                    }
                } else if (this.selectedOption === 'issued_date') {
                    let regs = this.queryTerm.match(dateFormat)
                    let startDate = new Date("07-01-2013") //MM-DD-YYYY
                    let date = new Date()
                    let today = new Date(date.getFullYear(), date.getMonth(), date.getDate())
                    let thisMonth = (date.getMonth() + 1)
                    let thisDay = date.getDate()
                    let formatted_date = date.getFullYear() + "-" + ((thisMonth.toString().length < 2) ? '0' + thisMonth : thisMonth) + "-" + ((thisDay.toString().length < 2) ? '0' + thisDay : thisDay)
                    let month30 = [4, 6, 9, 11]
                    let month31 = [1, 3, 5, 7, 8, 10, 12]
                    let monthName = ["January", "February", "March", "April", "May", "June", "July", "August",
                        "September", "October", "November", "December"
                    ]

                    if (!(this.queryTerm.match(dateFormat))) {
                        this.infoMessage = `Invalid Issued Date, check format as YYYY-MM-DD (e.g. ${formatted_date}).`
                        return false
                    } else if (regs[3] < 1) {
                        this.infoMessage = 'Day can not be less than 1.'
                        return false
                    } else if (!(((regs[1] % 4 === 0) && (regs[1] % 100 !== 0)) || (regs[1] % 400 === 0)) && (parseInt(
                            regs[2]) === 2 && parseInt(regs[3]) > 28)) {
                        this.infoMessage = `February of ${regs[1]} has 28 days, check day value.`
                        return false
                    } else if ((((regs[1] % 4 === 0) && (regs[1] % 100 !== 0)) || (regs[1] % 400 === 0)) && (parseInt(
                            regs[2]) === 2 && parseInt(regs[3]) > 29)) {
                        this.infoMessage = `February of ${regs[1]} has 29 days, check day value.`
                        return false
                    } else if (month30.includes(parseInt(regs[2])) && regs[3] > 31) {
                        this.infoMessage = `${monthName[parseInt(regs[2])-1]} only has 30 days, check month value.`
                        return false
                    } else if (month31.includes(parseInt(regs[2])) && regs[3] > 31) {
                        this.infoMessage = `${monthName[parseInt(regs[2])-1]} only has 31 days, check month value.`
                        return false
                    } else if (regs[2] < 1 || regs[2] > 12) {
                        this.infoMessage = 'Month only range from 1 to 12.'
                        return false
                    } else if (new Date(`${regs[2]}-${regs[3]}-${regs[1]}`) < startDate) {
                        this.infoMessage = 'Date started on 2013-07-01.'
                        return false
                    } else if (new Date(`${regs[2]}-${regs[3]}-${regs[1]}`) > today) {
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
            hourMessage() {
                return this.checkDay()
            },

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
