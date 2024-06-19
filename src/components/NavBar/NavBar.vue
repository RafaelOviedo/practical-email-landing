<template>
  <nav
    class="nav-container"
  >
    <RouterLink
      id="logo-container"
      to="/"
    >
      PRACTICAL EMAIL
      <img
        class="practical-email-logo"
        src="../../assets//images/practical-email.png"
        alt="main logo"
      >
    </RouterLink>

    <button
      class="open-navbar-menu-button"
      @click="openNavBarPanel"
    >
      <i
        class="pi pi-bars"
        style="font-size: 25px; color: #fff; padding-right: 10px;"
      />
    </button>

    <div id="nav-items-desktop-container">
      <div id="nav-items-desktop-box">
        <RouterLink
          class="nav-item"
          to="/"
          @click="closeNavBarPanel"
        >
          {{ translate('home') }}
        </RouterLink>
        <RouterLink
          class="nav-item"
          to="/demo"
          @click="closeNavBarPanel"
        >
          {{ translate('demo') }}
        </RouterLink>
        <RouterLink
          class="nav-item"
          to="/about"
          @click="closeNavBarPanel"
        >
          {{ translate('about') }}
        </RouterLink>
        
        <div id="locale-buttons-container">
          <button
            class="locale-button"
            :class="store.locale === 'en' ? 'selected-locale' : ''"
            @click="setLocale('en')"
          >
            EN
          </button>
          <button
            class="locale-button"
            :class="store.locale === 'es' ? 'selected-locale' : ''"
            @click="setLocale('es')"
          >
            ES
          </button>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <Transition>
        <div
          v-if="isNavBarPanelOpen"
          id="navbar-menu-container"
        >
          <div id="close-navbar-menu-button-container">
            <button
              id="close-navbar-menu-button"
              @click="closeNavBarPanel"
            >
              <i class="pi pi-times" />
            </button>
          </div>

          <div id="nav-items-mobile-container">
            <RouterLink
              class="nav-item"
              to="/"
              @click="closeNavBarPanel"
            >
              {{ translate('home') }}
            </RouterLink>
            <RouterLink
              class="nav-item"
              to="/demo"
              @click="closeNavBarPanel"
            >
              {{ translate('demo') }}
            </RouterLink>
            <RouterLink
              class="nav-item"
              to="/about"
              @click="closeNavBarPanel"
            >
              {{ translate('about') }}
            </RouterLink>

            <div id="locale-buttons-container-mobile">
              <button
                class="locale-button-mobile"
                :class="store.locale === 'en' ? 'selected-locale' : ''"
                @click="setLocale('en')"
              >
                EN
              </button>
              <button
                class="locale-button-mobile"
                :class="store.locale === 'es' ? 'selected-locale' : ''"
                @click="setLocale('es')"
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useLocalizationStore } from '@/stores/locale';
import { useLocalization } from '@/composables/localization';

const { translate } = useLocalization();

const store = useLocalizationStore();

const isNavBarPanelOpen = ref(false);

const openNavBarPanel = () => {
  isNavBarPanelOpen.value = true;
};
const closeNavBarPanel = () => {
  isNavBarPanelOpen.value = false;
};

const setLocale = (localeOption) => {
  store.setLocale(localeOption);
};
</script>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7vh;
  font-family: SourceCodePro;
  background: #176B87;
  border-bottom: 1px solid #5B5B5B;
}
.open-navbar-menu-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 70%;
  border: none;
  background: none;
  border-radius: 5px;
}
@media screen and (width > 768px) {
  .open-navbar-menu-button {
    display: none;
  }
}
#navbar-menu-container {
  position: absolute;
  top: 0;
  width: 100%;
  height: 40%;
  background: #fff;
}
#close-navbar-menu-button-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 7vh;
  padding-right: 10px;
  background: #176B87;
}
#close-navbar-menu-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background: #fff;
}
#nav-items-mobile-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  height: 83%;
  padding-left: 10px;
  background: #176B87;
  border-top: 1px solid #27272A;
  border-bottom: 1px solid #27272A;
}
#nav-items-desktop-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
}
#nav-items-desktop-box {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 60%;
  height: 100%;
}
#logo-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 250px;
  height: 100%;
  text-decoration: none;
  color: #fff;
  padding-left: 5px;
  font-size: 20px;
}
.practical-email-logo {
  width: 45px;
  height: 45px;
}
.trinity-logo {
  width: 35px;
  height: 30px;
}
.trinity-name-logo {
  width: 115px;
  height: 30px;
}

.nav-item {
  font-size: 25px;
  text-decoration: none;
  color: #fff;
}
#locale-buttons-container {
  width: 15%;
  height: 40%;
}
.locale-button {
  width: 50%;
  height: 100%;
  border: 1px solid #fff;
  border-radius: 3px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  background: #176B87;
  cursor: pointer;
  opacity: 0.5;
}
#locale-buttons-container-mobile {
  width: 30%;
  height: 15%;
}
.locale-button-mobile {
  width: 50%;
  height: 90%;
  border: 1px solid #fff;
  border-radius: 3px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  background: #176B87;
  cursor: pointer;
  opacity: 0.5;
}
.selected-locale {
  color: #176B87;
  border: none;
  background: #fff;
  border: 1px solid #176B87;
  opacity: 1;
}
/* TRANSITION CLASSES COMPONENT */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media screen and (width < 768px) {
  #nav-items-desktop-container {
    display: none;
  }
}

@media screen and (768px <= width <= 1100px) {
  #nav-items-desktop-box {
    width: 85%;
  }
}

@media screen and (width > 768px) {
  #logo-container {
    width: 400px;
    padding-left: 20px;
    font-size: 25px;
  }
  .practical-email-logo {
    width: 60px;
    height: 60px;
  }
  .nav-item {
    font-size: 20px;
  }
}
</style>