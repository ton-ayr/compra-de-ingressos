# Compra de ingressos :ticket:

Projeto realizado pelo curso de logica de programação na [Alura](https://cursos.alura.com.br/) com objetivo de criar um carrinho de compras de ingressos; 
verificando o estoque disponível antes de confirmar a transação. 

## 💡 Funcionalidades

- Verifica a quantidade disponível de ingressos para um determinado lote.
- Atualiza o estoque após a compra.
- Exibe mensagens de feedback ao usuário (compra realizada ou quantidade indisponível).

## 📋 Exemplo de Uso

### Função Principal

A função `comprarIngresso()` realiza as seguintes etapas:
1. Obtém o tipo de ingresso selecionado pelo usuário (`tipo-ingresso`).
2. Verifica a quantidade desejada (`qtd`) e compara com o estoque disponível.
3. Se a quantidade for válida:
   - Atualiza o estoque.
   - Exibe uma mensagem de sucesso.
4. Caso contrário, exibe uma mensagem de erro.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
