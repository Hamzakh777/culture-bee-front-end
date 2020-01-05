<template>
    <div>

    </div>
</template>

<script>
    import {required, minLength, sameAs} from 'vuelidate/lib/validators';
    export default {
        validations: {
            password: {
                required,
                minLength: minLength(8)
            },
            repeatPassword: {
                sameAsPassword: sameAs('password')
            }
        },
    }   
</script>