const boxPerfil = document.querySelector('.maravilhosas__box');
const botao = document.getElementById('button');

fetch('http://localhost:5001/maravilhosas')
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
            // outro mode de fazer a comparação usando OU if (mulher.metadata == undefined || mulher.metadata.image == "")
            if (mulher.metadata && mulher.metadata.image){
                img.setAttribute('src', mulher.metadata.image.url);
            } else{
                img.setAttribute('src','./img/img-mulher.png');
            }
            card.appendChild(img);

            const nome = document.createElement('p');
            nome.textContent = mulher.title;
            card.appendChild(nome);
            
            //Criar Botão de para deletar o card adicionado
            const buttonDel = document.createElement('button');
            buttonDel.textContent = '✖';
            buttonDel.setAttribute('data-id', mulher.id);
            card.appendChild(buttonDel);

            buttonDel.addEventListener('click', () => {
                //Criação da contante para o botão poder pagar o card pai
                const thisCard = buttonDel.parentElement;
                const cardPai = thisCard.parentElement;

                //rederização com o id para poder apagar o card 
                fetch(`http://localhost:5001/maravilhosas/${mulher.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                 
                })


                .then(() => {
                    cardPai.removeChild(thisCard)
                   
                    })
                .catch((erro) => {
                        console.log(erro)

                    })
            })    
        })
        
    })
    .catch((erro) => {
        console.log(erro);
    })

    //Metodo POST para adicionar nome e imagem
    botao.addEventListener("click", () => {

        const nome = document.querySelector("#name").value;
        const endereco = document.querySelector("#enderecoImg").value;
        console.log(nome, endereco)
    
    
        fetch("http://localhost:5001/maravilhosas",  {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                'title':nome,
                'metadata': {
                    'image': {
                        'url': endereco
                    }
                }
               
            })
    
        })
        .then((response) => {
            return response.json();
        })
        .then((data) =>{
            console.log(data)
        
    
        })
        .catch((erro)=>{
            console.log(erro)
        }) 
    })