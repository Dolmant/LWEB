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
},{}],"node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"particles.ts":[function(require,module,exports) {
var process = require("process");
"use strict";
/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* Modified by me
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var pJS = function pJS(tag_id, params) {
  var canvas_el = document.querySelector('#' + tag_id + ' > .particles-js-canvas-el');
  /* particles.js variables with default values */

  this.pJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#fff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: '',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 40,
        min: 20,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        offset: 0,
        offset_dist: 50,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000
        }
      },
      array: []
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      },
      mouse: {}
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors: {}
    },
    tmp: {}
  };
  var pJS = this.pJS;
  /* params settings */

  if (params) {
    Object.deepExtend(pJS, params);
  }

  pJS.tmp.obj = {
    size_value: pJS.particles.size.value,
    size_min: pJS.particles.size.min,
    size_anim_speed: pJS.particles.size.anim.speed,
    move_speed: pJS.particles.move.speed,
    line_linked_distance: pJS.particles.line_linked.distance,
    line_linked_offset: pJS.particles.line_linked.offset,
    line_linked_offset_dist: pJS.particles.line_linked.offset_dist,
    line_linked_width: pJS.particles.line_linked.width,
    mode_grab_distance: pJS.interactivity.modes.grab.distance,
    mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
    mode_bubble_size: pJS.interactivity.modes.bubble.size,
    mode_repulse_distance: pJS.interactivity.modes.repulse.distance
  };

  pJS.fn.retinaInit = function () {
    if (pJS.retina_detect && window.devicePixelRatio > 1) {
      pJS.canvas.pxratio = window.devicePixelRatio;
      pJS.tmp.retina = true;
    } else {
      pJS.canvas.pxratio = 1;
      pJS.tmp.retina = false;
    }

    pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
    pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;
    pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
    pJS.particles.size.min = pJS.tmp.obj.size_min * pJS.canvas.pxratio;
    pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
    pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
    pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
    pJS.particles.line_linked.offset = pJS.tmp.obj.line_linked_offset * pJS.canvas.pxratio;
    pJS.particles.line_linked.offset_dist = pJS.tmp.obj.line_linked_offset_dist * pJS.canvas.pxratio;
    pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
    pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
    pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;
  };
  /* ---------- pJS functions - canvas ------------ */


  pJS.fn.canvasInit = function () {
    pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
  };

  pJS.fn.canvasSize = function () {
    pJS.canvas.el.width = pJS.canvas.w;
    pJS.canvas.el.height = pJS.canvas.h;

    if (pJS && pJS.interactivity.events.resize) {
      window.addEventListener('resize', function () {
        pJS.canvas.w = pJS.canvas.el.offsetWidth;
        pJS.canvas.h = pJS.canvas.el.offsetHeight;
        /* resize canvas */

        if (pJS.tmp.retina) {
          pJS.canvas.w *= pJS.canvas.pxratio;
          pJS.canvas.h *= pJS.canvas.pxratio;
        }

        pJS.canvas.el.width = pJS.canvas.w;
        pJS.canvas.el.height = pJS.canvas.h;
        /* repaint canvas on anim disabled */

        if (!pJS.particles.move.enable) {
          pJS.fn.particlesEmpty();
          pJS.fn.particlesCreate();
          pJS.fn.particlesDraw();
          pJS.fn.vendors.densityAutoParticles();
        }
        /* density particles enabled */


        pJS.fn.vendors.densityAutoParticles();
      });
    }
  };

  pJS.fn.canvasPaint = function () {
    pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };

  pJS.fn.canvasClear = function () {
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };
  /* --------- pJS functions - particles ----------- */


  pJS.fn.particle = function (color, opacity, position) {
    /* size */
    this.radius = (pJS.particles.size.random ? Math.random() : 1) * (pJS.particles.size.value - pJS.particles.size.min) + pJS.particles.size.min;

    if (pJS.particles.size.anim.enable) {
      this.size_status = false;
      this.vs = pJS.particles.size.anim.speed / 100;

      if (!pJS.particles.size.anim.sync) {
        this.vs = this.vs * Math.random();
      }
    }
    /* position */


    this.x = position ? position.x : Math.random() * pJS.canvas.w;
    this.y = position ? position.y : Math.random() * pJS.canvas.h;
    /* check position  - into the canvas */

    if (this.x > pJS.canvas.w - this.radius * 2) this.x = this.x - this.radius;else if (this.x < this.radius * 2) this.x = this.x + this.radius;
    if (this.y > pJS.canvas.h - this.radius * 2) this.y = this.y - this.radius;else if (this.y < this.radius * 2) this.y = this.y + this.radius;
    /* check position - avoid overlap */

    if (pJS.particles.move.bounce) {
      pJS.fn.vendors.checkOverlap(this, position);
    }
    /* color */


    this.color = {};

    if (_typeof(color.value) == 'object') {
      if (color.value instanceof Array) {
        var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
        this.color.rgb = hexToRgb(color_selected);
      } else {
        if (color.value.r != undefined && color.value.g != undefined && color.value.b != undefined) {
          this.color.rgb = {
            r: color.value.r,
            g: color.value.g,
            b: color.value.b
          };
        }

        if (color.value.h != undefined && color.value.s != undefined && color.value.l != undefined) {
          this.color.hsl = {
            h: color.value.h,
            s: color.value.s,
            l: color.value.l
          };
        }
      }
    } else if (color.value == 'random') {
      this.color.rgb = {
        r: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
        g: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
        b: Math.floor(Math.random() * (255 - 0 + 1)) + 0
      };
    } else if (typeof color.value == 'string') {
      this.color = color;
      this.color.rgb = hexToRgb(this.color.value);
    }
    /* opacity */


    this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;

    if (pJS.particles.opacity.anim.enable) {
      this.opacity_status = false;
      this.vo = pJS.particles.opacity.anim.speed / 100;

      if (!pJS.particles.opacity.anim.sync) {
        this.vo = this.vo * Math.random();
      }
    }
    /* animation - velocity for speed */


    var velbase = {};

    switch (pJS.particles.move.direction) {
      case 'top':
        velbase = {
          x: 0,
          y: -1
        };
        break;

      case 'top-right':
        velbase = {
          x: 0.5,
          y: -0.5
        };
        break;

      case 'right':
        velbase = {
          x: 1,
          y: -0
        };
        break;

      case 'bottom-right':
        velbase = {
          x: 0.5,
          y: 0.5
        };
        break;

      case 'bottom':
        velbase = {
          x: 0,
          y: 1
        };
        break;

      case 'bottom-left':
        velbase = {
          x: -0.5,
          y: 1
        };
        break;

      case 'left':
        velbase = {
          x: -1,
          y: 0
        };
        break;

      case 'top-left':
        velbase = {
          x: -0.5,
          y: -0.5
        };
        break;

      default:
        velbase = {
          x: 0,
          y: 0
        };
        break;
    }

    if (pJS.particles.move.straight) {
      this.vx = velbase.x;
      this.vy = velbase.y;

      if (pJS.particles.move.random) {
        this.vx = this.vx * Math.random();
        this.vy = this.vy * Math.random();
      }
    } else {
      this.vx = velbase.x + Math.random() - 0.5;
      this.vy = velbase.y + Math.random() - 0.5;
    } // var theta = 2.0 * Math.PI * Math.random();
    // this.vx = Math.cos(theta);
    // this.vy = Math.sin(theta);


    this.vx_i = this.vx;
    this.vy_i = this.vy;
    /* if shape is image */

    var shape_type = pJS.particles.shape.type;

    if (_typeof(shape_type) == 'object') {
      if (shape_type instanceof Array) {
        var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
        this.shape = shape_selected;
      }
    } else {
      this.shape = shape_type;
    }

    if (this.shape == 'image') {
      var sh = pJS.particles.shape;
      this.img = {
        src: sh.image.src,
        ratio: sh.image.width / sh.image.height
      };
      if (!this.img.ratio) this.img.ratio = 1;

      if (pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined) {
        pJS.fn.vendors.createSvgImg(this);

        if (pJS.tmp.pushing) {
          this.img.loaded = false;
        }
      }
    }
  };

  pJS.fn.particle.prototype.draw = function () {
    var p = this;

    if (p.radius_bubble != undefined) {
      var radius = p.radius_bubble;
    } else {
      var radius = p.radius;
    }

    if (p.opacity_bubble != undefined) {
      var opacity = p.opacity_bubble;
    } else {
      var opacity = p.opacity;
    }

    if (p.color.rgb) {
      var color_value = 'rgba(' + p.color.rgb.r + ',' + p.color.rgb.g + ',' + p.color.rgb.b + ',' + opacity + ')';
    } else {
      var color_value = 'hsla(' + p.color.hsl.h + ',' + p.color.hsl.s + '%,' + p.color.hsl.l + '%,' + opacity + ')';
    }

    pJS.canvas.ctx.fillStyle = color_value;
    pJS.canvas.ctx.beginPath();

    switch (p.shape) {
      case 'circle':
        pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
        break;

      case 'edge':
        pJS.canvas.ctx.rect(p.x - radius, p.y - radius, radius * 2, radius * 2);
        break;

      case 'triangle':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius, p.y + radius / 1.66, radius * 2, 3, 2);
        break;

      case 'polygon':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius / (pJS.particles.shape.polygon.nb_sides / 3.5), // startX
        p.y - radius / (2.66 / 3.5), // startY
        radius * 2.66 / (pJS.particles.shape.polygon.nb_sides / 3), // sideLength
        pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
        1 // sideCountDenominator
        );
        break;

      case 'star':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius * 2 / (pJS.particles.shape.polygon.nb_sides / 4), // startX
        p.y - radius / (2 * 2.66 / 3.5), // startY
        radius * 2 * 2.66 / (pJS.particles.shape.polygon.nb_sides / 3), // sideLength
        pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
        2 // sideCountDenominator
        );
        break;

      case 'image':
        var draw = function draw() {
          pJS.canvas.ctx.drawImage(img_obj, p.x - radius, p.y - radius, radius * 2, radius * 2 / p.img.ratio);
        };

        if (pJS.tmp.img_type == 'svg') {
          var img_obj = p.img.obj;
        } else {
          var img_obj = pJS.tmp.img_obj;
        }

        if (img_obj) {
          draw();
        }

        break;
    }

    pJS.canvas.ctx.closePath();

    if (pJS.particles.shape.stroke.width > 0) {
      pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
      pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
      pJS.canvas.ctx.stroke();
    }

    pJS.canvas.ctx.fill();
  };

  pJS.fn.particlesCreate = function () {
    for (var i = 0; i < pJS.particles.number.value; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
    }
  };

  pJS.fn.particlesUpdate = function () {
    for (var i = 0; i < pJS.particles.array.length; i++) {
      /* the particle */
      var p = pJS.particles.array[i]; // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
      // var f = -BANG_SIZE / d;
      // if ( d < BANG_SIZE ) {
      //     var t = Math.atan2( dy, dx );
      //     p.vx = f * Math.cos(t);
      //     p.vy = f * Math.sin(t);
      // }

      /* move the particle */

      if (pJS.particles.move.enable) {
        var ms = pJS.particles.move.speed / 2;
        p.x += p.vx * ms;
        p.y += p.vy * ms;
      }
      /* change opacity status */


      if (pJS.particles.opacity.anim.enable) {
        if (p.opacity_status == true) {
          if (p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
          p.opacity += p.vo;
        } else {
          if (p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
          p.opacity -= p.vo;
        }

        if (p.opacity < 0) p.opacity = 0;
      }
      /* change size */


      if (pJS.particles.size.anim.enable) {
        if (p.size_status == true) {
          if (p.radius >= pJS.particles.size.value) p.size_status = false;
          p.radius += p.vs;
        } else {
          if (p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
          p.radius -= p.vs;
        }

        if (p.radius < 0) p.radius = 0;
      }
      /* change particle position if it is out of canvas */


      if (pJS.particles.move.out_mode == 'bounce') {
        var new_pos = {
          x_left: p.radius,
          x_right: pJS.canvas.w,
          y_top: p.radius,
          y_bottom: pJS.canvas.h
        };
      } else {
        var new_pos = {
          x_left: -p.radius,
          x_right: pJS.canvas.w + p.radius,
          y_top: -p.radius,
          y_bottom: pJS.canvas.h + p.radius
        };
      }

      if (p.x - p.radius > pJS.canvas.w) {
        p.x = new_pos.x_left;
        p.y = Math.random() * pJS.canvas.h;
      } else if (p.x + p.radius < 0) {
        p.x = new_pos.x_right;
        p.y = Math.random() * pJS.canvas.h;
      }

      if (p.y - p.radius > pJS.canvas.h) {
        p.y = new_pos.y_top;
        p.x = Math.random() * pJS.canvas.w;
      } else if (p.y + p.radius < 0) {
        p.y = new_pos.y_bottom;
        p.x = Math.random() * pJS.canvas.w;
      }
      /* out of canvas modes */


      switch (pJS.particles.move.out_mode) {
        case 'bounce':
          if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;else if (p.x - p.radius < 0) p.vx = -p.vx;
          if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;else if (p.y - p.radius < 0) p.vy = -p.vy;
          break;
      }
      /* events */


      if (isInArray('grab', pJS.interactivity.events.onhover.mode)) {
        pJS.fn.modes.grabParticle(p);
      }

      if (isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)) {
        pJS.fn.modes.bubbleParticle(p);
      }

      if (isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)) {
        pJS.fn.modes.repulseParticle(p);
      }
      /* interaction auto between particles */


      if (pJS.particles.line_linked.enable || pJS.particles.move.attract.enable) {
        for (var j = i + 1; j < pJS.particles.array.length; j++) {
          var p2 = pJS.particles.array[j];
          /* link particles */

          if (pJS.particles.line_linked.enable) {
            pJS.fn.interact.linkParticles(p, p2);
          }
          /* attract particles */


          if (pJS.particles.move.attract.enable) {
            pJS.fn.interact.attractParticles(p, p2);
          }
          /* bounce particles */


          if (pJS.particles.move.bounce) {
            pJS.fn.interact.bounceParticles(p, p2);
          }
        }
      }
    }
  };

  pJS.fn.particlesDraw = function () {
    /* clear canvas */
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
    /* update each particles param */

    pJS.fn.particlesUpdate();
    /* draw each particle */

    for (var i = 0; i < pJS.particles.array.length; i++) {
      var p = pJS.particles.array[i];
      p.draw();
    }
  };

  pJS.fn.particlesEmpty = function () {
    pJS.particles.array = [];
  };

  pJS.fn.particlesRefresh = function () {
    /* init all */
    cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
    cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
    pJS.tmp.source_svg = undefined;
    pJS.tmp.img_obj = undefined;
    pJS.tmp.count_svg = 0;
    pJS.fn.particlesEmpty();
    pJS.fn.canvasClear();
    /* restart */

    pJS.fn.vendors.start();
  };
  /* ---------- pJS functions - particles interaction ------------ */


  pJS.fn.interact.linkParticles = function (p1, p2) {
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx * dx + dy * dy);
    /* draw a line between p1 and p2 if the distance between them is under the config distance */

    if (dist <= pJS.particles.line_linked.distance) {
      var opacity_line = pJS.particles.line_linked.opacity - dist / (1 / pJS.particles.line_linked.opacity) / pJS.particles.line_linked.distance;

      if (opacity_line > 0) {
        /* style */
        var color_line = pJS.particles.line_linked.color_rgb_line;
        pJS.canvas.ctx.strokeStyle = 'rgba(' + color_line.r + ',' + color_line.g + ',' + color_line.b + ',' + opacity_line + ')';
        pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width; //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */

        /* path */

        var offset = pJS.particles.line_linked.offset;

        if (dist < pJS.particles.line_linked.offset_dist) {
          var atan = Math.atan2(dy, dx);
          var xperp = Math.sin(atan);
          var yperp = Math.cos(atan);
          pJS.canvas.ctx.beginPath();
          pJS.canvas.ctx.moveTo(p1.x + offset * xperp, p1.y + offset * yperp);
          pJS.canvas.ctx.lineTo(p2.x + offset * xperp, p2.y + offset * yperp);
          pJS.canvas.ctx.stroke();
          pJS.canvas.ctx.closePath();
          pJS.canvas.ctx.beginPath();
          pJS.canvas.ctx.moveTo(p1.x - offset * xperp, p1.y - offset * yperp);
          pJS.canvas.ctx.lineTo(p2.x - offset * xperp, p2.y - offset * yperp);
          pJS.canvas.ctx.stroke();
          pJS.canvas.ctx.closePath();
        } else {
          pJS.canvas.ctx.beginPath();
          pJS.canvas.ctx.moveTo(p1.x, p1.y);
          pJS.canvas.ctx.lineTo(p2.x, p2.y);
          pJS.canvas.ctx.stroke();
          pJS.canvas.ctx.closePath();
        }
      }
    }
  };

  pJS.fn.interact.attractParticles = function (p1, p2) {
    /* condensed particles */
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx * dx + dy * dy);

    if (dist <= pJS.particles.line_linked.distance) {
      var ax = dx / (pJS.particles.move.attract.rotateX * 1000),
          ay = dy / (pJS.particles.move.attract.rotateY * 1000);
      p1.vx -= ax;
      p1.vy -= ay;
      p2.vx += ax;
      p2.vy += ay;
    }
  };

  pJS.fn.interact.bounceParticles = function (p1, p2) {
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx * dx + dy * dy),
        dist_p = p1.radius + p2.radius;

    if (dist <= dist_p) {
      p1.vx = -p1.vx;
      p1.vy = -p1.vy;
      p2.vx = -p2.vx;
      p2.vy = -p2.vy;
    }
  };
  /* ---------- pJS functions - modes events ------------ */


  pJS.fn.modes.pushParticles = function (nb, pos) {
    pJS.tmp.pushing = true;

    for (var i = 0; i < nb; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value, {
        'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
        'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
      }));

      if (i == nb - 1) {
        if (!pJS.particles.move.enable) {
          pJS.fn.particlesDraw();
        }

        pJS.tmp.pushing = false;
      }
    }
  };

  pJS.fn.modes.removeParticles = function (nb) {
    pJS.particles.array.splice(0, nb);

    if (!pJS.particles.move.enable) {
      pJS.fn.particlesDraw();
    }
  };

  pJS.fn.modes.bubbleParticle = function (p) {
    /* on hover event */
    if (pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)) {
      var init = function init() {
        p.opacity_bubble = p.opacity;
        p.radius_bubble = p.radius;
      };
      /* mousemove - check ratio */


      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse),
          ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;

      if (dist_mouse <= pJS.interactivity.modes.bubble.distance) {
        if (ratio >= 0 && pJS.interactivity.status == 'mousemove') {
          /* size */
          if (pJS.interactivity.modes.bubble.size != pJS.particles.size.value) {
            if (pJS.interactivity.modes.bubble.size > pJS.particles.size.value) {
              var size = p.radius + pJS.interactivity.modes.bubble.size * ratio;

              if (size >= 0) {
                p.radius_bubble = size;
              }
            } else {
              var dif = p.radius - pJS.interactivity.modes.bubble.size,
                  size = p.radius - dif * ratio;

              if (size > 0) {
                p.radius_bubble = size;
              } else {
                p.radius_bubble = 0;
              }
            }
          }
          /* opacity */


          if (pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value) {
            if (pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value) {
              var opacity = pJS.interactivity.modes.bubble.opacity * ratio;

              if (opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity) {
                p.opacity_bubble = opacity;
              }
            } else {
              var opacity = p.opacity - (pJS.particles.opacity.value - pJS.interactivity.modes.bubble.opacity) * ratio;

              if (opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity) {
                p.opacity_bubble = opacity;
              }
            }
          }
        }
      } else {
        init();
      }
      /* mouseleave */


      if (pJS.interactivity.status == 'mouseleave') {
        init();
      }
    }
    /* on click event */
    else if (pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)) {
        var process = function process(bubble_param, particles_param, p_obj_bubble, p_obj, id) {
          if (bubble_param != particles_param) {
            if (!pJS.tmp.bubble_duration_end) {
              if (dist_mouse <= pJS.interactivity.modes.bubble.distance) {
                if (p_obj_bubble != undefined) var obj = p_obj_bubble;else var obj = p_obj;

                if (obj != bubble_param) {
                  var value = p_obj - time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration;
                  if (id == 'size') p.radius_bubble = value;
                  if (id == 'opacity') p.opacity_bubble = value;
                }
              } else {
                if (id == 'size') p.radius_bubble = undefined;
                if (id == 'opacity') p.opacity_bubble = undefined;
              }
            } else {
              if (p_obj_bubble != undefined) {
                var value_tmp = p_obj - time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration,
                    dif = bubble_param - value_tmp;
                value = bubble_param + dif;
                if (id == 'size') p.radius_bubble = value;
                if (id == 'opacity') p.opacity_bubble = value;
              }
            }
          }
        };

        if (pJS.tmp.bubble_clicking) {
          var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
              dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
              dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse),
              time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time) / 1000;

          if (time_spent > pJS.interactivity.modes.bubble.duration) {
            pJS.tmp.bubble_duration_end = true;
          }

          if (time_spent > pJS.interactivity.modes.bubble.duration * 2) {
            pJS.tmp.bubble_clicking = false;
            pJS.tmp.bubble_duration_end = false;
          }
        }

        if (pJS.tmp.bubble_clicking) {
          /* size */
          process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
          /* opacity */

          process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
        }
      }
  };

  pJS.fn.modes.repulseParticle = function (p) {
    if (pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {
      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
      var normVec = {
        x: dx_mouse / dist_mouse,
        y: dy_mouse / dist_mouse
      },
          repulseRadius = pJS.interactivity.modes.repulse.distance,
          velocity = 100,
          repulseFactor = clamp(1 / repulseRadius * (-1 * Math.pow(dist_mouse / repulseRadius, 2) + 1) * repulseRadius * velocity, 0, 50);
      var pos = {
        x: p.x + normVec.x * repulseFactor,
        y: p.y + normVec.y * repulseFactor
      };

      if (pJS.particles.move.out_mode == 'bounce') {
        if (pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
        if (pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
      } else {
        p.x = pos.x;
        p.y = pos.y;
      }
    } else if (pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {
      if (!pJS.tmp.repulse_finish) {
        pJS.tmp.repulse_count++;

        if (pJS.tmp.repulse_count == pJS.particles.array.length) {
          pJS.tmp.repulse_finish = true;
        }
      }

      if (pJS.tmp.repulse_clicking) {
        var process = function process() {
          var f = Math.atan2(dy, dx);
          p.vx = force * Math.cos(f);
          p.vy = force * Math.sin(f);

          if (pJS.particles.move.out_mode == 'bounce') {
            var pos = {
              x: p.x + p.vx,
              y: p.y + p.vy
            };
            if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;else if (pos.x - p.radius < 0) p.vx = -p.vx;
            if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;else if (pos.y - p.radius < 0) p.vy = -p.vy;
          }
        }; // default


        var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance / 6, 3);
        var dx = pJS.interactivity.mouse.click_pos_x - p.x,
            dy = pJS.interactivity.mouse.click_pos_y - p.y,
            d = dx * dx + dy * dy;
        var force = -repulseRadius / d * 1;

        if (d <= repulseRadius) {
          process();
        } // bang - slow motion mode
        // if(!pJS.tmp.repulse_finish){
        //   if(d <= repulseRadius){
        //     process();
        //   }
        // }else{
        //   process();
        // }

      } else {
        if (pJS.tmp.repulse_clicking == false) {
          p.vx = p.vx_i;
          p.vy = p.vy_i;
        }
      }
    }
  };

  pJS.fn.modes.grabParticle = function (p) {
    if (pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove') {
      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
      /* draw a line between the cursor and the particle if the distance between them is under the config distance */

      if (dist_mouse <= pJS.interactivity.modes.grab.distance) {
        var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - dist_mouse / (1 / pJS.interactivity.modes.grab.line_linked.opacity) / pJS.interactivity.modes.grab.distance;

        if (opacity_line > 0) {
          /* style */
          var color_line = pJS.particles.line_linked.color_rgb_line;
          pJS.canvas.ctx.strokeStyle = 'rgba(' + color_line.r + ',' + color_line.g + ',' + color_line.b + ',' + opacity_line + ')';
          pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width; //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */

          /* path */

          pJS.canvas.ctx.beginPath();
          pJS.canvas.ctx.moveTo(p.x, p.y);
          pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
          pJS.canvas.ctx.stroke();
          pJS.canvas.ctx.closePath();
        }
      }
    }
  };
  /* ---------- pJS functions - vendors ------------ */


  pJS.fn.vendors.eventsListeners = function () {
    /* events target element */
    if (pJS.interactivity.detect_on == 'window') {
      pJS.interactivity.el = window;
    } else {
      pJS.interactivity.el = pJS.canvas.el;
    }
    /* detect mouse pos - on hover / click event */


    if (pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable) {
      /* el on mousemove */
      pJS.interactivity.el.addEventListener('mousemove', function (e) {
        if (pJS.interactivity.el == window) {
          var pos_x = e.clientX,
              pos_y = e.clientY;
        } else {
          var pos_x = e.offsetX || e.clientX,
              pos_y = e.offsetY || e.clientY;
        }

        pJS.interactivity.mouse.pos_x = pos_x;
        pJS.interactivity.mouse.pos_y = pos_y;

        if (pJS.tmp.retina) {
          pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
          pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
        }

        pJS.interactivity.status = 'mousemove';
      });
      /* el on onmouseleave */

      pJS.interactivity.el.addEventListener('mouseleave', function (e) {
        pJS.interactivity.mouse.pos_x = null;
        pJS.interactivity.mouse.pos_y = null;
        pJS.interactivity.status = 'mouseleave';
      });
    }
    /* on click event */


    if (pJS.interactivity.events.onclick.enable) {
      pJS.interactivity.el.addEventListener('click', function () {
        pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
        pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
        pJS.interactivity.mouse.click_time = new Date().getTime();

        if (pJS.interactivity.events.onclick.enable) {
          switch (pJS.interactivity.events.onclick.mode) {
            case 'push':
              if (pJS.particles.move.enable) {
                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
              } else {
                if (pJS.interactivity.modes.push.particles_nb == 1) {
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                } else if (pJS.interactivity.modes.push.particles_nb > 1) {
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                }
              }

              break;

            case 'remove':
              pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
              break;

            case 'bubble':
              pJS.tmp.bubble_clicking = true;
              break;

            case 'repulse':
              pJS.tmp.repulse_clicking = true;
              pJS.tmp.repulse_count = 0;
              pJS.tmp.repulse_finish = false;
              setTimeout(function () {
                pJS.tmp.repulse_clicking = false;
              }, pJS.interactivity.modes.repulse.duration * 1000);
              break;
          }
        }
      });
    }
  };

  pJS.fn.vendors.densityAutoParticles = function () {
    if (pJS.particles.number.density.enable) {
      /* calc area */
      var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;

      if (pJS.tmp.retina) {
        area = area / (pJS.canvas.pxratio * 2);
      }
      /* calc number of particles based on density area */


      var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;
      /* add or remove X particles */

      var missing_particles = pJS.particles.array.length - nb_particles;
      if (missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));else pJS.fn.modes.removeParticles(missing_particles);
    }
  };

  pJS.fn.vendors.checkOverlap = function (p1, position) {
    for (var i = 0; i < pJS.particles.array.length; i++) {
      var p2 = pJS.particles.array[i];
      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= p1.radius + p2.radius) {
        p1.x = position ? position.x : Math.random() * pJS.canvas.w;
        p1.y = position ? position.y : Math.random() * pJS.canvas.h;
        pJS.fn.vendors.checkOverlap(p1);
      }
    }
  };

  pJS.fn.vendors.createSvgImg = function (p) {
    /* set color to svg element */
    var svgXml = pJS.tmp.source_svg,
        rgbHex = /#([0-9A-F]{3,6})/gi,
        coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
      if (p.color.rgb) {
        var color_value = 'rgba(' + p.color.rgb.r + ',' + p.color.rgb.g + ',' + p.color.rgb.b + ',' + p.opacity + ')';
      } else {
        var color_value = 'hsla(' + p.color.hsl.h + ',' + p.color.hsl.s + '%,' + p.color.hsl.l + '%,' + p.opacity + ')';
      }

      return color_value;
    });
    /* prepare to create img with colored svg */

    var svg = new Blob([coloredSvgXml], {
      type: 'image/svg+xml;charset=utf-8'
    }),
        DOMURL = window.URL || window.webkitURL || window,
        url = DOMURL.createObjectURL(svg);
    /* create particle img obj */

    var img = new Image();
    img.addEventListener('load', function () {
      p.img.obj = img;
      p.img.loaded = true;
      DOMURL.revokeObjectURL(url);
      pJS.tmp.count_svg++;
    });
    img.src = url;
  };

  pJS.fn.vendors.destroypJS = function () {
    cancelAnimationFrame(pJS.fn.drawAnimFrame);
    canvas_el.remove();
    pJSDom = null;
  };

  pJS.fn.vendors.drawShape = function (c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator) {
    // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
    var sideCount = sideCountNumerator * sideCountDenominator;
    var decimalSides = sideCountNumerator / sideCountDenominator;
    var interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides;
    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians

    c.save();
    c.beginPath();
    c.translate(startX, startY);
    c.moveTo(0, 0);

    for (var i = 0; i < sideCount; i++) {
      c.lineTo(sideLength, 0);
      c.translate(sideLength, 0);
      c.rotate(interiorAngle);
    } //c.stroke();


    c.fill();
    c.restore();
  };

  pJS.fn.vendors.exportImg = function () {
    window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
  };

  pJS.fn.vendors.loadImg = function (type) {
    pJS.tmp.img_error = undefined;

    if (pJS.particles.shape.image.src != '') {
      if (type == 'svg') {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', pJS.particles.shape.image.src);

        xhr.onreadystatechange = function (data) {
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              pJS.tmp.source_svg = data.currentTarget.response;
              pJS.fn.vendors.checkBeforeDraw();
            } else {
              console.log('Error pJS - Image not found');
              pJS.tmp.img_error = true;
            }
          }
        };

        xhr.send();
      } else {
        var img = new Image();
        img.addEventListener('load', function () {
          pJS.tmp.img_obj = img;
          pJS.fn.vendors.checkBeforeDraw();
        });
        img.src = pJS.particles.shape.image.src;
      }
    } else {
      console.log('Error pJS - No image.src');
      pJS.tmp.img_error = true;
    }
  };

  pJS.fn.vendors.draw = function () {
    if (pJS.particles.shape.type == 'image') {
      if (pJS.tmp.img_type == 'svg') {
        if (pJS.tmp.count_svg >= pJS.particles.number.value) {
          pJS.fn.particlesDraw();
          if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        } else {
          //console.log('still loading...');
          if (!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }
      } else {
        if (pJS.tmp.img_obj != undefined) {
          pJS.fn.particlesDraw();
          if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        } else {
          if (!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }
      }
    } else {
      pJS.fn.particlesDraw();
      if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
    }
  };

  pJS.fn.vendors.checkBeforeDraw = function () {
    // if shape is image
    if (pJS.particles.shape.type == 'image') {
      if (pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined) {
        pJS.tmp.checkAnimFrame = requestAnimFrame(check);
      } else {
        //console.log('images loaded! cancel check');
        cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);

        if (!pJS.tmp.img_error) {
          pJS.fn.vendors.init();
          pJS.fn.vendors.draw();
        }
      }
    } else {
      pJS.fn.vendors.init();
      pJS.fn.vendors.draw();
    }
  };

  pJS.fn.vendors.init = function () {
    /* init canvas + particles */
    pJS.fn.retinaInit();
    pJS.fn.canvasInit();
    pJS.fn.canvasSize();
    pJS.fn.canvasPaint();
    pJS.fn.particlesCreate();
    pJS.fn.vendors.densityAutoParticles();
    /* particles.line_linked - convert hex colors to rgb */

    pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);
  };

  pJS.fn.vendors.start = function () {
    if (isInArray('image', pJS.particles.shape.type)) {
      pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
      pJS.fn.vendors.loadImg(pJS.tmp.img_type);
    } else {
      pJS.fn.vendors.checkBeforeDraw();
    }
  };
  /* ---------- pJS - start ------------ */


  pJS.fn.vendors.eventsListeners();
  pJS.fn.vendors.start();
};
/* ---------- global functions - vendors ------------ */


