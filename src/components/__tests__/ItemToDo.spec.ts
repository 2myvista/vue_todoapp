import { describe, it, expect, beforeEach, vi } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from "@pinia/testing";
import ItemToDo from "../ItemToDo.vue";
import type { IItem } from '@/types/item';


describe("ItemToDo.vue", () => {
	let wrapper: ReturnType<typeof shallowMount>;

	const mockItem: IItem = {
		'id': 23,
		'title': 'mockItem'
	}

	beforeEach(() => {
		wrapper = shallowMount(ItemToDo, {
			propsData: {
				item: mockItem,
			},
			global: {
				plugins: [
					createTestingPinia({
						createSpy: vi.fn,
					}),
				],
			},
		});
	});
 	it('отображение задачи', async () => {
		expect(wrapper.text()).toContain("mockItem");
	}) 
});
