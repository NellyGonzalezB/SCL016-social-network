export default () => {
  const signup = document.createElement('div')
  signup.setAttribute('class', 'third-page')
  signup.innerHTML = `
    <div class="second-logo-container">
    <img src="https://i.ibb.co/47JxNMV/animeki-second-logo.png" alt="">
    </div>
    <p class="personal-info">INGRESA TUS DATOS</p>
    <div class="registration-container">
        <form id="signup-form">
        <h3 class="e-mail-adress">Correo electrónico</h3>
        <input type="text" class="write-e-mail" id="write-e-mail">
        <h3 class="password">Contraseña</h3>
        <input type="password" class="write-password" id="write-password">
        <button type="submit" class="register-btn" id="register-btn">REGISTRARSE</button>
        </form>
    </div>
    `
  return signup
}
