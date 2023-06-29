<!-- César González 
    26/06/2023
    Archivo donde se insertan las preguntas
-->
<?php
    require_once('./index.php');
?>

<div class="principal positio-relative m-auto mt-4 mb-4">
    <h3 class="mb-4 display-6 fw-bold"> Encuesta - <?php echo $array['encuesta'] ?> </h3>
    <section class="p-4 mb-4 rounded" style="border: 2px solid rgb(3, 55, 109)">
        <h3 class="mb-4 fs-3"> ¡ Bienvenido <?php echo $array['nombre'] ?> ! <br>
            de la empresa <?php echo $array['empresa'] ?> </h3>
        <div class="p-2 mb-4">
            <p class="text-center p-4 lead" style="letter-spacing: 2px;"> <?php echo $array['mensajeBienvenida'] ?> </p>
            <div class="text-center mb-4" style="letter-spacing: 10px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="rgb(0, 79, 104)" class="bi bi-clipboard2-data-fill" viewBox="0 0 16 16">
                    <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                    <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="rgb(0, 79, 104)" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                </svg>
            </div>
            <div class="d-flex float-end">
                <a name="" id="" class="btn" style="background:rgb(0, 79, 104); color: white; " href="" role="button">Siguiente
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg> </a>
            </div>
        </div>
    </section>
</div>