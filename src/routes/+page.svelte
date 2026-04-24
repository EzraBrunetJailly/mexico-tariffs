<script>
	import '../assets/global-styles.css';

	import TitleStandard from '$lib/TitleStandard.svelte';
	import Logo from '$lib/LogoTop.svelte';
	import ImageSingle from '$lib/ImageSingle.svelte';
    import Password from '$lib/Password.svelte';
    //import ScrollyImages from "$lib/ScrollyImages.svelte";

</script>


<svelte:head>

	<title>Mapping tariffs | Mexico</title>

	<meta name="description" content="Examining potential local impacts on jobs and businesses across Mexico via maps and charts" />
	<meta name="author" content="Ezra Brunet Jailly">
	<!--meta rel="canonical" href="https://schoolofcities.github.io/tariffs/"-->

	<meta property="og:title" content="Mapping tariffs" />
	<meta property="og:description" content="Examining potential local impacts on jobs and businesses across Mexico via maps and charts" />
	<meta property="og:type" content="website" />
	<!--meta property="og:url" content="https://schoolofcities.github.io/tariffs/" /-->
	<!--meta property="og:image" content="https://raw.githubusercontent.com/schoolofcities/tariffs/main/static/web-card.png" /-->
	<meta property="og:locale" content="en_CA">

	<!--meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Mapping tariffs" />
	<meta name="twitter:description" content="Examining potential local impacts on jobs and businesses across Canada via maps and charts" />
	<meta name="twitter:site" content="https://schoolofcities.github.io/tariffs/" />
	<meta name="twitter:image" content="https://raw.githubusercontent.com/schoolofcities/tariffs/main/static/web-card.png" /--> 

</svelte:head>

