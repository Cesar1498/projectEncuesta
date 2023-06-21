<div class="principal">
    <div class="msgbienvenida">
        <h3> ¡Bienvenido Juan Perez! </h3>
    </div>
    <section class="encuesta">
        <?php 
            $array = array(
                0 => "¿Qué te pareció el curso?",
                1 => "¿Qué te pareció el instructor?",
               /*  2 => "¿Qué te pareció el coffe?",
                3 => "¿Qué te pareció las instalaciones?",
                4 => "¿Qué te pareció el baño?",*/
            );

            foreach ($array as $key => $value) { ?>
                <my-star name="<?php echo $value ?>" order="<?php echo $key ?>"></my-star> <?php 
            }
        ?>
        <my-observation name="Agrega tus observaciones" order="0"></my-observation>
    </section>
</div>
