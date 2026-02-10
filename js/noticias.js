const apiKey = "80427bda8f1d41be9f3350b1fd826d4e";

const url = `https://lucky-poetry-9ba1.japaodiaadia.workers.dev/`;


async function carregarNoticias() {
  const container = document.getElementById("news-container");

  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();

    container.innerHTML = "";

    dados.articles.slice(0, 6).forEach(noticia => {
      const artigo = document.createElement("article");

      artigo.innerHTML = `
        <img src="${noticia.urlToImage || 'images/sem-foto.jpg'}" class="news-img">
        <h3>${noticia.title}</h3>
        <p>${noticia.description || "Sem descrição disponível."}</p>
        <a href="${noticia.url}" target="_blank">Ler notícia</a>
      `;

      container.appendChild(artigo);
    });

  } catch (erro) {
    container.innerHTML = "<p>Erro ao carregar notícias.</p>";
  }
}

carregarNoticias();
setInterval(carregarNoticias, 1800000);
