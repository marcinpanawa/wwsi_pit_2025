import React from "react";
import { setSizeCookie, setColorCookie } from "../../helpers";

export default () => {
    return (
        <div className="site-divider px-3" style={{ paddingTop: "0.7rem", paddingBottom: "0.7rem" }}>
            <div className="page-options font-normal color-normal" aria-label="Zmiana wielkości czcionki:" id="page-options">
                <button className="font-normal" onClick={() => setSizeCookie('font-normal')} data-placement="right"
                    title="Zmień wielkość czcionki na normalną" aria-label="Zmień wielkość czcionki na normalną">A</button>
                <button className="font-bigger" onClick={() => setSizeCookie('font-bigger')} data-placement="right"
                    title="Zmień wielkość czcionki na większą" aria-label="Zmień wielkość czcionki na większą">A</button>
                <button className="font-biggest" onClick={() => setSizeCookie('font-biggest')} data-placement="right"
                    title="Zmień wielkość czcionki na dużą" aria-label="Zmień wielkość czcionki na dużą">A</button>
                <button className="change-version contrast-one contrast-version" onClick={() => setColorCookie('color-normal')}
                    data-placement="right" title="kontrast domyślny" aria-label="kontrast domyślny">A</button>
                <button className="change-version contrast-two contrast-version" onClick={() => setColorCookie('color-contrast')}
                    data-placement="right" title="kontrast czarno-biały" aria-label="kontrast czarno-biały">A</button>
            </div>
        </div>)
}