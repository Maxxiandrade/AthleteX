const { getAuth, onAuthStateChanged, signInWithEmailAndPassword} = require('firebase/auth')

const getMyUser = async(req,res)=>{
    try {
        const { email, password } = req.query;
        const auth = getAuth();
    
        // Iniciar sesión
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
    
        // Verificar si el correo electrónico está validado
        const isEmailVerified = user.emailVerified;
    
        if (isEmailVerified) {
          // El correo electrónico está verificado, puedes continuar con la lógica de autenticación
          res.status(200).json({ message: 'Inicio de sesión exitoso', user });
        } else {
          // El correo electrónico no está verificado
          res.status(402).json('1');
        }
          
    } catch (error) {
        res.status(400).json(error)
    }
};

module.exports = getMyUser;