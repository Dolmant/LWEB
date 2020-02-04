import config from "./config"

interface assetItem {
  file: string
  files?: string[]
  text: string
}

const loadImage = (targetEl: HTMLElement, source: assetItem) => {
  // Loads image into target el, displays loading graphic while its fetching
  switch(true) {
    case (source.file.includes(".mp4")): {
      // todo
      break
    }
    case (source.file.includes(".gif")): {
      // todo
      break
    }
    case (source.file.includes(".jpg")): {
      // todo
      if (source.files) {
        // Attach different stuff
        break
      }
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
const highDefImage = (targetEl: HTMLImageElement, source: assetItem) => {
  // Loads high def version, incrementally streams update
  switch(true) {
    case (source.file.includes(".gif")): {
      // todo
      break
    }
    case (source.file.includes(".mp4")): {
      // todo
      break
    }
    case (source.file.includes(".jpg")): {
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
Object.keys(config).forEach(category => {
  // todo iterate and load
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