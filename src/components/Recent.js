import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_RECENT_POST = gql`
    {
        posts {
        nodes {
            title
            id
            guid
        }
        }
    }
`;

const Recent = () => {
    const {loading, error, data} = useQuery(GET_RECENT_POST);
    return (
        <>
            {loading? "loading" : data.posts.nodes.map(post => <h1>{post.title}</h1>)}
        </>
    )
}

export default Recent;