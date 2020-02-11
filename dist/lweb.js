// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"config.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  "Nature": [{
    "file": "DragonPoster.jpg",
    "text": "Dragon Poster"
  }, {
    "file": "PeronsTreeFrog.jpg",
    "text": "Perons Tree Frog"
  }, {
    "file": "WaterPython.jpg",
    "text": "Water Python"
  }, {
    "file": "lizard.jpg",
    "text": "Lizard"
  }, {
    "file": "BinturongChildrensBook.jpg",
    "text": "Binturong"
  }, {
    "file": "Dragonfly2Signed.jpg",
    "text": "Dragonfly with prey"
  }, {
    "file": "Chameleon.jpg",
    "text": "Chameleon"
  }, {
    "file": "OctopusIsLate.jpg",
    "text": "Late Octopus"
  }, {
    "file": "SeaSlugs.jpg",
    "text": "SeaSlugs"
  }, {
    "file": "GemSlugs.jpg",
    "text": "GemSlugs"
  }, {
    "file": "GemSlugsDrawVer.jpg",
    "text": "GemSlugs 3D"
  }, {
    "file": "ShellLayers.jpg",
    "text": "Shell Layers"
  }, {
    "file": "HailHydrate.jpg",
    "text": "Hail Hydrate"
  }],
  "Science": [{
    "file": "HailHydrate.jpg",
    "text": "Hail Hydrate"
  }, {
    "file": "CellMockupBacteria.jpg",
    "text": "Mockup concepts for the journal CELL"
  }, {
    "file": "CellCross.jpg",
    "text": "Cell Cross"
  }, {
    "file": "TimeCrystal.jpg",
    "text": "Time Crystal"
  }, {
    "file": "TheScreamPlant.jpg",
    "text": "The Anemone Scream (cross section)"
  }, {
    "file": "09_Vizbi_WINNER_FibrilForest.jpg",
    "text": "Fibril Forest"
  }, {
    "file": "FriesWithThat3.jpg",
    "text": "Fries with that?"
  }, {
    "file": "08_Vizbi_DataTransfer.jpg",
    "text": "Data Transfer"
  }, {
    "file": "RamenCellNew5.jpg",
    "text": "Ramen Cell"
  }, {
    "file": "DNAtetris.jpg",
    "text": "DNAtetris"
  }, {
    "file": "Cell_comp03.jpg",
    "text": "Concept art for the short film “The Micro Messengers”"
  }, {
    "file": "06_Cell_Internal.jpg",
    "text": "3D Cell internals"
  }, {
    "file": "CLICblue.jpg",
    "text": "CLIC"
  }, {
    "file": "mouse02.jpg",
    "text": "Mice"
  }, {
    "file": "2017TheCancerGame.jpg",
    "text": "The Cancer Game"
  }, {
    "file": "2017TheRustNetworkFINAL.jpg",
    "text": "The Rust Network, 2nd prize at the VIZBI competition"
  }, {
    "file": "StrawberryChem.jpg",
    "text": "Strawberry"
  }, {
    "file": "AntibodyMagazine.jpg",
    "text": "Antibody"
  }, {
    "file": "Bacillus.jpg",
    "text": "Bacillus - Published in Cell Trends in Microbiology"
  }, {
    "file": "CLICgarment.jpg",
    "text": "CLIC"
  }, {
    "file": "Microwaves.jpg",
    "text": "The History of Microwaves, published in Lateral Magazine"
  }, {
    "file": "ProteinCityTitle.jpg",
    "text": "Protein City"
  }],
  "Anatomy": [{
    "file": "MedArtRotation.jpg",
    "text": "Published in The Journal of Shoulder and Elbow Surgery"
  }, {
    "file": "EyeRend02.jpg",
    "text": "Eye"
  }, {
    "file": "CatAnatomy2.jpg",
    "text": "Cat Anatomy"
  }, {
    "file": "Cicada.jpg",
    "text": "Cicada"
  }, {
    "file": "COPD2.jpg",
    "text": "COPD study"
  }, {
    "file": "Hand_Anatomy01.jpg",
    "text": "Hand Anatomy"
  }, {
    "file": "IBS_04.jpg",
    "text": "IBS"
  }, {
    "file": "StomachLayers_01.jpg",
    "text": "Stomach Layers"
  }, {
    "file": "CowCalf.jpg",
    "text": "How now anatomical cow"
  }, {
    "file": "RedPandaAnat.jpg",
    "text": "Anatomy of a Red Panda"
  }, {
    "file": "BoneSeparate.jpg",
    "text": "Bones"
  }, {
    "file": "UIFolder.jpg",
    "files": ["UterineInversion_Colour01.jpg", "UterineInversion_Colour02.jpg", "UterineInversion_Colour03.jpg", "UterineInversion_Colour04.jpg", "UterineInversion_Colour05.jpg"],
    "text": "Uterine Inversion Collection"
  }],
  "Publications": [{
    "file": "NatureCandyda.jpg",
    "text": "Nature Cover"
  }, {
    "file": "Kohakutou.jpg",
    "text": "Kohakutou"
  }, {
    "file": "EndostealBoneSurface.jpg",
    "text": "Endosteal Bone Surface"
  }, {
    "file": "AntiVenom.jpg",
    "text": "Published in the Careers for Science/Health article with Refraction Media"
  }, {
    "file": "CellMockup_CutVirus.jpg",
    "text": "Mockup concepts for the journal CELL"
  }, {
    "file": "LeotideIconTest.jpg",
    "text": "Logo"
  }, {
    "file": "ProteinExpression.jpg",
    "text": "Logo"
  }, {
    "file": "LeotideIconTest.jpg",
    "text": "Protein Expression (Masters final seminar)"
  }, {
    "file": "SeptemberFlier.jpg",
    "text": "Designed to advertise the short film “The Micro Messengers”"
  }, {
    "file": "ShapeFormFunctionSigned.jpg",
    "text": "Shaped"
  }, {
    "file": "MFS01.jpg",
    "text": "March for Science Logo, commissioned by the members of March for Science Tokyo"
  }, {
    "file": "MFS02.jpg",
    "text": "March for Science Tokyo Logo"
  }, {
    "file": "UTS_Build.jpg",
    "text": "UTS School of Life Sciences Logo"
  }, {
    "file": "Liposome_Protocol.jpg",
    "text": "Liposome Protocol"
  }, {
    "file": "NH2016_Poster03.jpg",
    "text": "NH 2016 Poster"
  }, {
    "file": "WBlot_Protocol01.jpg",
    "text": "Western Blot"
  }, {
    "file": "rsz_nh_posterportraitfinal.jpg",
    "text": "NH 2015 Poster"
  }, {
    "file": "ING01WINTER_Quantum_26-27-1.jpg",
    "text": "Designed for UNSW Ingenuity Magazine"
  }, {
    "file": "RM_ESWA_Poster.jpg",
    "text": "Earth Week Poster, designed for Earth Science Week in Western Australia – published and printed for schools"
  }, {
    "file": "SDx_Bilayer.jpg",
    "text": "SDx Bilayer, A revised figure for paper on Tethered BIlayer Membranes"
  }, {
    "file": "Piecon.jpg",
    "text": "An entertaining piece for the members of IRESS"
  }, {
    "file": "GelTest.jpg",
    "text": "Figure designed for a member of the UTS School of Biomedical Engineering"
  }, {
    "file": "Micro_ColourPanels.jpg",
    "text": "Scene shots of the short film “The Micro Messengers”"
  }, {
    "file": "QuantumMagazine-1.jpg",
    "text": "Quantum Magazine"
  }, {
    "file": "SBME.jpg",
    "text": "Logo designed for the UTS School of Biomedical Engineering"
  }, {
    "file": "RM_BionicBodyMag-1.jpg",
    "files": ["RM_BionicBody.jpg", "RM_BionicBodyMag-1"],
    "text": "Design for a magazine with Refraction Media"
  }, {
    "file": "CBA_Folder.jpg",
    "files": ["CBA_DesignThinking1.jpg", "CBA_DesignThinking2.jpg", "CBA_DesignThinking3.jpg", "CBA_DesignThinking4.jpg", "CBA_DesignThinking5.jpg"],
    "text": "CBA Design Thinking"
  }, {
    "file": "EngiMag_Folder.jpg",
    "files": ["EngiPlus_01V2.jpg", "EngiPlus_02V2.jpg", "EngiPlus_03V2.jpg", "EngiPlus_04V2.jpg", "EngiPlus_05V2.jpg"],
    "text": "Concept artwork for an engineering magazine with Refraction Media"
  }],
  "Typography": [{
    "file": "Blood_Components2.jpg",
    "text": "Blood"
  }, {
    "file": "Epidemiology2.jpg",
    "text": "Microbiology"
  }, {
    "file": "Neuroscience.jpg",
    "text": "Neuroscience"
  }, {
    "file": "Flagellum.jpg",
    "text": "Flagellum"
  }, {
    "file": "Proteomics_Typo_02.jpg",
    "text": "Proteomics"
  }],
  "Facts": [{
    "file": "CatFacts.jpg",
    "text": "Maine Coon Cats + polydactylism"
  }, {
    "file": "EelFacts.jpg",
    "text": "Electric eel + electrolocation"
  }, {
    "file": "MudCrabFacts.jpg",
    "text": "Mud Crabs"
  }, {
    "file": "SeadragonFactsV2.jpg",
    "text": "Seadragons"
  }],
  "Misc": [{
    "file": "DnutFINAL.mp4",
    "text": "DOUGHNUTS!"
  }, {
    "file": "ShibaSynthesisPrototype.jpg",
    "text": "Shiba pin"
  }, {
    "file": "patches.jpg",
    "text": "Patches"
  }, {
    "file": "InvisibleChameleonSticker.jpg",
    "text": "Invisible Chameleon Sticker"
  }, {
    "file": "LabRat.jpg",
    "text": "Lab Rat"
  }, {
    "file": "DigiScene.jpg",
    "text": "DigiScene"
  }, {
    "file": "PythonMorphs.jpg",
    "text": "PythonMorphs"
  }, {
    "file": "Veffle.jpg",
    "text": "Veffle"
  }, {
    "file": "CatGlass.jpg",
    "text": "CatGlass"
  }, {
    "file": "InktoberFinal02.jpg",
    "text": "Inktober"
  }, {
    "file": "Mantiski1.jpg",
    "text": "Mantiski"
  }, {
    "file": "Mantiski2.jpg",
    "text": "More Mantiski"
  }, {
    "file": "BurritoBots.jpg",
    "text": "BurritoBots"
  }, {
    "file": "CatJedi.jpg",
    "text": "Cat Jedi"
  }, {
    "file": "DigiShort.jpg",
    "text": "DigiShort"
  }, {
    "file": "DragonCooks.jpg",
    "text": "DragonCooks"
  }, {
    "file": "FruitStats.jpg",
    "text": "FruitStats"
  }, {
    "file": "HappyBorkday.jpg",
    "text": "HappyBorkday"
  }, {
    "file": "JarPunch.jpg",
    "text": "JarPunch"
  }, {
    "file": "PhoPuns.jpg",
    "text": "PhoPuns"
  }, {
    "file": "Rahn.jpg",
    "text": "Rahn"
  }, {
    "file": "eggbox.jpg",
    "text": "eggbox"
  }, {
    "file": "Rahn.jpg",
    "text": "Rahn"
  }, {
    "file": "SushiDeconstruct.jpg",
    "text": "SushiDeconstruct"
  }, {
    "file": "TerraMon.jpg",
    "text": "TerraMon"
  }],
  "3D": [{
    "file": "Salamander.jpg",
    "text": "Salamander"
  }, {
    "file": "Moray3D.jpg",
    "text": "Moray Eel"
  }, {
    "file": "MorayChase.mp4",
    "text": "Moray Chasing Worm"
  }, {
    "file": "ThornyDevilExample.jpg",
    "text": "Thorny Devil"
  }, {
    "file": "NatureCandyda.jpg",
    "text": "Nature Cover"
  }, {
    "file": "CRISPR.jpg",
    "text": "CRISPR"
  }, {
    "file": "CRISPRcloseup.jpg",
    "text": "CRISPR Closeup"
  }, {
    "file": "Squat.jpg",
    "text": "Schrodingers Cat"
  }, {
    "file": "DNA_RenderGifu.gif",
    "text": "DNA Render"
  }, {
    "file": "CardosinMovieGif.gif",
    "text": "Cardosin"
  }, {
    "file": "05_ProteinPeephole.mp4",
    "text": "Cardosin"
  }, {
    "file": "Carp_Swim.gif",
    "text": "Carp Swimming"
  }, {
    "file": "SeaViruses.jpg",
    "text": "Sea Viruses"
  }, {
    "file": "01_MicroFinalRender01.mp4",
    "text": "Micro Messengers"
  }, {
    "file": "Seadragon.gltf",
    "text": "Seadragon"
  }, {
    "file": "DragonSwimmer.gltf",
    "text": "Dragon Swimmer"
  }, {
    "file": "CaramelSnake.gltf",
    "text": "Snake Cone"
  }, {
    "file": "SnakeRice.gltf",
    "text": "Snake Rice"
  }],
  "Highlights": [{
    "file": "Salamander.jpg",
    "text": "Salamander"
  }, {
    "file": "VIVID_NightRenderV7full.jpg",
    "text": "Beautiful and dangerous where I was the lead animator for a collaborative VIVID project between CSIRO and The Garvan Institute in 2018"
  }, {
    "file": "DragonVirus.jpg",
    "text": "DragonVirus"
  }, {
    "file": "RedPandaAnat.jpg",
    "text": "RedPandaAnat"
  }, {
    "file": "SnakeRice.jpg",
    "text": "SnakeRice"
  }, {
    "file": "SeptemberFlier.jpg",
    "text": "SeptemberFlier"
  }, {
    "file": "CellMockup_CutVirus.jpg",
    "text": "CellMockup_CutVirus"
  }]
};
},{}],"lweb.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

