// Importation des types Request et Response depuis Express
// Request : représente la requête HTTP reçue
// Response : représente la réponse HTTP envoyée au client
import { Request, Response } from 'express'; 
import { initDB } from '../database';
//Explication: Importe les types Request et Response depuis Express pour typer les paramètres des fonctions

/**
* Contrôleur pour la route GET /users
* Description : Renvoie un avec la liste des utilisateurs (simulation)
* @param req - Objet représentant la requête HTTP (non utilisé ici)
* @param res - Objet permettant d'envoyer une réponse HTTP
*/
export const getUsers = async (req: Request, res: Response) => {
    try {
        console.log("getUsers exécuté");
        const db = await initDB();
        const users = await db.all('SELECT id, name, email FROM users');
        res.json(users);
    } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
        res.status(500).json({ message: "Erreur serveur lors de la récupération des utilisateurs" });
    }
};


/**
* Contrôleur pour la route POST /users
* Description : Ajoute un nouvel utilisateur en récupérant les données du corps de la requête
* @param req - Objet représentant la requête HTTP contenant les données utilisateur
* @param res - Objet permettant d'envoyer une réponse HTTP
*/
export const addUser = async (req: Request, res: Response) => { 
    //Explication: Déclare la fonction addUser pour gérer la route POST /users

    try {
        const { name, email } = req.body; 
        //Explication: Récupère les propriétés name et email envoyées dans le corps de la requête

        if (!name || !email) {
            return res.status(400).json({message:'Nom et email sont requis'});
        }

        const db = await initDB();
        const result = await db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
        console.log("🛠 Résultat insertion :", result);
        res.status(201).json({ message: `Utilisateur ${name} ajouté avec succès !`, email });
        //Explication: Envoie une réponse JSON confirmant l'ajout de l'utilisateur avec son email
        // (Partie 2) Et l'aoute en mémoire dans un fichier sqlite
    } catch (error) {
        console.error("Erreur lors de l'ajout de l'utilisateur :", error);
        res.status(500).json({ message: "Erreur serveur lors de l'ajout de l'utilisateur" });
    }
};


/**
 * Contrôleur PUT /users/:id
 * Description : Met à jour un utilisateur existant
 */
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    if (!name && !email) {
      return res.status(400).json({ message: 'Au moins un champ (nom ou email) est requis pour la mise à jour' });
    }

    const db = await initDB();
    const result = await db.run(
      'UPDATE users SET name = COALESCE(?, name), email = COALESCE(?, email) WHERE id = ?',
      [name, email, id]
    );

    if (result.changes === 0) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    res.json({ message: `Utilisateur ${id} mis à jour avec succès` });
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error);
    res.status(500).json({ message: "Erreur serveur lors de la mise à jour de l'utilisateur" });
  }
};

/**
 * Contrôleur DELETE /users/:id
 * Description : Supprime un utilisateur existant
 */
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const db = await initDB();
    const result = await db.run('DELETE FROM users WHERE id = ?', [id]);

    if (result.changes === 0) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    res.json({ message: `Utilisateur ${id} supprimé avec succès` });
  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
    res.status(500).json({ message: "Erreur serveur lors de la suppression de l'utilisateur" });
  }
};


