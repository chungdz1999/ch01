import { Typography } from '@material-ui/core';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import categogyApi from '../../../../api/categoryApi';


FiltersByCategory.propTypes = {
    onChange: PropTypes.func,
};

function FiltersByCategory({ onChange }) {
    const [categoryList, setCatogoryList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const list = await categogyApi.getAll()
                console.log({ list });
                setCatogoryList(list.map(x => ({
                    id: x.id,
                    name: x.name
                }))
                );
            } catch (error) {
                console.log('falid roi ne', error);
            }
        })()
    }, [])

    const handleCategoryClick = (category) => {
        if (onChange) {
            onChange(category.id)
        }
    }


    return (
        <Box sx={{
            padding: 2,
        }}>
            <Typography variant="button">DANH MỤC SẢN PHẨM</Typography>
            <ul style={{
                padding: 0,
                margin: 0,
                listStyleType: 'none'
            }}>
                {categoryList.map(category =>
                    <li
                        style={{
                            marginTop: 5,
                            transitions: 'all .25s',
                            cursor: 'pointer'
                        }}
                        key={category.id}
                        onClick={() => handleCategoryClick(category)}>
                        <Typography variant="body1">{category.name}</Typography>
                    </li>
                )}
            </ul>
        </Box >
    );
}

export default FiltersByCategory;