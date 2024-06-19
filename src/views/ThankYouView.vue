<template>
  <div id="thank-you-view">
    <div id="thanks-container">
      <h1 id="thanks-title">
        {{ translate('thanksTitle') }}
      </h1>

      <p id="thanks-subtitle">
        {{ translate('thanksSubTitle') }}
      </p>

      <img
        id="practical-email-logo"
        src="../assets//images/practical-email-full.png"
        alt="main logo"
      >
    </div>
  </div>
</template>

<script setup>
import { useLocalization } from '@/composables/localization';

const { translate } = useLocalization();
</script>

<style scoped>
#thank-you-view {
  width: 100%;
  height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #176B87;
  background: #EEF5FF;
}
#thanks-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  height: 70%;
  border: 2px solid #176B87;
  border-radius: 15px;
}
#thanks-title {
  text-align: center;
  font-size: 30px;
}
#thanks-subtitle {
  text-align: center;
  font-size: 25px;
}
#practical-email-logo {
  width: 170px;
  height: 170px;
}
</style>
