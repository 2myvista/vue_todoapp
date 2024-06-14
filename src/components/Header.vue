<script setup lang="ts">
import { ref } from 'vue';
import { useItemsStore } from '@/stores/items';

const newTask = ref('');
const itemsStore = useItemsStore();
const addItem = () => {
		itemsStore.addItem(newTask.value);
		if (!itemsStore.isExist) {
			newTask.value =''
		}
}

</script>

<template>
	<div class="header">
		<input id="input-newtask" class="input" type="text" placeholder="новая задача > 3 символов" v-model="newTask"/>
		<button id="add-button" :disabled="!(newTask.length > 3)" type="submit" class="button" @click="addItem">+</button>
		<p v-show="itemsStore.isExist" class="warning">такая  задача уже есть</p>
	</div>
</template>

<style scoped>
</style>
