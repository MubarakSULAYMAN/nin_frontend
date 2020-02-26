<template>
    <div class="container-fluid">

        <h1 class="h3 mb-2 text-gray-800">Query Result</h1>
        <p class="mb-4">Results are based on your search. For more information, please visit the <a target="_blank"
                href="https://">official documentation</a>.</p>

        <p v-if="loading_info">
            <Spinner />
            <!-- Loading... -->
            </p>
        <div v-else>
            <!-- <span v-for="item in data_fetched" v-bind:key="item.anyX">
                {{ item.last_name }}
            </span> -->
        </div>
        
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary"> Result for the query of "{{ last_name }}" </h6>
            </div>

            <!-- <b-table-simple sticky-header no-border-collapse bordered outlined small hover :items="items" -->
            <b-table-simple sticky-header no-border-collapse bordered outlined small hover head-variant="light"
                caption-top responsive>

                <colgroup>
                    <col>
                    <col>
                </colgroup>
                <colgroup>
                    <col>
                    <col>
                    <col>
                </colgroup>
                <colgroup>
                    <col>
                    <col>
                </colgroup>
                <b-thead head-variant="dark">
                    <b-tr>
                        <b-th colspan="2">Region</b-th>
                        <b-th colspan="3">Clothes</b-th>
                        <b-th colspan="2">Accessories</b-th>
                    </b-tr>
                    <b-tr>
                        <b-th>Country</b-th>
                        <b-th>City</b-th>
                        <b-th>Trousers</b-th>
                        <b-th>Skirts</b-th>
                        <b-th>Dresses</b-th>
                        <b-th>Bracelets</b-th>
                        <b-th>Rings</b-th>
                    </b-tr>
                </b-thead>
                <b-tbody>
                    <b-tr>
                        <b-th rowspan="3">Belgium</b-th>
                        <b-th class="text-right">Antwerp</b-th>
                        <b-td>56</b-td>
                        <b-td>22</b-td>
                        <b-td>43</b-td>
                        <b-td variant="success">72</b-td>
                        <b-td>23</b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="text-right">Gent</b-th>
                        <b-td>46</b-td>
                        <b-td variant="warning">18</b-td>
                        <b-td>50</b-td>
                        <b-td>61</b-td>
                        <b-td variant="danger">15</b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="text-right">Brussels</b-th>
                        <b-td>51</b-td>
                        <b-td>27</b-td>
                        <b-td>38</b-td>
                        <b-td>69</b-td>
                        <b-td>28</b-td>
                    </b-tr>
                    <b-tr>
                        <b-th rowspan="2">The Netherlands</b-th>
                        <b-th class="text-right">Amsterdam</b-th>
                        <b-td variant="success">89</b-td>
                        <b-td>34</b-td>
                        <b-td>69</b-td>
                        <b-td>85</b-td>
                        <b-td>38</b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="text-right">Utrecht</b-th>
                        <b-td>80</b-td>
                        <b-td variant="danger">12</b-td>
                        <b-td>43</b-td>
                        <b-td>36</b-td>
                        <b-td variant="warning">19</b-td>
                    </b-tr>
                </b-tbody>
                <b-tfoot>
                    <b-tr>
                        <b-td colspan="7" variant="secondary" class="text-right">
                            Total Rows: <b>5</b>
                        </b-td>
                    </b-tr>
                </b-tfoot>

            </b-table-simple>

            <div class="mx-3">
                <h6 class="text-right"> More Results </h6>
                <!-- <b-pagination v-model="currentPage" pills :total-rows="rows" align="right"></b-pagination> -->
                <b-pagination pills align="right"></b-pagination>
            </div>
        </div>

    </div>

</template>

<script>
import Spinner from './Spinner'

    export default {
        components: {
            Spinner,
        },

        data() {
            return {
                last_name: 'Olatunbosun',
            }
        },

        props: {
            // data_fetched: Object,
            data_fetched: Array,
            // loading_info: Boolean,
            loading_info: Boolean
        }
    }

</script>

