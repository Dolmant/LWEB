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

export const SELECT_HOME = 'SELECT_HOME';
export function selectHome() {
    return dispatch => {
        dispatch(updateCategory(''));
        return dispatch({type: SELECT_HOME});
    };
}

export const isTouch = (($(window).width() < 1000)); //|| 'ontouchstart' in document.documentElement);

const projectListInitial = {
    // This order is important, if NATURE + SCIENCE + ANATOMY are not in this order,
    // navigation vis the arrows image_number will be incorrect. If you muck with this
    // MAKE SURE YOU UPDATE THE 'ALL' FUNCTION BELOW
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
        {
            img_src: './assets/images/NATURE/ShellLayers.jpg',
            img_txt: 'Shell Layers',
            thumbs_src: './assets/thumbs/NATURE/ShellLayers.jpg',
            super_thumbs_src: './assets/superThumbs/NATURE/ShellLayers.jpg',
        },
        {
            img_src: './assets/images/NATURE/HailHydrate.jpg',
            img_txt: 'Hail Hydrate',
            thumbs_src: './assets/thumbs/NATURE/HailHydrate.jpg',
            super_thumbs_src: './assets/superThumbs/NATURE/HailHydrate.jpg',
        },
    ],
    SCIENCE: [
        {
            img_src: './assets/images/SCIENCE/CellCross.jpg',
            img_txt: 'Cell Cross',
            thumbs_src: './assets/thumbs/SCIENCE/CellCross.jpg',
            super_thumbs_src: './assets/superThumbs/SCIENCE/CellCross.jpg',
        },
        {
            img_src: './assets/images/SCIENCE/TimeCrystal.jpg',
            img_txt: 'Time Crystal',
            thumbs_src: './assets/thumbs/SCIENCE/TimeCrystal.jpg',
            super_thumbs_src: './assets/superThumbs/SCIENCE/TimeCrystal.jpg',
        },
        {
            img_src: './assets/images/SCIENCE/TheScreamPlant.jpg',
            img_txt: 'The Anemone Scream (cross section)',
            thumbs_src: './assets/thumbs/SCIENCE/TheScreamPlant.jpg',
            super_thumbs_src: './assets/superThumbs/SCIENCE/TheScreamPlant.jpg',
        },
        {
            img_src: './assets/images/SCIENCE/09_Vizbi_WINNER_FibrilForest.jpg',
            img_txt: 'Fibril Forest',
            thumbs_src: './assets/thumbs/SCIENCE/09_Vizbi_WINNER_FibrilForest.jpg',
            super_thumbs_src: './assets/superThumbs/SCIENCE/09_Vizbi_WINNER_FibrilForest.jpg',
        },
        {
            img_src: './assets/images/SCIENCE/FriesWithThat3.jpg',
            img_txt: 'Fries with that?',
            thumbs_src: './assets/thumbs/SCIENCE/FriesWithThat3.jpg',
            super_thumbs_src: './assets/superThumbs/SCIENCE/FriesWithThat3.jpg',
        },
        {
            img_src: './assets/images/SCIENCE/08_Vizbi_DataTransfer.jpg',
            img_txt: 'Data Transfer',
            thumbs_src: './assets/thumbs/SCIENCE/08_Vizbi_DataTransfer.jpg',
            super_thumbs_src: './assets/superThumbs/SCIENCE/08_Vizbi_DataTransfer.jpg',
        },
        {
            img_src: './assets/images/SCIENCE/RamenCellNew5.jpg',
            img_txt: 'Ramen Cell',
            thumbs_src: './assets/thumbs/SCIENCE/RamenCellNew5.jpg',
            super_thumbs_src: './assets/superThumbs/SCIENCE/RamenCellNew5.jpg',
        },
        {
            img_src: './assets/images/SCIENCE/DNAtetris.jpg',
            img_txt: 'DNAtetris',
            thumbs_src: './assets/thumbs/SCIENCE/DNAtetris.jpg',
            super_thumbs_src: './assets/superThumbs/SCIENCE/DNAtetris.jpg',
        },
        {
            img_src: './assets/images/SCIENCE/Cell_comp03.jpg',
            img_txt: 'Cell comp',
            thumbs_src: './assets/thumbs/SCIENCE/Cell_comp03.jpg',
            super_thumbs_src: './assets/superThumbs/SCIENCE/Cell_comp03.jpg',
        },
        {
            img_src: './assets/images/SCIENCE/06_Cell_Internal.jpg',
            img_txt: '3D Cell internals',
            thumbs_src: './assets/thumbs/SCIENCE/06_Cell_Internal.jpg',
            super_thumbs_src: './assets/superThumbs/SCIENCE/06_Cell_Internal.jpg',
        },
        {
            img_src: './assets/images/SCIENCE/CLICblue.jpg',
            img_txt: 'CLIC',
            thumbs_src: './assets/thumbs/SCIENCE/CLICblue.jpg',
            super_thumbs_src: './assets/superThumbs/SCIENCE/CLICblue.jpg',
        },
        {
            img_src: './assets/images/SCIENCE/SC_Compare.jpg',
            img_txt: 'SC Compare',
            thumbs_src: './assets/thumbs/SCIENCE/SC_Compare.jpg',
            super_thumbs_src: './assets/superThumbs/SCIENCE/SC_Compare.jpg',
        },
        {
            img_src: './assets/images/SCIENCE/mouse02 copy.jpg',
            img_txt: 'Mice',
            thumbs_src: './assets/thumbs/SCIENCE/mouse02 copy.jpg',
            super_thumbs_src: './assets/superThumbs/SCIENCE/mouse02 copy.jpg',
        },
        {
            img_src: './assets/images/SCIENCE/2017TheCancerGame.jpg',
            img_txt: 'The Cancer Game',
            thumbs_src: './assets/thumbs/SCIENCE/2017TheCancerGame.jpg',
            super_thumbs_src: './assets/superThumbs/SCIENCE/2017TheCancerGame.jpg',
        },
        {
            img_src: './assets/images/SCIENCE/2017TheRustNetworkFINAL.jpg',
            img_txt: 'The Rust Network',
            thumbs_src: './assets/thumbs/SCIENCE/2017TheRustNetworkFINAL.jpg',
            super_thumbs_src: './assets/superThumbs/SCIENCE/2017TheRustNetworkFINAL.jpg',
        },
        {
            img_src: './assets/images/SCIENCE/KnotParticles.jpg',
            img_txt: 'Knot Particles',
            thumbs_src: './assets/thumbs/SCIENCE/KnotParticles.jpg',
            super_thumbs_src: './assets/superThumbs/SCIENCE/KnotParticles.jpg',
        },
        {
            img_src: './assets/images/SCIENCE/StrawberryChem.jpg',
            img_txt: 'Strawberry',
            thumbs_src: './assets/thumbs/SCIENCE/StrawberryChem.jpg',
            super_thumbs_src: './assets/superThumbs/SCIENCE/StrawberryChem.jpg',
        },
        {
            img_src: './assets/images/SCIENCE/Vertigo_Prokaryote.jpg',
            img_txt: 'Vertigo Prokaryote',
            thumbs_src: './assets/thumbs/SCIENCE/Vertigo_Prokaryote.jpg',
            super_thumbs_src: './assets/superThumbs/SCIENCE/Vertigo_Prokaryote.jpg',
        },
        {
            img_src: './assets/images/SCIENCE/AntibodyMagazine.jpg',
            img_txt: 'Antibody',
            thumbs_src: './assets/thumbs/SCIENCE/AntibodyMagazine.jpg',
            super_thumbs_src: './assets/superThumbs/SCIENCE/AntibodyMagazine.jpg',
        },
        {
            img_src: './assets/images/SCIENCE/Bacillus.jpg',
            img_txt: 'Bacillus - Published in Cell Trends in Microbiology',
            thumbs_src: './assets/thumbs/SCIENCE/Bacillus.jpg',
            super_thumbs_src: './assets/superThumbs/SCIENCE/Bacillus.jpg',
        },
        {
            img_src: './assets/images/SCIENCE/CLICgarment.tif',
            img_txt: 'CLIC',
            thumbs_src: './assets/thumbs/SCIENCE/CLICgarment.tif',
            super_thumbs_src: './assets/superThumbs/SCIENCE/CLICgarment.tif',
        },
        {
            img_src: './assets/images/SCIENCE/CRISPR.jpg',
            img_txt: 'CRISPR',
            thumbs_src: './assets/thumbs/SCIENCE/CRISPR.jpg',
            super_thumbs_src: './assets/superThumbs/SCIENCE/CRISPR.jpg',
        },
        {
            img_src: './assets/images/SCIENCE/CRISPRcloseup.jpg',
            img_txt: 'CRISPR Closeup',
            thumbs_src: './assets/thumbs/SCIENCE/CRISPRcloseup.jpg',
            super_thumbs_src: './assets/superThumbs/SCIENCE/CRISPRcloseup.jpg',
        },
        {
            img_src: './assets/images/SCIENCE/Microwaves.jpg',
            img_txt: 'Microwave',
            thumbs_src: './assets/thumbs/SCIENCE/Microwaves.jpg',
            super_thumbs_src: './assets/superThumbs/SCIENCE/Microwaves.jpg',
        },
        {
            img_src: './assets/images/SCIENCE/ProteinCityTitle.jpg',
            img_txt: 'Protein City',
            thumbs_src: './assets/thumbs/SCIENCE/ProteinCityTitle.jpg',
            super_thumbs_src: './assets/superThumbs/SCIENCE/ProteinCityTitle.jpg',
        },
    ],
    ANATOMY: [
        {
            img_src: './assets/images/ANATOMY/MedArtRotation.jpg',
            img_txt: 'Published in The Journal of Shoulder and Elbow Surgery',
            thumbs_src: './assets/thumbs/ANATOMY/MedArtRotation.jpg',
            super_thumbs_src: './assets/superThumbs/ANATOMY/MedArtRotation.jpg',
        },
        {
            img_src: './assets/images/ANATOMY/EyeRend02.jpg',
            img_txt: 'Eye',
            thumbs_src: './assets/thumbs/ANATOMY/EyeRend02.jpg',
            super_thumbs_src: './assets/superThumbs/ANATOMY/EyeRend02.jpg',
        },
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
        {
            img_src: './assets/images/ANATOMY/RedPandaAnat.jpg',
            img_txt: 'Anatomy of a Red Panda',
            thumbs_src: './assets/thumbs/ANATOMY/RedPandaAnat.jpg',
            super_thumbs_src: './assets/superThumbs/ANATOMY/RedPandaAnat.jpg',
        },
        {
            img_src: './assets/images/ANATOMY/BoneSeparate.jpg',
            img_txt: 'Bones',
            thumbs_src: './assets/thumbs/ANATOMY/BoneSeparate.jpg',
            super_thumbs_src: './assets/superThumbs/ANATOMY/BoneSeparate.jpg',
        },
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
            img_src: './assets/images/POSTERS/AntiVenom.jpg',
            img_txt: 'AntiVenom',
            thumbs_src: './assets/thumbs/POSTERS/AntiVenom.jpg',
            super_thumbs_src: './assets/superThumbs/POSTERS/AntiVenom.jpg',
        },
        {
            img_src: './assets/images/POSTERS/CellMockup_CutVirus.jpg',
            img_txt: 'Cell cover',
            thumbs_src: './assets/thumbs/POSTERS/CellMockup_CutVirus.jpg',
            super_thumbs_src: './assets/superThumbs/POSTERS/CellMockup_CutVirus.jpg',
        },
        {
            img_src: './assets/images/POSTERS/LeotideIconTest.jpg',
            img_txt: 'Logo',
            thumbs_src: './assets/thumbs/POSTERS/LeotideIconTest.jpg',
            super_thumbs_src: './assets/superThumbs/POSTERS/LeotideIconTest.jpg',
        },
        {
            img_src: './assets/images/POSTERS/ProteinExpression.png',
            img_txt: 'Protein Expression',
            thumbs_src: './assets/thumbs/POSTERS/ProteinExpression.png',
            super_thumbs_src: './assets/superThumbs/POSTERS/ProteinExpression.png',
        },
        {
            img_src: './assets/images/POSTERS/SeptemberFlier.jpg',
            img_txt: 'September Flier',
            thumbs_src: './assets/thumbs/POSTERS/SeptemberFlier.jpg',
            super_thumbs_src: './assets/superThumbs/POSTERS/SeptemberFlier.jpg',
        },
        {
            img_src: './assets/images/POSTERS/ShapeFormFunctionSigned.png',
            img_txt: 'Shaped',
            thumbs_src: './assets/thumbs/POSTERS/ShapeFormFunctionSigned.png',
            super_thumbs_src: './assets/superThumbs/POSTERS/ShapeFormFunctionSigned.png',
        },
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
        {
            img_src: './assets/images/POSTERS/Piecon.jpg',
            img_txt: 'PIECon',
            thumbs_src: './assets/thumbs/POSTERS/Piecon.jpg',
            super_thumbs_src: './assets/superThumbs/POSTERS/Piecon.jpg',
        },
        {
            img_src: './assets/images/POSTERS/GelTest.jpg',
            img_txt: 'Gel',
            thumbs_src: './assets/thumbs/POSTERS/GelTest.jpg',
            super_thumbs_src: './assets/superThumbs/POSTERS/GelTest.jpg',
        },
        {
            img_src: './assets/images/POSTERS/Micro_ColourPanels.jpg',
            img_txt: 'Micro Panels',
            thumbs_src: './assets/thumbs/POSTERS/Micro_ColourPanels.jpg',
            super_thumbs_src: './assets/superThumbs/POSTERS/Micro_ColourPanels.jpg',
        },
        {
            img_src: './assets/images/POSTERS/QuantumMagazine-1.jpg',
            img_txt: 'Magazine',
            thumbs_src: './assets/thumbs/POSTERS/QuantumMagazine-1.jpg',
            super_thumbs_src: './assets/superThumbs/POSTERS/QuantumMagazine-1.jpg',
        },
        {
            img_src: './assets/images/POSTERS/SBME.jpg',
            img_txt: 'UTS Logo',
            thumbs_src: './assets/thumbs/POSTERS/SBME.jpg',
            super_thumbs_src: './assets/superThumbs/POSTERS/SBME.jpg',
        },
        {
            img_src: [
                './assets/images/POSTERS/BionicBody/RM_BionicBody.jpg',
                './assets/images/POSTERS/BionicBody/RM_BionicBodyMag-1.jpg'],
            overlay_thumbs_src: [
                './assets/thumbs/POSTERS/BionicBody/RM_BionicBody.jpg',
                './assets/thumbs/POSTERS/BionicBody/RM_BionicBodyMag-1.jpg'],
            overlay_super_thumbs_src: [
                './assets/superThumbs/POSTERS/BionicBody/RM_BionicBody.jpg',
                './assets/superThumbs/POSTERS/BionicBody/RM_BionicBodyMag-1.jpg'],
            img_txt: 'BionicBody',
            thumbs_src: './assets/thumbs/POSTERS/BionicBody/RM_BionicBodyMag-1.jpg',
            super_thumbs_src: './assets/superThumbs/POSTERS/BionicBody/RM_BionicBodyMag-1.jpg',
        },
        {
            img_src: [
                './assets/images/POSTERS/CBA/CBA_DesignThinking1.jpg',
                './assets/images/POSTERS/CBA/CBA_DesignThinking2.jpg',
                './assets/images/POSTERS/CBA/CBA_DesignThinking3.jpg',
                './assets/images/POSTERS/CBA/CBA_DesignThinking4.jpg',
                './assets/images/POSTERS/CBA/CBA_DesignThinking5.jpg'],
            overlay_thumbs_src: [
                './assets/thumbs/POSTERS/CBA/CBA_DesignThinking1.jpg',
                './assets/thumbs/POSTERS/CBA/CBA_DesignThinking2.jpg',
                './assets/thumbs/POSTERS/CBA/CBA_DesignThinking3.jpg',
                './assets/thumbs/POSTERS/CBA/CBA_DesignThinking4.jpg',
                './assets/thumbs/POSTERS/CBA/CBA_DesignThinking5.jpg'],
            overlay_super_thumbs_src: [
                './assets/superThumbs/POSTERS/CBA/CBA_DesignThinking1.jpg',
                './assets/superThumbs/POSTERS/CBA/CBA_DesignThinking2.jpg',
                './assets/superThumbs/POSTERS/CBA/CBA_DesignThinking3.jpg',
                './assets/superThumbs/POSTERS/CBA/CBA_DesignThinking4.jpg',
                './assets/superThumbs/POSTERS/CBA/CBA_DesignThinking5.jpg'],
            img_txt: 'CBA Design Thinking',
            thumbs_src: './assets/thumbs/POSTERS/CBA/CBA_Folder.jpg',
            super_thumbs_src: './assets/thumbs/POSTERS/CBA/CBA_Folder.jpg',
        },
        {
            img_src: [
                './assets/images/POSTERS/EngiPlus/EngiPlus_01V2.jpg',
                './assets/images/POSTERS/EngiPlus/EngiPlus_02V2.jpg',
                './assets/images/POSTERS/EngiPlus/EngiPlus_03V2.jpg',
                './assets/images/POSTERS/EngiPlus/EngiPlus_04V2.jpg',
                './assets/images/POSTERS/EngiPlus/EngiPlus_05V2.jpg'],
            overlay_thumbs_src: [
                './assets/thumbs/POSTERS/EngiPlus/EngiPlus_01V2.jpg',
                './assets/thumbs/POSTERS/EngiPlus/EngiPlus_02V2.jpg',
                './assets/thumbs/POSTERS/EngiPlus/EngiPlus_03V2.jpg',
                './assets/thumbs/POSTERS/EngiPlus/EngiPlus_04V2.jpg',
                './assets/thumbs/POSTERS/EngiPlus/EngiPlus_05V2.jpg'],
            overlay_super_thumbs_src: [
                './assets/superThumbs/POSTERS/EngiPlus/EngiPlus_01V2.jpg',
                './assets/superThumbs/POSTERS/EngiPlus/EngiPlus_02V2.jpg',
                './assets/superThumbs/POSTERS/EngiPlus/EngiPlus_03V2.jpg',
                './assets/superThumbs/POSTERS/EngiPlus/EngiPlus_04V2.jpg',
                './assets/superThumbs/POSTERS/EngiPlus/EngiPlus_05V2.jpg'],
            img_txt: 'EngiPlus',
            thumbs_src: './assets/thumbs/POSTERS/EngiPlus/EngiMag_Folder.jpg',
            super_thumbs_src: './assets/thumbs/POSTERS/EngiPlus/EngiMag_Folder.jpg',
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
    MISC: [
        {
            img_src: './assets/images/MISC/CatGlass.jpg',
            img_txt: 'CatGlass',
            thumbs_src: './assets/thumbs/MISC/CatGlass.jpg',
            super_thumbs_src: './assets/superThumbs/MISC/CatGlass.jpg',
        },
        {
            img_src: './assets/images/MISC/InktoberFinal02.jpg',
            img_txt: 'Inktober',
            thumbs_src: './assets/thumbs/MISC/InktoberFinal02.jpg',
            super_thumbs_src: './assets/superThumbs/MISC/InktoberFinal02.jpg',
        },
        {
            img_src: './assets/images/MISC/Mantiski1.jpg',
            img_txt: 'Mantiski',
            thumbs_src: './assets/thumbs/MISC/Mantiski1.jpg',
            super_thumbs_src: './assets/superThumbs/MISC/Mantiski1.jpg',
        },
        {
            img_src: './assets/images/MISC/Mantiski2.jpg',
            img_txt: 'More Mantiski',
            thumbs_src: './assets/thumbs/MISC/Mantiski2.jpg',
            super_thumbs_src: './assets/superThumbs/MISC/Mantiski2.jpg',
        },
        {
            img_src: './assets/images/MISC/BurritoBots.jpg',
            img_txt: 'BurritoBots',
            thumbs_src: './assets/thumbs/MISC/BurritoBots.jpg',
            super_thumbs_src: './assets/superThumbs/MISC/BurritoBots.jpg',
        },
        {
            img_src: './assets/images/MISC/CatJedi.jpg',
            img_txt: 'Cat Jedi',
            thumbs_src: './assets/thumbs/MISC/CatJedi.jpg',
            super_thumbs_src: './assets/superThumbs/MISC/CatJedi.jpg',
        },
        {
            img_src: './assets/images/MISC/DigiShort.jpg',
            img_txt: 'DigiShort',
            thumbs_src: './assets/thumbs/MISC/DigiShort.jpg',
            super_thumbs_src: './assets/superThumbs/MISC/DigiShort.jpg',
        },
        {
            img_src: './assets/images/MISC/DragonCooks.jpg',
            img_txt: 'DragonCooks',
            thumbs_src: './assets/thumbs/MISC/DragonCooks.jpg',
            super_thumbs_src: './assets/superThumbs/MISC/DragonCooks.jpg',
        },
        {
            img_src: './assets/images/MISC/FruitStats.jpg',
            img_txt: 'FruitStats',
            thumbs_src: './assets/thumbs/MISC/FruitStats.jpg',
            super_thumbs_src: './assets/superThumbs/MISC/FruitStats.jpg',
        },
        {
            img_src: './assets/images/MISC/HappyBorkday.jpg',
            img_txt: 'HappyBorkday',
            thumbs_src: './assets/thumbs/MISC/HappyBorkday.jpg',
            super_thumbs_src: './assets/superThumbs/MISC/HappyBorkday.jpg',
        },
        {
            img_src: './assets/images/MISC/JarPunch.jpg',
            img_txt: 'JarPunch',
            thumbs_src: './assets/thumbs/MISC/JarPunch.jpg',
            super_thumbs_src: './assets/superThumbs/MISC/JarPunch.jpg',
        },
        {
            img_src: './assets/images/MISC/MerryZilla.jpg',
            img_txt: 'MerryZilla',
            thumbs_src: './assets/thumbs/MISC/MerryZilla.jpg',
            super_thumbs_src: './assets/superThumbs/MISC/MerryZilla.jpg',
        },
        {
            img_src: './assets/images/MISC/PhoPuns.jpg',
            img_txt: 'PhoPuns',
            thumbs_src: './assets/thumbs/MISC/PhoPuns.jpg',
            super_thumbs_src: './assets/superThumbs/MISC/PhoPuns.jpg',
        },
        {
            img_src: './assets/images/MISC/Rahn.jpg',
            img_txt: 'Rahn',
            thumbs_src: './assets/thumbs/MISC/Rahn.jpg',
            super_thumbs_src: './assets/superThumbs/MISC/Rahn.jpg',
        },
        {
            img_src: './assets/images/MISC/SamuraiJackal.jpg',
            img_txt: 'SamuraiJackal',
            thumbs_src: './assets/thumbs/MISC/SamuraiJackal.jpg',
            super_thumbs_src: './assets/superThumbs/MISC/SamuraiJackal.jpg',
        },
        {
            img_src: './assets/images/MISC/eggbox.jpg',
            img_txt: 'eggbox',
            thumbs_src: './assets/thumbs/MISC/eggbox.jpg',
            super_thumbs_src: './assets/superThumbs/MISC/eggbox.jpg',
        },
        {
            img_src: './assets/images/MISC/SushiDeconstruct.jpg',
            img_txt: 'SushiDeconstruct',
            thumbs_src: './assets/thumbs/MISC/SushiDeconstruct.jpg',
            super_thumbs_src: './assets/superThumbs/MISC/SushiDeconstruct.jpg',
        },
        {
            img_src: './assets/images/MISC/TerraMon.jpg',
            img_txt: 'TerraMon',
            thumbs_src: './assets/thumbs/MISC/TerraMon.jpg',
            super_thumbs_src: './assets/superThumbs/MISC/TerraMon.jpg',
        },
    ],
    ANIMATION: [
        {
            img_src: './assets/ANIMATIONS/DNA_RenderGifu.gif',
            img_txt: 'DNA Render',
            thumbs_src: './assets/thumbs/ANIMATIONS/DNA_RenderGifu.png',
            super_thumbs_src: './assets/superThumbs/ANIMATIONS/DNA_RenderGifu.png',
        },
        {
            img_src: './assets/ANIMATIONS/CardosinMovieGif.gif',
            img_txt: 'Cardosin',
            thumbs_src: './assets/thumbs/ANIMATIONS/CardosinMovieGif.png',
            super_thumbs_src: './assets/superThumbs/ANIMATIONS/CardosinMovieGif.png',
        },
        {
            is_video: true,
            img_src: './assets/ANIMATIONS/05_ProteinPeephole.mp4',
            img_txt: 'Protein Peephole',
            thumbs_src: './assets/thumbs/ANIMATIONS/05_ProteinPeephole.png',
            super_thumbs_src: './assets/superThumbs/ANIMATIONS/05_ProteinPeephole.png',
        },
        {
            img_src: './assets/ANIMATIONS/Carp_Swim.gif',
            img_txt: 'Carp Swimming',
            thumbs_src: './assets/thumbs/ANIMATIONS/Carp_Swim.jpg',
            super_thumbs_src: './assets/superThumbs/ANIMATIONS/Carp_Swim.jpg',
        },
        {
            is_video: true,
            img_src: './assets/ANIMATIONS/01_MicroFinalRender01.mp4',
            img_txt: 'Micro Messengers',
            thumbs_src: './assets/thumbs/ANIMATIONS/01_MicroFinalRender01.jpg',
            super_thumbs_src: './assets/superThumbs/ANIMATIONS/01_MicroFinalRender01.jpg',
        },
    ],
    '3D MODELS/PRINTING': [
        {
            img_src: './assets/3DMODELS/GolgonMiniPaint.gif',
            img_txt: 'Mini Golgon',
            thumbs_src: './assets/thumbs/3DMODELS/GolgonMiniPaint.jpg',
            super_thumbs_src: './assets/superThumbs/3DMODELS/GolgonMiniPaint.jpg',
        },
        {
            img_src: './assets/3DMODELS/DragonSwimmer.gif',
            img_txt: 'Dragon Swimmer',
            thumbs_src: './assets/thumbs/3DMODELS/DragonSwimmer.jpg',
            super_thumbs_src: './assets/superThumbs/3DMODELS/DragonSwimmer.jpg',
        },
        {
            img_src: './assets/3DMODELS/SnakeConeCropped.gif',
            img_txt: 'Snake Cone',
            thumbs_src: './assets/thumbs/3DMODELS/SnakeConeCropped.jpg',
            super_thumbs_src: './assets/superThumbs/3DMODELS/SnakeConeCropped.jpg',
        },
        {
            img_src: './assets/3DMODELS/SnakeRice.gif',
            img_txt: 'Snake Rice',
            thumbs_src: './assets/thumbs/3DMODELS/SnakeRice.jpg',
            super_thumbs_src: './assets/superThumbs/3DMODELS/SnakeRice.jpg',
        },
    ],
    STORE: [
        {
            img_src: './assets/images/STORE/patches.jpg',
            img_txt: 'Patches',
            thumbs_src: './assets/thumbs/STORE/patches.jpg',
            super_thumbs_src: './assets/superThumbs/STORE/patches.jpg',
        },
        {
            img_src: './assets/images/STORE/InvisibleChameleonSticker.jpg',
            img_txt: 'Invisible Chameleon Sticker',
            thumbs_src: './assets/thumbs/STORE/InvisibleChameleonSticker.jpg',
            super_thumbs_src: './assets/superThumbs/STORE/InvisibleChameleonSticker.jpg',
        },
        {
            img_src: './assets/images/STORE/LabRat.png',
            img_txt: 'Lab Rat',
            thumbs_src: './assets/thumbs/STORE/LabRat.png',
            super_thumbs_src: './assets/superThumbs/STORE/LabRat.png',
        },
        {
            img_src: './assets/images/STORE/burger print.jpg',
            img_txt: 'Burger print',
            thumbs_src: './assets/thumbs/STORE/burger print.jpg',
            super_thumbs_src: './assets/superThumbs/STORE/burger print.jpg',
        },
        {
            img_src: './assets/images/STORE/cicada print.jpg',
            img_txt: 'Cicada print',
            thumbs_src: './assets/thumbs/STORE/cicada print.jpg',
            super_thumbs_src: './assets/superThumbs/STORE/cicada print.jpg',
        },
        {
            img_src: './assets/images/STORE/CLIC1 print.jpg',
            img_txt: 'CLIC1 print',
            thumbs_src: './assets/thumbs/STORE/CLIC1 print.jpg',
            super_thumbs_src: './assets/superThumbs/STORE/CLIC1 print.jpg',
        },
        {
            img_src: './assets/images/STORE/crispr print.jpg',
            img_txt: 'CRISPR print',
            thumbs_src: './assets/thumbs/STORE/crispr print.jpg',
            super_thumbs_src: './assets/superThumbs/STORE/crispr print.jpg',
        },
        {
            img_src: './assets/images/STORE/cross print.jpg',
            img_txt: 'Cross section print',
            thumbs_src: './assets/thumbs/STORE/cross print.jpg',
            super_thumbs_src: './assets/superThumbs/STORE/cross print.jpg',
        },
        {
            img_src: './assets/images/STORE/eye print.jpg',
            img_txt: 'Eye print',
            thumbs_src: './assets/thumbs/STORE/eye print.jpg',
            super_thumbs_src: './assets/superThumbs/STORE/eye print.jpg',
        },
        {
            img_src: './assets/images/STORE/mouldystrawberry print.jpg',
            img_txt: 'Mouldy Strawberry print',
            thumbs_src: './assets/thumbs/STORE/mouldystrawberry print.jpg',
            super_thumbs_src: './assets/superThumbs/STORE/mouldystrawberry print.jpg',
        },
        {
            img_src: './assets/images/STORE/mv print.jpg',
            img_txt: 'Glorious MV print',
            thumbs_src: './assets/thumbs/STORE/mv print.jpg',
            super_thumbs_src: './assets/superThumbs/STORE/mv print.jpg',
        },
        {
            img_src: './assets/images/STORE/octopus print.jpg',
            img_txt: 'Octopus print',
            thumbs_src: './assets/thumbs/STORE/octopus print.jpg',
            super_thumbs_src: './assets/superThumbs/STORE/octopus print.jpg',
        },
        {
            img_src: './assets/images/STORE/panda print.jpg',
            img_txt: 'Panda print',
            thumbs_src: './assets/thumbs/STORE/panda print.jpg',
            super_thumbs_src: './assets/superThumbs/STORE/panda print.jpg',
        },
        {
            img_src: './assets/images/STORE/poster print.jpg',
            img_txt: 'Poster print',
            thumbs_src: './assets/thumbs/STORE/poster print.jpg',
            super_thumbs_src: './assets/superThumbs/STORE/poster print.jpg',
        },
        {
            img_src: './assets/images/STORE/seahorse print.jpg',
            img_txt: 'Seahorse print',
            thumbs_src: './assets/thumbs/STORE/seahorse print.jpg',
            super_thumbs_src: './assets/superThumbs/STORE/seahorse print.jpg',
        },
        {
            img_src: './assets/images/STORE/shell print.jpg',
            img_txt: 'Shell print',
            thumbs_src: './assets/thumbs/STORE/shell print.jpg',
            super_thumbs_src: './assets/superThumbs/STORE/shell print.jpg',
        },
        {
            img_src: './assets/images/STORE/slug print.jpg',
            img_txt: 'Slug print',
            thumbs_src: './assets/thumbs/STORE/slug print.jpg',
            super_thumbs_src: './assets/superThumbs/STORE/slug print.jpg',
        },
        {
            img_src: './assets/images/STORE/strawberry print.jpg',
            img_txt: 'Strawberry print',
            thumbs_src: './assets/thumbs/STORE/strawberry print.jpg',
            super_thumbs_src: './assets/superThumbs/STORE/strawberry print.jpg',
        },
        {
            img_src: './assets/images/STORE/time crystal print.jpg',
            img_txt: 'Time crystal print',
            thumbs_src: './assets/thumbs/STORE/time crystal print.jpg',
            super_thumbs_src: './assets/superThumbs/STORE/time crystal print.jpg',
        },
    ],
};

