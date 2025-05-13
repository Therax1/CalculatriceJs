# Calculatrice en JavaScript - Version 1.2.0

Cette calculatrice simple en JavaScript permet de réaliser les quatre opérations de base (addition, soustraction, multiplication, division). Elle fonctionne en utilisant la console du navigateur et des **prompts** pour interagir avec l'utilisateur.

## Fonctionnalités

- **Addition** : Ajoute deux nombres.
- **Soustraction** : Soustrait deux nombres.
- **Multiplication** : Multiplie deux nombres.
- **Division** : Divise deux nombres (avec vérification pour éviter la division par zéro).
- L'utilisateur est invité à entrer des nombres et un opérateur via des **prompts**.
- Le résultat du calcul est affiché via une **alerte**.

## Installation

1. Téléchargez ou clonez ce projet sur votre machine.
2. Ouvrez le fichier `index.html` dans un navigateur (il suffit de l'ouvrir avec un double-clic).
3. La calculatrice s'affichera dans la console du navigateur.

## Utilisation

1. Lorsque vous lancez la fonction `lancerCalculatrice()`, la calculatrice demande :
    - Le premier nombre.
    - L'opérateur (`+`, `-`, `*`, `/`).
    - Le deuxième nombre.
2. Si l'opération est valide, le résultat du calcul s'affiche sous forme d'**alerte**.
3. Si l'utilisateur entre un opérateur incorrect ou tente une division par zéro, un message d'alerte s'affichera pour informer de l'erreur.

## Code

### Fonctionnalités principales :

- `addition(a, b)` : Retourne la somme de `a` et `b`.
- `soustraction(a, b)` : Retourne la différence entre `a` et `b`.
- `multiplication(a, b)` : Retourne le produit de `a` et `b`.
- `division(a, b)` : Retourne le quotient de `a` et `b`, ou `null` si `b` est égal à zéro.
- `demanderNombre(nb)` : Affiche un prompt demandant un nombre et le renvoie en tant que nombre flottant.
- `operateur(op)` : Affiche un prompt demandant l'opérateur et le renvoie sous forme de chaîne.
- `calculer(a, op, b)` : Effectue l'opération en fonction de l'opérateur (`+`, `-`, `*`, `/`).
- `lancerCalculatrice()` : Démarre la calculatrice, demande les valeurs à l'utilisateur et affiche le résultat ou une erreur.

## Exemple d'exécution

1. Lancer la calculatrice en appelant `lancerCalculatrice()`.
2. Le programme demande les entrées suivantes :
   - Entrez le premier nombre : 10
   - Entrez l'opérateur (+, -, *, /) : +
   - Entrez le deuxième nombre : 5
    
3. Le résultat sera affiché comme une alerte : `Résultat : 15`

## Avertissements

- En cas d'opération invalide, un message d'erreur s'affichera.
- La division par zéro est interdite, une alerte apparaîtra pour avertir l'utilisateur.
