<script lang="ts">
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';

	let topAppBar: TopAppBar;
</script>

<TopAppBar bind:this={topAppBar} variant="fixed">
	<Row>
		<Section>
			<Title>Die Roll App</Title>
		</Section>
	</Row>
</TopAppBar>

<AutoAdjust {topAppBar}>
	<div class="content">
		<slot />
	</div>
</AutoAdjust>

<style>
	/* Hide everything above this component. */
	:global(#smui-app),
	:global(body),
	:global(html) {
		display: block !important;
		height: auto !important;
		width: auto !important;
		position: static !important;
	}
	.content {
		margin: 24px 25%;
	}
	@media (max-width: 768px) {
		.content {
			margin: 24px;
		}
	}
</style>
