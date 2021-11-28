## Instalação

Clone este repositório

<pre>
$ git clone https://github.com/RuizHenrique01/shopAPI.git
</pre>

Acesse a pasta do projeto no terminal

<pre>
$ cd shopAPI
</pre>

Instale as dependências

<pre>
$ npm install
</pre>

Execute a aplicação

<pre>
$ npm run dev
    ou
$ yarn dev
</pre>

## Observações

Para que o banco de dados funcione é necessário a criação de um arquivo chamado <code>ormconfig.json</code> na pasta do projeto.

Ele deve conter as seguintes configurações como mostrado no exemplo abaixo.

<pre>
{
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "root",
    "database": "shopapi",
    "synchronize": true,
    "entities":["./src/modules/**/typeorm/entities/*.ts"],
    "migrations": ["./src/shared/typeorm/migrations/*.js"],
    "cli": {
        "migrationsDir": "./src/shared/typeorm/migrations" 
    }
 }
</pre>

e execute o seguinte comando:

<pre>
$ npm run typeorm migration:run
    ou
$ yarn typeorm migration:run
</pre>

Caso apresente algum erro, verifique se o serviços do banco de dados MySQL estão executando, caso o erro continue vá no MySQLWorkbench e crie um novo banco de dados conforme as configurações presentes no arquivo <code>ormconfig.json</code>. Após isso execute novamente o comando anterior.

## Informações dos Endpoints

O projeto possui duas rotas correspondentes respectivamente a produtos e compras: <code>/produtos</code>, <code>/compras</code>

E ambas possuem os seguintes endpoints: <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>DELETE</code>.

O projeto é executado na porta <code>3333</code>:

<pre>
http://localhost:3333
</pre>

### Produtos

<pre>
http://localhost:3333/produtos
</pre>

Para listar todos os produtos basta utilizar o endpoint <code>GET</code>

E para operações que precise utilizar um produto em especifico, como nos endpoints: <code>GET</code>, <code>PUT</code>, <code>DELETE</code>, será necessário passar o id do produto por parametro, como no exemplo abaixo.

<pre>
http://localhost:3333/produtos/:id
</pre>

E para salvar e atualizar produtos, como nos endpoints <code>POST</code> e <code>PUT</code>, é necessário passar as informações para o corpo da requisição em formato <code>json</code> como segue no exemplo abaixo.

<pre>
{
	"nome": "Learn JavaScript",
	"descricao": "Livro",
	"preco": 50.00
}
</pre>

### Compras

<pre>
http://localhost:3333/compras
</pre>

Para listar todos as compras basta utilizar o endpoint <code>GET</code>

E para operações que precise utilizar uma compra em especifico, como nos endpoints: <code>GET</code>, <code>PUT</code>, <code>DELETE</code>, será necessário passar o id da compra por parametro, como no exemplo abaixo.

<pre>
http://localhost:3333/compras/:id
</pre>

E para salvar e atualizar compras, como nos endpoints <code>POST</code> e <code>PUT</code>, é necessário passar as informações para o corpo da requisição em formato <code>json</code> e para salvar os produtos na compra basta passar um array de ids como segue no exemplo abaixo.

<pre>
{
	"produtos": [
		{
			"id": "7bfe6548-9137-4c07-bfc8-fa89548c8581"
		},
		{
			"id": "bd3ab0f7-4ebf-4821-a9ce-c947886d1e5e"
		}
	],
	"tipo_pagamento": "cartão",
	"status": "a pagar"
}
</pre>
