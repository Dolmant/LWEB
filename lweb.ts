import config from "./config"

const loadImage = (targetEl: HTMLElement, source: string) => {
  // Loads image into target el, displays loading graphic while its fetching
  switch(true) {
    case (source.includes(".mp4")): {
      // todo
      break
    }
    case (source.includes(".jpg")): {
      // todo
      break
    }
    case (source.includes(".gltf")): {
      // todo
      break
    }
    default: {
      console.log("Error, unknown file type: " + source)
    }
  }
}
const highDefImage = (targetEl: HTMLImageElement, source: string) => {
  // Loads high def version, incrementally streams update
  switch(true) {
    case (source.includes(".mp4")): {
      // todo
      break
    }
    case (source.includes(".jpg")): {
      // todo
      break
    }
    case (source.includes(".gltf")): {
      // todo
      break
    }
    default: {
      console.log("Error, unknown file type: " + source)
    }
  }
}

window.onscroll = () => {
  // Hook into scroll of elements. If at end, add extra images to the element
}