// hardcoded for now
const projectListLabels = {
    ALL: 'All your favourite science-based artworks, all in one place! Presented in a variety of styles, each artwork has careful thought behind them to best illustrate the topic they represent.',
    NATURE: 'I’ve heard it’s pretty scary.',
    ANATOMY: 'Delving into the inner structure of the body, one chorus of “ewwww”s at a time.',
    SCIENCE: 'A combination of scientific illustration and culture. The aim: To create thought-provoking artworks that stand out from the crowd from regular scientific illustrations.',
    'POSTERS/LOGOS': 'Smart, infographic-styled posters to educate the public in the latest scientific research. Commissioned logos by companies and individuals looking to make their ads stand out.',
    TYPOGRAPHY: 'Taking everyday letters and making them look better…with science!',
    FACTS: 'Learning every day! Fun facts for those who want to impress others with their knowledge of anything and everything. Or just cats, crabs and eels specifically.',
    MISC: 'All the other artworks which don’t fall into the science-ey categories. Made either purely for personal interest, or commissioned by awesome people.',
    '3D MODELS/PRINTING': '',
    STORE: 'You can request any of my artworks printed, just send me an email using the contact me link at the bottom left of the page! Just include the name of the artwork you would like, your address (so we can calculate postage) and whether you would like it framed!',
    ANIMATION: 'Moving pictures!',
};

