import $ from './jquery.min';

export const isTouch = (($(window).width() < 1000)); //|| 'ontouchstart' in document.documentElement);

const prices = {
    frame: {id: 'framed', desc: 'Add A3 Framed ($45)', cost: 45},
    poster: {id: 'poster', desc: 'Add A3 Poster ($30)', cost: 30},
    patch: {id: 'patch', desc: 'Add Patch (50mm) ($7)', cost: 7},
    pin: {id: 'pin', desc: 'Add Pin (32x32mm) ($8)', cost: 8},
    sticker: {id: 'sticker', desc: 'Add Sticker (56mm) ($4)', cost: 4},
}

const projectListInitial = {
    // This order is important, if NATURE + SCIENCE + ANATOMY are not in this order,
    // navigation vis the arrows image_number will be incorrect. If you muck with this
    // MAKE SURE YOU UPDATE THE 'ALL' FUNCTION BELOW
    NATURE: [
        {
            img_src: './assets/images/lizard.jpg',
            img_txt: 'Lizard',
            thumbs_src: './assets/thumbs/lizard.jpg',
            super_thumbs_src: './assets/superThumbs/lizard.jpg',
        },
        {
            img_src: './assets/images/Binturong.jpg',
            img_txt: 'Binturong',
            thumbs_src: './assets/thumbs/Binturong.jpg',
            super_thumbs_src: './assets/superThumbs/Binturong.jpg',
        },
        {
            img_src: './assets/images/BlackBear.jpg',
            img_txt: 'Black Bear',
            thumbs_src: './assets/thumbs/BlackBear.jpg',
            super_thumbs_src: './assets/superThumbs/BlackBear.jpg',
        },
        {
            img_src: './assets/images/RedPanda.jpg',
            img_txt: 'Red Panda',
            thumbs_src: './assets/thumbs/RedPanda.jpg',
            super_thumbs_src: './assets/superThumbs/RedPanda.jpg',
        },
        {
            img_src: './assets/images/Dragonfly2Signed.jpg',
            img_txt: 'Dragonfly with prey',
            thumbs_src: './assets/thumbs/Dragonfly2Signed.jpg',
            super_thumbs_src: './assets/superThumbs/Dragonfly2Signed.jpg',
        },
        {
            img_src: './assets/images/Chameleon.jpg',
            img_txt: 'Chameleon',
            thumbs_src: './assets/thumbs/Chameleon.jpg',
            super_thumbs_src: './assets/superThumbs/Chameleon.jpg',
        },
        {
            img_src: './assets/images/HiveBeetle2.jpg',
            img_txt: 'Hive Beetle',
            thumbs_src: './assets/thumbs/HiveBeetle2.jpg',
            super_thumbs_src: './assets/superThumbs/HiveBeetle2.jpg',
        },
        {
            img_src: './assets/images/OctopusIsLate.jpg',
            img_txt: 'Octopus',
            thumbs_src: './assets/thumbs/OctopusIsLate.jpg',
            super_thumbs_src: './assets/superThumbs/OctopusIsLate.jpg',
        },
        {
            img_src: './assets/images/Archaeopteryx.jpg',
            img_txt: 'Archaeopteryx',
            thumbs_src: './assets/thumbs/Archaeopteryx.jpg',
            super_thumbs_src: './assets/superThumbs/Archaeopteryx.jpg',
        },
        {
            img_src: './assets/images/SeaSlugs.jpg',
            img_txt: 'SeaSlugs',
            thumbs_src: './assets/thumbs/SeaSlugs.jpg',
            super_thumbs_src: './assets/superThumbs/SeaSlugs.jpg',
        },
        {
            img_src: './assets/images/GemSlugs.jpg',
            img_txt: 'GemSlugs',
            thumbs_src: './assets/thumbs/GemSlugs.jpg',
            super_thumbs_src: './assets/superThumbs/GemSlugs.jpg',
        },
        {
            img_src: './assets/images/GemSlugsDrawVer.jpg',
            img_txt: 'GemSlugs 3D',
            thumbs_src: './assets/thumbs/GemSlugsDrawVer.jpg',
            super_thumbs_src: './assets/superThumbs/GemSlugsDrawVer.jpg',
        },
        {
            img_src: './assets/images/ShellLayers.jpg',
            img_txt: 'Shell Layers',
            thumbs_src: './assets/thumbs/ShellLayers.jpg',
            super_thumbs_src: './assets/superThumbs/ShellLayers.jpg',
        },
        {
            img_src: './assets/images/HailHydrate.jpg',
            img_txt: 'Hail Hydrate',
            thumbs_src: './assets/thumbs/HailHydrate.jpg',
            super_thumbs_src: './assets/superThumbs/HailHydrate.jpg',
        },
    ],
    SCIENCE: [
        {
            img_src: './assets/images/CellCross.jpg',
            img_txt: 'Cell Cross',
            thumbs_src: './assets/thumbs/CellCross.jpg',
            super_thumbs_src: './assets/superThumbs/CellCross.jpg',
        },
        {
            img_src: './assets/images/TimeCrystal.jpg',
            img_txt: 'Time Crystal',
            thumbs_src: './assets/thumbs/TimeCrystal.jpg',
            super_thumbs_src: './assets/superThumbs/TimeCrystal.jpg',
        },
        {
            img_src: './assets/images/TheScreamPlant.jpg',
            img_txt: 'The Anemone Scream (cross section)',
            thumbs_src: './assets/thumbs/TheScreamPlant.jpg',
            super_thumbs_src: './assets/superThumbs/TheScreamPlant.jpg',
        },
        {
            img_src: './assets/images/09_Vizbi_WINNER_FibrilForest.jpg',
            img_txt: 'Fibril Forest',
            thumbs_src: './assets/thumbs/09_Vizbi_WINNER_FibrilForest.jpg',
            super_thumbs_src: './assets/superThumbs/09_Vizbi_WINNER_FibrilForest.jpg',
        },
        {
            img_src: './assets/images/FriesWithThat3.jpg',
            img_txt: 'Fries with that?',
            thumbs_src: './assets/thumbs/FriesWithThat3.jpg',
            super_thumbs_src: './assets/superThumbs/FriesWithThat3.jpg',
        },
        {
            img_src: './assets/images/08_Vizbi_DataTransfer.jpg',
            img_txt: 'Data Transfer',
            thumbs_src: './assets/thumbs/08_Vizbi_DataTransfer.jpg',
            super_thumbs_src: './assets/superThumbs/08_Vizbi_DataTransfer.jpg',
        },
        {
            img_src: './assets/images/RamenCellNew5.jpg',
            img_txt: 'Ramen Cell',
            thumbs_src: './assets/thumbs/RamenCellNew5.jpg',
            super_thumbs_src: './assets/superThumbs/RamenCellNew5.jpg',
        },
        {
            img_src: './assets/images/DNAtetris.jpg',
            img_txt: 'DNAtetris',
            thumbs_src: './assets/thumbs/DNAtetris.jpg',
            super_thumbs_src: './assets/superThumbs/DNAtetris.jpg',
        },
        {
            img_src: './assets/images/Cell_comp03.jpg',
            img_txt: 'Cell comp',
            thumbs_src: './assets/thumbs/Cell_comp03.jpg',
            super_thumbs_src: './assets/superThumbs/Cell_comp03.jpg',
        },
        {
            img_src: './assets/images/06_Cell_Internal.jpg',
            img_txt: '3D Cell internals',
            thumbs_src: './assets/thumbs/06_Cell_Internal.jpg',
            super_thumbs_src: './assets/superThumbs/06_Cell_Internal.jpg',
        },
        {
            img_src: './assets/images/CLICblue.jpg',
            img_txt: 'CLIC',
            thumbs_src: './assets/thumbs/CLICblue.jpg',
            super_thumbs_src: './assets/superThumbs/CLICblue.jpg',
        },
        {
            img_src: './assets/images/SC_Compare.jpg',
            img_txt: 'SC Compare',
            thumbs_src: './assets/thumbs/SC_Compare.jpg',
            super_thumbs_src: './assets/superThumbs/SC_Compare.jpg',
        },
        {
            img_src: './assets/images/mouse02 copy.jpg',
            img_txt: 'Mice',
            thumbs_src: './assets/thumbs/mouse02 copy.jpg',
            super_thumbs_src: './assets/superThumbs/mouse02 copy.jpg',
        },
        {
            img_src: './assets/images/2017TheCancerGame.jpg',
            img_txt: 'The Cancer Game',
            thumbs_src: './assets/thumbs/2017TheCancerGame.jpg',
            super_thumbs_src: './assets/superThumbs/2017TheCancerGame.jpg',
        },
        {
            img_src: './assets/images/2017TheRustNetworkFINAL.jpg',
            img_txt: 'The Rust Network',
            thumbs_src: './assets/thumbs/2017TheRustNetworkFINAL.jpg',
            super_thumbs_src: './assets/superThumbs/2017TheRustNetworkFINAL.jpg',
        },
        {
            img_src: './assets/images/KnotParticles.jpg',
            img_txt: 'Knot Particles',
            thumbs_src: './assets/thumbs/KnotParticles.jpg',
            super_thumbs_src: './assets/superThumbs/KnotParticles.jpg',
        },
        {
            img_src: './assets/images/StrawberryChem.jpg',
            img_txt: 'Strawberry',
            thumbs_src: './assets/thumbs/StrawberryChem.jpg',
            super_thumbs_src: './assets/superThumbs/StrawberryChem.jpg',
        },
        {
            img_src: './assets/images/Vertigo_Prokaryote.jpg',
            img_txt: 'Vertigo Prokaryote',
            thumbs_src: './assets/thumbs/Vertigo_Prokaryote.jpg',
            super_thumbs_src: './assets/superThumbs/Vertigo_Prokaryote.jpg',
        },
        {
            img_src: './assets/images/AntibodyMagazine.jpg',
            img_txt: 'Antibody',
            thumbs_src: './assets/thumbs/AntibodyMagazine.jpg',
            super_thumbs_src: './assets/superThumbs/AntibodyMagazine.jpg',
        },
        {
            img_src: './assets/images/Bacillus.jpg',
            img_txt: 'Bacillus - Published in Cell Trends in Microbiology',
            thumbs_src: './assets/thumbs/Bacillus.jpg',
            super_thumbs_src: './assets/superThumbs/Bacillus.jpg',
        },
        {
            img_src: './assets/images/CLICgarment.jpg',
            img_txt: 'CLIC',
            thumbs_src: './assets/thumbs/CLICgarment.jpg',
            super_thumbs_src: './assets/superThumbs/CLICgarment.jpg',
        },
        {
            img_src: './assets/images/CRISPR.jpg',
            img_txt: 'CRISPR',
            thumbs_src: './assets/thumbs/CRISPR.jpg',
            super_thumbs_src: './assets/superThumbs/CRISPR.jpg',
        },
        {
            img_src: './assets/images/CRISPRcloseup.jpg',
            img_txt: 'CRISPR Closeup',
            thumbs_src: './assets/thumbs/CRISPRcloseup.jpg',
            super_thumbs_src: './assets/superThumbs/CRISPRcloseup.jpg',
        },
        {
            img_src: './assets/images/Microwaves.jpg',
            img_txt: 'Microwave',
            thumbs_src: './assets/thumbs/Microwaves.jpg',
            super_thumbs_src: './assets/superThumbs/Microwaves.jpg',
        },
        {
            img_src: './assets/images/ProteinCityTitle.jpg',
            img_txt: 'Protein City',
            thumbs_src: './assets/thumbs/ProteinCityTitle.jpg',
            super_thumbs_src: './assets/superThumbs/ProteinCityTitle.jpg',
        },
    ],
    ANATOMY: [
        {
            img_src: './assets/images/MedArtRotation.jpg',
            img_txt: 'Published in The Journal of Shoulder and Elbow Surgery',
            thumbs_src: './assets/thumbs/MedArtRotation.jpg',
            super_thumbs_src: './assets/superThumbs/MedArtRotation.jpg',
        },
        {
            img_src: './assets/images/EyeRend02.jpg',
            img_txt: 'Eye',
            thumbs_src: './assets/thumbs/EyeRend02.jpg',
            super_thumbs_src: './assets/superThumbs/EyeRend02.jpg',
        },
        {
            img_src: './assets/images/CatAnatomy2.jpg',
            img_txt: 'Cat Anatomy',
            thumbs_src: './assets/thumbs/CatAnatomy2.jpg',
            super_thumbs_src: './assets/superThumbs/CatAnatomy2.jpg',
        },
        {
            img_src: './assets/images/Cicada.jpg',
            img_txt: 'Cicada',
            thumbs_src: './assets/thumbs/Cicada.jpg',
            super_thumbs_src: './assets/superThumbs/Cicada.jpg',
        },
        {
            img_src: './assets/images/COPD2.jpg',
            img_txt: 'COPD study',
            thumbs_src: './assets/thumbs/COPD2.jpg',
            super_thumbs_src: './assets/superThumbs/COPD2.jpg',
        },
        {
            img_src: './assets/images/Hand_Anatomy01.jpg',
            img_txt: 'Hand Anatomy',
            thumbs_src: './assets/thumbs/Hand_Anatomy01.jpg',
            super_thumbs_src: './assets/superThumbs/Hand_Anatomy01.jpg',
        },
        {
            img_src: './assets/images/IBS_04.jpg',
            img_txt: 'IBS',
            thumbs_src: './assets/thumbs/IBS_04.jpg',
            super_thumbs_src: './assets/superThumbs/IBS_04.jpg',
        },
        {
            img_src: './assets/images/StomachLayers_01.jpg',
            img_txt: 'Stomach Layers',
            thumbs_src: './assets/thumbs/StomachLayers_01.jpg',
            super_thumbs_src: './assets/superThumbs/StomachLayers_01.jpg',
        },
        {
            img_src: './assets/images/CowCalf.jpg',
            img_txt: 'How now anatomical cow',
            thumbs_src: './assets/thumbs/CowCalf.jpg',
            super_thumbs_src: './assets/superThumbs/CowCalf.jpg',
        },
        {
            img_src: './assets/images/RedPandaAnat.jpg',
            img_txt: 'Anatomy of a Red Panda',
            thumbs_src: './assets/thumbs/RedPandaAnat.jpg',
            super_thumbs_src: './assets/superThumbs/RedPandaAnat.jpg',
        },
        {
            img_src: './assets/images/BoneSeparate.jpg',
            img_txt: 'Bones',
            thumbs_src: './assets/thumbs/BoneSeparate.jpg',
            super_thumbs_src: './assets/superThumbs/BoneSeparate.jpg',
        },
        {
            img_src: [
                './assets/images/UterineInversion_Colour01.jpg',
                './assets/images/UterineInversion_Colour02.jpg',
                './assets/images/UterineInversion_Colour03.jpg',
                './assets/images/UterineInversion_Colour04.jpg',
                './assets/images/UterineInversion_Colour05.jpg'],
            overlay_thumbs_src: [
                './assets/thumbs/UterineInversion_Colour01.jpg',
                './assets/thumbs/UterineInversion_Colour02.jpg',
                './assets/thumbs/UterineInversion_Colour03.jpg',
                './assets/thumbs/UterineInversion_Colour04.jpg',
                './assets/thumbs/UterineInversion_Colour05.jpg'],
            overlay_super_thumbs_src: [
                './assets/superThumbs/UterineInversion_Colour01.jpg',
                './assets/superThumbs/UterineInversion_Colour02.jpg',
                './assets/superThumbs/UterineInversion_Colour03.jpg',
                './assets/superThumbs/UterineInversion_Colour04.jpg',
                './assets/superThumbs/UterineInversion_Colour05.jpg'],
            img_txt: 'Uterine Inversion Collection',
            thumbs_src: './assets/thumbs/UIFolder.jpg',
            super_thumbs_src: './assets/superThumbs/UIFolder.jpg',
        },
    ],
    'POSTERS/LOGOS': [
        {
            img_src: './assets/images/AntiVenom.jpg',
            img_txt: 'AntiVenom',
            thumbs_src: './assets/thumbs/AntiVenom.jpg',
            super_thumbs_src: './assets/superThumbs/AntiVenom.jpg',
        },
        {
            img_src: './assets/images/CellMockup_CutVirus.jpg',
            img_txt: 'Cell cover',
            thumbs_src: './assets/thumbs/CellMockup_CutVirus.jpg',
            super_thumbs_src: './assets/superThumbs/CellMockup_CutVirus.jpg',
        },
        {
            img_src: './assets/images/LeotideIconTest.jpg',
            img_txt: 'Logo',
            thumbs_src: './assets/thumbs/LeotideIconTest.jpg',
            super_thumbs_src: './assets/superThumbs/LeotideIconTest.jpg',
        },
        {
            img_src: './assets/images/ProteinExpression.jpg',
            img_txt: 'Protein Expression',
            thumbs_src: './assets/thumbs/ProteinExpression.jpg',
            super_thumbs_src: './assets/superThumbs/ProteinExpression.jpg',
        },
        {
            img_src: './assets/images/SeptemberFlier.jpg',
            img_txt: 'September Flier',
            thumbs_src: './assets/thumbs/SeptemberFlier.jpg',
            super_thumbs_src: './assets/superThumbs/SeptemberFlier.jpg',
        },
        {
            img_src: './assets/images/ShapeFormFunctionSigned.jpg',
            img_txt: 'Shaped',
            thumbs_src: './assets/thumbs/ShapeFormFunctionSigned.jpg',
            super_thumbs_src: './assets/superThumbs/ShapeFormFunctionSigned.jpg',
        },
        {
            img_src: './assets/images/SwiftAvionics.jpg',
            img_txt: 'Swift Avionics',
            thumbs_src: './assets/thumbs/SwiftAvionics.jpg',
            super_thumbs_src: './assets/superThumbs/SwiftAvionics.jpg',
        },
        {
            img_src: './assets/images/ADPoster.jpg',
            img_txt: 'ADPoster',
            thumbs_src: './assets/thumbs/ADPoster.jpg',
            super_thumbs_src: './assets/superThumbs/ADPoster.jpg',
        },
        {
            img_src: './assets/images/MVintroV2.jpg',
            img_txt: 'MVintro',
            thumbs_src: './assets/thumbs/MVintroV2.jpg',
            super_thumbs_src: './assets/superThumbs/MVintroV2.jpg',
        },
        {
            img_src: './assets/images/MFS01.jpg',
            img_txt: 'March for Science Logo',
            thumbs_src: './assets/thumbs/MFS01.jpg',
            super_thumbs_src: './assets/superThumbs/MFS01.jpg',
        },
        {
            img_src: './assets/images/MFS02.jpg',
            img_txt: 'March for Science Tokyo Logo',
            thumbs_src: './assets/thumbs/MFS02.jpg',
            super_thumbs_src: './assets/superThumbs/MFS02.jpg',
        },
        {
            img_src: './assets/images/UTS_Build.jpg',
            img_txt: 'UTS School of Life Sciences Logo',
            thumbs_src: './assets/thumbs/UTS_Build.jpg',
            super_thumbs_src: './assets/superThumbs/UTS_Build.jpg',
        },
        {
            img_src: './assets/images/Liposome_Protocol copy2.jpg',
            img_txt: 'Liposome Protocol',
            thumbs_src: './assets/thumbs/Liposome_Protocol copy2.jpg',
            super_thumbs_src: './assets/superThumbs/Liposome_Protocol copy2.jpg',
        },
        {
            img_src: './assets/images/NH2016_Poster03.jpg',
            img_txt: 'NH 2016 Poster',
            thumbs_src: './assets/thumbs/NH2016_Poster03.jpg',
            super_thumbs_src: './assets/superThumbs/NH2016_Poster03.jpg',
        },
        {
            img_src: './assets/images/WBlot_Protocol01 copy2.jpg',
            img_txt: 'Western Blot',
            thumbs_src: './assets/thumbs/WBlot_Protocol01 copy2.jpg',
            super_thumbs_src: './assets/superThumbs/WBlot_Protocol01 copy2.jpg',
        },
        {
            img_src: './assets/images/rsz_nh_posterportraitfinal.jpg',
            img_txt: 'Poster Final',
            thumbs_src: './assets/thumbs/rsz_nh_posterportraitfinal.jpg',
            super_thumbs_src: './assets/superThumbs/rsz_nh_posterportraitfinal.jpg',
        },
        {
            img_src: './assets/images/ExosomeInfographic4.jpg',
            img_txt: 'Microvesicle analysis',
            thumbs_src: './assets/thumbs/ExosomeInfographic4.jpg',
            super_thumbs_src: './assets/superThumbs/ExosomeInfographic4.jpg',
        },
        {
            img_src: './assets/images/ING 01 WINTER_Quantum_26-27-1.jpg',
            img_txt: 'Refraction Media Magazine',
            thumbs_src: './assets/thumbs/ING 01 WINTER_Quantum_26-27-1.jpg',
            super_thumbs_src: './assets/superThumbs/ING 01 WINTER_Quantum_26-27-1.jpg',
        },
        {
            img_src: './assets/images/RM_ESWA_Poster.jpg',
            img_txt: 'Earth Week Poster',
            thumbs_src: './assets/thumbs/RM_ESWA_Poster.jpg',
            super_thumbs_src: './assets/superThumbs/RM_ESWA_Poster.jpg',
        },
        {
            img_src: './assets/images/SDx_Bilayer.jpg',
            img_txt: 'SDx Bilayer',
            thumbs_src: './assets/thumbs/SDx_Bilayer.jpg',
            super_thumbs_src: './assets/superThumbs/SDx_Bilayer.jpg',
        },
        {
            img_src: './assets/images/Piecon.jpg',
            img_txt: 'PIECon',
            thumbs_src: './assets/thumbs/Piecon.jpg',
            super_thumbs_src: './assets/superThumbs/Piecon.jpg',
        },
        {
            img_src: './assets/images/GelTest.jpg',
            img_txt: 'Gel',
            thumbs_src: './assets/thumbs/GelTest.jpg',
            super_thumbs_src: './assets/superThumbs/GelTest.jpg',
        },
        {
            img_src: './assets/images/Micro_ColourPanels.jpg',
            img_txt: 'Micro Panels',
            thumbs_src: './assets/thumbs/Micro_ColourPanels.jpg',
            super_thumbs_src: './assets/superThumbs/Micro_ColourPanels.jpg',
        },
        {
            img_src: './assets/images/QuantumMagazine-1.jpg',
            img_txt: 'Magazine',
            thumbs_src: './assets/thumbs/QuantumMagazine-1.jpg',
            super_thumbs_src: './assets/superThumbs/QuantumMagazine-1.jpg',
        },
        {
            img_src: './assets/images/SBME.jpg',
            img_txt: 'UTS Logo',
            thumbs_src: './assets/thumbs/SBME.jpg',
            super_thumbs_src: './assets/superThumbs/SBME.jpg',
        },
        {
            img_src: [
                './assets/images/RM_BionicBody.jpg',
                './assets/images/RM_BionicBodyMag-1.jpg'],
            overlay_thumbs_src: [
                './assets/thumbs/RM_BionicBody.jpg',
                './assets/thumbs/RM_BionicBodyMag-1.jpg'],
            overlay_super_thumbs_src: [
                './assets/superThumbs/RM_BionicBody.jpg',
                './assets/superThumbs/RM_BionicBodyMag-1.jpg'],
            img_txt: 'BionicBody',
            thumbs_src: './assets/thumbs/RM_BionicBodyMag-1.jpg',
            super_thumbs_src: './assets/superThumbs/RM_BionicBodyMag-1.jpg',
        },
        {
            img_src: [
                './assets/images/CBA_DesignThinking1.jpg',
                './assets/images/CBA_DesignThinking2.jpg',
                './assets/images/CBA_DesignThinking3.jpg',
                './assets/images/CBA_DesignThinking4.jpg',
                './assets/images/CBA_DesignThinking5.jpg'],
            overlay_thumbs_src: [
                './assets/thumbs/CBA_DesignThinking1.jpg',
                './assets/thumbs/CBA_DesignThinking2.jpg',
                './assets/thumbs/CBA_DesignThinking3.jpg',
                './assets/thumbs/CBA_DesignThinking4.jpg',
                './assets/thumbs/CBA_DesignThinking5.jpg'],
            overlay_super_thumbs_src: [
                './assets/superThumbs/CBA_DesignThinking1.jpg',
                './assets/superThumbs/CBA_DesignThinking2.jpg',
                './assets/superThumbs/CBA_DesignThinking3.jpg',
                './assets/superThumbs/CBA_DesignThinking4.jpg',
                './assets/superThumbs/CBA_DesignThinking5.jpg'],
            img_txt: 'CBA Design Thinking',
            thumbs_src: './assets/thumbs/CBA_Folder.jpg',
            super_thumbs_src: './assets/thumbs/CBA_Folder.jpg',
        },
        {
            img_src: [
                './assets/images/EngiPlus_01V2.jpg',
                './assets/images/EngiPlus_02V2.jpg',
                './assets/images/EngiPlus_03V2.jpg',
                './assets/images/EngiPlus_04V2.jpg',
                './assets/images/EngiPlus_05V2.jpg'],
            overlay_thumbs_src: [
                './assets/thumbs/EngiPlus_01V2.jpg',
                './assets/thumbs/EngiPlus_02V2.jpg',
                './assets/thumbs/EngiPlus_03V2.jpg',
                './assets/thumbs/EngiPlus_04V2.jpg',
                './assets/thumbs/EngiPlus_05V2.jpg'],
            overlay_super_thumbs_src: [
                './assets/superThumbs/EngiPlus_01V2.jpg',
                './assets/superThumbs/EngiPlus_02V2.jpg',
                './assets/superThumbs/EngiPlus_03V2.jpg',
                './assets/superThumbs/EngiPlus_04V2.jpg',
                './assets/superThumbs/EngiPlus_05V2.jpg'],
            img_txt: 'EngiPlus',
            thumbs_src: './assets/thumbs/EngiMag_Folder.jpg',
            super_thumbs_src: './assets/thumbs/EngiMag_Folder.jpg',
        },
    ],
    TYPOGRAPHY: [
        {
            img_src: './assets/images/Blood_Components2.jpg',
            img_txt: 'Blood',
            thumbs_src: './assets/thumbs/Blood_Components2.jpg',
            super_thumbs_src: './assets/superThumbs/Blood_Components2.jpg',
        },
        {
            img_src: './assets/images/Epidemiology2.jpg',
            img_txt: 'Microbiology',
            thumbs_src: './assets/thumbs/Epidemiology2.jpg',
            super_thumbs_src: './assets/superThumbs/Epidemiology2.jpg',
        },
        {
            img_src: './assets/images/Neuroscience.jpg',
            img_txt: 'Neruoscience',
            thumbs_src: './assets/thumbs/Neuroscience.jpg',
            super_thumbs_src: './assets/superThumbs/Neuroscience.jpg',
        },
        {
            img_src: './assets/images/Flagellum.jpg',
            img_txt: 'Flagellum',
            thumbs_src: './assets/thumbs/Flagellum.jpg',
            super_thumbs_src: './assets/superThumbs/Flagellum.jpg',
        },
        {
            img_src: './assets/images/Proteomics_Typo_02 copy.jpg',
            img_txt: 'Proteomics',
            thumbs_src: './assets/thumbs/Proteomics_Typo_02 copy.jpg',
            super_thumbs_src: './assets/superThumbs/Proteomics_Typo_02 copy.jpg',
        },
    ],
    FACTS: [
        {
            img_src: './assets/images/CatFacts.jpg',
            img_txt: 'Maine Coon Cats + polydactylism',
            thumbs_src: './assets/thumbs/CatFacts.jpg',
            super_thumbs_src: './assets/superThumbs/CatFacts.jpg',
        },
        {
            img_src: './assets/images/EelFacts.jpg',
            img_txt: 'Electric eel + electrolocation',
            thumbs_src: './assets/thumbs/EelFacts.jpg',
            super_thumbs_src: './assets/superThumbs/EelFacts.jpg',
        },
        {
            img_src: './assets/images/MudCrabFacts.jpg',
            img_txt: 'Mud crabs',
            thumbs_src: './assets/thumbs/MudCrabFacts.jpg',
            super_thumbs_src: './assets/superThumbs/MudCrabFacts.jpg',
        },
        {
            img_src: './assets/images/SeadragonFactsV2.jpg',
            img_txt: 'Seadragons',
            thumbs_src: './assets/thumbs/SeadragonFactsV2.jpg',
            super_thumbs_src: './assets/superThumbs/SeadragonFactsV2.jpg',
        },
    ],
    MISC: [
        {
            img_src: './assets/images/ShibaSynthesisPrototype.jpg',
            img_txt: 'Shiba pin',
            thumbs_src: './assets/thumbs/ShibaSynthesisPrototype.jpg',
            super_thumbs_src: './assets/superThumbs/ShibaSynthesisPrototype.jpg',
            types: [prices.pin],
        },
        {
            img_src: './assets/images/patches.jpg',
            img_txt: 'Patches',
            thumbs_src: './assets/thumbs/patches.jpg',
            super_thumbs_src: './assets/superThumbs/patches.jpg',
            types: [prices.patch],
        },
        {
            img_src: './assets/images/InvisibleChameleonSticker.jpg',
            img_txt: 'Invisible Chameleon Sticker',
            thumbs_src: './assets/thumbs/InvisibleChameleonSticker.jpg',
            super_thumbs_src: './assets/superThumbs/InvisibleChameleonSticker.jpg',
            types: [prices.sticker],
        },
        {
            img_src: './assets/images/LabRat.jpg',
            img_txt: 'Lab Rat',
            thumbs_src: './assets/thumbs/LabRat.jpg',
            super_thumbs_src: './assets/superThumbs/LabRat.jpg',
            types: [prices.sticker],
        },
        {
            img_src: './assets/images/CatGlass.jpg',
            img_txt: 'CatGlass',
            thumbs_src: './assets/thumbs/CatGlass.jpg',
            super_thumbs_src: './assets/superThumbs/CatGlass.jpg',
        },
        {
            img_src: './assets/images/InktoberFinal02.jpg',
            img_txt: 'Inktober',
            thumbs_src: './assets/thumbs/InktoberFinal02.jpg',
            super_thumbs_src: './assets/superThumbs/InktoberFinal02.jpg',
        },
        {
            img_src: './assets/images/Mantiski1.jpg',
            img_txt: 'Mantiski',
            thumbs_src: './assets/thumbs/Mantiski1.jpg',
            super_thumbs_src: './assets/superThumbs/Mantiski1.jpg',
        },
        {
            img_src: './assets/images/Mantiski2.jpg',
            img_txt: 'More Mantiski',
            thumbs_src: './assets/thumbs/Mantiski2.jpg',
            super_thumbs_src: './assets/superThumbs/Mantiski2.jpg',
        },
        {
            img_src: './assets/images/BurritoBots.jpg',
            img_txt: 'BurritoBots',
            thumbs_src: './assets/thumbs/BurritoBots.jpg',
            super_thumbs_src: './assets/superThumbs/BurritoBots.jpg',
        },
        {
            img_src: './assets/images/CatJedi.jpg',
            img_txt: 'Cat Jedi',
            thumbs_src: './assets/thumbs/CatJedi.jpg',
            super_thumbs_src: './assets/superThumbs/CatJedi.jpg',
        },
        {
            img_src: './assets/images/DigiShort.jpg',
            img_txt: 'DigiShort',
            thumbs_src: './assets/thumbs/DigiShort.jpg',
            super_thumbs_src: './assets/superThumbs/DigiShort.jpg',
        },
        {
            img_src: './assets/images/DragonCooks.jpg',
            img_txt: 'DragonCooks',
            thumbs_src: './assets/thumbs/DragonCooks.jpg',
            super_thumbs_src: './assets/superThumbs/DragonCooks.jpg',
        },
        {
            img_src: './assets/images/FruitStats.jpg',
            img_txt: 'FruitStats',
            thumbs_src: './assets/thumbs/FruitStats.jpg',
            super_thumbs_src: './assets/superThumbs/FruitStats.jpg',
        },
        {
            img_src: './assets/images/HappyBorkday.jpg',
            img_txt: 'HappyBorkday',
            thumbs_src: './assets/thumbs/HappyBorkday.jpg',
            super_thumbs_src: './assets/superThumbs/HappyBorkday.jpg',
        },
        {
            img_src: './assets/images/JarPunch.jpg',
            img_txt: 'JarPunch',
            thumbs_src: './assets/thumbs/JarPunch.jpg',
            super_thumbs_src: './assets/superThumbs/JarPunch.jpg',
        },
        {
            img_src: './assets/images/MerryZilla.jpg',
            img_txt: 'MerryZilla',
            thumbs_src: './assets/thumbs/MerryZilla.jpg',
            super_thumbs_src: './assets/superThumbs/MerryZilla.jpg',
        },
        {
            img_src: './assets/images/PhoPuns.jpg',
            img_txt: 'PhoPuns',
            thumbs_src: './assets/thumbs/PhoPuns.jpg',
            super_thumbs_src: './assets/superThumbs/PhoPuns.jpg',
        },
        {
            img_src: './assets/images/Rahn.jpg',
            img_txt: 'Rahn',
            thumbs_src: './assets/thumbs/Rahn.jpg',
            super_thumbs_src: './assets/superThumbs/Rahn.jpg',
        },
        {
            img_src: './assets/images/SamuraiJackal.jpg',
            img_txt: 'SamuraiJackal',
            thumbs_src: './assets/thumbs/SamuraiJackal.jpg',
            super_thumbs_src: './assets/superThumbs/SamuraiJackal.jpg',
        },
        {
            img_src: './assets/images/eggbox.jpg',
            img_txt: 'eggbox',
            thumbs_src: './assets/thumbs/eggbox.jpg',
            super_thumbs_src: './assets/superThumbs/eggbox.jpg',
        },
        {
            img_src: './assets/images/SushiDeconstruct.jpg',
            img_txt: 'SushiDeconstruct',
            thumbs_src: './assets/thumbs/SushiDeconstruct.jpg',
            super_thumbs_src: './assets/superThumbs/SushiDeconstruct.jpg',
        },
        {
            img_src: './assets/images/TerraMon.jpg',
            img_txt: 'TerraMon',
            thumbs_src: './assets/thumbs/TerraMon.jpg',
            super_thumbs_src: './assets/superThumbs/TerraMon.jpg',
        },
    ],
    ANIMATION: [
        {
            img_src: './assets/images/DNA_RenderGifu.gif',
            img_txt: 'DNA Render',
            thumbs_src: './assets/thumbs/DNA_RenderGifu.jpg',
            super_thumbs_src: './assets/superThumbs/DNA_RenderGifu.jpg',
        },
        {
            img_src: './assets/images/CardosinMovieGif.gif',
            img_txt: 'Cardosin',
            thumbs_src: './assets/thumbs/CardosinMovieGif.jpg',
            super_thumbs_src: './assets/superThumbs/CardosinMovieGif.jpg',
        },
        {
            is_video: true,
            img_src: './assets/images/05_ProteinPeephole.mp4',
            img_txt: 'Protein Peephole',
            thumbs_src: './assets/thumbs/05_ProteinPeephole.jpg',
            super_thumbs_src: './assets/superThumbs/05_ProteinPeephole.jpg',
        },
        {
            img_src: './assets/images/Carp_Swim.gif',
            img_txt: 'Carp Swimming',
            thumbs_src: './assets/thumbs/Carp_Swim.jpg',
            super_thumbs_src: './assets/superThumbs/Carp_Swim.jpg',
        },
        {
            is_video: true,
            img_src: './assets/images/01_MicroFinalRender01.mp4',
            img_txt: 'Micro Messengers',
            thumbs_src: './assets/thumbs/01_MicroFinalRender01.jpg',
            super_thumbs_src: './assets/superThumbs/01_MicroFinalRender01.jpg',
        },
    ],
    '3D MODELS/PRINTING': [
        {
            img_src: './assets/images/GolgonMiniPaint.jpg',
            img_txt: 'Mini Golgon',
            thumbs_src: './assets/thumbs/GolgonMiniPaint.jpg',
            super_thumbs_src: './assets/superThumbs/GolgonMiniPaint.jpg',
        },
        {
            img_src: './assets/images/DragonSwimmer.jpg',
            img_txt: 'Dragon Swimmer',
            thumbs_src: './assets/thumbs/DragonSwimmer.jpg',
            super_thumbs_src: './assets/superThumbs/DragonSwimmer.jpg',
        },
        {
            img_src: './assets/images/SnakeConeCropped.jpg',
            img_txt: 'Snake Cone',
            thumbs_src: './assets/thumbs/SnakeConeCropped.jpg',
            super_thumbs_src: './assets/superThumbs/SnakeConeCropped.jpg',
        },
        {
            img_src: './assets/images/SnakeRice.jpg',
            img_txt: 'Snake Rice',
            thumbs_src: './assets/thumbs/SnakeRice.jpg',
            super_thumbs_src: './assets/superThumbs/SnakeRice.jpg',
        },
    ],
    CHECKOUT: [], //Empty, just used for the store
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
    '3D MODELS/PRINTING': 'Cute reptiles brought to life!',
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
            if (!arrayRaw[i].types) {
                arrayRaw[i].types = [
                    prices.frame,
                    prices.poster,
                    prices.sticker,
                ];
            }
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

export function getImageById(ImageNum) {
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
    if (arrayRaw.length > 0) {
        left.push(arrayRaw[0].item_number);
        right.push(arrayRaw[arrayRaw.length - 1].item_number);
    }
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
        img_src: './assets/images/RedPandaAnat.jpg',
        img_txt: '',
        thumbs_src: './assets/thumbs/RedPandaAnat.jpg',
        super_thumbs_src: './assets/superThumbs/RedPandaAnat.jpg',
    },
    {
        img_src: './assets/images/SnakeRice.jpg',
        img_txt: '',
        thumbs_src: './assets/thumbs/SnakeRice.jpg',
        super_thumbs_src: './assets/superThumbs/SnakeRice.jpg',
    },
    {
        img_src: './assets/images/SeptemberFlier.jpg',
        img_txt: '',
        thumbs_src: './assets/thumbs/SeptemberFlier.jpg',
        super_thumbs_src: './assets/superThumbs/SeptemberFlier.jpg',
    },
    {
        img_src: './assets/images/CellMockup_CutVirus.jpg',
        img_txt: '',
        thumbs_src: './assets/thumbs/CellMockup_CutVirus.jpg',
        super_thumbs_src: './assets/superThumbs/CellMockup_CutVirus.jpg',
    },
];

export const HomeInitial = (() => {
    for (let i = 0, len = HomeList.length; i < len; i += 1) {
        HomeList[i].item_number = i;
    }
    return HomeList;
})();
