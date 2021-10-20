import React from 'react';
// import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';


AlbumFeature.propTypes = {};  

function AlbumFeature(props) {
    const albumList = [
         {
            id: 1,
            name: "Nhac hoa",
            thumbnaiUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/b/0/a/7/b0a7094cc938e7fec1a73eb95aac23ea.jpg" 
         },
         {
            id: 2,
            name: "Nhac Tau ",
            thumbnaiUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/d/5/5/7d5578739e2a2031ec67a2f99ee57b9d.jpg" 
         },
         {
            id: 3,
            name: "Nhac Viet nam",
            thumbnaiUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/d/5/5/7d5506b41fc2bccaa895a2e70a0f031f.jpg" 
         },
        ];
    return (
        <div>
            <h2>Xin chao ban den voi Nhac</h2>
            {/* <albumList albumList={albumList} /> */}
            <AlbumList  albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;
