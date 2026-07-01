# CSS - Mimo
Projetos relacionados ao curso "CSS" da Mimo

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Conteúdo principal
- Projetos práticos focados em aprendizado de CSS, HTML e JavaScript.
- Estrutura organizada por pastas temáticas, cada uma contendo um projeto completo e independente.
- Exemplos de estilização moderna, layouts responsivos e interatividade com JavaScript.

## Badges
- Licença: MIT (ver arquivo LICENSE)

## Sumário
- [Visão geral](#visão-geral)
- [Estrutura do repositório](#estrutura-do-repositório)
- [Como utilizar](#como-utilizar)
- [Boas práticas / recomendações](#boas-práticas--recomendações)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Autor / Contato](#autor--contato)

## Visão geral
Este repositório organiza pequenos projetos de front-end desenvolvidos durante o curso CSS da Mimo. Cada projeto exemplifica conceitos específicos de estilização, layout e interatividade, servindo como portfólio educacional e referência para aprendizado de desenvolvimento web.

## Estrutura do repositório
Top-level:
- `.gitattributes`                       — Configuração de atributos Git
- `LICENSE`                              — Licença MIT
- `README.md`                            — Este arquivo
- `projetos-gerais/`                     — Projetos principais do curso
  - `coffee-shop-menu/`                  — Menu interativo para cafeteria (HTML + CSS)
    - `index.html`
    - `style.css`
  - `digital-business-card/`             — Cartão de visita digital (HTML + CSS + JS)
    - `index.html`
    - `style.css`
    - `script.js`
  - `gallery/`                           — Galeria de imagens com modal (HTML + CSS + JS)
    - `index.html`
    - `style.css`
    - `script.js`
  - `guessing-game/`                     — Jogo de adivinhação (HTML + CSS + JS)
  - `linktree/`                          — Página centralizadora de links (HTML + CSS)
  - `unit-converter/`                    — Conversor de unidades (HTML + CSS + JS)

Como se encaixa:
- Cada pasta contém um projeto independente.
- Cada projeto é aberto diretamente no navegador (não requer build ou instalação).
- Alguns projetos usam JavaScript simples para adicionar interatividade aos estilos CSS.

## Como utilizar

### Clonar o repositório
```bash
git clone https://github.com/GiovanniJorge/css-mimo.git
cd css-mimo
```

### Abrir um projeto
1. Navegue até a pasta do projeto desejado:
   ```bash
   cd projetos-gerais/coffee-shop-menu
   ```

2. Abra o arquivo `index.html` no seu navegador:
   - **Windows:** clique duas vezes no arquivo
   - **macOS/Linux:** clique com botão direito → "Abrir com" → navegador
   - **Linha de comando:**
     ```bash
     # macOS
     open index.html
     
     # Linux
     xdg-open index.html
     
     # Windows
     start index.html
     ```

### Modificar e testar
Abra os arquivos em um editor de texto (VS Code, Sublime, etc.) e salve. O navegador recarregará automaticamente (com live reload extension) ou você pode recarregar manualmente (F5).

## Boas práticas / recomendações

### Desenvolvimento
- Use um editor de código como VS Code com extensões úteis (Live Server, Prettier, CSS Peek).
- Mantenha a estrutura de pastas simples: um projeto por pasta com seus arquivos HTML, CSS e JS.
- Prefira nomes de arquivo em minúsculas e sem espaços (ex.: `style.css`, não `Style CSS.css`).

### CSS
- Organise estilos em ordem: reset/normalize, tipografia, layout, componentes, utilidades.
- Use classes descritivas (BEM ou similar) para evitar conflitos de estilos.
- Teste responsividade com ferramentas do navegador (F12 → Device Emulation).

### HTML
- Use semântica HTML5 adequada (`<header>`, `<nav>`, `<section>`, `<footer>`, etc.).
- Sempre inclua atributo `alt` em imagens para acessibilidade.
- Valide seu HTML com [W3C Validator](https://validator.w3.org/).

### JavaScript
- Mantenha o JS simples e bem comentado, focando em aprendizado.
- Separe lógica de comportamento (script.js) de estrutura (index.html) e estilo (style.css).
- Teste no console do navegador (F12 → Console) para debug.

## Contribuindo
Contribuições são bem-vindas! Fluxo sugerido:

1. Fork do repositório
2. Criar branch com nome descritivo: `feature/novo-projeto` ou `fix/melhorias-css`
3. Fazer commits atômicos com mensagens claras
4. Abrir Pull Request descrevendo as mudanças

Sugestões adicionais:
- Adicione um pequeno `README.md` em cada pasta de projeto explicando seu objetivo e conceitos aprendidos
- Inclua comentários no código explicando técnicas CSS/JS interessantes
- Se adicionar novo projeto, atualize a lista na seção "Estrutura do repositório"

## Testes e validação (opcional)
- Validar HTML: [W3C Markup Validator](https://validator.w3.org/)
- Validar CSS: [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- Testar responsividade em múltiplos dispositivos

## Licença
Este repositório utiliza a licença MIT — consulte o arquivo `LICENSE` na raiz.

## Autor / Contato
Autor: Giovanni Jorge  
GitHub: [@GiovanniJorge](https://github.com/GiovanniJorge)  
Repositório: https://github.com/GiovanniJorge/css-mimo
