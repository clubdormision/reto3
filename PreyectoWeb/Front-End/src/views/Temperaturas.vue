<template>
    <div class="box">
        <div class="columns is-mobile is-centered">
            <div class="column is-half is-primary">
                <li class=" columns is-centered" v-for="temperatura in temperaturas.slice(-1)" :key="temperatura._id">
                    {{ temperatura.humidity }}
                    {{ temperatura.value}} ºC
                </li>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        data() {
            return {
                temperaturas: [],
            }
        },
        mounted() {
            this.getTemperaturas();
            setInterval(this.getTemperaturas, 10000);
            
        },
        methods: {
            getTemperaturas(){
                axios
                .get('http://192.168.4.51:3000/api/temperatura')
                .then(response => (this.temperaturas = response.data))
            }
        }
    }
</script>