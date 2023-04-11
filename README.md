<h1 align="center">API Authentication</h1>

## Descrição do Projeto

Este projeto é o início dos estudos sobre autenticação de usuários, protocolos oauth, oauth2 e openID.

## Geral

<p>Esta é uma simples API criada para autenticação de usuários, a api tem um endpoint para criação de usuários (salvos em memória), listagem de usuários criados e login de usuários.</p>

## Endpoints

- Criação de usuário
    <p>O endpoint de criação de usuário recebe um objeto com os seguintes paramentros:
    
    ```
    {
        "name": "Eduardo",
        "email": "eduardo@email.com",
        "password": "123456"
    }
    ```
    Ele criptografa a senha com bcryptjs e salva numa lista (em memória) de usuários.</p>

- Listagem de usuários
    <p>Este endopoint retorna a lista de usuários criados anteriormente</p>

- Login
    <p>O endpoint de login recebe um objeto com os seguintes parametros:
    
    ```
    {
	    "email": "eduardo@email.com",
	    "password": "123456"
    }
    ```
    Recebendo estes pametros, o endpoint busca o usuário pelo email, caso não exista retorna erro 404, caso o usuário exista faz a comparação das senhas com bcryptjs, caso as senhas sejam iguais ele retorna um token gerado com a biblioteca jsonwebtoken, para acessar endpoins privados.</p>

- Private Routes
    <p>Este router é privado, e só pode ser acessado por usuários autenticados e com tokens validos, antes desse router é definido o middleware private routes, que captura o token do header e faz a verificação se é um token valido, caso seja um token valido ele faz a requisição do endopoint solicitado pelo usuário, caso não seja um token valido ele retorna um erro conforme cada caso.</p>

## Como executar

1. Para executar o projeto, é necessário fazer um clone do projeto:
    #### https:

    ```
    git clone https://github.com/eduardofeliperodrigues/api-authentications-jwt-node.git
    ```

    #### ssh:
    ```
    git clone git@github.com:eduardofeliperodrigues/api-authentications-jwt-node.git
    ```

2. Acessar a pasta e instalar as dependencias:
    #### Windows Powershell:
    ```
    cd api-authentications-jwt-node/; npm install
    ```
    #### Windows CMD:
    ```
    cd api-authentications-jwt-node/ && npm install
    ```
    #### Terminal Linux / GIT Bash:
    ```
    cd api-authentications-jwt-node/ && npm install
    ```
3. Instalar globalmente o pacote nodemon:
    
    ```
    npm install -g nodemon
    ```
4. Rodar o projeto:
    ```
    npm test
    ```
5. Instalar insominia (caso já tenha instalado pode pular esta etapa), pode ser baixado no link: [Insominia Download](https://updates.insomnia.rest/downloads/windows/latest?app=com.insomnia.app&source=website)

6. Importar o aquivo de configuração do insominia, disponivel dentro do projeto com o nome de "insominia_requests.json", o passo a passo de como fazer a importação pode ser acessada neste link: [Tutorial de Importação de Configurações Insominia](https://docs.insomnia.rest/insomnia/import-export-data#import-data)

7. Após a impostação já é possivel"brincar" com as rotas disponíveis:
    - criar usuário
    - listar usuários
    - login com um usuário especifico
    - acessar rota privada a partir de um token de usuário