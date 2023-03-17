const LIST_TYPES = {
	BACKLOG: 'Требуют уточнения',
	READY: 'На выполение',
	IN_PROGRESS: 'В процессе',
	DONE: 'Готовые'
}

const LIST_COPY = {
	[LIST_TYPES.BACKLOG]: 'Требуют уточнения',
	[LIST_TYPES.READY]: 'Могут быть взяты в работу',
	[LIST_TYPES.IN_PROGRESS]: 'В процессе работы',
	[LIST_TYPES.DONE]: 'Готово'

}

const LIST_COLORS = {
	[LIST_TYPES.BACKLOG]: 'BACKLOG',
	[LIST_TYPES.READY]: 'READY',
	[LIST_TYPES.IN_PROGRESS]: 'IN_PROGRESS',
	[LIST_TYPES.DONE]: 'DONE'
}

export { LIST_TYPES, LIST_COPY, LIST_COLORS }

/*

	[LIST_TYPES.BACKLOG]: '#b95959',
	[LIST_TYPES.READY]: '#9393e8',
	[LIST_TYPES.IN_PROGRESS]: '#4b69b1',
	[LIST_TYPES.DONE]: '#a0b959'
*/ 