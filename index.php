<?php   
    $nombre = 'Ezequiel Dominguez';
    $empresa = 'FEMSA';
    $encuesta = 'Capacitación';
    $mensajeBienvenida = 'Esperamos que hayas disfrutando de tu curso. 
    <br> Nos apoyarías contestanto una breve encuesta ¡Sólo te tomará 3 minutos! <br>
    Gracias de antemano por tus valiosos comentarios. <br> 
    Tu opinión será utilizada para asegurar que continuemos satisfaciendo tus necesidades. <br> <br> 
    Agradecemos tu confianza. Muchas gracias.';

    $array = array(
        'nombre' => $nombre,
        'empresa' => $empresa,
        'encuesta' => $encuesta,
        'mensajeBienvenida' => $mensajeBienvenida,
        'mensajeDespedida' => '',
    );

    if ($array['nombre'] != '')
        require_once('Views/indexCasoNombre.php');
    else
        require_once('Views/indexCasoSinNombre.php');
?>