import $ from './jquery.min';

export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export function updateCategory(category) {
	return { type: UPDATE_CATEGORY, category };
}

export const UPDATE_INTROSTATE = 'UPDATE_INTROSTATE';
export function updateIntroState(statebool) {
	return { type: UPDATE_INTROSTATE, statebool };
}

export const TOGGLE_TOUCHMENU = 'TOGGLE_TOUCHMENU';
export function toggleTouchmenu() {
	return { type: TOGGLE_TOUCHMENU };
}

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export function toggleSidebar() {
	return { type: TOGGLE_SIDEBAR };
}

export const UPDATE_OVERLAY_IMAGE = 'UPDATE_OVERLAY_IMAGE';
export function updateOverlayImage(index) {
	return { type: UPDATE_OVERLAY_IMAGE, index };
}

export const TOGGLE_OVERLAY = 'TOGGLE_OVERLAY';
export function toggleOverlay(state, image) {
	return { type: TOGGLE_OVERLAY, state, image };
}

export const NAV_OVERLAY_IMAGE = 'NAV_OVERLAY_IMAGE';
export function navOverlayImage(direction) {
	return { type: NAV_OVERLAY_IMAGE, direction };
}

export const isTouch = (($(window).width() < 1000)); //|| 'ontouchstart' in document.documentElement);

