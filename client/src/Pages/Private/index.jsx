import React, { useContext } from 'react';
import { AppStoreContext } from '../../Contexts/AppStoreContext';

const Private = () => {
    const { user } = useContext(AppStoreContext);

    if (!user) {
        return (
            <div className="container mt-5 text-center">
                <div className="alert alert-warning">
                    <h3>Dostęp zabroniony</h3>
                    <p>Musisz być zalogowany, aby zobaczyć tę stronę.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header bg-info text-white">
                    <h3 className="mb-0">Panel Prywatny</h3>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Witaj, {user.name}!</h5>
                    <p className="card-text">
                        Twój email to: <strong>{user.email}</strong>.
                    </p>
                    <p className="card-text">
                        To jest prywatna strona dostępna tylko dla zalogowanych użytkowników.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Private;