Object.deepExtend = function deepExtend(destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor && source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      deepExtend(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }

  return destination;
};

window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
}();

window.cancelRequestAnimFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}();

function hexToRgb(hex) {
  // By Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

;

function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
}

;

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}
/* ---------- particles.js functions - start ------------ */


var pJSDom = [];

var particlesJS = function particlesJS(tag_id, params) {
  //console.log(params);

  /* no string id? so it's object params, and set the id with default id */
  if (typeof tag_id != 'string') {
    params = tag_id;
    tag_id = 'particles-js';
  }
  /* no id? set the id to default id */


  if (!tag_id) {
    tag_id = 'particles-js';
  }
  /* pJS elements */


  var pJS_tag = document.getElementById(tag_id),
      pJS_canvas_class = 'particles-js-canvas-el',
      exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);
  /* remove canvas if exists into the pJS target tag */

  if (exist_canvas.length) {
    while (exist_canvas.length > 0) {
      pJS_tag.removeChild(exist_canvas[0]);
    }
  }
  /* create canvas element */


  var canvas_el = document.createElement('canvas');
  canvas_el.className = pJS_canvas_class;
  /* set size canvas */

  canvas_el.style.width = "100%";
  canvas_el.style.height = "100%";
  /* append canvas */

  var canvas = document.getElementById(tag_id).appendChild(canvas_el);
  /* launch particle.js */

  if (canvas != null) {
    pJSDom.push(new pJS(tag_id, params));
  }
};

particlesJS.load = function (tag_id, path_config_json, callback) {
  /* load json config */
  var particlesConfig = {
    "particles": {
      "number": {
        "value": 20,
        "density": {
          "enable": true,
          "value_area": 2000
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 25,
        "random": true,
        "min": 15,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 12,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 100,
        "color": "#ffffff",
        "offset": 8,
        "offset_dist": 60,
        "opacity": 0.6,
        "width": 6.5
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };
  var params = particlesConfig;
  particlesJS(tag_id, params);
  if (callback) callback();
};

exports.default = particlesJS.load;
},{"process":"node_modules/process/browser.js"}],"lweb.ts":[function(require,module,exports) {
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

var particles_1 = __importDefault(require("./particles"));

particles_1.default("splash", "/assets/particlesBusted.json", function () {
  return console.log("Particles loaded");
});
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
var headerEl = (_b = document) === null || _b === void 0 ? void 0 : _b.getElementById("menu");
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
  buttonEl.className = "panel";
  buttonEl.textContent = category;

  buttonEl.onclick = function () {
    selectCategory(category);
  };

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
},{"./config":"config.ts","./particles":"particles.ts"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52862" + '/');

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