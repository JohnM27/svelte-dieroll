<script lang="ts">
	import Paper, { Title, Content } from '@smui/paper';

	let history: String[] = [];

	export function addToHistory(rolls: number[], diceSize: number) {
		var total = rolls.reduce((total, currentNumber) => total + currentNumber, 0);
		history = [`${rolls.length}d${diceSize}: ${rolls} (Total: ${total})`, ...history];
		if (history.length > 5) {
			history.pop();
		}
	}
</script>

<Paper>
	<Title>History</Title>
	<Content>
		<ul>
			{#each history as element}
				<li>{element}</li>
			{/each}
		</ul>
	</Content>
</Paper>
