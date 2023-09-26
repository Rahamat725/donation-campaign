const getStoredDonationData = () =>{
    const storedDonationData = localStorage.getItem("donation-data");
    if(storedDonationData){
        return JSON.parse(storedDonationData);
    }else{
        return [] ;
    }
}


const saveDonationDataTolocalStorage = (id) =>{
    const storedDonationData = getStoredDonationData();
    const isExitcs = storedDonationData.find(findId => findId.id === id);
    if(!isExitcs){
        storedDonationData.push(id);
        localStorage.setItem('donation-data', JSON.stringify(storedDonationData));
    }
}

export {getStoredDonationData, saveDonationDataTolocalStorage}