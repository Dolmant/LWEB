import config from "./config"
import particles from "./particles"
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

interface assetItem {
  file: string
  files?: string[]
  text: string
}

particles("splash", "/assets/particlesBusted.json", () => console.log("Particles loaded"))

const loadingSpinner = "/processedImages/thumbs/MV_AniBlack.gif"

const getThumbPath = (file: string) => {
  return "/processedImages/thumbs/" + file.replace(".gltf", ".jpg").replace(".mp4", ".jpg")
}
const getHQPath = (file: string) => {
  return "/processedImages/HQ/" + file
}
const getRawPath = (file: string) => {
  return "/assets/" + file
}

let cursors: {[x:string]: number} = {}
let selected: keyof typeof config | "" = ""

const selectCategory = (category: typeof selected) => {
  if (selected === category) {
    return
  }
  const item = document.getElementById(category) as HTMLElement
  item.style.display = "flex"
  populateItems(category)
  if (selected) {
    const item = document.getElementById(selected) as HTMLElement
    item.style.display = "none"
  }
  selected = category

  // Scrolls to the beginning of the content. If page is being populated, will have to wait until balancing is done.
  const winheight = window.innerHeight || (document.documentElement || document.body).clientHeight
  const ensureScroll = () => {
    const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    if ((scrollTop < winheight - 100 || scrollTop > winheight + 100) && balancing) {
      setTimeout(ensureScroll, 25)
    } else {
      window.scrollTo({top: winheight, behavior: 'smooth' })
    }
  }
  ensureScroll()
}

const loadAsset = (targetEl: Element, source: assetItem) => {
  var newImg = document.createElement("img");
  newImg.src = loadingSpinner
  targetEl.appendChild(newImg)

  var backgroundImg = new Image;
  backgroundImg.addEventListener("load", function(event) {
    const target = event.target as HTMLImageElement
    newImg.src = target.src;
  })
  backgroundImg.src = getThumbPath(source.file);
  switch(true) {
    case (source.file.includes(".mp4")): {
      newImg.addEventListener("click", function() {
        if (!this.classList.contains("selected")) {
          var newVideo = document.createElement("video");
          newVideo.controls = true
          var newSource = document.createElement("source");
          newSource.src = getRawPath(source.file)
          newSource.type = "video/mp4"
          newSource.textContent = "Your browser does not support the video tag."
          
          newVideo.appendChild(newSource)
          targetEl.appendChild(newVideo)
        }
        this.classList.toggle("selected")
      })

      break
    }
    case (source.file.includes(".gif")):
    case (source.file.includes(".jpg")): {

      newImg.addEventListener("click", function() {
        if (!this.classList.contains("selected")) {
          highDefAsset(this, source)
        }
        this.classList.toggle("selected")
      })

      break
    }
    case (source.file.includes(".gltf")): {
      newImg.addEventListener("click", function() {
        if (!this.classList.contains("selected")) {
          var scene = new THREE.Scene();
          scene.background = new THREE.Color('white');
          var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
          var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
          scene.add( light );
    
          var loader = new GLTFLoader();
    
          // Optional: Provide a DRACOLoader instance to decode compressed mesh data
          var dracoLoader = new DRACOLoader();
          dracoLoader.setDecoderPath( '/draco/' );
          loader.setDRACOLoader( dracoLoader );
    
          // Load a glTF resource
          loader.load(
            // resource URL
            getRawPath(source.file),
            // called when the resource is loaded
            function ( gltf ) {
              scene.add( gltf.scene );
    
              gltf.animations; // Array<THREE.AnimationClip>
              gltf.scene; // THREE.Group
              gltf.scenes; // Array<THREE.Group>
              gltf.cameras; // Array<THREE.Camera>
              gltf.asset; // Object

              var renderer = new THREE.WebGLRenderer();
              function animate() {
                requestAnimationFrame( animate );
                renderer.render( scene, camera );
              }
              const controls = new OrbitControls( camera, renderer.domElement );
              // controls.minDistance = 2;
              controls.maxDistance = 2
              controls.target.set( 0, 0, - 0.2 );
              controls.update();
    
              renderer.setSize( window.innerWidth, window.innerHeight );
              targetEl.appendChild( renderer.domElement );

              animate();
            },
            // called while loading is progressing
            function ( xhr ) {
              console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            },
            // called when loading has errors
            function ( error ) {
              console.log( 'An error happened' );
              console.log( error );
            }
          );
        }
        this.classList.toggle("selected")
      })
      break
    }
    default: {
      console.log("Error, unknown file type: " + source.file)
    }
  }
}
const highDefAsset = (targetEl: HTMLImageElement, source: assetItem) => {
  // Loads high def version, incrementally streams update
  switch(true) {
    case (source.file.includes(".jpg")):
    case (source.file.includes(".gif")): {
      var backgroundImg = new Image;
      backgroundImg.addEventListener("load", function(event) {
        const target = event.target as HTMLImageElement
        targetEl.src = target.src;
      })
      backgroundImg.src = getHQPath(source.file);
      break
    }
    case (source.file.includes(".mp4")): {
      // todo
      break
    }
    case (source.file.includes(".gltf")): {
      break
    }
    default: {
      console.log("Error, unknown file type: " + source.file)
    }
  }
}