var _a, _b, _c;

Object.defineProperty(exports, "__esModule", {
  value: true
});

var config_1 = __importDefault(require("./config"));

var loadingSpinner = "/processedImages/thumbs/MV_AniBlack.gif";

var getThumbPath = function getThumbPath(file) {
  return "/processedImages/thumbs/" + file;
};

var getHQPath = function getHQPath(file) {
  return "/processedImages/HQ/" + file;
};

var cursors = {};
var selected = "";

var selectCategory = function selectCategory(category) {
  if (selected) {
    var item_1 = document.getElementById(selected);
    item_1.style.display = "none";
  }

  var item = document.getElementById(category);
  item.style.display = "flex";
  selected = category;
};

var loadAsset = function loadAsset(targetEl, source) {
  // Loads image into target el, displays loading graphic while its fetching
  if (!source) {
    debugger;
  }

  switch (true) {
    case source.file.includes(".mp4"):
      {
        // todo
        break;
      }

    case source.file.includes(".gif"):
    case source.file.includes(".jpg"):
      {
        // todo
        var newImg = document.createElement("img");
        newImg.src = loadingSpinner;
        targetEl.appendChild(newImg);
        newImg.addEventListener("click", function () {
          if (!this.classList.contains("selected")) {
            highDefAsset(this, source);
          }

          this.classList.toggle("selected");
        });
        var backgroundImg = new Image();
        backgroundImg.addEventListener("load", function (event) {
          var target = event.target;
          newImg.src = target.src;
        });
        backgroundImg.src = getThumbPath(source.file);
        break;
      }

    case source.file.includes(".gltf"):
      {
        // todo
        break;
      }

    default:
      {
        console.log("Error, unknown file type: " + source.file);
      }
  }
};

