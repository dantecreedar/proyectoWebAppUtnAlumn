/* variables */
const title_1 = document.querySelector('#title_1')
const subtitle_1 = document.querySelector('#subtitle_1')
const title_2 = document.querySelector('#title_2')
const subtitle_2 = document.querySelector('#subtitle_2')
const parrafo = document.querySelector('#parrafo')
const parrafo_2 = document.querySelector('#parrafo_2')
const imagen = document.createElement('img')
const imagen_2 = document.createElement('img')
const divImagen = document.querySelector('#divImage')
const divImagen_2 = document.querySelector('#divImage_2')


/* peticion */
const dataApi = async ()=>{
    const data = await fetch("https://rickandmortyapi.com/api/character/?name=rick&status=alive")
    console.log("cargar promesa...")
    console.log(data)
    const datajson = await data.json()
    console.log("cargando la resouesta...")
    console.log(datajson.results)

    /* response */
    title_1.innerHTML = datajson.results[0].name
    title_2.innerHTML = datajson.results[1].name
    subtitle_1.innerHTML = datajson.results[0].status
    subtitle_2.innerHTML = datajson.results[1].status
    parrafo.innerHTML = datajson.results[0].species
    parrafo_2.innerHTML = datajson.results[1].species

    /* imagen */
    imagen.setAttribute('src', datajson.results[0].image)
    imagen_2.setAttribute('src', datajson.results[1].image)

    divImagen.appendChild(imagen)
    divImagen_2.appendChild(imagen_2)
}

dataApi()