let balancing = false
const populateItems = (forcePopulate: typeof selected = "") => {
  const category = forcePopulate || selected
  if (category && !balancing) {
    let columns = 3
    if (getWidth() <= 300) {
      columns = 1
    } else if (getWidth() <= 600) {
      columns = 2
    }

    const initI = cursors[category] || 0
    const endI = initI + 9
    let count = initI
    const balanceImgs = () => {
      let index = count
      if (count >= endI) {
        balancing = false
        const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
        const winheight = window.innerHeight || (document.documentElement || document.body).clientHeight
      
        if(scrollTop + winheight > getHeight() - 100) {
          setTimeout(populateItems)
        }
        return
      }
      const parent = document?.getElementById(category) as HTMLElement;

      // Get smallest column
      let target: Element = parent.children[0]
      for (let i = 1; i < columns; i++) {
        if (target?.clientHeight > parent.children[i]?.clientHeight) {
          target = parent.children[i]
        }
      }

      // Uses cound and index to prevent overflow
      if (config[category].length <= index) {
        cursors[category] = index % config[category].length
        index = index % config[category].length
      }
      loadAsset(target, config[category][index])
      cursors[category] = (cursors[category] || 0) + 1
      count++
      requestAnimationFrame(balanceImgs)
    }
    balancing = true
    requestAnimationFrame(balanceImgs)
  }
}

const contentEl = document?.getElementById("content");
const headerEl = document?.getElementById("menu");

(Object.keys(config) as Array<keyof typeof config>).forEach((category) => {
  // Create basic container elements for each category
  const containerEl = document.createElement("div")
  containerEl.id = category
  containerEl.className = "category"
  containerEl.style.display = "none"
  for(let i = 0; i < 3; i++) {
    const columnEl = document.createElement("div")
    columnEl.className = "column column" + String(i)
    containerEl?.appendChild(columnEl)
  }
  contentEl?.appendChild(containerEl)
  // TODO only populate when you navigate to the first items
  populateItems(category)

  // Create menu items
  const buttonEl = document.createElement("button")
  buttonEl.id = category + "Button"
  buttonEl.className = "panel"
  buttonEl.textContent = category
  buttonEl.onclick = () => {
    selectCategory(category)
  }
  headerEl?.appendChild(buttonEl)
})

// TODO navigation directly to a particular list

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
  var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight

  if(scrollTop + winheight > getHeight() - 100) {
    populateItems()
  }
})

/* Init */

document.getElementById("crossSVG")?.addEventListener("click", function() {
  this.classList.toggle('open');
})

// Attach handlers
const menuItem = document.getElementById("")
if (menuItem) {
  menuItem.onclick = ((ev: MouseEvent) => {
    // todo mark classes/display none on stuff
  })
}

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth,
    document.body.clientWidth
  );
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight,
    document.body.clientHeight
  );
}
