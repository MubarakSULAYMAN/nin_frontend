<template>
    <div>
        <b-row class="justify-content-md-center mt-5">
            <b-col md="6">
                <b-form-group label="Inline switch style checkboxes">
                    <b-form-checkbox-group :options="options" @change="checked" v-bind="index in options" :disabled="checked === null" switches>
                         <!-- :disabled="checked.length !== options.length" -->
                    </b-form-checkbox-group>
                </b-form-group>
                <!-- :disabled="selectedIndex === null || answered" -->
            </b-col>
        </b-row>
    </div>
</template>



<script>
    export default {
        data() {
            return {
                index: [],
                selectedIndex: null,
                others: null,
                options: [{
                        text: 'NIN',
                        value: 'nin',
                        name: 'nin',
                        disabled: false,
                        checked: false
                    },
                    {
                        text: 'Issued Date',
                        value: 'issued_date',
                        name: 'issued_date',
                        disabled: false,
                        checked: false
                    },
                    {
                        text: 'Last Name',
                        value: 'last_name',
                        name: 'last_name',
                        disabled: false,
                        checked: false
                    }
                ],
            }
        },

        methods: {
            checked(index) {
                // this.options.checked = true
                this.selectedIndex = index
                // eslint-disable-next-line no-console
                console.log(this.selectedIndex)
                
                this.options.forEach(function(arrayCollection)
                {
                    // eslint-disable-next-line no-console
                    console.log(arrayCollection.value)
                })
                // let a = [
                //             this.options[0].value,
                //             this.options[1].value,
                //             this.options[2].value
                //          ]

                // if (this.selectedIndex === a['']) {
                //     // eslint-disable-next-line no-console
                //     console.log("Hello")
                // }
                

                // let x = this.inde
                // eslint-disable-next-line no-console
                // console.log(x)
            }
        },
    }

</script>

<style scoped>

</style>
