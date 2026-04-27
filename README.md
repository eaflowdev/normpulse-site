# NormPulse

Site e-commerce moderne pour produits de musculation et fitness

NormPulse est une plateforme web dédiée à la vente de produits de musculation et de compléments alimentaires.

## Contribution
AHAMADI FETI El Chaher<br>
TOPART Romain<br>
GALIEGUE Enzo

## Démarrage rapide

### Prérequis

- Node.js (v20.19.0, v22.13.0 ou ≥24)
- npm (≥11.8.0)

### Installation

```bash
# Cloner le repository
git clone <repository-url>

# Accéder au dossier du projet
cd normpulse-site/normpulse-site

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:5173](http://localhost:5173)


### Atomic Design

Le projet suit le pattern **Atomic Design** pour organiser les composants :

- **Atoms** : Composants de base réutilisables (Button, Badge, CardTitle, CardPrice, NavbarItem)
- **Molecules** : Combinaisons d'atomes (Card, Navbar, Textfield)
- **Pages** : Pages complètes (Home, Login)

## Design System

### Palette de couleurs

```css
--color-primary: #00FFFF;      /* Cyan */
--color-secondary: #FFE24E;    /* Jaune */
--color-ternary: #404040;      /* Gris foncé */
--color-grey: #CDCDCD;
--color-grey-dark: #989898;
--color-grey-darker: #868686;
```

### Typographie

- **Titres (h1-h6)** : [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue)
- **Corps de texte** : [Lato](https://fonts.google.com/specimen/Lato) (300, 400, 700)

## Routes

| Route | Description |
|-------|-------------|
| `/` | Page d'accueil avec catalogue produits |
| `/login` | Page de connexion |

