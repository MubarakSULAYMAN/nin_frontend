<template>
    <div>
        <b-row class="justify-content-md-center mt-5">
            <b-col md="6">
                <b-form-group label="Inline switch style checkboxes">
                    <b-form-checkbox-group :options="options" @change="checked" switches>
                    </b-form-checkbox-group>
                </b-form-group>
            </b-col>
        </b-row>
    </div>
</template>



<script>
    export default {
        data() {
            return {
                selectedIndex: null,
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
            checked(arrayItems) {
                this.options.checked = true
                this.options.disabled = true
                this.selectedIndex = arrayItems.toString()
                // eslint-disable-next-line no-console
                console.log(this.selectedIndex)

                // // eslint-disable-next-line no-console
                // console.log(this.options)

                this.options.forEach(function (arrayCollection) {
                    let x = arrayCollection.value

                    // eslint-disable-next-line no-console
                    console.log("Array: " + x)

                    // eslint-disable-next-line no-console
                    // console.log(x.includes('last_name'));

                    // if (x.includes('last_name')) {
                    //     // let y = x.slice('last_name')
                    //     // eslint-disable-next-line no-console
                    //     console.log(x);

                    // }
                })

            }
        }
    }

</script>
