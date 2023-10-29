import { useEffect, useState } from 'react';

export const TestTodo = () => {
    const [person, setPerson] = useState('');

    useEffect(() => {
        setPerson('애프터');
    }, []);

    return <div>{person}</div>;
};
