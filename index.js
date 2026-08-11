const inputName = document.getElementById("inputName")
const inputBpm = document.getElementById("inputBpm")
const inputAr = document.getElementById("inputAr")
const btnInput = document.getElementById("btn-input")
const DT = document.getElementById("dt")
const ulStream160 = document.getElementById("ulStream160")
const ulStream180 = document.getElementById("ulStream180")
const ulStream190 = document.getElementById("ulStream190")
const ulStream200 = document.getElementById("ulStream200")
const ulDTar8 = document.getElementById("ulDTar8")
const ulDTar9 = document.getElementById("ulDTar9")
const inputTipe = document.getElementById("inputTipe")

const beatmaps = JSON.parse(localStorage.getItem("beatmaps")) || []

function renderBeatmaps (){
    ulStream160.innerHTML = ""
    ulStream180.innerHTML = ""
    ulStream190.innerHTML = ""
    ulStream200.innerHTML = ""
    ulDTar8.innerHTML = ""
    ulDTar9.innerHTML = ""

    beatmaps.forEach((beatmap) => {
        if(beatmap.kategori.includes("Stream-bpm160")){
            const li = document.createElement("li")
            li.className = "song"
            
            const pName = document.createElement("p")
            pName.textContent = `${beatmap.nama}`
            pName.style.textDecoration = "underline"
            const pBpm = document.createElement("p")
            pBpm.textContent = `${beatmap.bpm}bpm`
            const pAr = document.createElement("p")
            pAr.textContent = `ar${beatmap.ar}`

            li.appendChild(pName)
            li.appendChild(pBpm)
            li.appendChild(pAr)
            
            ulStream160.appendChild(li)
        }
        if(beatmap.kategori.includes("Stream-bpm180")){
            const li = document.createElement("li")
            li.className = "song"
            
            const pName = document.createElement("p")
            pName.textContent = `${beatmap.nama}`
            pName.style.textDecoration = "underline"
            const pBpm = document.createElement("p")
            pBpm.textContent = `${beatmap.bpm}bpm`
            const pAr = document.createElement("p")
            pAr.textContent = `ar${beatmap.ar}`

            li.appendChild(pName)
            li.appendChild(pBpm)
            li.appendChild(pAr)
            
            ulStream180.appendChild(li)
        }
        if(beatmap.kategori.includes("Stream-bpm190")){
            const li = document.createElement("li")
            li.className = "song"
            
            const pName = document.createElement("p")
            pName.textContent = `${beatmap.nama}`
            pName.style.textDecoration = "underline"
            const pBpm = document.createElement("p")
            pBpm.textContent = `${beatmap.bpm}bpm`
            const pAr = document.createElement("p")
            pAr.textContent = `ar${beatmap.ar}`

            li.appendChild(pName)
            li.appendChild(pBpm)
            li.appendChild(pAr)
            
            ulStream190.appendChild(li)
        }
        if(beatmap.kategori.includes("Stream-bpm200")){
            const li = document.createElement("li")
            li.className = "song"
            
            const pName = document.createElement("p")
            pName.textContent = `${beatmap.nama}`
            pName.style.textDecoration = "underline"
            const pBpm = document.createElement("p")
            pBpm.textContent = `${beatmap.bpm}bpm`
            const pAr = document.createElement("p")
            pAr.textContent = `ar${beatmap.ar}`

            li.appendChild(pName)
            li.appendChild(pBpm)
            li.appendChild(pAr)
            
            ulStream200.appendChild(li)
        }

        if(beatmap.kategori.includes("DT-ar8")){
            const li = document.createElement("li")
            li.className = "song"
            
            const pName = document.createElement("p")
            pName.textContent = `${beatmap.nama}`
            pName.style.textDecoration = "underline"
            const pBpm = document.createElement("p")
            pBpm.textContent = `${beatmap.bpm}bpm`
            const pAr = document.createElement("p")
            pAr.textContent = `ar${beatmap.ar}`

            li.appendChild(pName)
            li.appendChild(pBpm)
            li.appendChild(pAr)
            
            ulDTar8.appendChild(li)
        }
        if(beatmap.kategori.includes("DT-ar9")){
            const li = document.createElement("li")
            li.className = "song"
            
            const pName = document.createElement("p")
            pName.textContent = `${beatmap.nama}`
            pName.style.textDecoration = "underline"
            const pBpm = document.createElement("p")
            pBpm.textContent = `${beatmap.bpm}bpm`
            const pAr = document.createElement("p")
            pAr.textContent = `ar${beatmap.ar}`

            li.appendChild(pName)
            li.appendChild(pBpm)
            li.appendChild(pAr)
            
            ulDTar9.appendChild(li)
        }
    })
}
renderBeatmaps()

btnInput.addEventListener("click", function (){
    const bpm = inputBpm.value
    const ar = inputAr.value

    let kategoriBpm = ""
    let kategoriAr = ""

    if(inputName.value === "" ||  inputBpm === "" || inputAr === ""){
        return alert("jangan kosong")

    }
    
    if(inputTipe.value === "DT" || inputTipe.value === "Keduanya"){
        if(ar >= 9){
            kategoriAr = "DT-ar9"
        } else if(ar >= 8){
            kategoriAr = "DT-ar8"
        } else {
            kategoriAr = "lainnya"
        }

    }
    
    if(inputTipe.value === "Stream" || inputTipe.value === "Keduanya"){
        if(bpm >= 200){
            kategoriBpm = "Stream-bpm200"
        } else if (bpm >= 190) {
            kategoriBpm = "Stream-bpm190"
        } else if (bpm >= 180) {
            kategoriBpm = "Stream-bpm180"
        } else if (bpm >= 160) {
            kategoriBpm = "Stream-bpm160"
        } else {
            kategoriBpm = "lainnya"
        }

    }
    
    const beatmapsBaru = {
        nama: inputName.value,
        bpm: bpm,
        ar: ar,
        kategori: [kategoriBpm, kategoriAr]
    }

    inputName.value = ""
    inputBpm.value = ""
    inputAr.value = ""
    
    beatmaps.push(beatmapsBaru)
    console.log(beatmaps)

    localStorage.setItem("beatmaps", JSON.stringify(beatmaps))

    renderBeatmaps()

})

console.log(beatmaps)