<template>
  <!-- FORM -->
  <div class="container" id="form-modal">
    <div class="row">
      <div class="container" id="form-container">
        <h1>Add Event</h1>

        <form action="/" method="post" id="form">
          <div class="form-group">
              <label for="start">Start</label>
              <input class="form-control" name="start" v-module="start">
          </div>

          <div class="form-group">
              <label for="end">End</label>
              <input class="form-control" name="end" v-module="end">
          </div>

          <div class="form-group">
              <label for="title">Title</label>
              <input class="form-control" name="title" v-module="title">
          </div>

          <div class="form-group">
              <label for="location">Location</label>
              <input class="form-control" name="location" v-module="location">
          </div>

          <div class="form-group">
              <label for="description">Description</label>
              <input class="form-control" name="description" v-module="description ">
          </div>
          <br>
          <div class="form-group">
              <input type="submit" class="btn btn-default btn-lg" value="Submit">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addEvent',
  data () {
    return {
      start: '',
      end: '',
      title: '',
      location: '',
      description: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#form-modal {
  border-radius: 5px;
  background-color: #d7dae0;
  padding: 30px;
  max-width: 400px;
  display: inline-block;
}

#form-container {
  padding-left: 20px;
}

#form {
  width: 100%;
}
</style>
