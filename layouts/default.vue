<template lang="pug">
#app
	nuxt
</template>
    
<script>
export default {
	watch: {
		'$route.name': function(_new, _old) {}
	}
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	line-height: 1.75;
	box-sizing: border-box;
}
#app {
	width: 100%;
}
</style>