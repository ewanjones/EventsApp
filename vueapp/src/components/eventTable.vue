<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">

      <table class="table table-hover table-sm table-responsive" id="table">
        <thead>
          <tr>
            <th class="col-md-1">Start Date</th>
            <th class="col-md-1">End Date</th>
            <th class="col-md-2">Title</th>
            <th class="col-md-2">Location</th>
            <th class="col-md-6">Description</th>
            <th class="col-md-1">Options</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in events">
            <td>{{event.start}}</td>
            <td>{{event.end}}</td>
            <td>{{event.title}}</td>
            <td>{{event.location}}</td>
            <td>{{event.description}}</td>
            <td>
              <span class="glyphicon glyphicon-pencil" id="edit"></span>
              <span class="glyphicon glyphicon-trash" id="delete"></span>
            </td>
          </tr>
        </tbody>
      </table>

      </div>
    </div>
  </div>
</template>



<script>
import axios from 'axios';

export default {
  name: 'eventTable',

  data: {
    events: []
  },

  mounted() {
        axios.get(`http://localhost:3000/event/eventlist`)
        .then(response => {this.events = response.data.results})
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#edit {
  text-align: center;
}

#delete {
  text-align: center;
}
</style>
