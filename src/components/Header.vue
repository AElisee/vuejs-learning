<script setup>
import { ref, inject } from "vue";
import { RouterLink } from "vue-router";

const nom = inject("nom");

if (!nom) {
  console.warn("le nom n'a pas été fourni");
}
</script>

<template>
  <nav class="nav">
    <ul>
      <li>
        <RouterLink to="/">Accueil</RouterLink>
      </li>
      <li>
        <RouterLink to="/blogs">Blogs</RouterLink>
      </li>
      <li>
        <RouterLink to="/Contacts">Contacts</RouterLink>
      </li>
      <li>
        <RouterLink to="/json-placeholder">Json</RouterLink>
      </li>
      <li>
        <RouterLink to="/tasks">Todo</RouterLink>
      </li>
      <li>
        <RouterLink to="/formkit">Formkit</RouterLink>
      </li>
    </ul>
    <div>{{ nom && nom }}</div>
  </nav>
</template>

<style>
.nav {
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(215, 215, 243);
  margin: 10px 0;
  padding: 0 30px;
}

.nav ul {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 20px;
}

.nav ul li a {
  text-decoration: none;
  font-weight: 500;
  font-size: 1.2rem;
  /* color: rgb(25, 25, 25); */
  padding: 5px 10px;
}

.nav ul li a.router-link-active {
  color: #f4b20c;
  font-weight: 700;
  /* border: 1px solid rgb(112, 4, 134); */
  border-radius: 7px;
}
</style>
