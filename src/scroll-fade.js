document.addEventListener('DOMContentLoaded', () => {
    // Megkeressük a blokkunk fő tárolóelemét az egyedi osztálya alapján.
    const scrollMouseBlock = document.querySelector('.wp-block-wphu-gorgetes-animacio-blokk');

    // Csak akkor futtatjuk a kódot, ha a blokk létezik az oldalon.
    if (!scrollMouseBlock) {
        return;
    }

    // A görgetési zóna beállításai (módosítva a kérésed szerint).
    const fadeStart = 100; // Itt kezd el halványulni.
    const fadeEnd = 250;   // Itt tűnik el teljesen.
    const fadeDistance = fadeEnd - fadeStart;

    let isTicking = false;

    const handleScroll = () => {
        const scrollY = window.scrollY;
        let opacity = 1.0;

        if (scrollY > fadeStart) {
            // Kiszámoljuk, mennyire vagyunk a halványulási zónában (0.0-tól 1.0-ig).
            const progress = (scrollY - fadeStart) / fadeDistance;
            opacity = 1 - progress;
        }

        // Biztosítjuk, hogy az átlátszóság 0 és 1 között maradjon.
        scrollMouseBlock.style.opacity = Math.max(0, Math.min(1, opacity));
        isTicking = false;
    };

    // A scroll esemény figyelése (teljesítmény-optimalizált módon).
    window.addEventListener('scroll', () => {
        if (!isTicking) {
            window.requestAnimationFrame(handleScroll);
            isTicking = true;
        }
    });
});