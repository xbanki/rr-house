import Vue from 'vue';

import { VNode } from 'vue/types/umd';

// Import root from '@/vue/root.vue';

import placeholder from '@/vue/placeholder.vue';

const application = new Vue({
	render: (component): VNode => component(placeholder)
}).$mount('#application');

export default application;
