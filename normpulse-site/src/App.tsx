import './App.css'
import Badge from './package/Atom/Badge/Badge'
import Button from './package/Atom/Button/Button'

function App() {

  return (
    <>
      <Button variant='primary'>Connexion</Button>
      <Button variant='secondary'>Profile</Button>
      <Button variant='outline'>Déconnexion</Button>
      <br />
      <Badge variant='primary'>test</Badge>
      <Badge variant='secondary'>test</Badge>
      <Badge variant='ternary'>test</Badge>
    </>
  )
}

export default App
