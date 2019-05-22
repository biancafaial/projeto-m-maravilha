const boxPerfil = document.querySelector('.maravilhosas__box')

fetch('https://theblackwomanhistory.firebaseio.com/.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        data.content.forEach(mulher => {
            const card = document.createElement('div');
            card.setAttribute('class', 'maravilhosas__perfil');
            boxPerfil.appendChild(card)

            const nome = document.createElement('p');
            nome.textContent = mulher.title;
            card.appendChild(nome);

            // definir imagem 

            // const img = document.createElement('img');
            // img.setAttribute('class','img-responsive');
            // img.setAttribute('src', mulher.metadata.image )
            // card.appendChild(img)
        })
    })
    .catch((erro) => {
        console.log(erro)
    })