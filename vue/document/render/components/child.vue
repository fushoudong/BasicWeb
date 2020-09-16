<template>
	<div>
		
	</div>
</template>

<script>
	export default {
		name: 'Child',
		data() {
			return {
				
			}
		},
		props: {
			level: {
				type: Number,
				default: 0
			}
		},
		render(createElement) {
			
			return createElement('h' + this.level, this.$slots.default);
		}
	}
</script>

<style>
</style>
