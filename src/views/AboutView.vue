<template>
  <div id="about-view">
    <div id="content-container">
      <h1 id="about-view-title">
        {{ translate('about') }}
      </h1>

      <p id="description-text">
        {{ translate('aboutText1') }}
        <br><br>
        {{ translate('aboutText2') }}
      </p>
  
      <h2 id="about-view-title">
        Rafael Oviedo
      </h2>
  
      <div id="social-media-container">
        <a
          href="https://www.linkedin.com/in/rafael-oviedo/?locale=en_US"
          target="_blank"
        >
          <i class="pi pi-linkedin social-media-icon" />
        </a>
  
        <a
          href="https://github.com/RafaelOviedo"
          target="_blank"
        >
          <i class="pi pi-github social-media-icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLocalization } from '@/composables/localization';

const { translate } = useLocalization();
</script>

<style scoped>
#about-view {
  width: 100%;
  height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #176B87;
  background: #EEF5FF;
}
#content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  height: 100%;
}
#about-view-title {
  width: 100%;
  font-weight: bold;
  text-align: center;
}
#description-text {
  width: 100%;
  font-size: 20px;
}
#social-media-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 15%;
}
.social-media-icon {
  color: #176B87;
  font-size: 55px;
  cursor: pointer;
}

@media screen and (width > 768px) {
  #content-container {
    width: 60%;
    height: 80%;
  }
  #description-text {
    width: 100%;
    font-size: 25px;
  }
}
</style>
