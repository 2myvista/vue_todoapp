<script setup lang="ts">

const props = defineProps<{ count: number }>();

const emit = defineEmits(['update:delete-all']);
const deleteAll = () => {
	emit('update:delete-all');
}
</script>

<template>
	<div class="footer">
		<p v-if="count > 0">Всего задач: {{ count }}</p>
		<p v-else>Задач нет</p>
		<button id="delete-button" v-show="count > 0" type="submit" class="button" @click="deleteAll">очистить все</button>
	</div>
</template>

<style scoped>

</style>
