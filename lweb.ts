import config from "./config"

interface assetItem {
  file: string
  files?: string[]
  text: string
}

const loadingSpinner = "/processedImages/thumbs/MV_AniBlack.gif"

const getThumbPath = (file: string) => {
  return "/processedImages/thumbs/" + file
}
const getHQPath = (file: string) => {
  return "/processedImages/HQ/" + file
}

let cursors: {[x:string]: number} = {}

const loadAsset = (targetEl: HTMLElement, source: assetItem) => {
  // Loads image into target el, displays loading graphic while its fetching
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

      var backgroundImg = new Image;
      backgroundImg.addEventListener("onload", function(event) {
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
      // todo
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
(Object.keys(config) as Array<keyof typeof config>).forEach((category) => {
  const categoryContainer = document.getElementById(category)
  if (!categoryContainer) {
    return
  }
  const populateItems = () => {
    const initI = cursors[category] || 0
    const endI = initI + 9
    for (let i = initI; i < endI; i++) {
      let index = i
      // todo check this correctly lines up
      if (config[category].length >= i) {
        cursors[category] = i - config[category].length
        index = i - config[category].length
      }
      loadAsset(categoryContainer, config[category][index])
      cursors[category] = (cursors[category] || 0) + 1
    }
  }
  categoryContainer.addEventListener('scroll', function() {
    // todo check this works
    if ((this.scrollTop + this.scrollHeight) >= this.offsetHeight) {
      populateItems()
    }
  })
  populateItems()
})

window.onscroll = () => {
  // Hook into scroll of elements. If at end, add extra images to the element
}

// Attach handlers
const menuItem = document.getElementById("")
if (menuItem) {
  menuItem.onclick = ((ev: MouseEvent) => {
    // todo mark classes/display none on stuff
  })
}