export const NumberofVertical = 5;
const projectListInitial = {
	// This order is important, if NATURE + POP SCIENCE + ANATOMY are not in this order,
	// navigation vis the arrows image_number will be incorrect. If you muck with this
	// MAKE SURE YOU UPDATE THE ALL FUNCTION BELOW
	NATURE: [
		{
			img_src: './assets/images/NATURE/lizard.jpg',
			img_txt: 'Lizard',
			thumbs_src: './assets/thumbs/NATURE/lizard.jpg',
			super_thumbs_src: './assets/superThumbs/NATURE/lizard.jpg',
		},
		{
			img_src: './assets/images/NATURE/Binturong.jpg',
			img_txt: 'Binturong',
			thumbs_src: './assets/thumbs/NATURE/Binturong.jpg',
			super_thumbs_src: './assets/superThumbs/NATURE/Binturong.jpg',
		},
		{
			img_src: './assets/images/NATURE/BlackBear.jpg',
			img_txt: 'Black Bear',
			thumbs_src: './assets/thumbs/NATURE/BlackBear.jpg',
			super_thumbs_src: './assets/superThumbs/NATURE/BlackBear.jpg',
		},
		{
			img_src: './assets/images/NATURE/RedPanda.jpg',
			img_txt: 'Red Panda',
			thumbs_src: './assets/thumbs/NATURE/RedPanda.jpg',
			super_thumbs_src: './assets/superThumbs/NATURE/RedPanda.jpg',
		},
		{
			img_src: './assets/images/NATURE/Dragonfly2Signed.jpg',
			img_txt: 'Dragonfly with prey',
			thumbs_src: './assets/thumbs/NATURE/Dragonfly2Signed.jpg',
			super_thumbs_src: './assets/superThumbs/NATURE/Dragonfly2Signed.jpg',
		},
		{
			img_src: './assets/images/NATURE/Chameleon.jpg',
			img_txt: 'Chameleon',
			thumbs_src: './assets/thumbs/NATURE/Chameleon.jpg',
			super_thumbs_src: './assets/superThumbs/NATURE/Chameleon.jpg',
		},
		{
			img_src: './assets/images/NATURE/HiveBeetle2.jpg',
			img_txt: 'Hive Beetle',
			thumbs_src: './assets/thumbs/NATURE/HiveBeetle2.jpg',
			super_thumbs_src: './assets/superThumbs/NATURE/HiveBeetle2.jpg',
		},
		{
			img_src: './assets/images/NATURE/OctopusIsLate.jpg',
			img_txt: 'Octopus',
			thumbs_src: './assets/thumbs/NATURE/OctopusIsLate.jpg',
			super_thumbs_src: './assets/superThumbs/NATURE/OctopusIsLate.jpg',
		},
		{
			img_src: './assets/images/NATURE/Archaeopteryx.jpg',
			img_txt: 'Archaeopteryx',
			thumbs_src: './assets/thumbs/NATURE/Archaeopteryx.jpg',
			super_thumbs_src: './assets/superThumbs/NATURE/Archaeopteryx.jpg',
		},
		{
			img_src: './assets/images/NATURE/SeaSlugs.jpg',
			img_txt: 'SeaSlugs',
			thumbs_src: './assets/thumbs/NATURE/SeaSlugs.jpg',
			super_thumbs_src: './assets/superThumbs/NATURE/SeaSlugs.jpg',
		},
		{
			img_src: './assets/images/NATURE/GemSlugs.jpg',
			img_txt: 'GemSlugs',
			thumbs_src: './assets/thumbs/NATURE/GemSlugs.jpg',
			super_thumbs_src: './assets/superThumbs/NATURE/GemSlugs.jpg',
		},
		{
			img_src: './assets/images/NATURE/GemSlugsDrawVer.jpg',
			img_txt: 'GemSlugs 3D',
			thumbs_src: './assets/thumbs/NATURE/GemSlugsDrawVer.jpg',
			super_thumbs_src: './assets/superThumbs/NATURE/GemSlugsDrawVer.jpg',
		},
	],
	'POP SCIENCE': [
		{
			img_src: './assets/images/POPSCIENCE/CellCross.jpg',
			img_txt: 'Cell Cross',
			thumbs_src: './assets/thumbs/POPSCIENCE/CellCross.jpg',
			super_thumbs_src: './assets/superThumbs/POPSCIENCE/CellCross.jpg',
		},
		{
			img_src: './assets/images/POPSCIENCE/HailHydrate.jpg',
			img_txt: 'Hail Hydrate',
			thumbs_src: './assets/thumbs/POPSCIENCE/HailHydrate.jpg',
			super_thumbs_src: './assets/superThumbs/POPSCIENCE/HailHydrate.jpg',
		},
		{
			img_src: './assets/images/POPSCIENCE/TimeCrystal.jpg',
			img_txt: 'Time Crystal',
			thumbs_src: './assets/thumbs/POPSCIENCE/TimeCrystal.jpg',
			super_thumbs_src: './assets/superThumbs/POPSCIENCE/TimeCrystal.jpg',
		},
		{
			img_src: './assets/images/POPSCIENCE/TheScreamPlant.jpg',
			img_txt: 'The Anemone Scream (cross section)',
			thumbs_src: './assets/thumbs/POPSCIENCE/TheScreamPlant.jpg',
			super_thumbs_src: './assets/superThumbs/POPSCIENCE/TheScreamPlant.jpg',
		},
		{
			img_src: './assets/images/POPSCIENCE/09_Vizbi_WINNER_FibrilForest.jpg',
			img_txt: 'Fibril Forest',
			thumbs_src: './assets/thumbs/POPSCIENCE/09_Vizbi_WINNER_FibrilForest.jpg',
			super_thumbs_src: './assets/superThumbs/POPSCIENCE/09_Vizbi_WINNER_FibrilForest.jpg',
		},
		{
			img_src: './assets/images/POPSCIENCE/FriesWithThat3.jpg',
			img_txt: 'Fries with that?',
			thumbs_src: './assets/thumbs/POPSCIENCE/FriesWithThat3.jpg',
			super_thumbs_src: './assets/superThumbs/POPSCIENCE/FriesWithThat3.jpg',
		},
		{
			img_src: './assets/images/POPSCIENCE/08_Vizbi_DataTransfer.jpg',
			img_txt: 'Data Transfer',
			thumbs_src: './assets/thumbs/POPSCIENCE/08_Vizbi_DataTransfer.jpg',
			super_thumbs_src: './assets/superThumbs/POPSCIENCE/08_Vizbi_DataTransfer.jpg',
		},
		{
			img_src: './assets/images/POPSCIENCE/RamenCellNew5.jpg',
			img_txt: 'Ramen Cell',
			thumbs_src: './assets/thumbs/POPSCIENCE/RamenCellNew5.jpg',
			super_thumbs_src: './assets/superThumbs/POPSCIENCE/RamenCellNew5.jpg',
		},
		{
			img_src: './assets/images/POPSCIENCE/DNAtetris.jpg',
			img_txt: 'DNAtetris',
			thumbs_src: './assets/thumbs/POPSCIENCE/DNAtetris.jpg',
			super_thumbs_src: './assets/superThumbs/POPSCIENCE/DNAtetris.jpg',
		},
		{
			img_src: './assets/images/POPSCIENCE/Cell_comp03.jpg',
			img_txt: 'Cell comp',
			thumbs_src: './assets/thumbs/POPSCIENCE/Cell_comp03.jpg',
			super_thumbs_src: './assets/superThumbs/POPSCIENCE/Cell_comp03.jpg',
		},
		{
			img_src: './assets/images/POPSCIENCE/06_Cell_Internal.jpg',
			img_txt: '3D Cell internals',
			thumbs_src: './assets/thumbs/POPSCIENCE/06_Cell_Internal.jpg',
			super_thumbs_src: './assets/superThumbs/POPSCIENCE/06_Cell_Internal.jpg',
		},
		{
			img_src: './assets/images/POPSCIENCE/CLICblue.jpg',
			img_txt: 'CLIC',
			thumbs_src: './assets/thumbs/POPSCIENCE/CLICblue.jpg',
			super_thumbs_src: './assets/superThumbs/POPSCIENCE/CLICblue.jpg',
		},
		{
			img_src: './assets/images/POPSCIENCE/EyeRend02.jpg',
			img_txt: 'Eye',
			thumbs_src: './assets/thumbs/POPSCIENCE/EyeRend02.jpg',
			super_thumbs_src: './assets/superThumbs/POPSCIENCE/EyeRend02.jpg',
		},
		{
			img_src: './assets/images/POPSCIENCE/SC_Compare.jpg',
			img_txt: 'SC Compare',
			thumbs_src: './assets/thumbs/POPSCIENCE/SC_Compare.jpg',
			super_thumbs_src: './assets/superThumbs/POPSCIENCE/SC_Compare.jpg',
		},
		{
			img_src: './assets/images/POPSCIENCE/mouse02 copy.jpg',
			img_txt: 'Mice',
			thumbs_src: './assets/thumbs/POPSCIENCE/mouse02 copy.jpg',
			super_thumbs_src: './assets/superThumbs/POPSCIENCE/mouse02 copy.jpg',
		},
		{
			img_src: './assets/images/POPSCIENCE/2017TheCancerGame.jpg',
			img_txt: 'The Cancer Game',
			thumbs_src: './assets/thumbs/POPSCIENCE/2017TheCancerGame.jpg',
			super_thumbs_src: './assets/superThumbs/POPSCIENCE/2017TheCancerGame.jpg',
		},
		{
			img_src: './assets/images/POPSCIENCE/2017TheRustNetworkFINAL.jpg',
			img_txt: 'The Rust Network',
			thumbs_src: './assets/thumbs/POPSCIENCE/2017TheRustNetworkFINAL.jpg',
			super_thumbs_src: './assets/superThumbs/POPSCIENCE/2017TheRustNetworkFINAL.jpg',
		},
		{
			img_src: './assets/images/POPSCIENCE/KnotParticles.jpg',
			img_txt: 'Knot Particles',
			thumbs_src: './assets/thumbs/POPSCIENCE/KnotParticles.jpg',
			super_thumbs_src: './assets/superThumbs/POPSCIENCE/KnotParticles.jpg',
		},
		{
			img_src: './assets/images/POPSCIENCE/ShellLayers.jpg',
			img_txt: 'Shell Layers',
			thumbs_src: './assets/thumbs/POPSCIENCE/ShellLayers.jpg',
			super_thumbs_src: './assets/superThumbs/POPSCIENCE/ShellLayers.jpg',
		},
		{
			img_src: './assets/images/POPSCIENCE/StrawberryChem.jpg',
			img_txt: 'Strawberry',
			thumbs_src: './assets/thumbs/POPSCIENCE/StrawberryChem.jpg',
			super_thumbs_src: './assets/superThumbs/POPSCIENCE/StrawberryChem.jpg',
		},
		{
			img_src: './assets/images/POPSCIENCE/Vertigo_Prokaryote.jpg',
			img_txt: 'Vertigo Prokaryote',
			thumbs_src: './assets/thumbs/POPSCIENCE/Vertigo_Prokaryote.jpg',
			super_thumbs_src: './assets/superThumbs/POPSCIENCE/Vertigo_Prokaryote.jpg',
		},
	],
	ANATOMY: [
		{
			img_src: './assets/images/ANATOMY/CatAnatomy2.jpg',
			img_txt: 'Cat Anatomy',
			thumbs_src: './assets/thumbs/ANATOMY/CatAnatomy2.jpg',
			super_thumbs_src: './assets/superThumbs/ANATOMY/CatAnatomy2.jpg',
		},
		{
			img_src: './assets/images/ANATOMY/Cicada.jpg',
			img_txt: 'Cicada',
			thumbs_src: './assets/thumbs/ANATOMY/Cicada.jpg',
			super_thumbs_src: './assets/superThumbs/ANATOMY/Cicada.jpg',
		},
		{
			img_src: './assets/images/ANATOMY/COPD2.jpg',
			img_txt: 'COPD study',
			thumbs_src: './assets/thumbs/ANATOMY/COPD2.jpg',
			super_thumbs_src: './assets/superThumbs/ANATOMY/COPD2.jpg',
		},
		{
			img_src: './assets/images/ANATOMY/Hand_Anatomy01.jpg',
			img_txt: 'Hand Anatomy',
			thumbs_src: './assets/thumbs/ANATOMY/Hand_Anatomy01.jpg',
			super_thumbs_src: './assets/superThumbs/ANATOMY/Hand_Anatomy01.jpg',
		},
		{
			img_src: './assets/images/ANATOMY/IBS_04.jpg',
			img_txt: 'IBS',
			thumbs_src: './assets/thumbs/ANATOMY/IBS_04.jpg',
			super_thumbs_src: './assets/superThumbs/ANATOMY/IBS_04.jpg',
		},
		{
			img_src: './assets/images/ANATOMY/StomachLayers_01.jpg',
			img_txt: 'Stomach Layers',
			thumbs_src: './assets/thumbs/ANATOMY/StomachLayers_01.jpg',
			super_thumbs_src: './assets/superThumbs/ANATOMY/StomachLayers_01.jpg',
		},
		{
			img_src: './assets/images/ANATOMY/CowCalf.jpg',
			img_txt: 'How now anatomical cow',
			thumbs_src: './assets/thumbs/ANATOMY/CowCalf.jpg',
			super_thumbs_src: './assets/superThumbs/ANATOMY/CowCalf.jpg',
		},
		// hardcoded currently, only one image can have multiple associated images
		// See ArrayLimitsCalc()
		{
			img_src: [
				'./assets/images/UterineInversion/UterineInversion_Colour01.jpg',
				'./assets/images/UterineInversion/UterineInversion_Colour02.jpg',
				'./assets/images/UterineInversion/UterineInversion_Colour03.jpg',
				'./assets/images/UterineInversion/UterineInversion_Colour04.jpg',
				'./assets/images/UterineInversion/UterineInversion_Colour05.jpg'],
			overlay_thumbs_src: [
				'./assets/thumbs/UterineInversion/UterineInversion_Colour01.jpg',
				'./assets/thumbs/UterineInversion/UterineInversion_Colour02.jpg',
				'./assets/thumbs/UterineInversion/UterineInversion_Colour03.jpg',
				'./assets/thumbs/UterineInversion/UterineInversion_Colour04.jpg',
				'./assets/thumbs/UterineInversion/UterineInversion_Colour05.jpg'],
			overlay_super_thumbs_src: [
				'./assets/superThumbs/UterineInversion/UterineInversion_Colour01.jpg',
				'./assets/superThumbs/UterineInversion/UterineInversion_Colour02.jpg',
				'./assets/superThumbs/UterineInversion/UterineInversion_Colour03.jpg',
				'./assets/superThumbs/UterineInversion/UterineInversion_Colour04.jpg',
				'./assets/superThumbs/UterineInversion/UterineInversion_Colour05.jpg'],
			img_txt: 'Uterine Inversion Collection',
			thumbs_src: './assets/thumbs/UterineInversion/UIFolder.jpg',
			super_thumbs_src: './assets/superThumbs/UterineInversion/UIFolder.jpg',
		},
	],
	'POSTERS/LOGOS': [
		{
			img_src: './assets/images/POSTERS/SwiftAvionics.jpg',
			img_txt: 'Swift Avionics',
			thumbs_src: './assets/thumbs/POSTERS/SwiftAvionics.jpg',
			super_thumbs_src: './assets/superThumbs/POSTERS/SwiftAvionics.jpg',
		},
		{
			img_src: './assets/images/POSTERS/ADPoster.jpg',
			img_txt: 'ADPoster',
			thumbs_src: './assets/thumbs/POSTERS/ADPoster.jpg',
			super_thumbs_src: './assets/superThumbs/POSTERS/ADPoster.jpg',
		},
		{
			img_src: './assets/images/POSTERS/MVintroV2.jpg',
			img_txt: 'MVintro',
			thumbs_src: './assets/thumbs/POSTERS/MVintroV2.jpg',
			super_thumbs_src: './assets/superThumbs/POSTERS/MVintroV2.jpg',
		},
		{
			img_src: './assets/images/POSTERS/MFS01.jpg',
			img_txt: 'March for Science Logo',
			thumbs_src: './assets/thumbs/POSTERS/MFS01.jpg',
			super_thumbs_src: './assets/superThumbs/POSTERS/MFS01.jpg',
		},
		{
			img_src: './assets/images/POSTERS/MFS02.jpg',
			img_txt: 'March for Science Tokyo Logo',
			thumbs_src: './assets/thumbs/POSTERS/MFS02.jpg',
			super_thumbs_src: './assets/superThumbs/POSTERS/MFS02.jpg',
		},
		{
			img_src: './assets/images/POSTERS/UTS_Build.jpg',
			img_txt: 'UTS School of Life Sciences Logo',
			thumbs_src: './assets/thumbs/POSTERS/UTS_Build.jpg',
			super_thumbs_src: './assets/superThumbs/POSTERS/UTS_Build.jpg',
		},
		{
			img_src: './assets/images/POSTERS/Liposome_Protocol copy2.jpg',
			img_txt: 'Liposome Protocol',
			thumbs_src: './assets/thumbs/POSTERS/Liposome_Protocol copy2.jpg',
			super_thumbs_src: './assets/superThumbs/POSTERS/Liposome_Protocol copy2.jpg',
		},
		{
			img_src: './assets/images/POSTERS/NH2016_Poster03.jpg',
			img_txt: 'NH 2016 Poster',
			thumbs_src: './assets/thumbs/POSTERS/NH2016_Poster03.jpg',
			super_thumbs_src: './assets/superThumbs/POSTERS/NH2016_Poster03.jpg',
		},
		{
			img_src: './assets/images/POSTERS/WBlot_Protocol01 copy2.jpg',
			img_txt: 'Western Blot',
			thumbs_src: './assets/thumbs/POSTERS/WBlot_Protocol01 copy2.jpg',
			super_thumbs_src: './assets/superThumbs/POSTERS/WBlot_Protocol01 copy2.jpg',
		},
		{
			img_src: './assets/images/POSTERS/rsz_nh_posterportraitfinal.jpg',
			img_txt: 'Poster Final',
			thumbs_src: './assets/thumbs/POSTERS/rsz_nh_posterportraitfinal.jpg',
			super_thumbs_src: './assets/superThumbs/POSTERS/rsz_nh_posterportraitfinal.jpg',
		},
		{
			img_src: './assets/images/POSTERS/ExosomeInfographic4.jpg',
			img_txt: 'Microvesicle analysis',
			thumbs_src: './assets/thumbs/POSTERS/ExosomeInfographic4.jpg',
			super_thumbs_src: './assets/superThumbs/POSTERS/ExosomeInfographic4.jpg',
		},
		{
			img_src: './assets/images/POSTERS/ING 01 WINTER_Quantum_26-27-1.jpg',
			img_txt: 'Refraction Media Magazine',
			thumbs_src: './assets/thumbs/POSTERS/ING 01 WINTER_Quantum_26-27-1.jpg',
			super_thumbs_src: './assets/superThumbs/POSTERS/ING 01 WINTER_Quantum_26-27-1.jpg',
		},
		{
			img_src: './assets/images/POSTERS/RM_ESWA_Poster.jpg',
			img_txt: 'Earth Week Poster',
			thumbs_src: './assets/thumbs/POSTERS/RM_ESWA_Poster.jpg',
			super_thumbs_src: './assets/superThumbs/POSTERS/RM_ESWA_Poster.jpg',
		},
		{
			img_src: './assets/images/POSTERS/SDx_Bilayer.jpg',
			img_txt: 'SDx Bilayer',
			thumbs_src: './assets/thumbs/POSTERS/SDx_Bilayer.jpg',
			super_thumbs_src: './assets/superThumbs/POSTERS/SDx_Bilayer.jpg',
		},
	],
	TYPOGRAPHY: [
		{
			img_src: './assets/images/TYPOGRAPHY/Blood_Components2.jpg',
			img_txt: 'Blood',
			thumbs_src: './assets/thumbs/TYPOGRAPHY/Blood_Components2.jpg',
			super_thumbs_src: './assets/superThumbs/TYPOGRAPHY/Blood_Components2.jpg',
		},
		{
			img_src: './assets/images/TYPOGRAPHY/Epidemiology2.jpg',
			img_txt: 'Microbiology',
			thumbs_src: './assets/thumbs/TYPOGRAPHY/Epidemiology2.jpg',
			super_thumbs_src: './assets/superThumbs/TYPOGRAPHY/Epidemiology2.jpg',
		},
		{
			img_src: './assets/images/TYPOGRAPHY/Neuroscience.jpg',
			img_txt: 'Neruoscience',
			thumbs_src: './assets/thumbs/TYPOGRAPHY/Neuroscience.jpg',
			super_thumbs_src: './assets/superThumbs/TYPOGRAPHY/Neuroscience.jpg',
		},
		{
			img_src: './assets/images/TYPOGRAPHY/Flagellum.jpg',
			img_txt: 'Flagellum',
			thumbs_src: './assets/thumbs/TYPOGRAPHY/Flagellum.jpg',
			super_thumbs_src: './assets/superThumbs/TYPOGRAPHY/Flagellum.jpg',
		},
		{
			img_src: './assets/images/TYPOGRAPHY/Proteomics_Typo_02 copy.jpg',
			img_txt: 'Proteomics',
			thumbs_src: './assets/thumbs/TYPOGRAPHY/Proteomics_Typo_02 copy.jpg',
			super_thumbs_src: './assets/superThumbs/TYPOGRAPHY/Proteomics_Typo_02 copy.jpg',
		},
	],
	FACTS: [
		{
			img_src: './assets/images/FACTS/CatFacts.jpg',
			img_txt: 'Maine Coon Cats + polydactylism',
			thumbs_src: './assets/thumbs/FACTS/CatFacts.jpg',
			super_thumbs_src: './assets/superThumbs/FACTS/CatFacts.jpg',
		},
		{
			img_src: './assets/images/FACTS/EelFacts.jpg',
			img_txt: 'Electric eel + electrolocation',
			thumbs_src: './assets/thumbs/FACTS/EelFacts.jpg',
			super_thumbs_src: './assets/superThumbs/FACTS/EelFacts.jpg',
		},
		{
			img_src: './assets/images/FACTS/MudCrabFacts.jpg',
			img_txt: 'Mud crabs',
			thumbs_src: './assets/thumbs/FACTS/MudCrabFacts.jpg',
			super_thumbs_src: './assets/superThumbs/FACTS/MudCrabFacts.jpg',
		},
		{
			img_src: './assets/images/FACTS/SeadragonFactsV2.jpg',
			img_txt: 'Seadragons',
			thumbs_src: './assets/thumbs/FACTS/SeadragonFactsV2.jpg',
			super_thumbs_src: './assets/superThumbs/FACTS/SeadragonFactsV2.jpg',
		},
	],
	FUN: [
		{
			img_src: './assets/images/FUN/BurritoBots.jpg',
			img_txt: 'BurritoBots',
			thumbs_src: './assets/thumbs/FUN/BurritoBots.jpg',
			super_thumbs_src: './assets/superThumbs/FUN/BurritoBots.jpg',
		},
		{
			img_src: './assets/images/FUN/CatJedi.jpg',
			img_txt: 'Cat Jedi',
			thumbs_src: './assets/thumbs/FUN/CatJedi.jpg',
			super_thumbs_src: './assets/superThumbs/FUN/CatJedi.jpg',
		},
		{
			img_src: './assets/images/FUN/DigiShort.jpg',
			img_txt: 'DigiShort',
			thumbs_src: './assets/thumbs/FUN/DigiShort.jpg',
			super_thumbs_src: './assets/superThumbs/FUN/DigiShort.jpg',
		},
		{
			img_src: './assets/images/FUN/DragonCooks.jpg',
			img_txt: 'DragonCooks',
			thumbs_src: './assets/thumbs/FUN/DragonCooks.jpg',
			super_thumbs_src: './assets/superThumbs/FUN/DragonCooks.jpg',
		},
		{
			img_src: './assets/images/FUN/FruitStats.jpg',
			img_txt: 'FruitStats',
			thumbs_src: './assets/thumbs/FUN/FruitStats.jpg',
			super_thumbs_src: './assets/superThumbs/FUN/FruitStats.jpg',
		},
		{
			img_src: './assets/images/FUN/HappyBorkday.jpg',
			img_txt: 'HappyBorkday',
			thumbs_src: './assets/thumbs/FUN/HappyBorkday.jpg',
			super_thumbs_src: './assets/superThumbs/FUN/HappyBorkday.jpg',
		},
		{
			img_src: './assets/images/FUN/JarPunch.jpg',
			img_txt: 'JarPunch',
			thumbs_src: './assets/thumbs/FUN/JarPunch.jpg',
			super_thumbs_src: './assets/superThumbs/FUN/JarPunch.jpg',
		},
		{
			img_src: './assets/images/FUN/MerryZilla.jpg',
			img_txt: 'MerryZilla',
			thumbs_src: './assets/thumbs/FUN/MerryZilla.jpg',
			super_thumbs_src: './assets/superThumbs/FUN/MerryZilla.jpg',
		},
		{
			img_src: './assets/images/FUN/PhoPuns.jpg',
			img_txt: 'PhoPuns',
			thumbs_src: './assets/thumbs/FUN/PhoPuns.jpg',
			super_thumbs_src: './assets/superThumbs/FUN/PhoPuns.jpg',
		},
		{
			img_src: './assets/images/FUN/Rahn.jpg',
			img_txt: 'Rahn',
			thumbs_src: './assets/thumbs/FUN/Rahn.jpg',
			super_thumbs_src: './assets/superThumbs/FUN/Rahn.jpg',
		},
		{
			img_src: './assets/images/FUN/SamuraiJackal.jpg',
			img_txt: 'SamuraiJackal',
			thumbs_src: './assets/thumbs/FUN/SamuraiJackal.jpg',
			super_thumbs_src: './assets/superThumbs/FUN/SamuraiJackal.jpg',
		},
		{
			img_src: './assets/images/FUN/eggbox.jpg',
			img_txt: 'eggbox',
			thumbs_src: './assets/thumbs/FUN/eggbox.jpg',
			super_thumbs_src: './assets/superThumbs/FUN/eggbox.jpg',
		},
		{
			img_src: './assets/images/FUN/SushiDeconstruct.jpg',
			img_txt: 'SushiDeconstruct',
			thumbs_src: './assets/thumbs/FUN/SushiDeconstruct.jpg',
			super_thumbs_src: './assets/superThumbs/FUN/SushiDeconstruct.jpg',
		},
		{
			img_src: './assets/images/FUN/TerraMon.jpg',
			img_txt: 'TerraMon',
			thumbs_src: './assets/thumbs/FUN/TerraMon.jpg',
			super_thumbs_src: './assets/superThumbs/FUN/TerraMon.jpg',
		},
	],
};

