# Palpite

> Esta aplicação permite ao usuário fazer palpites para tentar adivinhar o número que é retornado por uma requisição de API. A API utilizada para a consulta é https://us-central1-ss-devops.cloudfunctions.net/

## Tabela de conteúdos

<!--ts-->

- [Palpite](#palpite)
- [Tabela de conteúdos](#tabela-de-conteúdos)
- [Descrição](#descrição)
- [Responsividade](#responsividade)
- [Screenshots](#screenshots)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Status](#status)
- [Contato](#contato)

<!--te-->

## Descrição

A aplicação objetiva permitir ao usuário fazer palpites de 1 a 999 para tentar adivinhar o número que é retornado por uma requisição de API.

A lógica da aplicação se baseia em receber o input do usuário, consultar uma API e tratar o retorno da requisição.
Ao receber o retorno da requisição, o input do usuário é exibido na tela e é retornado acima do valor númerico um texto que pode descrever o seguinte: o status do palpite (maior, menor, acerto) ou se a requisição retornou um erro.

O input do usuário é exibido na tela por meio de imagens. A lógica de exibição dos números se deu pela montagem de pequenos blocos de imagens de forma a "desenhar" os números desejados.

## Responsividade

A responsividade do layout da aplicação pode ser visualizada ao acessá-la em um dispositivo com resolução acima ou abaixo de 768px de largura. O valor de 768px foi escolhido por ser um dos padrões de breakpoints mais utilizados no mercado, que é o do Bootstrap. Para verificar se o layout da aplicação estava condizente com o do Figma foi utilizada a extensão Perfect Pixel do navegador Google Chrome.

## Screenshots

![Example screenshot](https://imgur.com/X9Vyycp.jpg)
![Example screenshot](https://imgur.com/cSmZuk2.jpg)
![Example screenshot](https://imgur.com/nPXRMjF.jpg)
![Example screenshot](https://imgur.com/o9o10KY.jpg)

## Tecnologias

- JavaScript
- CSS
- HTML

## Instalação

Para rodar aplicação faça o seguinte:

```bash
# Clone este repositório

git clone https://github.com/jeanmendescs/which_number_is.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd which_number_is

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start
```

## Status

Finalizado.

## Contato

<div style="display:flex">
<a href="https://github.com/jeanmendescs">
 <img height="auto" src="https://avatars3.githubusercontent.com/u/57002849?s=400&u=fff71a8a729144edec9bfd51b2d6dd89af52e00a&v=4" width="100px;" alt="Jean's Profile Picture"/>
 <br />
 <sub style="display:block; text-align:center;"><span >Jean Carlos</span></sub></a> <a href="https://github.com/jeanmendescs" title="Jean's Profile Picture"></a>
</div>

Sinta-se à vontade para entrar em contato comigo.

<div style="display: inline-block;">
<a href="https://www.linkedin.com/in/jean-mendes//"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Profile" ></a>

<a href="mailto:mendes.jean.cs@gmail.com"><img src="https://img.shields.io/badge/gmail-D14836?&style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" ></a>

</div>
