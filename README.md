# 📦 Mon API Node.js/TypeScript

Une API REST robuste et maintenable construite avec Node.js et TypeScript. Elle expose plusieurs endpoints pour manipuler des ressources via HTTP, avec une architecture claire et extensible.

## 🛠️ Installation

### Prérequis

- Node.js ≥ 18
- npm (ou yarn)
- (Optionnel) Docker pour l’environnement isolé

### Étapes


# Cloner le repo
```bash
git clone https://github.com/Oronesu/TD-API-Node-TS.git
cd TD-API-Node-TS
```

# Installer les dépendances
```bash
npm install express dotenv
npm install -D typescript ts-node @types/node @types/express nodemon
```
# Lancer en développement

```bash
npm run dev
```

## Utilisation

Cette API REST supporte uniquement les méthodes **POST** et **GET** pour gérer le stockage d'utilisateurs dans la base de données.

---

### Ajouter un utilisateur (POST)

#### En local (après avoir lancé le serveur avec `npm run dev`)

##### Bash / Terminal Linux / macOS / WSL
```bash
curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d '{"name": "Jean", "email": "jean@example.com"}'
```

### Récupérer un utilisateur

#### En local (après avoir lancé le serveur avec `npm run dev`)

##### Bash / Terminal Linux / macOS / WSL

```bash
curl -X GET http://localhost:4000/users
```
