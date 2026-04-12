import { closeCookieWindow } from "../helpers";

const cookiePolicyProject = () => {
    return (
        <div id="cookiePolicyProject">
            <div className="cookies-info card fixed-bottom" style={{ borderTop: "2px solid #008ac9 !important", marginBottom: "0" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10" style={{ padding: "20px 16px" }}>
                            <p><strong>COOKIES INFORMATION:</strong></p>
                            <div style={{ backgroundColor: "#fff" }}>
                                <p>Due to the fact that "cookies" are used on the <strong>Project</strong> website, the Company
                                    - Entity informs you about the privacy policy used in the Project system. At the same time,
                                    we point out that the use of
                                    website without changing your browser settings means that you accept receiving "cookies".
                                    You can change your cookie settings at any time. More information in <a
                                        href="/privacy-policy/">Privacy policy</a>.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2 text-center d-flex align-items-center">
                            <button className="btn btn-primary mr-auto ml-auto" type="button" onClick={() => closeCookieWindow()} >I
                                agree</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cookiePolicyProject;