<?php
/**
 * A blokk PHP renderelője, ami a 'best practice' CSS változós módszert használja.
 */

// Biztonságosan lekérjük az attribútumokat alapértelmezett értékekkel.
$color = $attributes['color'] ?? '#333333';

// Hozzáadjuk a CSS változót a wrapper attribútumaihoz.
$wrapper_attributes = get_block_wrapper_attributes([
    'style' => '--mouse-icon-color: ' . esc_attr($color),
]);
?>
<div <?php echo $wrapper_attributes; ?>>
    <svg width="30px" height="50px" viewBox="0 0 30 50" aria-hidden="true" focusable="false">
        <path class="scroll-mouse-body" d="M15,1.5 C22.45,1.5 28.5,7.54 28.5,15 L28.5,35 C28.5,42.45 22.45,48.5 15,48.5 C7.54,48.5 1.5,42.45 1.5,35 L1.5,15 C1.5,7.54 7.54,1.5 15,1.5 Z"/>
        <circle class="scroll-mouse-wheel" cx="15" cy="12" r="4" />
    </svg>
</div>