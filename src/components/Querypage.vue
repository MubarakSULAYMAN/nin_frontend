<template>
    <div>
        <div>
            <div v-text="selectedOption"></div>
            <ul>
                <li v-for="option in options" :key="option.value">
                    <input type="checkbox" ref="" :id="option.name" :value="option.text" v-model="selectedOption" @change="checked">
                    <label :for="option.name">{{option.text}}</label>
                </li>
            </ul>
            <button @click="clear">Clear</button>
        </div>
    </div>
</template>



<script>
    export default {
        data() {
            return {
                selectedOption: [],
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
            checked() {
                this.$emit('', this.selectedOption)
                // this.selectedOption = this.index

                // if(this.$refs.selectedOption =! this.selectedOption)
                // if (!this.$refs.nin) {
                //     // eslint-disable-next-line no-console
                //     console.log("Hello")
                // }
            },
            updateOption() {
                // eslint-disable-next-line no-console
                    console.log("Hello")
            },
            clear() {
                this.selectedOption = []
            }
        }
    }

</script>
