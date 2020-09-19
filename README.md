# Bicho Alagoano
Uma seleção para o bichinho mais gracioso de Alagoas

### Tecnologias Utilizadas

- React.js
- Node.js
- Firebase

## Back-end
Todo o conteúdo relacionado ao back-end está disponível na branch back

**Considerações**
- O back-end foi realizado em Node.js com Typescript.
- O exemplo do arquivo .env esta disponível em .env.example
- Antes de começar, inicialize o npm para que as depencias possam ser utilizadas, rodando no terminal tal comando:
`````
npm init -y
`````

#### Rotas disponíveis

URL BASE: /api/bicho-alagoano
 
- Registrar Usuário 
`````
POST /user/register
Body: {
    "email": "seu@email.com",
    "password": "suasenha",
    "displayName": "seu nome",
    "role": "sua caracteristica no sistema [admin, client]"
}
`````

- Deletar Usuário
`````
DELETE /user/delete/{id_do_usuario}
`````

- Adicionar imagem, nome e o telefone do Pet
`````
POST /pet/register
Body:{
    "name": "nome do pet",
    "owner": "nome do dono",
    "phone": "telefone do dono"
}
`````

- Listar todos os Pet's registrados
`````
GET /pet/list
`````

- Excluir todos os dados registrados do Pet
`````
DELETE /pet/delete/{id_do_pet}
`````

#### Para inicializar

- Em desenvolvimento rode o comando abaixo no terminal 
``````
npm run dev
``````

- Para build do projeto

## Front-end
Todo o conteúdo relacionado ao front-end está disponível na branch front

### Rotas disponíveis
