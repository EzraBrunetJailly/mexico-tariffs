<script>

    import Map from '$lib/Map.svelte';
    import Password from '$lib/Password.svelte';
    
</script>


<svelte:head>

	<title>Tariff Geography | Mexico</title>

	<meta name="description" content="Examining potential local impacts on jobs and businesses across Mexico via maps and charts" />
	<meta name="author" content="Ezra Brunet Jailly">
	<meta rel="canonical" href="https://github.com/EzraBrunetJailly/mexico.tariffs.io">

	<meta property="og:title" content="Mapping tariffs" />
	<meta property="og:description" content="Examining potential local impacts on jobs and businesses across Mexico via maps and charts" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://github.com/EzraBrunetJailly/mexico.tariffs.io" />
	<!--meta property="og:image" content="https://raw.githubusercontent.com/schoolofcities/tariffs/main/static/web-card.png" /-->
	<meta property="og:locale" content="en_CA">

	<!--meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Mapping tariffs" />
	<meta name="twitter:description" content="Examining potential local impacts on jobs and businesses across Canada via maps and charts" />
	<meta name="twitter:site" content="https://schoolofcities.github.io/tariffs/" />
	<meta name="twitter:image" content="https://raw.githubusercontent.com/schoolofcities/tariffs/main/static/web-card.png" /--> 

</svelte:head>


<Password/>

<Map/>