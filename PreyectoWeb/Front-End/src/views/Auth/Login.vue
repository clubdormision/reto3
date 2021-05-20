<template>
    <div class="container mt-50">
        <div class="columns">
            <div class="column is-6 is-offset-3">
                <form class="p" action="#" @submit.prevent="login">
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input" type="email" placeholder="ejm: alguien@gmail.com" v-model="email">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Contraseña</label>
                        <div class="control">
                            <input class="input" type="password" v-model="password">
                        </div>
                    </div>
                    <button type="submit" class=" button is-primary">Iniciar Sesión</button>
                </form>
                <div class="notification is-danger mt-10" v-if="error">
                    {{ error }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
    data (){
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    name: 'Login',
    methods: {
        login(){
            this.error = ''
            if (this.email && this.password) {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .catch(err => {
                    this.error = err.message
                })

            }else {
                this.error = "Rellene todos los campos"
            }
        }
    }
}
</script>