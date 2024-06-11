<script setup lang="ts">
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useItemsStore } from '@/stores/items';

const itemsStore = useItemsStore();

const countItems = computed(() => {
	return itemsStore.countItems
});

const emit = defineEmits(['update:delete-all']);
const deleteAll = () => {
	emit('update:delete-all');
}
</script>

<template>
	<div class="footer">
		<p v-if="countItems > 0">Всего задач: {{ countItems }}</p>
		<p v-else>Задач нет</p>
		<button v-show="countItems > 0" type="submit" class="button" @click="deleteAll">очистить все</button>
	</div>
</template>

<style scoped>

</style>
