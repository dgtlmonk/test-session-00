<script lang="ts">
  let isLoggedIn = true, 
      isLoggingIn = false;

  function onLogin() {
     isLoggingIn = true
  }
</script>

<div class="welcome" style="font-size: 3rem;"> 
  Welcome to ICOS GLOBAL
  <div>
    <p>
     {#if isLoggingIn}
        <div class="form">
           <!-- username and password form -->
            <form>
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <button type="submit">Login</button>
            </form> 
        </div>
      {:else if isLoggedIn}
        <span class="login" on:click={onLogin} style="text-decoration: underline;">Login</span>, back to your account. 
      {/if}
    </p>
  </div>
</div>

<style>
  input {
    padding: 2rem;
    background-color: aliceblue;
  }
</style>
