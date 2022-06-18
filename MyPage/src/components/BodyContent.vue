<script>
import { RouterLink, RouterView } from "vue-router";
</script>


<template>
    <div class="content">
        <nav>
            <RouterLink to="/">Intro</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
            <RouterView />
            <div class="footer">
                <p>looool</p>
            </div>     
    </div>
</template>

<style>



.footer{
width: 100%;
  background-image: linear-gradient(to right,
            #2ECC71,
            #1ABC9C,
            #16A085) ;

  height: 20vh;
  color: white;
  z-index: 1;
  text-align: center;
}

a,
.green {
  text-decoration: none;
  color: purple;
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
    width: 100%;
    font-size: 30px;
    text-align: center;
    margin-top: 4rem;
}

nav a.router-link-exact-active {
    color: #2ecc71;
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 2px solid #2ecc71;
}

nav a:first-of-type {
    border: 0;
}

.content {
    border-top: 8px solid;
    border-image: linear-gradient(to right,
            #2ECC71,
            #1ABC9C,
            #16A085) 1;
    height: 80vh;
    width: 100%;
    background-color: white;
    z-index: 1;
    position: absolute;
    top: 50vh;
}
</style>