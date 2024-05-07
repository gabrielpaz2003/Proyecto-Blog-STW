import { useState } from 'react';

function useApi() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true);
        setError(null);

        // Intentar obtener el token del local storage
        const token = localStorage.getItem('token');
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;  // Añadir el token al header si existe
        }

        try {
            if (body) {
                body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';
            }

            const response = await fetch(url, { method, body, headers });
            if (response.status === 204) { // Manejo para respuestas sin contenido
                setLoading(false);
                return;
            }
            const responseData = await response.json();

            if (!response.ok) {
                if (response.status === 401 || response.status === 403) {
                    // Manejar errores específicos de autenticación
                    throw new Error('Session expired or invalid. Please log in again.');
                }
                throw new Error(responseData.message || 'Something went wrong!');
            }

            setData(responseData);
            return responseData;  // Return data for immediate use if needed
        } catch (err) {
            setError(err.message || 'Something went wrong!');
            setData(null);
            // Si el error es de autenticación, podrías optar por limpiar el token
            if (err.message.includes('Session expired or invalid')) {
                localStorage.removeItem('token');
            }
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, request };
}

export default useApi;
