<script setup>
import BodyContent from "./BodyContent.vue";
</script>


<template>
    <div class="container">
        <div class="background">
            <div class="title">
                <h1>Nur Tahmid</h1>
            </div>
        </div>
        <div class="profile-container">
            <div class="profile"></div>
        </div>
        <BodyContent />
            <div class="container1">
    </div>
    </div>

</template>

<style>


.container1 {
    display: flex;
    align-items: flex-end;
    height: 50vh;
    background-color: yellow;
    width: 100%;

}


.container {
    height: 100%;
    width: 100%;
    background-color: orange;
}


.title {
    color: blueviolet;
    display: flex;
    align-items: flex-end;
    margin-left: 1vw;
    height: 50vh;
    font-size: 2rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.profile-container {
    background-color: black;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 10vh;
}


.profile {
    height: 18rem;
    width: 14rem;
    /* position: absolute; */
    /* top:20vh; */
    z-index: 2;
    right: 10vw;
    background-image: url("/home/tahmid/Documents/GitHubPages/NurTahmid.github.io/MyPage/src/assets/pfp.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-style: solid;
    border-width: 5px;
    border-image:
        linear-gradient(to bottom,
            #2ECC71,
            #1ABC9C,
            #16A085) 1;
}

.background {
    
    display: flex;
    background-image: url("/home/tahmid/Documents/GitHubPages/NurTahmid.github.io/MyPage/src/assets/1.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 50vh;
    width: 100%;
    z-index: 2;
}

@media (max-width: 1300px) {
    .profile {
        width: 14rem;
        height: 18rem;
    }
    
}

@media (max-width: 1100px) {
    .profile {
        width: 12rem;
        height: 16rem;
    }
}

@media (max-width: 880px) {
    .profile {
        width: 11rem;
        height: 15rem;
    }
        .profile-container {
    height: 9vh;
}
}

@media (max-width: 680px) {
    .profile {
        width: 10rem;
        height: 14rem;
    }
        .profile-container {
    height: 8vh;
}

.title {
    font-size: 1.8rem;
}

}

@media (max-width: 560px) {
    .profile {
        width: 8rem;
        height: 10rem;
    }

    .profile-container {
    height: 6vh;
}
.title {
    font-size: 1.5rem;
}
}

@media (max-width: 560px) {
.title {
    font-size: 1.4rem;
}
}

@media (max-width: 450px) {
.title {
    font-size: 1.2rem;
}
}

@media (max-width: 400px) {
.title {
    font-size: 1.0rem;
}
}

</style>