<script lang="ts">
	import Paper, { Title, Content } from '@smui/paper';
	import Button, { Label } from '@smui/button';

	let counter: number = 0;
	let rolls: number[] = [0];
	let currentRoll: string = '';

	function roll(nbOfDices: number, diceSize: number) {
		rolls = [];
		currentRoll = `${nbOfDices}D${diceSize}`;
		counter++;

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
			<Button on:click={() => roll(2, 20)} variant="raised">
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
	<Paper>
		<Title>
			<div class="counter">
				<span>Number of rolls: {counter}</span>
				<Button on:click={() => (counter = 0)} variant="raised">
					<Label>Reset counter</Label>
				</Button>
			</div>
		</Title>
	</Paper>
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
	.counter {
		display: flex;
		justify-content: space-between;
	}
</style>
