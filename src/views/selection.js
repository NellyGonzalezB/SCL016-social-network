/* Crea la página para seleccionar gustos en anime */

export default () => {
  const selectionPage = document.createElement('div')
  selectionPage.setAttribute('class', 'fourth-page')
  selectionPage.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light" style="background-color:#5F5F5F;">
  <div class="container-fluid">
    <img src="https://i.ibb.co/4JVQQqy/logito.png">
    <div class="" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li onclick="document.location.reload();" class="nav-item">
          <a class="nav-link" href="#" id="logout" style= "color : #FFFFFF;" >Continue</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <h1 class="fourth-title">Seleciona tus</h1>
    <h2 class="fourth-title">ANIMES y MANGAS favoritos<br>(máximo 8)</h2>
    <div class="anime-container">
        <img src="https://i.ibb.co/kxhgbXp/jujutsu.png" alt="">
        <img src="https://i.ibb.co/5FctQZk/hunterxhunter.png" alt="">
        <img src="https://i.ibb.co/4YZYhXg/one-piece.png" alt="">
        <img src="https://i.ibb.co/Xb4wmZ7/naruto.png" alt="">
        <img src="https://https://i.ibb.co/dmHzSDj/ranma.png" alt="">
        <img src="https://i.ibb.co/1QMRvy4/jojo.png" alt="">
        <img src="https://i.ibb.co/TMV0mhy/doraemon.png" alt="">
        <img src="https://i.ibb.co/pnRfNp9/slam-dunk.png" alt="">
        <img src="https://i.ibb.co/r5RBLTf/bleach.png" alt="">
        <img src="https://i.ibb.co/VQ2J5PK/death-note.png" alt="">
        <img src="https://i.ibb.co/QXJqDBn/full-metal.png" alt="">
        <img src="https://i.ibb.co/QFrzvpq/sailor-moon.png" alt="">
        <img src="https://i.ibb.co/VxcX36D/sakura.png" alt="">
        <img src="https://i.ibb.co/MpyKpMq/inuyasha.png" alt="">
        <img src="https://i.ibb.co/3NqrMf2/shingheki.png" alt="">
        <img src="https://i.ibb.co/Jk98TzQ/hero-academy.png" alt="">
        <img src="https://i.ibb.co/PZthCZb/seven.png" alt="">
        <img src="https://i.ibb.co/wpbLCy8/dbz.png" alt="">
        <img src="https://i.ibb.co/GJMw92T/demon-slayer.png" alt="">
        <img src="https://i.ibb.co/tbPdc0G/tokyo-ghoul.png" alt="">

    </div>
    `
  return selectionPage
}
