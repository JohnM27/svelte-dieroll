<script lang="ts">
	import Paper, { Title, Content } from '@smui/paper';
	import Button, { Label } from '@smui/button';

	let counter: number = 0;
	let isActive: boolean = true;

	export function incrementCounter() {
		if (!isActive) return;

		counter++;
	}
</script>

<Paper>
	<Title>
		<span>Number of rolls: {counter} {isActive ? '' : '(Paused)'}</span>
	</Title>
	<Content>
		<Button on:click={() => (isActive = !isActive)} variant="raised">
			<Label>{isActive ? 'Pause' : 'Start'} counter</Label>
		</Button>
		<Button on:click={() => (counter = 0)} variant="raised">
			<Label>Reset counter</Label>
		</Button>
	</Content>
</Paper>
