<template>
	<div>
		<!-- hero section -->
		<div class="relative md:h-100-vh bg-gray-to-black">
			<div class="md:absolute top-0 inset-x-0 w-full px-4 bg-gray-to-black">
				<div class="container mx-auto flex flex-row justify-between items-center py-6">
					<base-logo :is-light="true" />
					<button class="btn-yellow" v-scroll-to="'#newsletter'">Early access</button>
				</div>
			</div>
			<img
				class="object-contain max-h-full mx-auto md:pt-32 py-10 md:pb-10 px-8"
				src="/images/splash-page/hero.png"
				alt="cultureBee"
			/>
		</div>
		<!-- mainling list sign up section -->
		<div class="py-8 md:py-18 px-4" id="newsletter">
			<div class="container mx-auto max-w-5xl">
				<h2 class="section-title mb-4 md:mb-10 text-center">EARLY ACCESS & PRODUCT UPDATES</h2>
				<div class="flex flex-col md:flex-row md:items-stretch w-full max-w-3xl mx-auto mb-5 md:mb-8">
					<input
						class="input-text flex-grow h-auto mb-4 md:mb-0 md:mr-8 py-3-1/2 border-2 border-gray-700"
						type="text"
						placeholder="Email"
						v-model="email"
					/>
					<button 
						class="btn-yellow w-full md:w-45"
						@click.prevent="subscribeToNewsletter"
					>
						Sign up
					</button>
				</div>
				<div class="max-w-3xl mx-auto -mt-4 mb-4">
					<base-big-input-error-message 
						v-if="!$v.email.required && $v.email.$error"
						:error-type="'required'"
					/>
					<base-big-input-error-message 
						v-if="!$v.email.email && $v.email.$error"
						:error-type="'email'"
					/>
				</div>
				<div class="flex max-w-lg  mx-auto">
					<base-radio-button 
						class="self-start"
						:value="true"
						:is-light="true" 
						v-model="isGdprAccepted"
					/>
					<div>
						<small class="block pl-4 mb-2 text-left">
							By signing up to CultureBee, you are agreeing to our
							<a href="#">Terms of Use</a> and
							<a href="#">Privacy Policy</a>
						</small>
						<base-input-error-message 
							v-if="!$v.isGdprAccepted.required && $v.isGdprAccepted.$error"
							:error-type="'accept-gdpr'"
						/>
					</div>
				</div>
			</div>
		</div>
		<!-- section - brand culture -->
		<div class="py-8 md:py-18 px-8 bg-gray-to-black text-white">
			<div class="container mx-auto">
				<div class="block mb-14 text-center text-lg font-bold text-white">Featuring brands like</div>
				<div class="flex flex-wrap items-center md:flex-no-wrap justify-between max-w-full">
					<img
						class="w-1/2 mb-4 w-40-% md:w-10-%"
						v-for="(icon, index) in featuredBrands"
						:key="index"
						:src="`/images/splash-page/${icon}`"
						alt
					/>
				</div>
				<div class="flex flex-col md:flex-row justify-between mt-12 md:mt-32">
					<div class="flex flex-col justify-center w-full md:w-1/2 pr-8">
						<h2
							class="section-title section-title-light mb-6 md:mb-16"
						>See inside a brand’s culture without leaving your seat</h2>
						<p
							class="block text-base font-normal max-w-sm"
						>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div class="w-full md:w-1/2 mt-10 md:mt-0">
						<img
							class="w-full"
							src="/images/splash-page/section-3-img.png"
							alt="culture bee profile employer"
						/>
					</div>
				</div>
			</div>
		</div>
		<!-- section - job adverts -->
		<div class="py-8 md:py-18 px-8">
			<div class="container mx-auto">
				<div class="flex flex-col-reverse md:flex-row justify-between">
					<div class="w-full md:w-1/2">
						<img class="w-full" src="/images/splash-page/section-4-img.png" alt="culturebee job adverts" />
					</div>
					<div class="flex flex-col justify-center w-full md:w-1/2 mb-10 md:mb-0 pl-0 md:pl-8">
						<h2 class="section-title mb-4 md:mb-10">JOB ADVERTS WITH 100% TRANSPARENCY</h2>
						<p
							class="text-base font-normal max-w-sm"
						>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
			</div>
		</div>
		<!-- section cta -->
		<div class="py-8 md:py-18 px-8 bg-black text-white">
			<div class="mb-12">
				<img class="w-full mx-auto max-w-5xl" src="/images/splash-page/section-5-img.jpg" alt />
			</div>
			<div class="container flex flex-col items-center mx-auto">
				<div class="inline-block text-center">
					<div>
						<div class="text-xs md:text-8 font-din-condensed font-bold">BECOME A PART OF THE PLATFORM</div>
						<div class="mb-10 uppercase font-din-condensed font-bold">
							<div class="leading-none text-38-px md:text-100-px">Join us on</div>
							<div class="leading-none text-32-px md:text-85-px">culturebee</div>
						</div>
					</div>
					<input 
						class="input-text w-full mb-4" 
						type="text" 
						placeholder="Email" 
						v-model="email"
					/>
					<base-big-input-error-message 
						v-if="!$v.email.required && $v.email.$error"
						:error-type="'required'"
					/>
					<base-big-input-error-message 
						v-if="!$v.email.email && $v.email.$error"
						:error-type="'email'"
					/>
					<button 
						class="btn-yellow w-full mb-6 mt-4"
						@click.prevent="subscribeToNewsletter"
					>
						Sign up
					</button>
					<div class="flex flex-row">
						<base-radio-button 
							class="self-start"
							:is-light="true" 
							:value="true"
							v-model="isGdprAccepted"
						/>
						<div class="text-left">
							<small
								class="block flex-grow pl-4 mb-2 text-xs"
							>We promise not to use your data in any way that we wouldn’t want ours to be used</small>
							<base-input-error-message 
								v-if="!$v.isGdprAccepted.required && $v.isGdprAccepted.$error"
								:error-type="'accept-gdpr'"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- footer -->
		<FooterBottom />
	</div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