// hardcoded for now
const projectListLabels = {
	ALL: 'All your favourite science-based artworks, all in one place! Presented in a variety of styles, each artwork has careful thought behind them to best illustrate the topic they represent.',
	NATURE: 'I’ve heard it’s pretty scary.',
	ANATOMY: 'Delving into the inner structure of the body, one chorus of “ewwww”s at a time.',
	'POP SCIENCE': 'A combination of scientific illustration and pop culture. The aim: To create thought-provoking artworks that stand out from the crowd from regular scientific illustrations.',
	'POSTERS/LOGOS': 'Smart, infographic-styled posters to educate the public in the latest scientific research. Commissioned logos by companies and individuals looking to make their ads stand out.',
	TYPOGRAPHY: 'Taking everyday letters and making them look better…with science!',
	FACTS: 'Learning every day! Fun facts for those who want to impress others with their knowledge of anything and everything. Or just cats, crabs and eels specifically.',
	FUN: 'All the other artworks which don’t fall into the science-ey categories. Made either purely for personal interest, or commissioned by awesome people.',
};

// This concat order is also important if you change stuff
const project_list_all = () => {
	projectListInitial.ALL =
	projectListInitial.NATURE.concat(
		projectListInitial['POP SCIENCE'].concat(
			projectListInitial.ANATOMY));
	return projectListInitial;
};

