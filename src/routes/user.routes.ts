// Importation du module Router d'Express pour gérer les routes
import { Router } from 'express'; // Importe Router depuis Express pour créer des routes modulaires
//Explication:
/* Router permet de créer un mini-routeur modulaire
 * pour organiser les routes par fonctionnalité (ici les utilisateurs)*/


// Importation des contrôleurs qui gèrent la logique métier pour les utilisateurs
import { getUsers, addUser,updateUser,deleteUser } from '../controllers/user.controller'; // Importe les fonctions de contrôle pour les utilisateurs
//Explication:
/* Ces fonctions contiennent la logique métier pour gérer les utilisateurs (récupération et ajout).*/

// Création d'un routeur Express
const router = Router(); 
/**
* Route GET /users
* Description : Récupère la liste des utilisateurs
* Contrôleur associé : getUsers (défini dans user.controller.ts)
*/

router.get('/', (req, res, next) => {
  console.log("Route GET /users appelée");
  next();
}, getUsers);

//Explication: 
//Définit la route GET pour récupérer les utilisateurs




/**
* Route POST /users
* Description : Ajoute un nouvel utilisateur
* Contrôleur associé : addUser (défini dans user.controller.ts)
*/

router.post('/', addUser); 
// Explication:
// Définit la route POST pour ajouter un utilisateur



/**
 * Route PUT /users/:id
 * Description : Met à jour un utilisateur existant par son ID
 */
router.put('/:id', updateUser);

/**
 * Route DELETE /users/:id
 * Description : Supprime un utilisateur par son ID
 */
router.delete('/:id', deleteUser);




// Exportation du routeur pour l'utiliser dans index.ts
export default router; 
//Explication:
// Exporte le routeur pour l'intégrer dans l'application principale (index.ts)
