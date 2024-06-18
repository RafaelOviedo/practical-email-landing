<template>
  <main id="home-component">
    <div id="hero-section-container">
      <div id="titles-container">
        <h1 id="home-title">
          The most easy way to send emails
        </h1>
    
        <!-- <h2> -->
        <h2>* No need of backend technologies</h2>
        <h2>* Is FREE</h2>
        <h2>* Is easy as cake to configure</h2>
        <!-- </h2> -->
      </div>

      <div id="example-container">
        <div id="example-title-container">
          <span>CODE EXAMPLE</span>
        </div>

        <div id="example-code-container">
          <pre>
  <code>
    &lt;form
      action="https://practical-email.vercel.app/email/your@email.com" 
      method="POST"
    &gt;
      &lt;input
        type="text"
        name="name"
        required
      &gt;
      &lt;input
        type="email"
        name="email"
        required
      &gt;
      &lt;button type="submit"&gt;Send Email&lt;/button&gt;
    &lt;/form&gt;
  </code>
</pre>
        </div>
      </div>
    </div>

    <div id="docs-section">
      other examples section
    </div>
  </main>
</template>

<script setup>
</script>

<style scoped>
#home-component {
  width: 100%;
  height: 2000px;
}
#hero-section-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
}
#titles-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  height: 60%;
  text-align: center;
}
#home-title {
  font-size: 60px;
  font-weight: bold;
}
#example-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 40%;
  background: #27272A;
  color: #fff;
  font-size: 15px;
}
#example-title-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  font-size: 20px;
  width: 100%;
  height: 15%;
  border-bottom: 1px solid #fff;
}
#example-code-container {
  display: block;
  width: 100%;
  height: 85%;
  overflow: scroll;
}
#docs-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
}

@media screen and (width > 768px) {}
</style>