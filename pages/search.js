import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import SearchFilters from '../components/SearchFilters';
import Property from '../components/Property';
import noResult from '../assets/images/noresult.svg';
import { fetchApi, baseUrl } from '../utils/fetchApi';

const Search = ({ properties }) => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    return (
        <Box>
            <Flex
                cursor='pointer'
                bg='gray.100'
                p='2'
                borderBottom='1px'
                borderColor='gray.200'
                fontWeight='black'
                fontSize='lg'
                justifyContent='center'
                alignItems='center'
                onClick={() => setSearchFilters((prevFilters) => !prevFilters)}>
                <Text>Search Property By Filters</Text>
                <Icon paddingLeft='2' w='7' as={BsFilter} />
            </Flex>
            {searchFilters && <SearchFilters />}
            <Text fontSize='2xl' p='4' fontWeight='bold'>
                Properties {router.query.purpose}
            </Text>
            <Flex flexWrap='wrap'>
                {properties.map((property) => <Property property={property} key={property.id} />)}
            </Flex>
            {properties.length === 0 && (
                <Flex justifyContent='center' alignItems='center' flexDirection='column' mt='5' gap='20'>
                    <Image src={noResult} alt='no result' />
                    <Text fontSize='2xl' fontWeight='bold'>No Results Found</Text>
                </Flex>
            )}
        </Box>
    )
}
export default Search;

export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const roomsMax = query.roomsMax || '10';
    const bathsMin = query.bathsMin || '0';
    const bathsMax = query.bathsMax || '10';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';

    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&roomsMax=${roomsMax}&sort=${sort}&areaMax=${areaMax}`);
    return {
        props: {
            properties: data?.hits,
        },
    };
}