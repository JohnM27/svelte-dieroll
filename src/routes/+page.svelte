<script lang="ts">
	import Paper, { Title, Content } from '@smui/paper';
	import Button, { Label } from '@smui/button';
	import Counter from '$lib/counter.svelte';

	let rolls: number[] = [0];
	let currentRoll: string = '';

	let counterComponent: Counter;

	function roll(nbOfDices: number, diceSize: number) {
		rolls = [];
		currentRoll = `${nbOfDices}D${diceSize}`;

		// Increment counterComponent
		counterComponent.incrementCounter();

		for (let index = 0; index < nbOfDices; index++) {
			rolls = [...rolls, getRandom(diceSize)];
		}
	}

	function getRandom(max: number) {
		return Math.floor(Math.random() * max) + 1;
	}

	$: sum = rolls.reduce((total, currentNumber) => total + currentNumber, 0);
</script>

<div class="main">
	<Paper>
		<Title>Dices</Title>
		<div>
			<Button on:click={() => roll(1, 6)} variant="raised">
				<Label>D6</Label>
			</Button>
			<Button on:click={() => roll(2, 6)} variant="raised">
				<Label>2D6</Label>
			</Button>
			<Button on:click={() => roll(1, 10)} variant="raised">
				<Label>1D10</Label>
			</Button>
			<Button on:click={() => roll(1, 20)} variant="raised">
				<Label>1D20</Label>
			</Button>
		</div>
	</Paper>
	<Paper>
		<Title>Result {currentRoll}</Title>
		<Content>
			<div class="content">
				<span>
					{rolls}
				</span>
				<span>
					Sum: {sum}
				</span>
			</div>
		</Content>
	</Paper>
	<Counter bind:this={counterComponent} />
</div>

<style>
	.main > :global(*) {
		margin-bottom: 24px;
	}
	.content {
		margin: 24px 0;
		display: flex;
		justify-content: space-around;
		font-size: 48px;
	}
</style>