function setImageNum(dict) {
	let x = 0;
	Object.keys(dict).forEach((arrayNames) => {
		const arrayRaw = dict[arrayNames];
		for (let i = 0, len = arrayRaw.length; i < len; i += 1) {
			arrayRaw[i].item_number = x + i;
		}
		x += arrayRaw.length;
	});
	return [dict, x];
}

// Ordered so we generate numbers for each category then create
// the all category which is predefined as all the science categories

const [projectListBase, countNumberOfImages] = setImageNum(projectListInitial);

export const projectList = project_list_all();
export const NumberOfImages = countNumberOfImages;

export function getImageSrc(ImageNum) {
	let result = false;
	Object.keys(projectList).forEach((arrayNames) => {
		const arrayRaw = projectList[arrayNames];
		for (let i = 0, len = arrayRaw.length; i < len; i += 1) {
			if (arrayRaw[i].item_number === ImageNum) {
				result = arrayRaw[i];
			}
		}
	});
	return result;
}

export function ArrayLimitsCalc(category) {
	const left = [];
	const right = [];
	// hardcoded currently, only one image can have multiple associated images
	let up = [];
	let down = [];
	const arrayRaw = projectList[category];
	left.push(arrayRaw[0].item_number);
	right.push(arrayRaw[arrayRaw.length - 1].item_number);
	arrayRaw.forEach((image) => {
		if (Array.isArray(image.img_src)) {
			up = [image.item_number];
			down = [image.item_number];
		}
	});
	return {
		left,
		right,
		up,
		down,
	};
}

// actions you can send to the state
const category_gen = () => {
	const results = {};
	Object.keys(projectListBase).forEach((key) => {
		results[key] = projectListLabels[key];
	});
	return results;
};

export const category = category_gen();

export const scrollPoint = $(window).height();
