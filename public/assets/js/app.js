async function fetchItems() {

    const response =
        await fetch("http://localhost:3000/jogos")

    const jogos =
        await response.json()
    
        return jogos
}

function createCard(jogo) {

    return `

            <div class="col-12 col-md-6 col-lg-4">

                <div class="card h-100 shadow">

                    <img src="${jogo.imagem_principal}"
                    class="card-img-top"
                    alt="${jogo.nome}">

                    <div class="card-body d-flex flex-column">

                        <h5 class="card-title">
                            ${jogo.nome}
                        </h5>

                        <p class="card-text">
                            ${jogo.descricao}
                        </p>

                        <a href="detalhes.html?id=${jogo.id}"
                        class="btn btn-dark mt-auto">

                            Ver Detalhes

                        </a>

                    </div>

                </div>

            </div>

        `
}

function renderCards(jogos) {

    const listaJogos = document.getElementById("lista-jogos")

    listaJogos.innerHTML = ""

    jogos.forEach(jogo => {

        const card = createCard(jogo)

        listaJogos.innerHTML += card
    })

}

async function init() {

    const jogos = await fetchItems()

    renderCards(jogos)

    await renderCarousel()
}


async function renderCarousel () {

    const jogos = await fetchItems()

    const jogosDestaques = jogos.filter(jogo => jogo.destaque)

    console.log("Jogos recebidos:", jogos)

    const indicadores = document.getElementById("indicadores-carousel")

    const carousel = document.getElementById("carousel-inner")

    indicadores.innerHTML = ""
    carousel.innerHTML = ""

    console.log(indicadores)
    console.log(carousel)
    console.log(jogosDestaques)

    jogosDestaques.forEach((jogo, index) => {

         const ativo = index === 0 ? "active" : ""

         indicadores.innerHTML += `
        
             <button
                 type="button"
                 data-bs-target="#carouselJogos"
                 data-bs-slide-to="${index}"
                 class="${ativo}">
             </button>
         `

         carousel.innerHTML += `
        
             <div class="carousel-item ${ativo}">

                 <img src="${jogo.imagem_principal}"
                 class="d-block w-100"
                 alt="${jogo.nome}">

                 <div class="carousel-caption d-none d-md-block">

                     <h5>${jogo.nome}</h5>

                     <p>${jogo.descricao}</p>

                 </div>

             </div>

         `
     })
}

init()
