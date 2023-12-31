<!-- César González 
    26/06/2023
    Archivo donde se insertan las preguntas
-->
<?php 
    require_once('./index.php');
?>

<div class="principal positio-relative m-auto mt-5">
    <h3 class="mb-4 display-6"> ¡ Bienvenido <?php echo $array['nombre'] ?> ! <br>
    de la empresa <?php echo $array['empresa'] ?> </h3>
    <section class="p-4 mb-4 rounded" style="border: 2px solid rgb(3, 55, 109)">
        <?php 
            $array = array(
                0 => "¿Qué te pareció el curso?",
                1 => "¿Qué te pareció el instructor?",
                2 => "¿Qué te pareció el coffe?",
                3 => "¿Qué te pareció las instalaciones?",
                4 => "¿Qué te pareció el baño?",
            );

            foreach ($array as $key => $value) { ?>
                <my-star name="<?php echo $value ?>" order="<?php echo $key ?>" level="0"></my-star> <?php 
            }
        ?>
        <my-observation name="Agrega tus observaciones" order="0" level="0"></my-observation>
        <my-yesorno name="¿Haz utilizado los beneficios de estar afiliado?" order="0" level="0"></my-yesorno>
    </section>
</div>
