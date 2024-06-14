import { describe, it, expect, beforeEach, vi } from 'vitest'

import { shallowMount } from '@vue/test-utils'
//import { createTestingPinia } from "@pinia/testing";
import Footer from "../Footer.vue";
import { count } from 'console';


describe('Footer.vue', () => {
	let wrapper: ReturnType<typeof shallowMount>;
	let mockCount = 8;

	beforeEach(() => {
		wrapper = shallowMount(Footer, {
			propsData: {
				count: mockCount
			},
		});
	});

	it('кнопка удаления задач', async () => {
		expect(await wrapper.find("#delete-button").exists()).toBe(true);
		await wrapper.find("#delete-button").trigger('click');
	})

	it('вывод количества задач - ' + mockCount, async () => {
		expect(wrapper.text()).toContain("Всего задач: " + mockCount);
	}) 

	it('вывод `задач нет`', async () => {
		wrapper = shallowMount(Footer, {
			propsData: { count: 0},
		});
		expect(wrapper.text()).toContain("Задач нет");
	}) 
	it('вывод кнопки `нет`', async () => {
		wrapper = shallowMount(Footer, {
			propsData: { count: 0},
		});
		expect(await wrapper.find("#delete-button").exists()).toBe(true);

	}) 
})
