import { Box, Flex, Text, Icon, Select, Checkbox, Button } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { filterData, getFilterValues } from '@/utils/filterData';

const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData);

    const router = useRouter();
    
    const searchProperties = (filterValues) => {
        const path = router.pathname;
        const { query } = router;

        const values = getFilterValues(filterValues);

        values.forEach((item) => {
            if(item.value && filterValues?.[item.name]) {
                query[item.name] = item.value;
            }
        });
        router.push({ pathname: path, query });
    }


        return (
            <Flex bg='gray.100' p='4' justifyContent='center' alignItems='center'>
                <Flex flexWrap='wrap' gap={4}>
                    {filters.map((filter) => (
                        <Box key={filter.queryName}>
                            <Select onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })} placeholder={filter.placeholder} w='fit-content' p='2'>
                                {filter?.items?.map((item) => (
                                    <option value={item.value} key={item.value}>{item.name}</option>
                                ))}
                            </Select>
                        </Box>
                    ))}
                </Flex>
            </Flex>
        )
    }

    export default SearchFilters;