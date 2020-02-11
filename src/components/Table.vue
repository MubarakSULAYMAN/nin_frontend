<template>
    <div class="container-fluid">

        <!-- Page Heading -->
        <h1 class="h3 mb-2 text-gray-800">Query Result</h1>
        <p class="mb-4">Results are based on your search. For more information, please visit the <a target="_blank"
                href="https://">official documentation</a>.</p>

        <!-- DataTales Example -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary"> Result for the query of "{{ last_name }}" </h6>
            </div>

            <div class="table-responsive">
                <table class="table table-striped table-borderless table-sm" id="dataTable" width="100%"
                    cellspacing="0">
                    <thead>
                        <tr>
                            <th scope="col"> S/N </th>
                            <th scope="col"> First Name </th>
                            <th scope="col"> Last Name </th>
                            <th scope="col"> Middle Name </th>
                            <th scope="col"> Gender </th>
                            <th scope="col"> Category </th>
                            <th scope="col"> NIN </th>
                            <th scope="col"> Tracking ID </th>
                            <th scope="col"> Date Issued </th>
                        </tr>
                    </thead>
                    <!-- <tbody>
                                @foreach($reg_query as $registered)
                                <tr>
                                    <th scope="row"> {{ $loop->iteration }} </th>
                                    <td> {{ $registered->first_name }} </td>
                                    <td> {{ $registered->last_name }} </td>
                                    <td> {{ $registered->middle_name }} </td>
                                    <td> {{ $registered->gender }} </td>
                                    <td> {{ $registered->age_category }} </td>
                                    <td> {{ $registered->nin }} </td>
                                    <td> {{ $registered->tracking_id }} </td>
                                    <td> {{ $registered->issued_date }} </td>
                                    <td>
                                </tr>
                                @if ($loop->last)
                                <h3> <b> Total query result is {{ $loop->count }} and remaining is
                                        {{ $loop->remaining }}, after {{ $loop->depth }} search. </b> </h3>
                                @endif
                                @endforeach

                            </tbody> -->
                </table>
            </div>

            Showing 1 to 10 of 57 entries Previous Pagination Next
        </div>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                last_name: 'Olatunbosun',
            }
        }
    }

</script>
