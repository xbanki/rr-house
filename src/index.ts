import Vue from 'vue';

import { VNode } from 'vue/types/umd';

import root from '@/vue/root.vue';

const application = new Vue({
	render: (component): VNode => component(root)
}).$mount('#application');

export default application;
