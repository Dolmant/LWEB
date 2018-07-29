// @flow
export const isTouch = (window.innerWidth < 1000) // || 'ontouchstart' in document.documentElement);

const prices = {
    frame: {id: "framed", desc: "Add A3 Framed ($45)", cost: 45},
    poster: {id: "poster", desc: "Add A3 Poster ($30)", cost: 30},
    patch: {id: "patch", desc: "Add Patch (50mm) ($7)", cost: 7},
    pin: {id: "pin", desc: "Add Pin (32x32mm) ($8)", cost: 8},
    sticker: {id: "sticker", desc: "Add Sticker (56mm) ($4)", cost: 4},
}

const projectListInitial = {
    // This order is important, if NATURE + SCIENCE + ANATOMY are not in this order,
    // navigation vis the arrows image_number will be incorrect. If you muck with this
    // MAKE SURE YOU UPDATE THE 'ALL' FUNCTION BELOW
    ALL: [],
    NATURE: [
        {
            img_src: "./assets/webImages/lizard.jpg",
            img_txt: "Lizard",
            thumbs_src: "./assets/webImages/thumbs/lizard.jpg",
        },
        {
            img_src: "./assets/webImages/Binturong.jpg",
            img_txt: "Binturong",
            thumbs_src: "./assets/webImages/thumbs/Binturong.jpg",
        },
        {
            img_src: "./assets/webImages/BlackBear.jpg",
            img_txt: "Black Bear",
            thumbs_src: "./assets/webImages/thumbs/BlackBear.jpg",
        },
        {
            img_src: "./assets/webImages/RedPanda.jpg",
            img_txt: "Red Panda",
            thumbs_src: "./assets/webImages/thumbs/RedPanda.jpg",
        },
        {
            img_src: "./assets/webImages/Dragonfly2Signed.jpg",
            img_txt: "Dragonfly with prey",
            thumbs_src: "./assets/webImages/thumbs/Dragonfly2Signed.jpg",
        },
        {
            img_src: "./assets/webImages/Chameleon.jpg",
            img_txt: "Chameleon",
            thumbs_src: "./assets/webImages/thumbs/Chameleon.jpg",
        },
        {
            img_src: "./assets/webImages/HiveBeetle2.jpg",
            img_txt: "Hive Beetle",
            thumbs_src: "./assets/webImages/thumbs/HiveBeetle2.jpg",
        },
        {
            img_src: "./assets/webImages/OctopusIsLate.jpg",
            img_txt: "Octopus",
            thumbs_src: "./assets/webImages/thumbs/OctopusIsLate.jpg",
        },
        {
            img_src: "./assets/webImages/Archaeopteryx.jpg",
            img_txt: "Archaeopteryx",
            thumbs_src: "./assets/webImages/thumbs/Archaeopteryx.jpg",
        },
        {
            img_src: "./assets/webImages/SeaSlugs.jpg",
            img_txt: "SeaSlugs",
            thumbs_src: "./assets/webImages/thumbs/SeaSlugs.jpg",
        },
        {
            img_src: "./assets/webImages/GemSlugs.jpg",
            img_txt: "GemSlugs",
            thumbs_src: "./assets/webImages/thumbs/GemSlugs.jpg",
        },
        {
            img_src: "./assets/webImages/GemSlugsDrawVer.jpg",
            img_txt: "GemSlugs 3D",
            thumbs_src: "./assets/webImages/thumbs/GemSlugsDrawVer.jpg",
        },
        {
            img_src: "./assets/webImages/ShellLayers.jpg",
            img_txt: "Shell Layers",
            thumbs_src: "./assets/webImages/thumbs/ShellLayers.jpg",
        },
        {
            img_src: "./assets/webImages/HailHydrate.jpg",
            img_txt: "Hail Hydrate",
            thumbs_src: "./assets/webImages/thumbs/HailHydrate.jpg",
        },
    ],
    SCIENCE: [
        {
            img_src: "./assets/webImages/CellMockupBacteria.jpg",
            img_txt: "Cell Cover",
            thumbs_src: "./assets/webImages/thumbs/CellMockupBacteria.jpg",
        },
        {
            img_src: "./assets/webImages/SeaViruses.jpg",
            img_txt: "Sea Viruses",
            thumbs_src: "./assets/webImages/thumbs/SeaViruses.jpg",
        },
        {
            img_src: "./assets/webImages/CellCross.jpg",
            img_txt: "Cell Cross",
            thumbs_src: "./assets/webImages/thumbs/CellCross.jpg",
        },
        {
            img_src: "./assets/webImages/TimeCrystal.jpg",
            img_txt: "Time Crystal",
            thumbs_src: "./assets/webImages/thumbs/TimeCrystal.jpg",
        },
        {
            img_src: "./assets/webImages/TheScreamPlant.jpg",
            img_txt: "The Anemone Scream (cross section)",
            thumbs_src: "./assets/webImages/thumbs/TheScreamPlant.jpg",
        },
        {
            img_src: "./assets/webImages/09_Vizbi_WINNER_FibrilForest.jpg",
            img_txt: "Fibril Forest",
            thumbs_src: "./assets/webImages/thumbs/09_Vizbi_WINNER_FibrilForest.jpg",
        },
        {
            img_src: "./assets/webImages/FriesWithThat3.jpg",
            img_txt: "Fries with that?",
            thumbs_src: "./assets/webImages/thumbs/FriesWithThat3.jpg",
        },
        {
            img_src: "./assets/webImages/08_Vizbi_DataTransfer.jpg",
            img_txt: "Data Transfer",
            thumbs_src: "./assets/webImages/thumbs/08_Vizbi_DataTransfer.jpg",
        },
        {
            img_src: "./assets/webImages/RamenCellNew5.jpg",
            img_txt: "Ramen Cell",
            thumbs_src: "./assets/webImages/thumbs/RamenCellNew5.jpg",
        },
        {
            img_src: "./assets/webImages/DNAtetris.jpg",
            img_txt: "DNAtetris",
            thumbs_src: "./assets/webImages/thumbs/DNAtetris.jpg",
        },
        {
            img_src: "./assets/webImages/Cell_comp03.jpg",
            img_txt: "Cell comp",
            thumbs_src: "./assets/webImages/thumbs/Cell_comp03.jpg",
        },
        {
            img_src: "./assets/webImages/06_Cell_Internal.jpg",
            img_txt: "3D Cell internals",
            thumbs_src: "./assets/webImages/thumbs/06_Cell_Internal.jpg",
        },
        {
            img_src: "./assets/webImages/CLICblue.jpg",
            img_txt: "CLIC",
            thumbs_src: "./assets/webImages/thumbs/CLICblue.jpg",
        },
        {
            img_src: "./assets/webImages/SC_Compare.jpg",
            img_txt: "SC Compare",
            thumbs_src: "./assets/webImages/thumbs/SC_Compare.jpg",
        },
        {
            img_src: "./assets/webImages/mouse02 copy.jpg",
            img_txt: "Mice",
            thumbs_src: "./assets/webImages/thumbs/mouse02 copy.jpg",
        },
        {
            img_src: "./assets/webImages/2017TheCancerGame.jpg",
            img_txt: "The Cancer Game",
            thumbs_src: "./assets/webImages/thumbs/2017TheCancerGame.jpg",
        },
        {
            img_src: "./assets/webImages/2017TheRustNetworkFINAL.jpg",
            img_txt: "The Rust Network",
            thumbs_src: "./assets/webImages/thumbs/2017TheRustNetworkFINAL.jpg",
        },
        {
            img_src: "./assets/webImages/KnotParticles.jpg",
            img_txt: "Knot Particles",
            thumbs_src: "./assets/webImages/thumbs/KnotParticles.jpg",
        },
        {
            img_src: "./assets/webImages/StrawberryChem.jpg",
            img_txt: "Strawberry",
            thumbs_src: "./assets/webImages/thumbs/StrawberryChem.jpg",
        },
        {
            img_src: "./assets/webImages/Vertigo_Prokaryote.jpg",
            img_txt: "Vertigo Prokaryote",
            thumbs_src: "./assets/webImages/thumbs/Vertigo_Prokaryote.jpg",
        },
        {
            img_src: "./assets/webImages/AntibodyMagazine.jpg",
            img_txt: "Antibody",
            thumbs_src: "./assets/webImages/thumbs/AntibodyMagazine.jpg",
        },
        {
            img_src: "./assets/webImages/Bacillus.jpg",
            img_txt: "Bacillus - Published in Cell Trends in Microbiology",
            thumbs_src: "./assets/webImages/thumbs/Bacillus.jpg",
        },
        {
            img_src: "./assets/webImages/CLICgarment.jpg",
            img_txt: "CLIC",
            thumbs_src: "./assets/webImages/thumbs/CLICgarment.jpg",
        },
        {
            img_src: "./assets/webImages/CRISPR.jpg",
            img_txt: "CRISPR",
            thumbs_src: "./assets/webImages/thumbs/CRISPR.jpg",
        },
        {
            img_src: "./assets/webImages/CRISPRcloseup.jpg",
            img_txt: "CRISPR Closeup",
            thumbs_src: "./assets/webImages/thumbs/CRISPRcloseup.jpg",
        },
        {
            img_src: "./assets/webImages/Microwaves.jpg",
            img_txt: "Microwave",
            thumbs_src: "./assets/webImages/thumbs/Microwaves.jpg",
        },
        {
            img_src: "./assets/webImages/ProteinCityTitle.jpg",
            img_txt: "Protein City",
            thumbs_src: "./assets/webImages/thumbs/ProteinCityTitle.jpg",
        },
    ],
    ANATOMY: [
        {
            img_src: "./assets/webImages/MedArtRotation.jpg",
            img_txt: "Published in The Journal of Shoulder and Elbow Surgery",
            thumbs_src: "./assets/webImages/thumbs/MedArtRotation.jpg",
        },
        {
            img_src: "./assets/webImages/EyeRend02.jpg",
            img_txt: "Eye",
            thumbs_src: "./assets/webImages/thumbs/EyeRend02.jpg",
        },
        {
            img_src: "./assets/webImages/CatAnatomy2.jpg",
            img_txt: "Cat Anatomy",
            thumbs_src: "./assets/webImages/thumbs/CatAnatomy2.jpg",
        },
        {
            img_src: "./assets/webImages/Cicada.jpg",
            img_txt: "Cicada",
            thumbs_src: "./assets/webImages/thumbs/Cicada.jpg",
        },
        {
            img_src: "./assets/webImages/COPD2.jpg",
            img_txt: "COPD study",
            thumbs_src: "./assets/webImages/thumbs/COPD2.jpg",
        },
        {
            img_src: "./assets/webImages/Hand_Anatomy01.jpg",
            img_txt: "Hand Anatomy",
            thumbs_src: "./assets/webImages/thumbs/Hand_Anatomy01.jpg",
        },
        {
            img_src: "./assets/webImages/IBS_04.jpg",
            img_txt: "IBS",
            thumbs_src: "./assets/webImages/thumbs/IBS_04.jpg",
        },
        {
            img_src: "./assets/webImages/StomachLayers_01.jpg",
            img_txt: "Stomach Layers",
            thumbs_src: "./assets/webImages/thumbs/StomachLayers_01.jpg",
        },
        {
            img_src: "./assets/webImages/CowCalf.jpg",
            img_txt: "How now anatomical cow",
            thumbs_src: "./assets/webImages/thumbs/CowCalf.jpg",
        },
        {
            img_src: "./assets/webImages/RedPandaAnat.jpg",
            img_txt: "Anatomy of a Red Panda",
            thumbs_src: "./assets/webImages/thumbs/RedPandaAnat.jpg",
        },
        {
            img_src: "./assets/webImages/BoneSeparate.jpg",
            img_txt: "Bones",
            thumbs_src: "./assets/webImages/thumbs/BoneSeparate.jpg",
        },
        {
            img_src: [
                "./assets/webImages/UterineInversion_Colour01.jpg",
                "./assets/webImages/UterineInversion_Colour02.jpg",
                "./assets/webImages/UterineInversion_Colour03.jpg",
                "./assets/webImages/UterineInversion_Colour04.jpg",
                "./assets/webImages/UterineInversion_Colour05.jpg"],
            overlay_thumbs_src: [
                "./assets/webImages/thumbs/UterineInversion_Colour01.jpg",
                "./assets/webImages/thumbs/UterineInversion_Colour02.jpg",
                "./assets/webImages/thumbs/UterineInversion_Colour03.jpg",
                "./assets/webImages/thumbs/UterineInversion_Colour04.jpg",
                "./assets/webImages/thumbs/UterineInversion_Colour05.jpg"],
            img_txt: "Uterine Inversion Collection",
            thumbs_src: "./assets/webImages/thumbs/UIFolder.jpg",
        },
    ],
    "POSTERS/LOGOS": [
        {
            img_src: "./assets/webImages/AntiVenom.jpg",
            img_txt: "AntiVenom",
            thumbs_src: "./assets/webImages/thumbs/AntiVenom.jpg",
        },
        {
            img_src: "./assets/webImages/CellMockup_CutVirus.jpg",
            img_txt: "Cell cover",
            thumbs_src: "./assets/webImages/thumbs/CellMockup_CutVirus.jpg",
        },
        {
            img_src: "./assets/webImages/LeotideIconTest.jpg",
            img_txt: "Logo",
            thumbs_src: "./assets/webImages/thumbs/LeotideIconTest.jpg",
        },
        {
            img_src: "./assets/webImages/ProteinExpression.jpg",
            img_txt: "Protein Expression",
            thumbs_src: "./assets/webImages/thumbs/ProteinExpression.jpg",
        },
        {
            img_src: "./assets/webImages/SeptemberFlier.jpg",
            img_txt: "September Flier",
            thumbs_src: "./assets/webImages/thumbs/SeptemberFlier.jpg",
        },
        {
            img_src: "./assets/webImages/ShapeFormFunctionSigned.jpg",
            img_txt: "Shaped",
            thumbs_src: "./assets/webImages/thumbs/ShapeFormFunctionSigned.jpg",
        },
        {
            img_src: "./assets/webImages/SwiftAvionics.jpg",
            img_txt: "Swift Avionics",
            thumbs_src: "./assets/webImages/thumbs/SwiftAvionics.jpg",
        },
        {
            img_src: "./assets/webImages/ADPoster.jpg",
            img_txt: "ADPoster",
            thumbs_src: "./assets/webImages/thumbs/ADPoster.jpg",
        },
        {
            img_src: "./assets/webImages/MVintroV2.jpg",
            img_txt: "MVintro",
            thumbs_src: "./assets/webImages/thumbs/MVintroV2.jpg",
        },
        {
            img_src: "./assets/webImages/MFS01.jpg",
            img_txt: "March for Science Logo",
            thumbs_src: "./assets/webImages/thumbs/MFS01.jpg",
        },
        {
            img_src: "./assets/webImages/MFS02.jpg",
            img_txt: "March for Science Tokyo Logo",
            thumbs_src: "./assets/webImages/thumbs/MFS02.jpg",
        },
        {
            img_src: "./assets/webImages/UTS_Build.jpg",
            img_txt: "UTS School of Life Sciences Logo",
            thumbs_src: "./assets/webImages/thumbs/UTS_Build.jpg",
        },
        {
            img_src: "./assets/webImages/Liposome_Protocol copy2.jpg",
            img_txt: "Liposome Protocol",
            thumbs_src: "./assets/webImages/thumbs/Liposome_Protocol copy2.jpg",
        },
        {
            img_src: "./assets/webImages/NH2016_Poster03.jpg",
            img_txt: "NH 2016 Poster",
            thumbs_src: "./assets/webImages/thumbs/NH2016_Poster03.jpg",
        },
        {
            img_src: "./assets/webImages/WBlot_Protocol01 copy2.jpg",
            img_txt: "Western Blot",
            thumbs_src: "./assets/webImages/thumbs/WBlot_Protocol01 copy2.jpg",
        },
        {
            img_src: "./assets/webImages/rsz_nh_posterportraitfinal.jpg",
            img_txt: "Poster Final",
            thumbs_src: "./assets/webImages/thumbs/rsz_nh_posterportraitfinal.jpg",
        },
        {
            img_src: "./assets/webImages/ExosomeInfographic4.jpg",
            img_txt: "Microvesicle analysis",
            thumbs_src: "./assets/webImages/thumbs/ExosomeInfographic4.jpg",
        },
        {
            img_src: "./assets/webImages/ING 01 WINTER_Quantum_26-27-1.jpg",
            img_txt: "Refraction Media Magazine",
            thumbs_src: "./assets/webImages/thumbs/ING 01 WINTER_Quantum_26-27-1.jpg",
        },
        {
            img_src: "./assets/webImages/RM_ESWA_Poster.jpg",
            img_txt: "Earth Week Poster",
            thumbs_src: "./assets/webImages/thumbs/RM_ESWA_Poster.jpg",
        },
        {
            img_src: "./assets/webImages/SDx_Bilayer.jpg",
            img_txt: "SDx Bilayer",
            thumbs_src: "./assets/webImages/thumbs/SDx_Bilayer.jpg",
        },
        {
            img_src: "./assets/webImages/Piecon.jpg",
            img_txt: "PIECon",
            thumbs_src: "./assets/webImages/thumbs/Piecon.jpg",
        },
        {
            img_src: "./assets/webImages/GelTest.jpg",
            img_txt: "Gel",
            thumbs_src: "./assets/webImages/thumbs/GelTest.jpg",
        },
        {
            img_src: "./assets/webImages/Micro_ColourPanels.jpg",
            img_txt: "Micro Panels",
            thumbs_src: "./assets/webImages/thumbs/Micro_ColourPanels.jpg",
        },
        {
            img_src: "./assets/webImages/QuantumMagazine-1.jpg",
            img_txt: "Magazine",
            thumbs_src: "./assets/webImages/thumbs/QuantumMagazine-1.jpg",
        },
        {
            img_src: "./assets/webImages/SBME.jpg",
            img_txt: "UTS Logo",
            thumbs_src: "./assets/webImages/thumbs/SBME.jpg",
        },
        {
            img_src: [
                "./assets/webImages/RM_BionicBody.jpg",
                "./assets/webImages/RM_BionicBodyMag-1.jpg"],
            overlay_thumbs_src: [
                "./assets/webImages/thumbs/RM_BionicBody.jpg",
                "./assets/webImages/thumbs/RM_BionicBodyMag-1.jpg"],
            img_txt: "BionicBody",
            thumbs_src: "./assets/webImages/thumbs/RM_BionicBodyMag-1.jpg",
        },
        {
            img_src: [
                "./assets/webImages/CBA_DesignThinking1.jpg",
                "./assets/webImages/CBA_DesignThinking2.jpg",
                "./assets/webImages/CBA_DesignThinking3.jpg",
                "./assets/webImages/CBA_DesignThinking4.jpg",
                "./assets/webImages/CBA_DesignThinking5.jpg"],
            overlay_thumbs_src: [
                "./assets/webImages/thumbs/CBA_DesignThinking1.jpg",
                "./assets/webImages/thumbs/CBA_DesignThinking2.jpg",
                "./assets/webImages/thumbs/CBA_DesignThinking3.jpg",
                "./assets/webImages/thumbs/CBA_DesignThinking4.jpg",
                "./assets/webImages/thumbs/CBA_DesignThinking5.jpg"],
            img_txt: "CBA Design Thinking",
            thumbs_src: "./assets/webImages/thumbs/CBA_Folder.jpg",
        },
        {
            img_src: [
                "./assets/webImages/EngiPlus_01V2.jpg",
                "./assets/webImages/EngiPlus_02V2.jpg",
                "./assets/webImages/EngiPlus_03V2.jpg",
                "./assets/webImages/EngiPlus_04V2.jpg",
                "./assets/webImages/EngiPlus_05V2.jpg"],
            overlay_thumbs_src: [
                "./assets/webImages/thumbs/EngiPlus_01V2.jpg",
                "./assets/webImages/thumbs/EngiPlus_02V2.jpg",
                "./assets/webImages/thumbs/EngiPlus_03V2.jpg",
                "./assets/webImages/thumbs/EngiPlus_04V2.jpg",
                "./assets/webImages/thumbs/EngiPlus_05V2.jpg"],
            img_txt: "EngiPlus",
            thumbs_src: "./assets/webImages/thumbs/EngiMag_Folder.jpg",
        },
    ],
    TYPOGRAPHY: [
        {
            img_src: "./assets/webImages/Blood_Components2.jpg",
            img_txt: "Blood",
            thumbs_src: "./assets/webImages/thumbs/Blood_Components2.jpg",
        },
        {
            img_src: "./assets/webImages/Epidemiology2.jpg",
            img_txt: "Microbiology",
            thumbs_src: "./assets/webImages/thumbs/Epidemiology2.jpg",
        },
        {
            img_src: "./assets/webImages/Neuroscience.jpg",
            img_txt: "Neruoscience",
            thumbs_src: "./assets/webImages/thumbs/Neuroscience.jpg",
        },
        {
            img_src: "./assets/webImages/Flagellum.jpg",
            img_txt: "Flagellum",
            thumbs_src: "./assets/webImages/thumbs/Flagellum.jpg",
        },
        {
            img_src: "./assets/webImages/Proteomics_Typo_02 copy.jpg",
            img_txt: "Proteomics",
            thumbs_src: "./assets/webImages/thumbs/Proteomics_Typo_02 copy.jpg",
        },
    ],
    FACTS: [
        {
            img_src: "./assets/webImages/CatFacts.jpg",
            img_txt: "Maine Coon Cats + polydactylism",
            thumbs_src: "./assets/webImages/thumbs/CatFacts.jpg",
        },
        {
            img_src: "./assets/webImages/EelFacts.jpg",
            img_txt: "Electric eel + electrolocation",
            thumbs_src: "./assets/webImages/thumbs/EelFacts.jpg",
        },
        {
            img_src: "./assets/webImages/MudCrabFacts.jpg",
            img_txt: "Mud crabs",
            thumbs_src: "./assets/webImages/thumbs/MudCrabFacts.jpg",
        },
        {
            img_src: "./assets/webImages/SeadragonFactsV2.jpg",
            img_txt: "Seadragons",
            thumbs_src: "./assets/webImages/thumbs/SeadragonFactsV2.jpg",
        },
    ],
    MISC: [
        {
            is_video: true,
            img_src: "./assets/webImages/DNutFINAL.mp4",
            img_txt: "DOUGHNUTS!",
            thumbs_src: "./assets/webImages/thumbs/DNutFINAL.jpg",
            types: [prices.pin],
        },
        {
            img_src: "./assets/webImages/ShibaSynthesisPrototype.jpg",
            img_txt: "Shiba pin",
            thumbs_src: "./assets/webImages/thumbs/ShibaSynthesisPrototype.jpg",
            types: [prices.pin],
        },
        {
            img_src: "./assets/webImages/patches.jpg",
            img_txt: "Patches",
            thumbs_src: "./assets/webImages/thumbs/patches.jpg",
            types: [prices.patch],
        },
        {
            img_src: "./assets/webImages/InvisibleChameleonSticker.jpg",
            img_txt: "Invisible Chameleon Sticker",
            thumbs_src: "./assets/webImages/thumbs/InvisibleChameleonSticker.jpg",
            types: [prices.sticker],
        },
        {
            img_src: "./assets/webImages/LabRat.jpg",
            img_txt: "Lab Rat",
            thumbs_src: "./assets/webImages/thumbs/LabRat.jpg",
            types: [prices.sticker],
        },
        {
            img_src: "./assets/webImages/CatGlass.jpg",
            img_txt: "CatGlass",
            thumbs_src: "./assets/webImages/thumbs/CatGlass.jpg",
        },
        {
            img_src: "./assets/webImages/InktoberFinal02.jpg",
            img_txt: "Inktober",
            thumbs_src: "./assets/webImages/thumbs/InktoberFinal02.jpg",
        },
        {
            img_src: "./assets/webImages/Mantiski1.jpg",
            img_txt: "Mantiski",
            thumbs_src: "./assets/webImages/thumbs/Mantiski1.jpg",
        },
        {
            img_src: "./assets/webImages/Mantiski2.jpg",
            img_txt: "More Mantiski",
            thumbs_src: "./assets/webImages/thumbs/Mantiski2.jpg",
        },
        {
            img_src: "./assets/webImages/BurritoBots.jpg",
            img_txt: "BurritoBots",
            thumbs_src: "./assets/webImages/thumbs/BurritoBots.jpg",
        },
        {
            img_src: "./assets/webImages/CatJedi.jpg",
            img_txt: "Cat Jedi",
            thumbs_src: "./assets/webImages/thumbs/CatJedi.jpg",
        },
        {
            img_src: "./assets/webImages/DigiShort.jpg",
            img_txt: "DigiShort",
            thumbs_src: "./assets/webImages/thumbs/DigiShort.jpg",
        },
        {
            img_src: "./assets/webImages/DragonCooks.jpg",
            img_txt: "DragonCooks",
            thumbs_src: "./assets/webImages/thumbs/DragonCooks.jpg",
        },
        {
            img_src: "./assets/webImages/FruitStats.jpg",
            img_txt: "FruitStats",
            thumbs_src: "./assets/webImages/thumbs/FruitStats.jpg",
        },
        {
            img_src: "./assets/webImages/HappyBorkday.jpg",
            img_txt: "HappyBorkday",
            thumbs_src: "./assets/webImages/thumbs/HappyBorkday.jpg",
        },
        {
            img_src: "./assets/webImages/JarPunch.jpg",
            img_txt: "JarPunch",
            thumbs_src: "./assets/webImages/thumbs/JarPunch.jpg",
        },
        {
            img_src: "./assets/webImages/MerryZilla.jpg",
            img_txt: "MerryZilla",
            thumbs_src: "./assets/webImages/thumbs/MerryZilla.jpg",
        },
        {
            img_src: "./assets/webImages/PhoPuns.jpg",
            img_txt: "PhoPuns",
            thumbs_src: "./assets/webImages/thumbs/PhoPuns.jpg",
        },
        {
            img_src: "./assets/webImages/Rahn.jpg",
            img_txt: "Rahn",
            thumbs_src: "./assets/webImages/thumbs/Rahn.jpg",
        },
        {
            img_src: "./assets/webImages/SamuraiJackal.jpg",
            img_txt: "SamuraiJackal",
            thumbs_src: "./assets/webImages/thumbs/SamuraiJackal.jpg",
        },
        {
            img_src: "./assets/webImages/eggbox.jpg",
            img_txt: "eggbox",
            thumbs_src: "./assets/webImages/thumbs/eggbox.jpg",
        },
        {
            img_src: "./assets/webImages/SushiDeconstruct.jpg",
            img_txt: "SushiDeconstruct",
            thumbs_src: "./assets/webImages/thumbs/SushiDeconstruct.jpg",
        },
        {
            img_src: "./assets/webImages/TerraMon.jpg",
            img_txt: "TerraMon",
            thumbs_src: "./assets/webImages/thumbs/TerraMon.jpg",
        },
    ],
    ANIMATION: [
        {
            img_src: "./assets/images/DNA_RenderGifu.gif",
            img_txt: "DNA Render",
            thumbs_src: "./assets/webImages/thumbs/DNA_RenderGifu.jpg",
        },
        {
            img_src: "./assets/images/CardosinMovieGif.gif",
            img_txt: "Cardosin",
            thumbs_src: "./assets/webImages/thumbs/CardosinMovieGif.jpg",
        },
        {
            is_video: true,
            img_src: "./assets/webImages/05_ProteinPeephole.mp4",
            img_txt: "Protein Peephole",
            thumbs_src: "./assets/webImages/thumbs/05_ProteinPeephole.jpg",
        },
        {
            img_src: "./assets/images/Carp_Swim.gif",
            img_txt: "Carp Swimming",
            thumbs_src: "./assets/webImages/thumbs/Carp_Swim.jpg",
        },
        {
            is_video: true,
            img_src: "./assets/webImages/01_MicroFinalRender01.mp4",
            img_txt: "Micro Messengers",
            thumbs_src: "./assets/webImages/thumbs/01_MicroFinalRender01.jpg",
        },
    ],
    "3D MODELS/PRINTING": [
        {
            img_src: "./assets/webImages/GolgonMiniPaint.jpg",
            img_txt: "Mini Golgon",
            thumbs_src: "./assets/webImages/thumbs/GolgonMiniPaint.jpg",
        },
        {
            img_src: "./assets/webImages/DragonSwimmer.jpg",
            img_txt: "Dragon Swimmer",
            thumbs_src: "./assets/webImages/thumbs/DragonSwimmer.jpg",
        },
        {
            img_src: "./assets/webImages/SnakeConeCropped.jpg",
            img_txt: "Snake Cone",
            thumbs_src: "./assets/webImages/thumbs/SnakeConeCropped.jpg",
        },
        {
            img_src: "./assets/webImages/SnakeRice.jpg",
            img_txt: "Snake Rice",
            thumbs_src: "./assets/webImages/thumbs/SnakeRice.jpg",
        },
    ],
    CHECKOUT: [], // Empty, just used for the store
}

