export class MDHeaderpub extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open'})
        this.shadowRoot.innerHTML = `
            <!-- CSS -->
            <link href="css/bootstrap.css" rel="stylesheet">
            <!---------------->

            <nav class="navbar pb-3 pt-3">
                <div class="container">
                <a class="navbar-brand" href="index.html">
                    <img src="media/Logo-Principal.png" width="120" alt="">
                </a>

                <div class="d-flex align-items-center">
                    <a href="#" class="pe-0" data-bs-toggle="modal" data-bs-target="#login" id="login">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                        <path fill="#2b2b2b" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                    </svg>
                    </a>

                    <div class="dropdown me-1">
                    <button class="btn btn-link position-relative" id="notifButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                        <path fill="#2b2b2b" d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/>
                        </svg>
                    </button>
            
                    <!-- Conteúdo da Notificação -->
                    <ul class="dropdown-menu dropdown-menu-end p-3" aria-labelledby="notifButton" style="min-width: 300px;">
                        <li class="m-0 p-0">
                            <p class="fw-semibold fs-5 m-0 p-0">
                            Notificações
                            </p>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <a href="#" class="text-decoration-none">
                            <li class="d-flex justify-content-center align-items-center gap-3">
                                <img src="media/butterfly-red.svg" height="30px" alt="">
                                <div>
                                    <p class="fw-semibold fs-7 m-0 p-0 pb-1 text-dark">
                                        O que mais mais gosta está na Volkka Shots!
                                    </p>
                                    <p class="fs-10 m-0 p-0 pb-2 text-dark">
                                        São mais de 600 mil vídeos de acompanhantes te esperando. Deslize e aproveite os conteúdos mais quentes da Volkka.
                                    </p>
                                    <p class="fs-10 m-0 p-0 text-dark">
                                        há 1 semana
                                    </p>
                                </div>
                            </li>
                        </a>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li class="d-flex justify-content-center align-items-center gap-3">
                            <img src="media/logo-fogo-azul.png" width="28px" alt="">
                            <div>
                                <p class="fw-semibold fs-7 m-0 p-0 pb-1">
                                    Volkka premium por R$5,99
                                </p>
                                <p class="fs-10 m-0 p-0 pb-2">
                                    Acompanhantes exclusivos, milhares de avaliações e conteúdos ilimitados com 85% de desconto
                                </p>
                            </div>
                            <button type="button" class="fs-8 btn btn-red rounded-2 fw-medium px-2 py-2">
                                Assinar
                            </button>
                        </li>
                    </ul>
                    </div>

                    <button type="button" class="fs-6 btn btn-red rounded-2 fw-medium px-4 py-2 d-none d-lg-block d-xl-block d-xxl-block" onclick="window.location.href='Cadastrar-se.html';">
                        CADASTRE GRÁTIS
                    </button>
                    <button class="navbar-toggler d-xxl-none d-xl-none d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                    <div class="navbar-nav d-flex justify-content-between align-content-between h-100">
                        <div>
                        <p class="fs-2 fw-semibold d-flex align-items-center gap-2 mb-4">
                            <img src="media/logo-fogo-preto.png" width="20" alt="">
                            volkka
                        </p>
                        <a href="https://rodolforodrigues.net/sites/Volkka/Cadastrar-se.html" class="link-red link-red:hover fw-bold d-flex align-items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 448 512">
                            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                            </svg>
                            CADASTRE GRÁTIS
                        </a>
            
                        <hr class="border border-secondary-subtle border-0_5 opacity-50">
            
                        <a href="https://rodolforodrigues.net/sites/Volkka/login.html" class="link-red link-red:hover fw-bold d-flex align-items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 512 512">
                            <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/>
                            </svg>
                            LOGIN
                        </a>
            
                        <hr class="border border-secondary-subtle border-0_5 opacity-50">
                        </div>
                        
                        <div class="d-flex justify-content-center align-items-center flex-column pb-4">
                        <p class="fw-light fs-5">
                            SIGA A <span class="text-red fw-bold">VOLKKA</span>
                        </p>
                        <div class="d-flex align-items-center justify-content-center gap-4">
                            <a href="#" target="_blank" class="text-decoration-none text-dark">
                            <svg height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 7H19C19.5523 7 20 7.44771 20 8V16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16V8C4 7.44772 4.44772 7 5 7ZM2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM10 9L14 12L10 15V9Z" fill="currentColor"></path>
                            </svg>
                            </a>
                            <a href="#" target="_blank" class="text-decoration-none text-dark">
                            <svg height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z" fill="currentColor"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="currentColor"></path>
                            </svg>
                            </a>
                            <a href="#" target="_blank" class="text-decoration-none text-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 512 512">
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                            </svg>
                            </a>
                            <a href="#" target="_blank" class="text-decoration-none text-dark">
                            <svg height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" fill="currentColor"></path>
                            </svg>
                            </a>
                            <a href="#" target="_blank" class="text-decoration-none text-dark">
                            <svg height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" fill="currentColor"></path>
                            </svg>
                            </a>
                        </div>
                        </div>

                    </div>
                    </div>
                </div>
                </div>
            </nav>
            <!-- CSS -->
            <script src="js/bootstrap.bundle.js"></script>
            <!---------------->
        `
    }
    connectedCallback() {
        this.shadowRoot.querySelector('#login').addEventListener('click', () => {
            // Avisa a página que o botão de login foi clicado
            console.log('Header: Botão de login clicado. Disparando evento "loginRequisitado".');
            this.dispatchEvent(new CustomEvent('loginRequisitado', {
                bubbles: true,
                composed: true // Essencial para o evento "escapar" do Shadow DOM
            }));
        });
    }   
}