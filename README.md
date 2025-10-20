# 📦 Mon API Node.js/TypeScript

Une API REST robuste et maintenable construite avec Node.js et TypeScript. Elle expose plusieurs endpoints pour manipuler des ressources via HTTP, avec une architecture claire et extensible.

## 🛠️ Installation

### Prérequis

- Node.js ≥ 18
- npm (ou yarn)
- (Optionnel) Docker pour l’environnement isolé

### Étapes


1. Cloner le repo
```bash
git clone https://github.com/Oronesu/TD-API-Node-TS.git
cd TD-API-Node-TS
```

2. Installer les dépendances
```bash
npm install
```
3. Lancer en développement

```bash
npm run dev
```

## Utilisation

Cette API REST supporte les méthodes **POST**, **GET**, **PUT** et **DELETE** pour gérer le stockage d'utilisateurs dans la base de données.

---

### Ajouter un utilisateur (POST)

#### En local (après avoir lancé le serveur avec `npm run dev`)

##### Bash / Terminal Linux / macOS / WSL
```bash
curl -X POST http://localhost:4000/users -H "Content-Type: application/json" -d "{\"name\":\"Jean\",\"email\":\"jean@example.com\"}"
```

### Récupérer les utilisateurs (GET)

#### En local (après avoir lancé le serveur avec `npm run dev`)

##### Bash / Terminal Linux / macOS / WSL

```bash
curl -X GET http://localhost:4000/users
```

###  Mettre à jour un utilisateur (PUT)

Cette route permet de modifier les informations d’un utilisateur existant via son ID.

#### En local (après avoir lancé le serveur avec `npm run dev`)

##### Bash / Terminal Linux / macOS / WSL
```bash
curl -X PUT http://localhost:4000/users/1 -H "Content-Type: application/json" -d "{\"name\":\"Jean Modifié\",\"email\":\"jean.modifie@example.com\"}"
```
Remplacez 1 par l’ID de l’utilisateur à modifier. Possibilité de mettre aussi à jour partiellement :

```bash
curl -X PUT http://localhost:4000/users/1 -H "Content-Type: application/json" -d "{\"email\":\"nouvel.email@example.com\"}"
```
### Supprimer un utilisateur (DELETE)

Cette route permet de supprimer un utilisateur existant via son ID.

#### En local (après avoir lancé le serveur avec npm run dev)
##### Bash / Terminal Linux / macOS / WSL
```bash
curl -X DELETE http://localhost:4000/users/1
```
Remplacez 1 par l’ID de l’utilisateur à supprimer.


## 🧪 Tester l'API avec Postman

Utilisation possible avec [Postman](https://www.postman.com/) pour interagir facilement avec l'API sans passer par la ligne de commande.

### 🔧 Étapes pour une requête POST

1. Lancez le serveur avec :
   ```bash
   npm run dev
   ```
2. Ouvrez Postman et créez une nouvelle requête.

3. Sélectionnez la méthode POST.

4. Saisisez l'URL :

```
http://localhost:4000/users
````
5. Dans l'onglet Body, sélectionnez raw, puis JSON.

6. Collez un exemple de payload :

```json
{
  "name": "Jean",
  "email": "jean@example.com"
}
```
7. Cliquez sur Send pour envoyer la requête.

### 🔍 Étapes pour une requête GET

1. Créez une nouvelle requête dans Postman.

2. Sélectionnez la méthode GET.

3. Saisisez l'URL contenant les utilisateurs :

```
http://localhost:4000/users
```

4. Cliquez sur Send pour récupérer les données



### ✏️ Requête PUT
1. Créez une nouvelle requête dans Postman.

2. Sélectionnez la méthode PUT.

3. Saisissez l’URL avec l’ID de l’utilisateur :


```
http://localhost:4000/users/1
```
Onglet Body → raw → JSON :

```json
{
  "name": "Jean Modifié",
  "email": "jean.modifie@example.com"
}
```
4. Cliquez sur Send pour mettre à jour.

### ❌ Requête DELETE
1. Créez une nouvelle requête dans Postman.

2. Sélectionnez la méthode DELETE.

3. Saisissez l’URL avec l’ID de l’utilisateur :

```
http://localhost:4000/users/1
```
4. Cliquez sur Send pour supprimer l’utilisateur.
