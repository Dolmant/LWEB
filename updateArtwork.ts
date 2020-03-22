import * as fs from "fs"
import fetch from "node-fetch"


const albums = [
  {albumID: "1364955", name: "2D"},
  {albumID: "1364956", name: "3D"},
]

const outputJSON = {} as {[key:string]: any}

albums.forEach(async (album) => {
  outputJSON[album.name] = {}
  let nextPage = 1
  const items = []
  while (nextPage) {
    const results = await fetch("https://www.artstation.com/users/leotide/projects.json?album_id="+album.albumID+"&page=" + String(nextPage))
      .then((res: any) => res.json())
    if (results?.data?.length) {
      items.push(...results.data)
      nextPage++
    } else {
      nextPage = 0
    }
  }
  for (const item of items.slice(0, 1)) {
    const itemDetails = await fetch("https://www.artstation.com/projects/"+item.hash_id+".json")
      .then((res: any) => res.json())
    outputJSON[album.name][item.id] = []
    for (const asset of itemDetails.assets) {
      const result = {} as {player_embedded: "", image: ""}
      if (asset.has_embedded_player) {
        result.player_embedded = asset.player_embedded
      }
      if (asset.has_image) {
        const fileName = asset.image_url.substr(asset.image_url.lastIndexOf("/") + 1).replace(/[\#\?].*$/,'')
        // const thumbName = item.cover.thumb_url.substr(item.cover.thumb_url.lastIndexOf("/") + 1).replace(/[\#\?].*$/,'')
        await fetch(asset.image_url)
          .then((res) => {
            const dest = fs.createWriteStream("./processedImages/HQ/" + fileName)
            res.body.pipe(dest)
          })
          .then(() => result.image = fileName)
          .catch((e: Error) => console.log(e))
      }
      outputJSON[album.name][item.id].push(result)
    }
  }
  fs.writeFileSync("./data.ts", "export default " + JSON.stringify(outputJSON))
})