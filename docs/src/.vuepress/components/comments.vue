<template>
  <p>
      <a :href="url">Leave a comment</a>
  </p>
</template>

<script>
  import axios from 'axios'

  export default {
    props: ['issueid'],
    created: function () {
      this.url = "https://github.com/siliang-jiao/Tech-Diaries/issues/" + this.issueid
      var api_url = "https://api.github.com/repos/siliang-jiao/Tech-Diaries/issues/" + this.issueid + "/comments"

      axios
       .get(api_url)
       .then(response => this.comments = response)
       .catch(error => console.log(error))
    },
    data() {
      return {
        msg: 'Hello this is <demo-component>',
        url: "",
        comments: []
      }
    }
  }
</script>