// hardcoded for now
const projectListLabels = {
    ALL: "All your favourite science-based artworks, all in one place! Presented in a variety of styles, each artwork has careful thought behind them to best illustrate the topic they represent.",
    NATURE: "I’ve heard it’s pretty scary.",
    ANATOMY: "Delving into the inner structure of the body, one chorus of “ewwww”s at a time.",
    SCIENCE: "A combination of scientific illustration and culture. The aim: To create thought-provoking artworks that stand out from the crowd from regular scientific illustrations.",
    "POSTERS/LOGOS": "Smart, infographic-styled posters to educate the public in the latest scientific research. Commissioned logos by companies and individuals looking to make their ads stand out.",
    TYPOGRAPHY: "Taking everyday letters and making them look better…with science!",
    FACTS: "Learning every day! Fun facts for those who want to impress others with their knowledge of anything and everything. Or just cats, crabs and eels specifically.",
    MISC: "All the other artworks which don’t fall into the science-ey categories. Made either purely for personal interest, or commissioned by awesome people.",
    "3D MODELS/PRINTING": "Cute reptiles brought to life!",
    ANIMATION: "Moving pictures!",
    CHECKOUT: "NA",
}

// This concat order is also important if you change stuff
const projectListAll = () => {
    projectListInitial.ALL =
    projectListInitial.NATURE.concat(
        projectListInitial.SCIENCE.concat(
            projectListInitial.ANATOMY.concat(
                projectListInitial.FACTS.concat(
                    projectListInitial.TYPOGRAPHY.concat(
                        projectListInitial.MISC)))))
    return projectListInitial
}

