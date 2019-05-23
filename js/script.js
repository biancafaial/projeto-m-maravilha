const boxPerfil = document.querySelector('.maravilhosas__box');
const botao = document.getElementById('button');

botao.addEventListener("click", (evento) => {
    const
})

fetch('https://theblackwomanhistory.firebaseio.com/.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        data.content.forEach((mulher) => {
            const card = document.createElement('div');
            card.setAttribute('class', 'maravilhosas__perfil');
            boxPerfil.appendChild(card);
           
            // definir imagem
            const img = document.createElement('img');
            img.setAttribute('class','img-responsive');

            //comparação caso a imagem seja undefined o else irá definir o png como imagem do card
            // outro mode de fazer a comparação usando OU seria if (mulher.metadata == undefined || mulher.metadata.image == "")
            if (mulher.metadata && mulher.metadata.image){
                img.setAttribute('src', mulher.metadata.image.url);
            } else{
                img.setAttribute('src','./img/img-mulher.png');
            }
            card.appendChild(img);

            const nome = document.createElement('p');
            nome.textContent = mulher.title;
            card.appendChild(nome);
        })
        
    })
    .catch((erro) => {
        console.log(erro);
    })