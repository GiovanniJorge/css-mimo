# CSS - Mimo

Exercícios em linguagem CSS usados nas aulas da Mimo — coleção organizada por tópicos (layouts responsivos, estilização moderna, interatividade com JavaScript e projetos práticos). Ideal para estudantes que querem aprender CSS de forma prática e estruturada.

## Conteúdo principal
- Projetos práticos focados em aprendizado de CSS, HTML e JavaScript.
- Estrutura organizada por pastas temáticas, cada uma contendo um projeto completo e independente.
- Exemplos de estilização moderna, layouts responsivos e interatividade com JavaScript.

## Badges
![Licença](https://img.shields.io/github/license/GiovanniJorge/css-mimo?style=flat-square)
![Projetos](https://img.shields.io/badge/quantidade-6%20projetos-blue?style=flat-square)

## Sumário
- [Visão geral](#visão-geral)
- [Estrutura do repositório](#estrutura-do-repositório)
- [Destaques do repositório](#destaques-do-repositório)
- [Como utilizar](#como-utilizar)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Autor / Contato](#autor--contato)

## Visão geral
Este repositório organiza pequenos projetos de front-end desenvolvidos durante o curso CSS da Mimo. Cada projeto exemplifica conceitos específicos de estilização, layout e interatividade, servindo como base sólida de estudos práticos.

## Estrutura do repositório
Top-level:
```text
├── .gitattributes
├── .gitignore
├── LICENSE                      # Licença MIT
├── README.md                    # Este arquivo
└── projetos-gerais/             # Projetos principais do curso
    ├── coffee-shop-menu/        # Menu interativo para cafeteria (HTML + CSS)
    │   ├── index.html
    │   └── style.css
    ├── digital-business-card/   # Cartão de visita digital (HTML + CSS + JS)
    │   ├── index.html
    │   ├── style.css
    │   └── script.js
    ├── gallery/                 # Galeria de imagens com modal (HTML + CSS + JS)
    │   ├── index.html
    │   ├── style.css
    │   └── script.js
    ├── guessing-game/           # Jogo de adivinhação (HTML + CSS + JS)
    ├── linktree/                # Página centralizadora de links (HTML + CSS)
    └── unit-converter/          # Conversor de unidades (HTML + CSS + JS)
```

### Como se encaixa:
- O repositório abriga uma variedade de projetos independentes criados ao longo do curso.
- Cada subpasta listada funciona como uma aplicação isolada. Os projetos podem ser abertos diretamente no navegador de forma estática, sem a necessidade de etapas de build ou instalação de dependências de runtime.

## Destaques do repositório

### Coffee Shop Menu
* **Descrição:** Cardápio digital responsivo estruturado para simular um ambiente de cafeteria real, aplicando conceitos de posicionamento e design visual CSS.
* **Tecnologias:** HTML5, CSS3.

### Digital Business Card
* **Descrição:** Cartão profissional interativo e minimalista com links rápidos para contatos e portfólio.
* **Tecnologias:** HTML5, CSS3, JavaScript.

### Gallery
* **Descrição:** Galeria dinâmica de imagens com visualização expandida e controle de foco através de janelas modais integradas.
* **Tecnologias:** HTML5, CSS3, JavaScript.

## Como utilizar

### Clonar o repositório
```bash
git clone [https://github.com/GiovanniJorge/css-mimo.git](https://github.com/GiovanniJorge/css-mimo.git)
cd css-mimo
```

### Abrir um projeto estático

1. Navegue até a pasta do projeto desejado (Exemplo: Coffee Shop Menu):
```bash
cd projetos-gerais/coffee-shop-menu
```

2. Execute o arquivo `index.html` em seu navegador padrão:
* **No Linux/macOS:**
```bash
open index.html # macOS
xdg-open index.html # Linux
```
* **No Windows:**
```bash
start index.html
```

> **Dica de desenvolvimento:** Para uma experiência de desenvolvimento ágil com atualização automática (live reload) ao alterar arquivos CSS, recomenda-se abrir os diretórios utilizando a extensão **Live Server** no VS Code.

## Contribuindo
Contribuições são bem-vistas! Se deseja adicionar um novo projeto prático ou otimizar estruturas de Grid/Flexbox existentes, siga os passos abaixo:

1. Faça um **Fork** do repositório.
2. Crie uma branch com nome descritivo: `feature/novo-projeto` ou `fix/melhorias-css`.
3. Faça commits atômicos com mensagens claras e objetivas.
4. Abra um **Pull Request** detalhando as alterações implementadas.

## Licença
Este repositório utiliza a licença MIT — consulte o arquivo [LICENSE](LICENSE) na raiz.

## Autor / Contato
- **Autor:** Giovanni Jorge  
- **Repositório:** [https://github.com/GiovanniJorge/css-mimo](https://github.com/GiovanniJorge/css-mimo)
