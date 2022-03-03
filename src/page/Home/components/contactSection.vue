<template>
    <section class="fullscreen contact">
        <notifications group="contact" />

        <SectionHeading title="Kontakt" />
        <form 
            method="dialog" 
            class="contact__form"
            @submit="sendMessage"
        >
            <section class="contact__form__group">
                <input 
                    type="text" 
                    placeholder="Imię i nazwisko" 
                    aria-label="Imię i nazwisko" 
                    class="contact__form__group__input"
                    v-model="name"
                />
                <input 
                    type="mail" 
                    placeholder="Adres e-mail" 
                    aria-label="Imię i nazwisko" 
                    class="contact__form__group__input"
                    v-model="mail"
                />
            </section>
            <textarea 
                name="Wiadomość" 
                class="contact__form__textarea" 
                placeholder="Treść wiadomości..."
                v-model="context"
            ></textarea>
            <p class="contact__info">
                Klikając w przycisk "Wyślij" potwierdzasz, że zapoznałeś się i akceptujesz 
                regulamin
                serwisu.
            </p>
            <button
                class="contact__form__button"
            >
                Wyślij
            </button>
        </form>
    </section>
</template>

<script>
import SectionHeading from './_headerSection.vue';

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default {
    components: {
        SectionHeading
    },
    data(){
        return {
            name: "",
            mail: "",
            context: ""
        }
    },
    methods: {
        async sendMessage(){
            if( 
                this.name === ""  ||
                this.mail === "" ||
                this.context === ""
            )
                this.$notify({
                    group: "contact",
                    type: "error",
                    title: "Wiadomość nie została wysłana!",
                    text: "Wszytskie pola muszą być wypełnione"

                });
            else{

                if(validateEmail(this.mail)){
                    await this.$recaptchaLoaded()
                    const token = await this.$recaptcha('login')
                    await fetch(`${this.$store.state.api}/contact`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'recaptcha': token
                        },
                        body: JSON.stringify({
                            name: this.name,
                            mail: this.mail,
                            context: this.context
                        })
                    })
                        .then( i => i.json())
                        .then(i => {
                            if(i.send)
                                this.$notify({
                                    group: "contact",
                                    type: "success",
                                    title: "Wiadomość została wysłana!",
                                });
                            else
                                this.$notify({
                                    group: "contact",
                                    type: "error",
                                    title: "Wiadomość została nie wysłana!",
                                    text: "Wystąpił błąd, spróbuj ponownie później"
                                });

                            this.name = "";
                            this.mail = "";
                            this.context = "";
                        })
                }else
                    this.$notify({
                        group: "contact",
                        type: "warn",
                        title: "Wiadomość nie została wysłana!",
                        text: "Podano niepoprawny adres email"

                    }); 
            }            
        }
    }
}
</script>

<style lang="scss" scoped>
    .contact{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 50px;
        flex-direction: column;
        &__info{
            color: #fff;
            font-weight: 300;
            font-size: 14px;
            margin-top: 15px;

            &--link{
                color: #fff;
                text-decoration: none;

                &:hover{
                    text-decoration: underline;
                }
            }
        }
        &__form{
            width: 95%;
            max-width: 750px;


            display: flex;
            align-items: center;
            flex-direction: column;


            &__group{
                display: flex;
                justify-content: space-between;
                width: 100%;

                @media (max-width: 750px){
                    flex-direction: column;
                }

                &__input{
                    width: 48%;
                    background: none;
                    border: 2px solid #fff;
                    padding: 15px;
                    color: #fff;
                    @media (max-width: 750px){
                        width: 100%;
                        &:first-of-type{
                            margin-bottom: 18px;
                        }
                    }
                }
            }
            &__textarea{
                width: 100%;
                min-height: 250px;
                margin-top: 25px;
                background: none;
                border: 2px solid #fff;
                padding: 15px;
                color: #fff;
            }
            &__button{
                background: none;
                padding: 15px 20px;
                width: 250px;
                margin: auto;
                margin-top: 3%;
                font-size: 20px;
                color: #fff;
                border: 2px solid #fff;
                cursor: pointer;
            }
        }
    }
</style>