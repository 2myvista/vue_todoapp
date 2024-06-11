<template>
	<div class="inner-div" @click="deleteItem(item.id)">
            <p>{{ item.id }} - {{ item.title }}</p> <IconTrash/>
    </div>
</template>

<script setup lang="ts">
import IconTrash from './icons/IconTrash.vue';
import type { IItem } from '@/types/item';

const props = defineProps<{ item: IItem }>();

const emit = defineEmits(['update:delete-item']);

const deleteItem = (id: number) => {
	emit('update:delete-item', id);
}



</script>