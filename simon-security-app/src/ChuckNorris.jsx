import React, { useState, useEffect } from 'react';

function ChuckNorris({ token }) {
    const [fact, setFact] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getFact = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:3333/fact', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch the fact');
                }
                const data = await response.json();
                setFact(data.fact);
            } catch (error) {
                setFact('Error fetching fact');
            }
            setLoading(false);
        };

        getFact();
    }, [token]); 

    return (
        <div>
            {loading ? <p>Loading...</p> : <p>{fact}</p>}
        </div>
    );
}

export default ChuckNorris;