<main>

	<Logo logoType="Blue" backgroundColor="var(--brandWhite)"/>

	<!-- <ImageSingle
		imageURL="./choro-figure-updated.svg"
		caption=''
		source=''
		//maxWidth='680px'
		link='No'
	/> -->

	<TitleStandard
		title="Tariff Geography of Mexico"
		subtitle=""
	/>

	<Password/>

	<div class="text">	

		<p>
			The US administration’s imposition of tariffs on Mexico has generated a wave of uncertainty, carrying the risk of economic losses across sectors, and reduced job growth. Volatile fluctuations paralyze decision making around investment, commercial expansion, and supply chains. While shifting trade regimes are negotiated at a national level, their consequences manifest locally in cities. Where might the localized impact of tariffs on businesses and jobs result in the greatest precarity?
		</p>

		<p>
			Just as tariff levels have been prone to change, this work acknowledges that shifting trade policy produces effects that are constantly evolving. Trade partners and integrated-economic sectors are interrelated, and the direct effects of sectoral tariffs ripple across the supply chain, driving policymakers, business leaders, and consumers to adapt to tariffs. The direct payment of tariffs by producers are varyingly absorbed, or passed through to consumers. Reductions in demand for goods from export oriented sectors may lead to job losses and industrial relocation. These factors make estimating the realized impact of tariffs at the city level a challenge. This research explores the possible impacts of tariffs on jobs and firms across Mexico by identifying the businesses and jobs associated with exports to the U.S. market.
		</p>

		<ul>
		<li>
			<a href="./map">See the interactive mapping tool of potential direct exposure to U.S. tariffs</a> related to specific sectors (e.g. automotive, steel, copper, energy & natural resources) across Canada at the neighbourhood level, measured by 1) businesses and 2) employment (based on place of work).
		</li>

		</ul>

		<h2>
			Background & Tariff Context (March 2025)
		</h2>

		<p>
			The Mexican economy is inextricably linked to that of the United States. <a href='https://wits.worldbank.org/CountryProfile/en/Country/MEX/Year/LTST/Summary' target='_blank'>World Bank</a> trade data indicates the integration between the two nations has reached historic levels:
		</p>

		<ul>
		<li>
			Export Concentration: Mexico's reliance on the U.S. market is pronounced. Approximately 79.95% of Mexican exports are destined for the United States, totaling over $474 billion (USD). No other partner, including Canada (3.01%) or China (1.55%), represents more than a fraction of this volume.
		</li>

		<li>
			Import Dynamics: While Mexico's imports are somewhat more diversified, the United States remains the primary source, accounting for 42.8% of all goods brought into the country.
		</li>
		</ul>

		<p>
			U.S. Tariffs Imposed on Mexico (As of March 2025)
		</p>

		<ul>
		<li>
			Section 232 Aluminum Tariff: A 25% national security tariff on all aluminum imports from Mexico (raised from a previous 10% baseline rate).
		</li>
			
		<li>
			Mexican Energy Tariff: A 25% tariff applied specifically to Mexican energy exports (classified under the IEEPA order without the carve-outs offered to other nations).
		</li>
			
		<li>
			Section 232 Steel Tariff: A 25% national security tariff on all steel imports from Mexico, enacted by terminating prior country-specific exemptions.
		</li>

		<li>
			Universal IEEPA Tariff (Non-USMCA Goods): A 25% tariff applied to all Mexican imports that do not meet United States-Mexico-Canada Agreement (USMCA) rules of origin.
		</li>
		</ul>

		<h3>
			Methodology
		</h3>

		<p>
			This work estimates the number of businesses and jobs directly exposed to tariffs. It connects data on where and what goods are produced across Mexico, and filters it based on the likelihood of their export to the U.S. This research represents a combined analysis of export data, the Statistical Business Register of Mexico, and geostatistical information from Mexico’s National Institute of Statistics and Geography (INEGI) and the National Statistical Directorate of Economic Units (DENUE). It matches goods subject to tariffs under the Harmonized Tariff Schedule (HS codes) with specific industries per the North American Industrial Classification System (NAICS). Each industry is weighted by state-level U.S. export dependence. The location of affected jobs and businesses to then mapped to the municipal level for all of Mexico.
		</p>

		<p>
			This project was developed from the open methodology pioneered by the School of Cities. For a complete methodological review, please see <a href="https://github.com/schoolofcities/tariffs">their GitHub page</a>
		</p>

		<p>
			The Merchandise Trade Balance of Mexico (BCMM) tracks goods moving through national customs offices, utilizing administrative records called pedimentos (customs declarations) processed through the Automated Integrated Customs System (SAAI). It is coordinated between Mexico’s National Institute of Statistics and Geography (INEGI), the Tax Administration Service (SAT ), Ministry of Economy (SE ), and the Bank of Mexico (BANXICO). Commodities are classified under the Law of General Import and Export Tax Tariffs (TIGIE), which aligns with the international World Trade Organization (WTO) Harmonized System (HS). Exports are valued at Free on Board (FOB) prices, while imports use both FOB and Cost, Insurance, and Freight (CIF).
		</p>

		<p>
			The Quarterly Exports by State (ETEF) is a statistical program by INEGI that tracks the value of merchandise exports across Mexico's 32 states. By utilizing the Statistical Business Register of Mexico (RENEM) as a central hub, the program integrates data from economic censuses, manufacturing surveys, and administrative records to accurately attribute export values to the specific state where production occurred. 
		</p>

		<p>
			The National Geostatistical Framework (MGN) is the standardized system developed by INEGI to link statistical information with geographic locations in Mexico. It functions through a hierarchical division of the national territory into three primary levels: State Geostatistical Areas (AGEE), Municipal Geostatistical Areas (AGEM), and Basic Geostatistical Areas (AGEB).
		</p>

		<p>
			INEGI’s Directorio Estadístico Nacional de Unidades Económicas (DENUE) maintains Mexico’s publicly available comprehensive business directory sourced from the Statistical Business Registry of Mexico (RENEM). The directory currently lists over six million active economic units. 
		</p>

		<h4>
			Acknowledgements
		</h4>

		<p>
			Ezra would like to extend his sincere thanks to <a href="https://www.linkedin.com/in/luis-herrera-favela">Luis Herrera-Favela, PhD</a>, and <a href="https://www.linkedin.com/in/petr-kocourek/">Petr Kocourek</a> for their guidance and insightful advice.
		</p>

		<p>
			Ezra gratefully recognizes the work of the <a href="https://mappingtariffs.org/">School of Cities, Mapping Tariffs</a> team. Their inspirational work, and open methodology made this project possible.
		</p>

		<p>
			<!-- <a href="https://jamaps.github.io/" target="_blank">Jeff Allen, PhD</a> is a Senior Research Associate and the Lead of Data Visualization at the School of Cities at the University of Toronto.  -->
		</p>

		<p>
			<!-- <a href="https://mkbs-mkbs2000.github.io/Personal-Portfolio/" target="_blank">Muhammad Khalis Bin Samion</a> completed his honours undergraduate degree at the University of Toronto in human geography and urban studies. He is currently earning a master’s degree in urban spatial science at University College London.  -->
		</p>

		<p>
			<!-- <a href="https://www.linkedin.com/in/yihoi-jung-0b95351b5/" target="_blank">Yihoi Jung</a>  is a Data Analyst Research Assistant at the School of Cities and has completed his undergraduate degree at the University of Toronto Scarborough in Statistics and City Studies. -->
		</p>

		<p>
			<!-- <a href="https://www.linkedin.com/in/eli-easton-77bb60273/" target="_blank">Eli Easton</a> is a senior undergraduate student at the University of Toronto where he is studying economics and public policy. -->
		</p>

		<p>
			<!-- <a href="https://www.geography.utoronto.ca/people/directories/all-faculty/richard-difrancesco" target="_blank">Richard DiFrancesco, PhD</a> is Associate Professor in the Department of Geography and Planning at the University of Toronto and has expertise in input-output data and models. -->
		</p>

	</div>

	


</main>