import FooterBottom from '~/components/Footer/FooterBottom';
import BaseLogo from '~/components/BaseComponents/BaseLogo';
import BaseRadioButton from '~/components/BaseComponents/BaseRadioButton';
import BaseBigInputErrorMessage from '~/components/BaseComponents/BaseBigInputErrorMessage';
import BaseInputErrorMessage from '~/components/BaseComponents/BaseInputErrorMessage';


export default {
	layout: 'simple',

	components: {
		FooterBottom,
		BaseLogo,
		BaseRadioButton,
		BaseBigInputErrorMessage,
		BaseInputErrorMessage
	},

	data() {
		return {
			featuredBrands: [
				'flacon-io.png',
				'trustpilot.png',
				'kahoot.png',
				'veriteer.png',
				'min-doktor.png',
				'wolt.png'
			],
			scrollHeight: 0,
			email: '',
			isGdprAccepted: false
		};
	},

	validations: {
		email: {
			required,
			email
		},
		isGdprAccepted: {
			required
		}
	},

	mounted() {
		if (process.browser) {
			document.addEventListener(
				'scroll', 
				function() {
                    this.scrollHeight = window.pageYOffset;
                }
			);
		}
    },
    
    destroyed() {
        if(process.browser) {
            document.removeEventListener('scroll', function() {
                this.scrollHeight = window.pageYOffset;
            });
        }
	},
	
	methods: {
		async subscribeToNewsletter() {
			this.$v.$touch();
			if(!this.$v.$invalid) {
				const response =  await this.$axios.$post(`/api/newsletter`, {
					email: 'test@gmail.com'
				});

				console.log(response);
			}
		}
	}
};
</script>
