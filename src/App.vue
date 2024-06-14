<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ItemToDo from '@/components/ItemToDo.vue';

import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useItemsStore } from '@/stores/items';

const itemsStore = useItemsStore();
//const { getItems } = storeToRefs(itemsStore);

const itemsList = computed(() => {
	if (!itemsStore.getItems.length) {
		itemsStore.getItems
	}
	return itemsStore.items
})

const deleteItem = (id:number) => {
	itemsStore.setInList(id);
}

const deleteAll = () => {
	itemsStore.deleteAll();
}

</script>

<template>
<div class="container container_view">
	<Header/>
	<ItemToDo v-for="item in itemsList" :key="item.id" :item="item"  @update:delete-item="deleteItem"/>
	<Footer :count="itemsStore.countItems" @update:delete-all="deleteAll"/>
</div>
</template>

<style scoped>

</style>
