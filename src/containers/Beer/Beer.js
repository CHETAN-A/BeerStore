import React from 'react';

import Card from '../../components/Card/Card';

const Beer = (props) => {
    return (
        <div className="beers">
            {props.beerList.map((beerData, ind) => {
                
                if (!props.searchTxt || (beerData.name.toLowerCase()).includes(props.searchTxt.toLowerCase())) {
                return (
                    <div className="row" key={ind}>
                        <div className="col-12">
                            <Card
                                key={ind}
                                brand={beerData.name}
                                type={beerData.style}
                                alv={beerData.abv}
                                ounces={beerData.ounces}
                                imgUrl={props.imageList[ind%props.imageList.length] ? props.imageList[ind%props.imageList.length]['image'] : ''}
                            />
                        </div>
                    </div>
                )
                }
                else {
                    return null
                }
            }
            )}
        </div>
    )
}

export default Beer;