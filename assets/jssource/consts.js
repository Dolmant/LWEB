export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export function updatecat(category) {
	return { type: UPDATE_CATEGORY, category };
}

export const projectList = {
	SCIENCE: [
		{
			item_number: 5,
			img_src: './assets/images/SciIllustration/mouse02 copy.png',
			img_txt: 'Mice',
		},
		{
			item_number: 7,
			img_src: './assets/images/SciIllustration/CatAnatomy2.jpg',
			img_txt: 'Cat Anatomy',
		},
		{
			item_number: 8,
			img_src: './assets/images/SciIllustration/COPD2.jpg',
			img_txt: 'COPD study',
		},
		{
			item_number: 9,
			img_src: './assets/images/SciIllustration/Hand_Anatomy01.png',
			img_txt: 'Hand Anatomy',
		},
		{
			item_number: 9,
			img_src: './assets/images/SciIllustration/Cell_comp03.jpg',
			img_txt: 'Cell comp',
		},
		{
			item_number: 9,
			img_src: './assets/images/SciIllustration/DNAtetris.jpg',
			img_txt: 'DNAtetris',
		},
		{
			item_number: 9,
			img_src: './assets/images/SciIllustration/IBS_04.jpg',
			img_txt: 'IBS',
		},
		{
			item_number: 9,
			img_src: './assets/images/SciIllustration/MVintroV2.png',
			img_txt: 'MVintro',
		},
		{
			item_number: 9,
			img_src: './assets/images/SciIllustration/RamenCellNew5.png',
			img_txt: 'Ramen Cell',
		},
		{
			item_number: 10,
			img_src: './assets/images/SciIllustration/StomachLayers_01.png',
			img_txt: 'Stomach Layers',
		},
		{
			item_number: 15,
			img_src: './assets/images/SciIllustration/08_Vizbi_DataTransfer.png',
			img_txt: 'Data Transfer',
		},
		{
			item_number: 16,
			img_src: './assets/images/SciIllustration/09_Vizbi_WINNER_FibrilForest.png',
			img_txt: 'Fibril Forest',
		},
		{
			item_number: 17,
			img_src: './assets/images/SciIllustration/FriesWithThat3.png',
			img_txt: '"Do you want fries with that?" Microbiological study of IBS',
		},
		{
			item_number: 11,
			img_src: './assets/images/Typography/Blood_Components2.png',
			img_txt: 'Blood',
		},
		{
			item_number: 12,
			img_src: './assets/images/Typography/Epidemiology2.png',
			img_txt: 'Microbiology',
		},
		{
			item_number: 13,
			img_src: './assets/images/Typography/Neuroscience.jpg',
			img_txt: 'Neruoscience',
		},
		{
			item_number: 13,
			img_src: './assets/images/Typography/Flagellum.png',
			img_txt: 'Flagellum',
		},
		{
			item_number: 14,
			img_src: './assets/images/Typography/Proteomics_Typo_02 copy.jpg',
			img_txt: 'Proteomics',
		},
	],
	MODELLING: [
		{
			item_number: 6,
			img_src: './assets/images/SciModelling/06_Cell_Internal.png',
			img_txt: '3D Cell internals',
		},
		{
			item_number: 6,
			img_src: './assets/images/SciModelling/CLICblue.png',
			img_txt: 'CLIC',
		},
		{
			item_number: 6,
			img_src: './assets/images/SciModelling/EyeRend02.png',
			img_txt: 'Eye',
		},
		{
			item_number: 6,
			img_src: './assets/images/SciModelling/SC_Compare.png',
			img_txt: 'SC Compare',
		},
	],
	ANIMALS: [
		{
			item_number: 1,
			img_src: './assets/images/Animals/Binturong.jpg',
			img_txt: 'Binturong',
		},
		{
			item_number: 2,
			img_src: './assets/images/Animals/BlackBear.jpg',
			img_txt: 'Black Bear',
		},
		{
			item_number: 3,
			img_src: './assets/images/Animals/RedPanda.jpg',
			img_txt: 'Red Panda',
		},
		{
			item_number: 4,
			img_src: './assets/images/Animals/Dragonfly2Signed.jpg',
			img_txt: 'Dragonfly with prey',
		},
		{
			item_number: 3,
			img_src: './assets/images/Animals/Chameleon.jpg',
			img_txt: 'Chameleon',
		},
		{
			item_number: 4,
			img_src: './assets/images/Animals/HiveBeetle2.jpg',
			img_txt: 'Hive Beetle',
		},
	],
	FACTS: [
		{
			item_number: 21,
			img_src: './assets/images/Facts/CatFacts.jpg',
			img_txt: 'Maine Coon Cats + polydactylism',
		},
		{
			item_number: 22,
			img_src: './assets/images/Facts/EelFacts.jpg',
			img_txt: 'Electric eel + electrolocation',
		},
		{
			item_number: 23,
			img_src: './assets/images/Facts/MudCrabFacts.jpg',
			img_txt: 'Mud crabs',
		},
		{
			item_number: 24,
			img_src: './assets/images/Facts/SeadragonFactsV2.jpg',
			img_txt: 'Seadragons',
		},
	],
	POSTERS: [
		{
			item_number: 24,
			img_src: './assets/images/Posters/rsz_nh_posterportraitfinal.jpg',
			img_txt: 'Poster1',
		},
		{
			item_number: 24,
			img_src: './assets/images/Posters/somepdf.jpg',
			img_txt: 'somepdf I cant use',
		},
	],
	MISC: [
		{
			item_number: 24,
			img_src: './assets/images/UterineInversion',
			img_txt: '',
		},
	],
};

// actions youcan send to the state
export const category = {
	PROJECTS: 'PROJECTS',
	ANIMALS: 'ANIMALS',
	MODELLING: 'MODELLING',
	SCIENCE: 'SCIENCE',
	FACTS: 'FACTS',
};
