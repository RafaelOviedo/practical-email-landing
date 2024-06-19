<!-- eslint-disable vue/no-v-html -->
<template>
  <main id="home-component">
    <div id="hero-section-container">
      <div id="titles-container">
        <h1 id="home-title">
          {{ translate('theMostEasyWay') }}
        </h1>

        <img
          id="practical-email-logo"
          src="../assets//images/practical-email-full.png"
          alt="main logo"
        >
    
        <ul id="items-list">
          <li class="list-item">
            {{ translate('isFree') }}
          </li>
          <li class="list-item">
            {{ translate('noBackendNeeded') }}
          </li>
          <li class="list-item">
            {{ translate('easyAsCake') }}
          </li>
        </ul>
      </div>

      <div id="example-container">
        <div id="example-title-container">
          <span>{{ translate('codeExample') }}</span>
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
      <p
        id="introduction-text"
        v-html="translate('text1')"
      />

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

      <p
        id="second-step-text"
        v-html="translate('text2')"
      />

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
        <span id="axios-title">{{ translate('axiosExample') }}</span>
        <p>
          {{ translate('axiosText') }}
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
import { useLocalization } from '@/composables/localization';

const { translate } = useLocalization();
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
  position: relative;
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
#practical-email-logo {
  position: absolute;
  bottom: 190px;
  right: -20px;
  width: 150px;
  height: 150px;
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

@media screen and (width > 768px) {
  #practical-email-logo {
    bottom: 190px;
    right: 150px;
    width: 250px;
    height: 250px;
  }
  #home-title {
    width: 60%;
    font-size: 75px;
  }
}
@media screen and (768px <= width <= 1000px) {
  #practical-email-logo {
    bottom: 200px;
    right: 50px;
    width: 200px;
    height: 200px;
  }
}
</style>