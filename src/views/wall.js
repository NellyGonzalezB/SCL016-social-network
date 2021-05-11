export default () => {
  const wall = document.createElement('div')
  wall.setAttribute('class', 'wall-page')
  wall.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color:#5F5F5F;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Home</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Logout</a>
          </li>
        </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit" style="background-color: #09D1E1; color: white;" >Search</button>
             </form>
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
