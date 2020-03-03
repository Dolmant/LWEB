import config from "./config"
import particles from "./particles"

interface assetItem {
  file: string
  files?: string[]
  text: string
}

particles("splash", "/assets/particlesBusted.json", () => console.log("Particles loaded"))

const loadingSpinner = "/processedImages/thumbs/MV_AniBlack.gif"

const getThumbPath = (file: string) => {
  return "/processedImages/thumbs/" + file
}
const getHQPath = (file: string) => {
  return "/processedImages/HQ/" + file
}

let cursors: {[x:string]: number} = {}
let selected: keyof typeof config | "" = ""

const selectCategory = (category: typeof selected) => {
  if (selected) {
    const item = document.getElementById(selected) as HTMLElement
    item.style.display = "none"
  }
  const item = document.getElementById(category) as HTMLElement
  item.style.display = "flex"
  selected = category
}

const loadAsset = (targetEl: Element, source: assetItem) => {
  // Loads image into target el, displays loading graphic while its fetching
  if (!source) {
    debugger;
  }
  switch(true) {
    case (source.file.includes(".mp4")): {
      // todo
      break
    }
    case (source.file.includes(".gif")):
    case (source.file.includes(".jpg")): {
      // todo
      var newImg = document.createElement("img");
      newImg.src = loadingSpinner
      targetEl.appendChild(newImg)

      newImg.addEventListener("click", function() {
        if (!this.classList.contains("selected")) {
          highDefAsset(this, source)
        }
        this.classList.toggle("selected")
      })

      var backgroundImg = new Image;
      backgroundImg.addEventListener("load", function(event) {
        const target = event.target as HTMLImageElement
        newImg.src = target.src;
      })
      backgroundImg.src = getThumbPath(source.file);
      break
    }
    case (source.file.includes(".gltf")): {
      // todo
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
      // todo
      break
    }
    default: {
      console.log("Error, unknown file type: " + source.file)
    }
  }
}

let balancing = false
const populateItems = (forcePopulate: typeof selected = "") => {
  const category = selected || forcePopulate
  if (category && !balancing) {
    let columns = 3
    if (getWidth() <= 300) {
      columns = 1
    } else if (getWidth() <= 600) {
      columns = 2
    }

    const initI = cursors[category] || 0
    const endI = initI + 9
    let i = initI
    const balanceImgs = () => {
      if (i >= endI) {
        balancing = false
        return
      }
      const parent = document?.getElementById(category) as HTMLElement;
      let index = i
      let target: Element = parent.children[0]
      for (let i = 1; i < columns; i++) {
        if (target?.clientHeight > parent.children[i]?.clientHeight) {
          target = parent.children[i]
        }
      }
      if (config[category].length <= i) {
        cursors[category] = i % config[category].length
        index = i % config[category].length
      }
      loadAsset(target, config[category][index])
      cursors[category] = (cursors[category] || 0) + 1
      i++
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
  if (document.body.scrollHeight - document.body.scrollTop <= document.body.clientHeight + 100) {
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
    document.documentElement.clientWidth
  );
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}
