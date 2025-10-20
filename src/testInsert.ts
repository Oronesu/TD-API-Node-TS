import { initDB } from './database';

// Script de test pour insérer un utilisateur et afficher la liste des utilisateurs

(async () => {
  const db = await initDB();
  await db.run('INSERT INTO users (name, email) VALUES (?, ?)', ['Test', 'test@example.com']);
  const users = await db.all('SELECT * FROM users');
  console.log(users);
})();
