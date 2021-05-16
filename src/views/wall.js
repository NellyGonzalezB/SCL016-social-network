/* Crea página de muro de posts */

export default () => {
  const wall = document.createElement('div')
  wall.setAttribute('class', 'wall-page')
  wall.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color:#5F5F5F;">
      <div class="container-fluid">
        <img src="https://i.ibb.co/4JVQQqy/logito.png">
        <div class="" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li onclick="document.location.reload();" class="nav-item">
              <a class="nav-link" href="#" id="logout" style= "color : #FFFFFF;" >Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="calendary-container">
      <img class="calendary-april" src="https://i.ibb.co/2tdJBDG/april.png">
      <h2 class="calendary-title">CALENDARIO EVENTOS ABRIL</h2>
      <h4 class="event-01">01 ABRIL Estreno Demon Slayer en Netflix</h4>
      <h4 class="event-02">01 ABRIL Estreno Remake Shaman King</h4>
      <h4 class="event-03">09 ABRIL Final del Manga Attack On Titan</h4>
    </div>
   <div class="container p-4">
    <div class="row">
      <div class="col-md-4 offset-md-4">
      <img class="perfil-photo" src="https://i.ibb.co/FqQp3Xx/perfil-photo.png">
        <div class="card">
          <div class="card-body">
            <form id="post-form">
              <div class="form-group">
                <textarea id="post" rows="3" class="form-control" placeholder="Post here..."></textarea>
              </div>
                <button class="btn btn-primary" id="btn save-form">
                  Post it 
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  <div class= "container p-4">  
    <div class="row">
      <div class="col-md-4 offset-md-4" id="post-container">
      </div>
    </div>
  </div>  

  
    `
  return wall
}
