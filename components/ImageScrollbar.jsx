'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function ImageScrollbar({ data }) {
    useEffect(() => {
        if (!data || data.length === 0) {
            console.log('Dữ liệu data rỗng hoặc không hợp lệ:', data);
        } else {
            console.log('Dữ liệu data:', data);
        }
    }, [data]);


    const CustomPrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <Flex
                className={className}
                style={{ ...style, position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, borderRadius: '10px 10px 10px 10px' }}
                onClick={onClick}
            >
            </Flex>
        );
    };

    const CustomNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <Flex
                className={className}
                style={{ ...style, position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, borderRadius: '10px 10px 10px 10px'}}
                onClick={onClick}
            >
            </Flex>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <Box maxW="1000px" mx="auto" h="500px" position="relative">
            {data && data.length > 0 ? (
                <Slider {...settings}>
                    {data.map((item, index) => (
                        <Box key={`photo-${index}`} h="500px" position="relative" overflow="hidden">
                            <Image
                                placeholder="blur"
                                blurDataURL={item.url}
                                src={item.url}
                                fill
                                sizes="(max-width: 500px) 100vw, (max-width: 1023px) 400px, 1000px"
                                alt={item.title || `Hình ảnh bất động sản ${index + 1} tại ${item.location || 'Dubai Marina'}`}
                                style={{ objectFit: 'cover' }}
                            />
                        </Box>
                    ))}
                </Slider>
            ) : (
                <Box>Hiện không có hình ảnh để hiển thị </Box>
            )}
        </Box>
    );
}