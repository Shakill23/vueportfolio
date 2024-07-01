<template>
    <div class="container">
        <div class="row vh-100 align-items-center">
            <div class="col">
                <img src="https://shakill23.github.io/Allimages/images/sdFormal.jpg" alt="profile"
                    class="img-fluid w-75 shadow rounded-bottom-pill rounded-top-circle" loading="lazy">
            </div>
            <div class="col">
                <div id="details">
                    <h1 class="display-1">Shakeel Davids</h1>
                    <p v-if="title">
                        I am
                        <span>{{ title }}</span>
                    </p>
                    <Spinner v-else />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Spinner from './Spinner.vue'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const jobTitle =
    computed(() => store.state.jobTitle)
const title = ref('a software developer')
const cnt = ref(-1)

function repeat() {
    try {
        if (cnt.value == jobTitle.value?.length) cnt.value = 0;
        title.value =
            jobTitle.value?.at(cnt.value)?.title;
        setTimeout(repeat, 2000)
        cnt.value++
    } catch (e) {
        //
    }
}
onMounted(() => {
    store.dispatch('fetchJobTitle')
    repeat()
}) 
</script>

<style scoped></style>