var highDefAsset = function highDefAsset(targetEl, source) {
  // Loads high def version, incrementally streams update
  switch (true) {
    case source.file.includes(".jpg"):
    case source.file.includes(".gif"):
      {
        var backgroundImg = new Image();
        backgroundImg.addEventListener("load", function (event) {
          var target = event.target;
          targetEl.src = target.src;
        });
        backgroundImg.src = getHQPath(source.file);
        break;
      }

    case source.file.includes(".mp4"):
      {
        // todo
        break;
      }

    case source.file.includes(".gltf"):
      {
        // todo
        break;
      }

    default:
      {
        console.log("Error, unknown file type: " + source.file);
      }
  }
};

var balancing = false;

var populateItems = function populateItems(forcePopulate) {
  if (forcePopulate === void 0) {
    forcePopulate = "";
  }

  var category = selected || forcePopulate;

  if (category && !balancing) {
    var columns_1 = 3;

    if (getWidth() <= 300) {
      columns_1 = 1;
    } else if (getWidth() <= 600) {
      columns_1 = 2;
    }

    var initI = cursors[category] || 0;
    var endI_1 = initI + 9;
    var i_1 = initI;

    var balanceImgs_1 = function balanceImgs_1() {
      var _a, _b, _c;

      if (i_1 >= endI_1) {
        balancing = false;
        return;
      }

      var parent = (_a = document) === null || _a === void 0 ? void 0 : _a.getElementById(category);
      var index = i_1;
      var target = parent.children[0];

      for (var i_2 = 1; i_2 < columns_1; i_2++) {
        if (((_b = target) === null || _b === void 0 ? void 0 : _b.clientHeight) > ((_c = parent.children[i_2]) === null || _c === void 0 ? void 0 : _c.clientHeight)) {
          target = parent.children[i_2];
        }
      }

      if (config_1.default[category].length <= i_1) {
        cursors[category] = i_1 % config_1.default[category].length;
        index = i_1 % config_1.default[category].length;
      }

      loadAsset(target, config_1.default[category][index]);
      cursors[category] = (cursors[category] || 0) + 1;
      i_1++;
      requestAnimationFrame(balanceImgs_1);
    };

    balancing = true;
    requestAnimationFrame(balanceImgs_1);
  }
};

