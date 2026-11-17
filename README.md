# Escola em Dia · SEDUC Piauí

Protótipo de um site de denúncias de infraestrutura escolar (versão 5). Funciona no computador e se adapta ao celular.

- **Página inicial**: apresenta o projeto (o problema, como funciona, para quem é e os números) e tem os botões **Testar como aluno** e **Testar como fiscal**, que entram direto, sem CPF.
- **Área do Aluno** (menu no topo): Início com a tabela de escolas e as categorias, Nova denúncia, tela de "Denúncia enviada!", Minhas denúncias com o andamento, Mapa e Meu perfil.
- **Área do Fiscal** (menu lateral):
  - **Visão geral**: indicadores, mapa de calor, fila de atendimento e gráficos por tipo e por regional.
  - **Denúncias**: busca e filtros. Clicar numa denúncia abre o **Detalhe da Denúncia** (fotos, checklist, *Iniciar fiscalização*).
  - **Relatórios**: fiscalizações em andamento (abrem o **Relatório de Fiscalização** para preencher) e relatórios já enviados (abrem em modo consulta).

## Arquivos

| Arquivo      | O que tem                                   |
|--------------|---------------------------------------------|
| `index.html` | Estrutura da página                          |
| `style.css`  | Todo o visual (cores no topo, em `:root`)    |
| `escolas.js` | As 636 escolas da rede estadual (lista oficial SEDUC) e o mapa do Piauí |
| `script.js`  | Telas e lógica                               |

## Como abrir no VS Code

1. Abra a pasta `site-seduc` no VS Code (**Arquivo → Abrir Pasta**).
2. Instale a extensão **Live Server** (Ritwick Dey).
3. Clique com o botão direito em `index.html` → **Open with Live Server**.

Também funciona abrindo o `index.html` direto no navegador (duplo clique).

## Publicar no GitHub Pages

1. Envie os quatro arquivos para a **raiz** do repositório (não dentro de uma subpasta).
2. Mantenha os nomes exatamente iguais, em letras minúsculas.
3. Em **Settings → Pages**, escolha a branch `main` e salve. Em alguns minutos o link fica disponível.

## Acesso de teste

Os botões de demonstração entram direto. Se preferir digitar, qualquer CPF com 11 dígitos funciona:

- Aluno: `123.456.789-00` / matrícula `2026001`
- Fiscal: `987.654.321-00` / código `FISC01`

## Onde mexer

- **Escolas**: arquivo `escolas.js`. Fonte: SEDUC-PI, Edital GSE nº 47/2024, Anexo I (Lista Básica, oferta 2025). Cada linha: nº, INEP, nome, município, GRE, zona, oferta, turno, x, y (posição no mapa).
- **Textos da página inicial**: página `site_home` no `script.js`.
- **Tipos de problema e prioridade**: objeto `TIPOS`. Categorias da tela inicial do aluno: lista `CATS`.
- **Itens do checklist**: lista `CHECK`.
- **Denúncias de exemplo**: lista `DEN`.
- **Cores**: variáveis no início do `style.css` (`--g8` verde principal, `--acc` amarelo de destaque).

## Observações

- É um protótipo para apresentação. Não há servidor nem banco de dados: cada pessoa vê os dados de exemplo no próprio navegador, e o login não é verificado de verdade.
- O que a pessoa faz fica salvo no navegador dela (`localStorage`). O link **Restaurar dados de exemplo**, no rodapé, apaga tudo e volta ao início.
