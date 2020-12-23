import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProviderCard from "./Provider-card";

const ProviderContainer = () => {
    const dispatch = useDispatch();
    const userInStore = useSelector((state: any) => state.providers.providers)

    // console.log("store ===> ",userInStore)
    // const [allprov, setAllprov] = useState([]);
    // const [reqprov, setReqprov] = useState([]);
    console.log("hi", userInStore)

    return (
        <div className="list">
            {userInStore.providers.map((prov: any, index: number) =>
                <ProviderCard
                    key={index}
                    prov={prov}
                />
            )}
        </div>
    );
}

export default ProviderContainer;