function setImageNum(dict) {
    let x = 0
    Object.keys(dict).forEach((arrayNames) => {
        const arrayRaw: any = dict[arrayNames]
        for (let i = 0, len = arrayRaw.length; i < len; i += 1) {
            arrayRaw[i].item_number = x + i
            if (!arrayRaw[i].types) {
                arrayRaw[i].types = [
                    prices.frame,
                    prices.poster,
                    prices.sticker,
                ]
            }
        }
        x += arrayRaw.length
    })
    return [dict, x]
}

// Ordered so we generate numbers for each category then create
// the all category which is predefined as all the science categories

const numberedList = setImageNum(projectListInitial)
const projectListBase: typeof projectListInitial = numberedList[0]
const countNumberOfImages: number = numberedList[1]

export const projectList = projectListAll()
export const NumberOfImages = countNumberOfImages

export function getImageById(ImageNum: number): any {
    let result = false
    Object.keys(projectList).forEach((arrayNames) => {
        const arrayRaw: any = projectList[arrayNames]
        for (let i = 0, len = arrayRaw.length; i < len; i += 1) {
            if (arrayRaw[i].item_number === ImageNum) {
                result = arrayRaw[i]
            }
        }
    })
    return result
}

export function ArrayLimitsCalc(category: string) {
    const left = []
    const right = []
    let up = []
    let down = []
    const arrayRaw = projectList[category]
    if (arrayRaw.length > 0) {
        left.push(arrayRaw[0].item_number)
        right.push(arrayRaw[arrayRaw.length - 1].item_number)
    }
    arrayRaw.forEach((image) => {
        if (Array.isArray(image.img_src)) {
            up = [image.item_number]
            down = [image.item_number]
        }
    })
    return {
        left,
        right,
        up,
        down,
    }
}

