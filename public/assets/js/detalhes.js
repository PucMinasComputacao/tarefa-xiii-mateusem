async function fetchJogo(id) {

    const response =
        await fetch(`http://localhost:3000/jogos/${id}`)

    const jogo =
        await response.json()

    return jogo
}

function renderDetalhes(jogo) {

    const detalhesJogo =
        document.getElementById("detalhes-jogo")

    detalhesJogo.innerHTML = `

        <div class="row">

            <div class="col-md-6">

                <img src="${jogo.imagem_principal}"
                class="img-fluid rounded shadow"
                alt="${jogo.nome}">

            </div>

            <div class="col-md-6">

                <h1 class="mb-3">

                    ${jogo.nome}

                </h1>

                <p>

                    ${jogo.conteudo}

                </p>

                <ul class="list-group">

                    <li class="list-group-item">

                        <strong>Gênero:</strong>
                        ${jogo.genero}

                    </li>

                    <li class="list-group-item">

                        <strong>Estúdio:</strong>
                        ${jogo.estudio}

                    </li>

                    <li class="list-group-item">

                        <strong>Lançamento:</strong>
                        ${jogo.lancamento}

                    </li>

                    <li class="list-group-item">

                        <strong>Plataformas:</strong>
                        ${jogo.plataforma}

                    </li>

                    <li class="list-group-item">

                        <strong>Nota:</strong>
                        ${jogo.nota}

                    </li>

                </ul>

            </div>

        </div>

    `
}

function renderPersonagens(jogo) {

    const listaPersonagens =
        document.getElementById("lista-personagens")

    listaPersonagens.innerHTML = ""

    jogo.personagem.forEach(personagem => {

        listaPersonagens.innerHTML += `

            <div class="col-12 col-md-6 col-lg-4">

                <div class="card h-100 shadow">

                    <img src="${personagem.imagem}"
                    class="card-img-top"
                    alt="${personagem.nome}">

                    <div class="card-body">

                        <h5 class="card-title">

                            ${personagem.nome}

                        </h5>

                        <p class="card-text">

                            ${personagem.descricao}

                        </p>

                    </div>

                </div>

            </div>

        `
    })
}

async function init() {

    const parametros =
        new URLSearchParams(window.location.search)

    const id =
        Number(parametros.get("id"))

    const jogo =
        await fetchJogo(id)

    renderDetalhes(jogo)

    renderPersonagens(jogo)
}

init()