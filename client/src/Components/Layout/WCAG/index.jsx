import React, { useContext } from "react";
import { ThemeContext } from "../../../Contexts/ThemeContext";

export default () => {
    const { setSizeTheme, setColorTheme } = useContext(ThemeContext);

    return (
        <div className="site-divider px-3" style={{ paddingTop: "0.7rem", paddingBottom: "0.7rem" }}>
            <div className="page-options font-normal color-normal" aria-label="Zmiana wielkości czcionki:" id="page-options">
                <button className="font-normal" onClick={() => setSizeTheme('font-normal')} data-placement="right"
                    title="Zmień wielkość czcionki na normalną" aria-label="Zmień wielkość czcionki na normalną">A</button>
                <button className="font-bigger" onClick={() => setSizeTheme('font-bigger')} data-placement="right"
                    title="Zmień wielkość czcionki na większą" aria-label="Zmień wielkość czcionki na większą">A</button>
                <button className="font-biggest" onClick={() => setSizeTheme('font-biggest')} data-placement="right"
                    title="Zmień wielkość czcionki na dużą" aria-label="Zmień wielkość czcionki na dużą">A</button>
                <button className="change-version contrast-one contrast-version" onClick={() => setColorTheme('color-normal')}
                    data-placement="right" title="kontrast domyślny" aria-label="kontrast domyślny">A</button>
                <button className="change-version contrast-two contrast-version" onClick={() => setColorTheme('color-contrast')}
                    data-placement="right" title="kontrast czarno-biały" aria-label="kontrast czarno-biały">A</button>
            </div>
        </div>)
}