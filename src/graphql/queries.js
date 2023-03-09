export const GET_POSTS = gql`
    query {
        post() {
            data {
                id
                attributes {
                    title
                    subtitle
                    categories {
                        data {
                            id
                            attributes {
                                name
                            }
                        }
                    }
                    users {
                        data {
                            id
                            attributes {
                                username
                            }
                        }
                    }
                }
            }
        }
    }
`;
