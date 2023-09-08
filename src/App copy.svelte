<script lang="ts">
  let isLoggedIn = false,
    isLoggingIn = false 

  function onLogin() {
    console.log('on login fired')
    isLoggingIn = true
  }

</script>

<div>
</div>

<style>
  input {
    padding: 1rem;
    background-color: aliceblue;
  }

  .link {
    text-decoration: underline;
  }
</style>
