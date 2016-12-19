export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export function updatecat(category) {
	return { type: UPDATE_CATEGORY, category };
}

export const projectList = {
	SCIENCE: [
		{
			item_number: 5,
			img_src: './assets/images/Science/mouse02 copy.png',
			img_txt: 'Mice',
		},
		{
			item_number: 7,
			img_src: './assets/images/Science/Medical Illustration/CatAnatomy2.jpg',
			img_txt: 'Cat Anatomy',
		},
		{
			item_number: 8,
			img_src: './assets/images/Science/Medical Illustration/COPD2_sign.jpg',
			img_txt: 'COPD study',
		},
		{
			item_number: 9,
			img_src: './assets/images/Science/Medical Illustration/Hand_Anatomy02.png',
			img_txt: 'Hand Anatomy',
		},
		{
			item_number: 10,
			img_src: './assets/images/Science/Medical Illustration/StomachLayers_01.jpg',
			img_txt: 'Stomach Layers',
		},
		{
			item_number: 11,
			img_src: './assets/images/Science/Typography/Blood_Components2.jpg',
			img_txt: 'Blood',
		},
		{
			item_number: 12,
			img_src: './assets/images/Science/Typography/Micro2.jpg',
			img_txt: 'Microbiology',
		},
		{
			item_number: 13,
			img_src: './assets/images/Science/Typography/Neuroscience.jpg',
			img_txt: 'Neruoscience',
		},
		{
			item_number: 14,
			img_src: './assets/images/Science/Typography/Proteomics_Typo_02.jpg',
			img_txt: 'Proteomics',
		},
		{
			item_number: 15,
			img_src: './assets/images/Science/VizbiPlus/08_Vizbi_DataTransfer.jpg',
			img_txt: 'Data Transfer',
		},
		{
			item_number: 16,
			img_src: './assets/images/Science/VizbiPlus/09_Vizbi_WINNER_FibrilForest.jpg',
			img_txt: 'Fibril Forest',
		},
		{
			item_number: 17,
			img_src: './assets/images/Science/VizbiPlus/FriesWithThat3.png',
			img_txt: '"Do you want fries with that?" Microbiological study of IBS',
		},
	],
	MODELLING: [
		{
			item_number: 6,
			img_src: './assets/images/Science/3D/06_Cell_Internal.png',
			img_txt: '3D Cell internals',
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
			img_src: './assets/images/Insects/DragonflySigned.jpg',
			img_txt: 'Dragonfly with prey',
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
			img_txt: 'Mud crabs',
		},
		{
			item_number: 23,
			img_src: './assets/images/Facts/MudCrabFacts.jpg',
			img_txt: 'Electric eel + electrolocation',
		},
		{
			item_number: 24,
			img_src: './assets/images/Facts/SeadragonFactsV2.jpg',
			img_txt: 'Seadragons',
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