// actions you can send to the state
const categoryGen = () => {
    const results = {}
    Object.keys(projectListBase).forEach((key) => {
        results[key] = projectListLabels[key]
    })
    return results
}

export const category = categoryGen()

export const convertType = (style: any, properties: any, suffix: string) => {
    const returnStyle = Object.assign({}, style)
    properties.forEach(((property) => {
        returnStyle[property] += suffix
    }))
    return returnStyle
}

const HomeList = [
    {
        item_number: 0, // overwritten
        img_src: "./assets/webImages/InTheNews.jpg",
        img_txt: "",
        thumbs_src: "./assets/webImages/thumbs/InTheNews.jpg",
    },
    {
        item_number: 0, // overwritten
        img_src: "./assets/webImages/VIVID_NightRenderV7full.jpg",
        img_txt: "",
        thumbs_src: "./assets/webImages/thumbs/VIVID_NightRenderV7full.jpg",
    },
    {
        item_number: 0, // overwritten
        img_src: "./assets/webImages/DragonVirus1.jpg",
        img_txt: "",
        thumbs_src: "./assets/webImages/thumbs/DragonVirus1.jpg",
    },
    {
        item_number: 0, // overwritten
        img_src: "./assets/webImages/DragonVirus2.jpg",
        img_txt: "",
        thumbs_src: "./assets/webImages/thumbs/DragonVirus2.jpg",
    },
    {
        item_number: 0, // overwritten
        img_src: "./assets/webImages/DragonVirus3.jpg",
        img_txt: "",
        thumbs_src: "./assets/webImages/thumbs/DragonVirus3.jpg",
    },
    {
        item_number: 0, // overwritten
        img_src: "./assets/webImages/DragonVirus4.jpg",
        img_txt: "",
        thumbs_src: "./assets/webImages/thumbs/DragonVirus4.jpg",
    },
    {
        item_number: 0, // overwritten
        img_src: "./assets/webImages/RedPandaAnat.jpg",
        img_txt: "",
        thumbs_src: "./assets/webImages/thumbs/RedPandaAnat.jpg",
    },
    {
        item_number: 0, // overwritten
        img_src: "./assets/webImages/SnakeRice.jpg",
        img_txt: "",
        thumbs_src: "./assets/webImages/thumbs/SnakeRice.jpg",
    },
    {
        item_number: 0, // overwritten
        img_src: "./assets/webImages/SeptemberFlier.jpg",
        img_txt: "",
        thumbs_src: "./assets/webImages/thumbs/SeptemberFlier.jpg",
    },
    {
        item_number: 0, // overwritten
        img_src: "./assets/webImages/CellMockup_CutVirus.jpg",
        img_txt: "",
        thumbs_src: "./assets/webImages/thumbs/CellMockup_CutVirus.jpg",
    },
]

export const HomeInitial = (() => {
    for (let i = 0, len = HomeList.length; i < len; i += 1) {
        HomeList[i].item_number = i
    }
    return HomeList
})()
