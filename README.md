# **Resumo:**
- Mostrou o que é o bootstrap, para que serve;
- Como usar componentes do bootstrap, como [botões](https://getbootstrap.com/docs/5.3/components/buttons/);
- Como usar a responsividade através do [Container](https://getbootstrap.com/docs/5.3/layout/containers).
_________________________
# **Detalhado cronologicamente:**
**Bootstrap**
- https://getbootstrap.com/

## **O que é o bootstrap?**
- O Bootstrap **tem como objetivo a construção de sites responsivos**.
- Utiliza o princípio: Mobile First, ou seja, a criação do mobile primeiro.
- Ele é uma ferramenta popular para desenvolvimento web, que fornece estruturas de CSS e JavaScript para estilizar os elementos de uma página HTML.

## **Mostrou alguns itens prontos como:**
- Carousel https://getbootstrap.com/docs/5.3/components/carousel/
![[imgs/Pasted image 20241029192052.png]]

- Navbar: https://getbootstrap.com/docs/5.3/components/navbar/
![[imgs/Pasted image 20241029192237.png]]
_________________________
## **Como utilizar o bootstrap?**
- **Inclua o CSS e o JS do Bootstrap:** Coloque a `<link>` tag no `<head>`para nosso CSS e a `<script>`tag para nosso pacote JavaScript.
  - Os links podem ser pegos [aqui](https://getbootstrap.com/docs/5.3/getting-started/introduction/).
- Exemplo no `exemplo_1.html`.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>
```

_________________________________
## **Como utilizar um componente do bootstrap?**
- Os componentes do bootstrap estão listados aqui: https://getbootstrap.com/docs/5.3/components/
- Para utilizar um, basta escolher algum item da lista, copiar o código e colocar no HTML (lembrando que é necessário estar com o CSS e JS do bootstrap importado)
  - Exemplo:

```html
<button type="button" class="btn btn-success">Success</button>
```

Código exemplo:

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bootstrap demo</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
  </head>

  <body>
    <h1>Hello, world!</h1>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

**Visualização:**
![[imgs/Pasted image 20241029194521.png]]
_____________________________
## **O que é o CDN?**
- É um armazenamento geral das bibliotecas em CSS e JS, ou seja, para facilitar a importação e utilização nos projetos, basta fazer pelo CDN, importando através do URL.
______________________________________________
## **Como utilizar a responsividade no bootstrap?**
- Na aba layout do site do bootstrap, há alguns itens como breakpoints, containers, nele estão os passos a serem seguidos: https://getbootstrap.com/docs/5.3/layout/

### **Container:** Os contêineres são usados ​​para conter, preencher e (às vezes) centralizar o conteúdo dentro deles.
- Segundo o guia: https://getbootstrap.com/docs/5.3/layout/containers/
- O conteiner tem várias classes, sendo uma delas `.container-{breakpoint}`, o breakpoint é o ponto de quebrada, sendo eles: sm, md, lg, etc...
- O sm tem 100% de largura até 576px - small breakpoint
- Os outros estão detalhados [aqui](https://getbootstrap.com/docs/5.3/layout/containers/#how-they-work).

**Exemplo:**

```html
  <div class="container bg-info">
      100% de largura até 576px - small breakpoint
    </div>

    <div class="container-md bg-primary">
      100% de largura até 768px - medium breakpoint
    </div>

    <div class="container-lg bg-success">
      100% de largura até 992px - large breakpoint
    </div>

    <div class="container-xl bg-danger">
      100% de largura até 1200px - extra large breakpoint
    </div>

    <div class="container-xxl bg-warning">
      100% de largura até 1400px - extra extra large breakpoint
    </div>

    <div class="container-flud bg-info">
      100% de largura em todas as larguras
    </div>
```

**Imagem:**
![[imgs/Pasted image 20241029200320.png]]


### **Grid:**
- Além do **Container**, também é possível fazer por **Grid** (grade).
  Link para o Grid [aqui](https://getbootstrap.com/docs/5.3/layout/grid/).

- O sistema de grade do Bootstrap usa uma série de contêineres, linhas e colunas para layout e alinhamento de conteúdo. Ele é construído com [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) e é totalmente responsivo. Abaixo está um exemplo e uma explicação detalhada de como o sistema de grade se reúne.

![[imgs/Pasted image 20241029202117.png]]