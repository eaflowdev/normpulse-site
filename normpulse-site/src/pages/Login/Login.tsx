import React from 'react';
import Button from '../../package/Atom/Button/Button';
import TextField from '../../package/Molecule/Textfield/TextField'

const Login: React.FC = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Connexion</h2>
                <form className="space-y-6">
                    <TextField
                        placeholder='Entrer votre email'
                        label="Email"
                        required
                    />
                    <TextField
                        placeholder='Entrer votre mot de passe'
                        label="Mot de passe"
                        isPassword={true}
                        required
                    />
                    <Button>Se connecter</Button>
                </form>
            </div>
        </div>
    );
};

export default Login;