// This concat order is also important if you change stuff
const project_list_all = () => {
    projectListInitial.ALL =
    projectListInitial.NATURE.concat(
        projectListInitial.SCIENCE.concat(
            projectListInitial.ANATOMY.concat(
                projectListInitial.FACTS.concat(
                    projectListInitial.TYPOGRAPHY.concat(
                        projectListInitial.MISC)))));
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

export const convert_type = (style, properties, suffix) => {
	const return_style = Object.assign({}, style);
	properties.forEach((property => {
		return_style[property] = return_style[property] + suffix;
	}))
	return return_style;
}

const HomeList = [
    {
        img_src: './assets/images/ANATOMY/RedPandaAnat.jpg',
        img_txt: '',
        thumbs_src: './assets/thumbs/ANATOMY/RedPandaAnat.jpg',
        super_thumbs_src: './assets/superThumbs/ANATOMY/RedPandaAnat.jpg',
    },
    {
        img_src: './assets/images/3DMODELS/SnakeRice.jpg',
        img_txt: '',
        thumbs_src: './assets/thumbs/3DMODELS/SnakeRice.jpg',
        super_thumbs_src: './assets/superThumbs/3DMODELS/SnakeRice.jpg',
    },
    {
        img_src: './assets/images/POSTERS/SeptemberFlier.jpg',
        img_txt: '',
        thumbs_src: './assets/thumbs/POSTERS/SeptemberFlier.jpg',
        super_thumbs_src: './assets/superThumbs/POSTERS/SeptemberFlier.jpg',
    },
    {
        img_src: './assets/images/POSTERS/CellMockup_CutVirus.jpg',
        img_txt: '',
        thumbs_src: './assets/thumbs/POSTERS/CellMockup_CutVirus.jpg',
        super_thumbs_src: './assets/superThumbs/POSTERS/CellMockup_CutVirus.jpg',
    },
];

export const HomeInitial = (() => {
    for (let i = 0, len = HomeList.length; i < len; i += 1) {
        HomeList[i].item_number = i;
    }
    return HomeList;
})();
