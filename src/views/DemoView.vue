<template>
  <div id="email-demo-view">
    <h1 id="demo-view-title">
      {{ translate('demoTitle') }}
    </h1>

    <p id="description-text">
      {{ translate('demoText') }}
    </p>

    <iframe
      height="600"
      style="width: 90%;"
      scrolling="no"
      title="Practical Email"
      src="https://codepen.io/rafaeloviedo/embed/mdYXywj?default-tab=html%2Cresult&editable=true"
      frameborder="no"
      loading="lazy"
      allowtransparency="true"
      allowfullscreen="true"
    >
      See the Pen <a href="https://codepen.io/rafaeloviedo/pen/mdYXywj">
      Practical Email</a> by Rafael Oviedo (<a href="https://codepen.io/rafaeloviedo">@rafaeloviedo</a>)
      on <a href="https://codepen.io">CodePen</a>.
    </iframe>
  </div>
</template>

<script setup>
import { useLocalization } from '@/composables/localization';

const { translate } = useLocalization();
</script>

<style scoped>
#email-demo-view {
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow: scroll;
  color: #176B87;
  background: #EEF5FF;
}
#demo-view-title {
  width: 90%;
  font-weight: bold;
  text-align: center;
}
#description-text {
  width: 90%;
  font-size: 20px;
}
</style>
