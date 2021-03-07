const {gql} = require('apollo-server');

const typeDefs = gql`
    
    """Bu tür alanlar, şemamızın geri kalanına giriş noktalarıdır. Bunlar, müşterimizin sorgulayabileceği en üst düzey alanlardır.
    Şimdilik, sadece ana sayfamız için parça listesini getirmekle ilgileniyoruz. Mümkün olduğunca açıklayıcı hale getirmek için bu belirli sorguyu trackForHome olarak adlandıralım. Bu sorgunun boş olmayan Parçaların boş olmayan bir listesini döndürmesini istiyoruz. Ayrıca güzel bir açıklama da ekleyeceğiz:"""
    type Query {
        "Query to get tracks array for the homepage grid"
        tracksForHome:[Track!]!
    }

    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        id: ID!
        "The track's title"
        title: String!
        "The track's main author"
        author: Author!
        "The track's main illustration to display in track card or track page detail"
        thumbnail: String
        "The track's approximate length to complete, in minutes"
        length: Int
        "The number of modules this track contains"
        modulesCount: Int
    }
    
    "Author of a complete Track"
    type Author {
        id: ID!
        "Author's first and last name"
        name: String!
        "Author's profile picture url"
        photo: String
    }
`;

module.exports = typeDefs;