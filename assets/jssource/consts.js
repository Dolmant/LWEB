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

export const isTouch = (($(window).width() < 1000) || 'ontouchstart' in document.documentElement);

export const NumberofVertical = 5;
const projectListBase = {
	SCIENCE: [
		{
			img_src: './assets/images/SciIllustration/mouse02 copy.jpg',
			img_txt: 'Mice',
			thumbs_src: './assets/thumbs/SciIllustration/mouse02 copy.jpg',
			super_thumbs_src: './assets/superThumbs/SciIllustration/mouse02 copy.jpg',
		},
		{
			img_src: './assets/images/SciIllustration/CatAnatomy2.jpg',
			img_txt: 'Cat Anatomy',
			thumbs_src: './assets/thumbs/SciIllustration/CatAnatomy2.jpg',
			super_thumbs_src: './assets/superThumbs/SciIllustration/CatAnatomy2.jpg',
		},
		{
			img_src: './assets/images/SciIllustration/COPD2.jpg',
			img_txt: 'COPD study',
			thumbs_src: './assets/thumbs/SciIllustration/COPD2.jpg',
			super_thumbs_src: './assets/superThumbs/SciIllustration/COPD2.jpg',
		},
		{
			img_src: './assets/images/SciIllustration/Hand_Anatomy01.jpg',
			img_txt: 'Hand Anatomy',
			thumbs_src: './assets/thumbs/SciIllustration/Hand_Anatomy01.jpg',
			super_thumbs_src: './assets/superThumbs/SciIllustration/Hand_Anatomy01.jpg',
		},
		{
			img_src: './assets/images/SciIllustration/Cell_comp03.jpg',
			img_txt: 'Cell comp',
			thumbs_src: './assets/thumbs/SciIllustration/Cell_comp03.jpg',
			super_thumbs_src: './assets/superThumbs/SciIllustration/Cell_comp03.jpg',
		},
		{
			img_src: './assets/images/SciIllustration/DNAtetris.jpg',
			img_txt: 'DNAtetris',
			thumbs_src: './assets/thumbs/SciIllustration/DNAtetris.jpg',
			super_thumbs_src: './assets/superThumbs/SciIllustration/DNAtetris.jpg',
		},
		{
			img_src: './assets/images/SciIllustration/IBS_04.jpg',
			img_txt: 'IBS',
			thumbs_src: './assets/thumbs/SciIllustration/IBS_04.jpg',
			super_thumbs_src: './assets/superThumbs/SciIllustration/IBS_04.jpg',
		},
		{
			img_src: './assets/images/SciIllustration/MVintroV2.jpg',
			img_txt: 'MVintro',
			thumbs_src: './assets/thumbs/SciIllustration/MVintroV2.jpg',
			super_thumbs_src: './assets/superThumbs/SciIllustration/MVintroV2.jpg',
		},
		{
			img_src: './assets/images/SciIllustration/RamenCellNew5.jpg',
			img_txt: 'Ramen Cell',
			thumbs_src: './assets/thumbs/SciIllustration/RamenCellNew5.jpg',
			super_thumbs_src: './assets/superThumbs/SciIllustration/RamenCellNew5.jpg',
		},
		{
			img_src: './assets/images/SciIllustration/StomachLayers_01.jpg',
			img_txt: 'Stomach Layers',
			thumbs_src: './assets/thumbs/SciIllustration/StomachLayers_01.jpg',
			super_thumbs_src: './assets/superThumbs/SciIllustration/StomachLayers_01.jpg',
		},
		{
			img_src: './assets/images/SciIllustration/08_Vizbi_DataTransfer.jpg',
			img_txt: 'Data Transfer',
			thumbs_src: './assets/thumbs/SciIllustration/08_Vizbi_DataTransfer.jpg',
			super_thumbs_src: './assets/superThumbs/SciIllustration/08_Vizbi_DataTransfer.jpg',
		},
		{
			img_src: './assets/images/SciIllustration/09_Vizbi_WINNER_FibrilForest.jpg',
			img_txt: 'Fibril Forest',
			thumbs_src: './assets/thumbs/SciIllustration/09_Vizbi_WINNER_FibrilForest.jpg',
			super_thumbs_src: './assets/superThumbs/SciIllustration/09_Vizbi_WINNER_FibrilForest.jpg',
		},
		{
			img_src: './assets/images/SciIllustration/FriesWithThat3.jpg',
			img_txt: 'Fries with that?',
			thumbs_src: './assets/thumbs/SciIllustration/FriesWithThat3.jpg',
			super_thumbs_src: './assets/superThumbs/SciIllustration/FriesWithThat3.jpg',
		},
		{
			img_src: './assets/images/SciIllustration/CowCalf.jpg',
			img_txt: 'How now anatomical cow',
			thumbs_src: './assets/thumbs/SciIllustration/CowCalf.jpg',
			super_thumbs_src: './assets/superThumbs/SciIllustration/CowCalf.jpg',
		},
		{
			img_src: './assets/images/SciIllustration/UTS_Build.jpg',
			img_txt: 'UTS School of Life Sciences Logo',
			thumbs_src: './assets/thumbs/SciIllustration/UTS_Build.jpg',
			super_thumbs_src: './assets/superThumbs/SciIllustration/UTS_Build.jpg',
		},
		{
			img_src: './assets/images/SciIllustration/TheScreamPlant.jpg',
			img_txt: 'The Anemone Scream (cross section)',
			thumbs_src: './assets/thumbs/SciIllustration/TheScreamPlant.jpg',
			super_thumbs_src: './assets/superThumbs/SciIllustration/TheScreamPlant.jpg',
		},
	],
	TYPOGRAPHY: [
		{
			img_src: './assets/images/Typography/Blood_Components2.jpg',
			img_txt: 'Blood',
			thumbs_src: './assets/thumbs/Typography/Blood_Components2.jpg',
			super_thumbs_src: './assets/superThumbs/Typography/Blood_Components2.jpg',
		},
		{
			img_src: './assets/images/Typography/Epidemiology2.jpg',
			img_txt: 'Microbiology',
			thumbs_src: './assets/thumbs/Typography/Epidemiology2.jpg',
			super_thumbs_src: './assets/superThumbs/Typography/Epidemiology2.jpg',
		},
		{
			img_src: './assets/images/Typography/Neuroscience.jpg',
			img_txt: 'Neruoscience',
			thumbs_src: './assets/thumbs/Typography/Neuroscience.jpg',
			super_thumbs_src: './assets/superThumbs/Typography/Neuroscience.jpg',
		},
		{
			img_src: './assets/images/Typography/Flagellum.jpg',
			img_txt: 'Flagellum',
			thumbs_src: './assets/thumbs/Typography/Flagellum.jpg',
			super_thumbs_src: './assets/superThumbs/Typography/Flagellum.jpg',
		},
		{
			img_src: './assets/images/Typography/Proteomics_Typo_02 copy.jpg',
			img_txt: 'Proteomics',
			thumbs_src: './assets/thumbs/Typography/Proteomics_Typo_02 copy.jpg',
			super_thumbs_src: './assets/superThumbs/Typography/Proteomics_Typo_02 copy.jpg',
		},
	],
	MODELLING: [
		{
			img_src: './assets/images/SciModelling/06_Cell_Internal.jpg',
			img_txt: '3D Cell internals',
			thumbs_src: './assets/thumbs/SciModelling/06_Cell_Internal.jpg',
			super_thumbs_src: './assets/superThumbs/SciModelling/06_Cell_Internal.jpg',
		},
		{
			img_src: './assets/images/SciModelling/CLICblue.jpg',
			img_txt: 'CLIC',
			thumbs_src: './assets/thumbs/SciModelling/CLICblue.jpg',
			super_thumbs_src: './assets/superThumbs/SciModelling/CLICblue.jpg',
		},
		{
			img_src: './assets/images/SciModelling/EyeRend02.jpg',
			img_txt: 'Eye',
			thumbs_src: './assets/thumbs/SciModelling/EyeRend02.jpg',
			super_thumbs_src: './assets/superThumbs/SciModelling/EyeRend02.jpg',
		},
		{
			img_src: './assets/images/SciModelling/SC_Compare.jpg',
			img_txt: 'SC Compare',
			thumbs_src: './assets/thumbs/SciModelling/SC_Compare.jpg',
			super_thumbs_src: './assets/superThumbs/SciModelling/SC_Compare.jpg',
		},
	],
	ANIMALS: [
		{
			img_src: './assets/images/Animals/Binturong.jpg',
			img_txt: 'Binturong',
			thumbs_src: './assets/thumbs/Animals/Binturong.jpg',
			super_thumbs_src: './assets/superThumbs/Animals/Binturong.jpg',
		},
		{
			img_src: './assets/images/Animals/BlackBear.jpg',
			img_txt: 'Black Bear',
			thumbs_src: './assets/thumbs/Animals/BlackBear.jpg',
			super_thumbs_src: './assets/superThumbs/Animals/BlackBear.jpg',
		},
		{
			img_src: './assets/images/Animals/RedPanda.jpg',
			img_txt: 'Red Panda',
			thumbs_src: './assets/thumbs/Animals/RedPanda.jpg',
			super_thumbs_src: './assets/superThumbs/Animals/RedPanda.jpg',
		},
		{
			img_src: './assets/images/Animals/Dragonfly2Signed.jpg',
			img_txt: 'Dragonfly with prey',
			thumbs_src: './assets/thumbs/Animals/Dragonfly2Signed.jpg',
			super_thumbs_src: './assets/superThumbs/Animals/Dragonfly2Signed.jpg',
		},
		{
			img_src: './assets/images/Animals/Chameleon.jpg',
			img_txt: 'Chameleon',
			thumbs_src: './assets/thumbs/Animals/Chameleon.jpg',
			super_thumbs_src: './assets/superThumbs/Animals/Chameleon.jpg',
		},
		{
			img_src: './assets/images/Animals/HiveBeetle2.jpg',
			img_txt: 'Hive Beetle',
			thumbs_src: './assets/thumbs/Animals/HiveBeetle2.jpg',
			super_thumbs_src: './assets/superThumbs/Animals/HiveBeetle2.jpg',
		},
		{
			img_src: './assets/images/Animals/OctopusIsLate.jpg',
			img_txt: 'Octopus',
			thumbs_src: './assets/thumbs/Animals/OctopusIsLate.jpg',
			super_thumbs_src: './assets/superThumbs/Animals/OctopusIsLate.jpg',
		},
	],
	FACTS: [
		{
			img_src: './assets/images/Facts/CatFacts.jpg',
			img_txt: 'Maine Coon Cats + polydactylism',
			thumbs_src: './assets/thumbs/Facts/CatFacts.jpg',
			super_thumbs_src: './assets/superThumbs/Facts/CatFacts.jpg',
		},
		{
			img_src: './assets/images/Facts/EelFacts.jpg',
			img_txt: 'Electric eel + electrolocation',
			thumbs_src: './assets/thumbs/Facts/EelFacts.jpg',
			super_thumbs_src: './assets/superThumbs/Facts/EelFacts.jpg',
		},
		{
			img_src: './assets/images/Facts/MudCrabFacts.jpg',
			img_txt: 'Mud crabs',
			thumbs_src: './assets/thumbs/Facts/MudCrabFacts.jpg',
			super_thumbs_src: './assets/superThumbs/Facts/MudCrabFacts.jpg',
		},
		{
			img_src: './assets/images/Facts/SeadragonFactsV2.jpg',
			img_txt: 'Seadragons',
			thumbs_src: './assets/thumbs/Facts/SeadragonFactsV2.jpg',
			super_thumbs_src: './assets/superThumbs/Facts/SeadragonFactsV2.jpg',
		},
	],
	SVSM: [
		{
			img_src: './assets/images/SVSM/Liposome_Protocol copy2.jpg',
			img_txt: 'Liposome Protocol',
			thumbs_src: './assets/thumbs/SVSM/Liposome_Protocol copy2.jpg',
			super_thumbs_src: './assets/superThumbs/SVSM/Liposome_Protocol copy2.jpg',
		},
		{
			img_src: './assets/images/SVSM/NH2016_Poster03.jpg',
			img_txt: 'NH 2016 Poster',
			thumbs_src: './assets/thumbs/SVSM/NH2016_Poster03.jpg',
			super_thumbs_src: './assets/superThumbs/SVSM/NH2016_Poster03.jpg',
		},
		{
			img_src: './assets/images/SVSM/WBlot_Protocol01 copy2.jpg',
			img_txt: 'Western Blot',
			thumbs_src: './assets/thumbs/SVSM/WBlot_Protocol01 copy2.jpg',
			super_thumbs_src: './assets/superThumbs/SVSM/WBlot_Protocol01 copy2.jpg',
		},
		{
			img_src: './assets/images/SVSM/rsz_nh_posterportraitfinal.jpg',
			img_txt: 'Poster Final',
			thumbs_src: './assets/thumbs/SVSM/rsz_nh_posterportraitfinal.jpg',
			super_thumbs_src: './assets/superThumbs/SVSM/rsz_nh_posterportraitfinal.jpg',
		},
		{
			img_src: './assets/images/SVSM/ExosomeInfographic4.jpg',
			img_txt: 'Microvesicle analysis',
			thumbs_src: './assets/thumbs/SVSM/ExosomeInfographic4.jpg',
			super_thumbs_src: './assets/superThumbs/SVSM/ExosomeInfographic4.jpg',
		},
		{
			img_src: './assets/images/SVSM/MFS01.jpg',
			img_txt: 'March for Science Logo',
			thumbs_src: './assets/thumbs/SVSM/MFS01.jpg',
			super_thumbs_src: './assets/superThumbs/SVSM/MFS01.jpg',
		},
		{
			img_src: './assets/images/SVSM/MFS02.jpg',
			img_txt: 'March for Science Tokyo Logo',
			thumbs_src: './assets/thumbs/SVSM/MFS02.jpg',
			super_thumbs_src: './assets/superThumbs/SVSM/MFS02.jpg',
		},
	],
	MISC: [
		{
			img_src: [
				'./assets/thumbs/UterineInversion/UterineInversion_Colour01.jpg',
				'./assets/thumbs/UterineInversion/UterineInversion_Colour02.jpg',
				'./assets/thumbs/UterineInversion/UterineInversion_Colour03.jpg',
				'./assets/thumbs/UterineInversion/UterineInversion_Colour04.jpg',
				'./assets/thumbs/UterineInversion/UterineInversion_Colour05.jpg'],
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
};

// I reverse each of the sub lists so keep that in mind when navigating and stuff

function setImageNum(dict) {
	let x = 0;
	for (const arrayNames in dict) {
		dict[arrayNames].reverse()
		const arrayRaw = dict[arrayNames];
		for (let i = 0, len = arrayRaw.length; i < len; i += 1) {
			arrayRaw[i].item_number = x + i;
		}
		x += arrayRaw.length;
	}
	return [dict, x];
}

export const [projectList, NumberOfImages] = setImageNum(projectListBase);

export function getImageSrc(ImageNum) {
	for (const arrayNames in projectList) {
		const arrayRaw = projectList[arrayNames];
		for (let i = 0, len = arrayRaw.length; i < len; i += 1) {
			if (arrayRaw[i].item_number === ImageNum) {
				return arrayRaw[i];
			}
		}
	}
	return false;
}

function getArrayLimits() {
	const left = [];
	const right = [];
	const up = [NumberOfImages - 1];
	const down = [NumberOfImages - 1];
	for (const arrayNames in projectList) {
		const arrayRaw = projectList[arrayNames];
		left.push(arrayRaw[0].item_number);
		right.push(arrayRaw[arrayRaw.length - 1].item_number);
	}
	return {
		left,
		right,
		up,
		down,
	};
}

export function ArrayContains(a, obj) {
	for (let i = 0; i < a.length; i += 1) {
		if (a[i] === obj) {
			return true;
		}
	}
	return false;
}

export const ArrayLimits = getArrayLimits();

// actions youcan send to the state
export const category = {
	PROJECTS: 'PROJECTS',
	ANIMALS: 'ANIMALS',
	MODELLING: 'MODELLING',
	SCIENCE: 'SCIENCE',
	SVSM: 'SVSM',
	TYPOGRAPHY: 'TYPOGRAPHY',
	FACTS: 'FACTS',
	CAROUSEL: 'CAROUSEL',
};

export const scrollPoint = $(window).height();
