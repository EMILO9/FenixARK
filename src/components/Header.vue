<template>
  <div class="Header">
    <router-link class="Logo" to="/">FENIXARK.COM</router-link>
    <div class="Menu">
      <router-link :class="{'Menu-Item-Active': $route.path === '/Servers'}" class="Menu-Item" to="/Servers"><i class="fas fa-server Menu-Icon"></i>Servers</router-link>
      <router-link :class="{'Menu-Item-Active': $route.path === '/FAQ'}" class="Menu-Item" to="/FAQ"><i class="fas fa-question-circle Menu-Icon"></i>FAQ</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>
