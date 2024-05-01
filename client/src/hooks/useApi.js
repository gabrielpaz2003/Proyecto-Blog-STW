import { useState } from 'react';

function useApi() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true);
        setError(null);
        try {
            if (body) {
                body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';
            }

            const response = await fetch(url, { method, body, headers });
            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.message || 'Something went wrong!');
            }

            setData(responseData);
            return responseData;  // Return data for immediate use if needed
        } catch (err) {
            setError(err.message || 'Something went wrong!');
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, request };
}

export default useApi;
