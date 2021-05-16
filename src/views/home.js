/* Crea vista de página de bienvenida */

export default () => {
  const homePage = document.createElement('div')
  homePage.setAttribute('class', 'first-page')
  homePage.innerHTML = `
        <div class="logo-container">
            <img src="https://i.ibb.co/7CJwt0q/animeki-logo.png" alt="">
            </div>
            <div class="macro-container">
            <h1 class="welcome-animeki"> Bienvenido a Anime Ki</h1>
            <h2 class="description-animeki">Conoce a más personas con tus mismos gustos e intereses y ven a pasar a pasar un
                buen rato!</h2>
            <button class="start-btn" id="start-btn">CONTINUAR</button>
        </div>
    `
  return homePage
}
