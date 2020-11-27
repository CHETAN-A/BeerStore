import React, {useState, useEffect} from 'react';

import API from '../API/API';
import Beer from '../Beer/Beer';
import SearchBar from '../../components/SearchBar/SearchBar';
import Pagination from '../../components/Pagination/Pagination';

const Home = () => {

    const [searchTxt, setSearchTxt] = useState("");
    const [api,] = useState(new API());
    const [beerList, setBeerList] = useState([]);
    const [imageList, setImageList] = useState([]);
    const [page, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        getBeerList();
        getImageList();
    }, [])

    const getImageList = () => {
        const url = "/beerimages7e0480d.json"

        api.get({
            url,
            callback: setImageList
        })
    }

    const handleBeerList = (beerList) => {
        setBeerList(beerList);
        setTotalPages(Math.floor(beerList.length/20) + (beerList.length%20 === 0 ? 0 : 1));
        
    }

    const getBeerList = () => {
        const url = "/beercraft5bac38c.json"

        api.get({
            url,
            callback: handleBeerList
        })
    }

    return (
        <section className="home">
            
            <SearchBar 
                setSearchTxt={setSearchTxt}
                searchTxt={searchTxt}
            />
            
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
            
            <Beer
                beerList={beerList.slice(page*20, page*20 + 20)}
                imageList={imageList} 
                searchTxt={searchTxt}
            />
            
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </section>
    )
}

export default Home;