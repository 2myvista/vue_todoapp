//import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { IItem } from '@/types/item';
import { generateRandomString } from "@/utils/generateRandomId";

export const useItemsStore = defineStore("items", {
	state: () => ({
		items: <IItem[]>[],
		isExist: false,
	}),
	getters: {
		async getItems(): IItem {
			try {
				const query = new URLSearchParams({
					limit: String(10),
				});
				const fetchResponse = await fetch(
					`https://freetestapi.com/api/v1/todos?${query}`
				);
				const response = await fetchResponse.json();
				
				this.items = response;
				return this.items;
			} catch (error) {
				console.log(error);
				throw new Error("responce is not ok, see error");
			}
		},
		countItems(): number {
			return this.items.length;
		},
	},
	actions: {
		setInList(id: number): void {
			this.items.filter((item) => {
				let deleted: number | null = null;
				let deletedBool: boolean = false;
				if (item.id == id) {
					this.items.filter((bs, key) => {
						if (bs.id == id) {
							deleted = key;
							deletedBool = true;
						}
					});
					if (deletedBool) this.items.splice(deleted, 1);
				}
			});
		},
		addItem(newItem: string): boolean {
			//console.log(newItem);
			this.isExist = false;
			const id = generateRandomString();
			const newDataItem: IItem = { id: id, title: newItem };
			this.items.filter((item) => {
				if (item.title.toLowerCase() == newItem.toLowerCase()) {
					console.log(item.title.toLowerCase(), newItem);
					this.isExist = true
					return false;
				}
			})
			if (!this.isExist)
				this.items.push(newDataItem);
			return true;
			
		},
		deleteAll(): IItem {
			return this.items=[];
		} 
	},
}); 
