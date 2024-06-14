import { describe, it, expect, beforeEach, vi } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from "@pinia/testing";
import Header from "../Header.vue";


describe('Header.vue', () => {
	let wrapper: ReturnType<typeof shallowMount>;

	beforeEach(() => {
		wrapper = shallowMount(Header, {
			global: {
				plugins: [
					createTestingPinia({
						createSpy: vi.fn,
					}),
				],
			},
		});
	});

	it('кнопка add disabled', async () => {
		const buttonFind = await wrapper.find("#add-button");
		expect(await wrapper.find("#add-button"));
		expect(await wrapper.find("#add-button").element.disabled).toBe(true);
	})
	it('кнопка add enabled', async () => {
		await wrapper.find("#input-newtask").setValue("newName");
		expect(await wrapper.find("#add-button").element.disabled).toBe(false);
	})
/* 	it('кнопка отображение задачи', async () => {
		//await wrapper.find("#input-newtask").setValue("newName");
		expect(wrapper.text()).toContain("Buy groceries");
	}) */
})
