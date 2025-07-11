import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ColorPalette } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

// A stíluslapok importálása kulcsfontosságú a build folyamat miatt.
import './editor.scss';
import './style.scss';
import metadata from './block.json';

// Az SVG komponens most már teljesen "buta", nem tud a színről.
// A stílusát a külső CSS fájl fogja meghatározni.
const MouseIcon = () => (
    <svg width="30px" height="50px" viewBox="0 0 30 50" aria-hidden="true" focusable="false">
        <path className="scroll-mouse-body" d="M15,1.5 C22.45,1.5 28.5,7.54 28.5,15 L28.5,35 C28.5,42.45 22.45,48.5 15,48.5 C7.54,48.5 1.5,42.45 1.5,35 L1.5,15 C1.5,7.54 7.54,1.5 15,1.5 Z"/>
        <circle className="scroll-mouse-wheel" cx="15" cy="12" r="4" />
    </svg>
);


registerBlockType(metadata.name, {
    edit: ({ attributes, setAttributes }) => {
        const { color, align } = attributes;
        
        // A useBlockProps-nak átadunk egy style objektumot,
        // ami beállítja a CSS változónkat a blokk wrapperén.
        const blockProps = useBlockProps({
            style: { '--mouse-icon-color': color },
        });

        return (
            <>
                {/* Jobb oldali beállítási sáv */}
                <InspectorControls>
                    <PanelBody title={__('Beállítások', 'gorgetes-animacio-blokk')}>
                        <p>{__('Egér színe', 'gorgetes-animacio-blokk')}</p>
                        <ColorPalette
                            value={color}
                            onChange={(newColor) => setAttributes({ color: newColor })}
                            disableCustomColors={false}
                            clearable={false}
                        />
                    </PanelBody>
                </InspectorControls>

                {/* A blokk előnézete a szerkesztőben */}
                <div {...blockProps}>
                    <MouseIcon />
                </div>
            </>
        );
    },
    save: () => null,
});