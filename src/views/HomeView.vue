<template>
  <main id="home-component">
    <div id="hero-section-container">
      <div id="titles-container">
        <h1 id="home-title">
          The most easy way to send emails
        </h1>
    
        <ul id="items-list">
          <li class="list-item">
            Is FREE
          </li>
          <li class="list-item">
            No need of backend technologies
          </li>
          <li class="list-item">
            Is easy as cake to configure
          </li>
        </ul>
      </div>

      <div id="example-container">
        <div id="example-title-container">
          <span>CODE EXAMPLE</span>
        </div>

        <div
          id="main-code-example"
          class="code-example-container"
        >
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
      <p id="introduction-text">
        The only thing you need to do is set your email at the end of the endpoint 
        <span style="background: lightgray;">https://practical-email.vercel.app/email/your@email.com</span> 
        in the action attribute of the form, and set the <span style="background: lightgray;">POST</span> method in the 
        <span style="background: lightgray;">method</span> attribute.
      </p>

      <div
        id="first-code-example"
        class="code-example-container"
      >
        <pre>
<code>
  &lt;form
    action="https://practical-email.vercel.app/email/your@email.com" 
    method="POST"
  &gt;
</code>
  </pre>
      </div>

      <p id="second-step-text">
        You will also need to add the <span style="background: lightgray;">name</span> attribute to your inputs to make it work, you have to add the name attribute to all your 
        <span style="background: lightgray;">&lt;input&gt;, &lt;select&gt; and &lt;text-area&gt;</span> elements.
        <br>
        <br>
        You can have all the necessary inputs for your form, and it will dynamically get the information.
      </p>

      <div
        id="second-code-example"
        class="code-example-container"
      >
        <pre>
<code>
  &lt;input
    type="email"
    name="email"
    placeholder="Email"
  &gt;
</code>
  </pre>
      </div>

      <div id="axios-example-container">
        <span id="axios-title">AXIOS EXAMPLE</span>
        <p>
          If you're using something more dynamic to send http requests like axios (or any other http library or api like fetch), 
          you can send emails by the POST method as well.
        </p>

        <div
          id="axios-code-example"
          class="code-example-container"
        >
          <pre>
<code>
  import axios from 'axios';

  const data = {
    name: 'John Doe',
    email: 'john@mail.com',
    message: 'Hey this is John'
  }

  async function sendEmail() {
    await axios.post('https://practical-email.vercel.app/email/your@email.com', data);
  }

  sendEmail();
</code>
  </pre>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
</script>

<style scoped>
#home-component {
  width: 100%;
  height: 2400px;
  background: #EEF5FF;
  color: #176B87;
}
#hero-section-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45%;
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  font-size: 65px;
  font-weight: bold;
}
#items-list {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 40%;
}
.list-item {
  font-size: 25px;
  text-align: left;
}
#example-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 40%;
}
#example-title-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  font-size: 20px;
  width: 100%;
  height: 15%;
  font-weight: bold;
}
#main-code-example {
  width: 100%;
  height: 80%;
}
.code-example-container {
  background: #27272A;
  color: #fff;
  font-size: 15px;
  overflow: scroll;
}
#docs-section {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 55%;
}
#introduction-text {
  width: 90%;
  font-size: 20px;
  word-break: break-word;
}
#first-code-example {
  width: 90%;
  height: 8%;
}
#second-step-text {
  width: 90%;
  font-size: 20px;
  word-break: break-word;
}
#second-code-example {
  width: 90%;
  height: 9%;
}
#axios-example-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  height: 40%;
  font-size: 20px;
}
#axios-title {
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
}
#axios-code-example {
  width: 100%;
  height: 55%;
}

@media screen and (width > 768px) {}
</style>