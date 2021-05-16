/* Crea vista de página de login */

export default () => {
  const container = document.createElement('div')
  container.setAttribute('class', 'second-page')

  container.innerHTML = `
    <div class="second-logo-container">
        <img src="https://i.ibb.co/47JxNMV/animeki-second-logo.png" alt="">
    </div>
    <div class="log-in">
        <div class="user-log-in">
            <form id="login-form">
                <h3 class="e-mail">Correo Electrónico</h3>
                <input type="text" class="your-email" id="your-email">
                <h3 class="user-password">Contraseña</h3>
                <input type="password" class="your-password" id="your-password"><br>
                <label class="remember"><input type="checkbox" value="first_checkbox">Recordar nombre de usuario</label><br>
                <button type="submit" class="log-in-btn">INICIAR SESIÓN</button>
                <br>
                <button type="button" class="facebook-btn" id="facebookLogin">
                <p class="with-facebook"><img class="facebook-logo" src="https://i.ibb.co/4FW3WXz/Facebook-icon-2013-1.png" alt="">Iniciar sesión con Facebook</p>
                </button>
                <button type="button" class="google-btn" id="googleLogin">
                <p class="with-google"><img class="google-logo" src="https://i.ibb.co/XZcxN1F/google.png" alt="">Iniciar sesión con Google</p>
                </button>
            </form>
        </div>  
    <p class="forget-user">¿Olvidaste tu nombre de usuario o contraseña?</p>
    <p class="registration-link">Si no has creado tu cuenta, registrate <a href="#/signup" id="link">AQUÍ</a></p>
  </div>
    `

  return container
}
