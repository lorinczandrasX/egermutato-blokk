<?php
/**
 * Plugin Name:       Egérmutató Effekt Blokk
 * Description:       Egy egyedi Gutenberg blokk, amely egy egeret követő "glowing dot" effektust ad az oldalhoz.
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Version:           1.0.0
 * Author:            András
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       egermutato-blokk
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Közvetlen hozzáférés tiltása
}

/**
 * Regisztrálja a blokkot a block.json fájl alapján.
 * A WordPress automatikusan kezeli a scriptek és stílusok betöltését.
 */
function egermutato_blokk_init(): void {
    register_block_type( __DIR__ . '/build' );
}

add_action( 'init', 'egermutato_blokk_init' );