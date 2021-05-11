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

   <div class="container p-4">
    <div class="row">
      <div class="col-md-4 offset-md-4">
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