var contentEl = (_a = document) === null || _a === void 0 ? void 0 : _a.getElementById("content");
var headerEl = (_b = document) === null || _b === void 0 ? void 0 : _b.getElementById("header");
Object.keys(config_1.default).forEach(function (category) {
  var _a, _b, _c; // Create basic container elements for each category


  var containerEl = document.createElement("div");
  containerEl.id = category;
  containerEl.className = "category";
  containerEl.style.display = "none";

  for (var i = 0; i < 3; i++) {
    var columnEl = document.createElement("div");
    columnEl.className = "column column" + String(i);
    (_a = containerEl) === null || _a === void 0 ? void 0 : _a.appendChild(columnEl);
  }

  (_b = contentEl) === null || _b === void 0 ? void 0 : _b.appendChild(containerEl); // TODO only populate when you navigate to the first items

  populateItems(category); // Create menu items

  var buttonEl = document.createElement("button");
  buttonEl.id = category + "Button";
  buttonEl.className = "categoryButton";
  buttonEl.textContent = category;
  (_c = headerEl) === null || _c === void 0 ? void 0 : _c.appendChild(buttonEl);
}); // TODO navigation directly to a particular list

window.addEventListener('scroll', function () {
  if (document.body.scrollHeight - document.body.scrollTop <= document.body.clientHeight + 100) {
    populateItems();
  }
});
/* Init */

(_c = document.getElementById("crossSVG")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
  this.classList.toggle('open');
}); // Attach handlers

var menuItem = document.getElementById("");

if (menuItem) {
  menuItem.onclick = function (ev) {// todo mark classes/display none on stuff
  };
}

function getWidth() {
  return Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth);
}

function getHeight() {
  return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight);
}
},{"./config":"config.ts"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "33057" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","lweb.ts"], null)
//# sourceMappingURL=/dist/lweb.js.map