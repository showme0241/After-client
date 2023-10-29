import { useEffect, useState } from 'react';

interface HelloData {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const TestHello = () => {
    const [data, setData] = useState<HelloData[]>();
    const path = 'https://jsonplaceholder.typicode.com/posts';

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`${path}`);

            const jsonData = await res.json();
            setData(jsonData);
        };

        getData();
    }, []);

    return <div>{data?.map(it => <div key={it.id}>{it.title}</div>)}</div>;
};
