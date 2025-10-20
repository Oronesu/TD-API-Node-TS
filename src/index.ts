// Importation des modules nécessaires
import express, { Request, Response } from 'express'; // Framework Express et types pour lesrequêtes/réponses
import * as dotenv from 'dotenv'; // Permet de charger les variables d’environnement
import userRoutes from './routes/user.routes'; // Importe les routes utilisateurs
import { initDB } from './database';
import { execSync } from 'child_process';

(async () => {
  const db = await initDB();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL
    )
  `);
})();



// Charge les variables d'environnement depuis le fichier .env
dotenv.config();
// Création de l'application Express
const app = express();
// Définition du port du serveur (utilise celui de l'environnement ou 3000 par défaut)
const PORT = process.env.PORT || 4000;
// Middleware pour parser le JSON dans les requêtes entrantes
app.use(express.json());


if (process.platform === 'win32') {
    try {
        const result = execSync(`netstat -ano | findstr :${PORT}`).toString();
        [...new Set(result.trim().split('\n').map(line => line.trim().split(/\s+/).pop()))]
            .forEach(pid => {
                if (pid) {
                    try {
                        execSync(`taskkill /PID ${pid} /F`);
                        console.log(`Port ${PORT} libéré (PID ${pid})`);
                    } catch {
                        console.log(`Impossible de tuer le PID ${pid}`);
                    }
                }
            });
    } catch {
        console.log(`✅ Port ${PORT} déjà libre`);
    }
}



// Route de test pour vérifier si le serveur fonctionne
app.get('/', (req: Request, res: Response) => {
    res.send('🚀 API Node.js avec TypeScript fonctionne !'); // Réponse envoyée au client
});

// Route de debug pour vérifier que le serveur est actif
app.get('/debug', (req: Request, res: Response) => {
  res.json({ message: "✅ Route /debug active" });
});



// Utilisation des routes utilisateurs définies dans "user.routes.ts"
app.use('/users', userRoutes);
// Démarrage du serveur sur le port défini
app.listen(PORT, () => {
    console.log(`✅ Serveur démarré sur http://localhost:${PORT}`); // Message de confirmationdans la console
});

