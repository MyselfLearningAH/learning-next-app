import { NextRouter } from "next/router";

export const userLogin = (formData : any, router : NextRouter) => {
    let body = {...formData, expiresInMins: 30}

    
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(res => {
      localStorage.setItem("user", JSON.stringify(res))
        router.push('/approuter/dashboard');
    }).catch(err => console.log(err));
    
}

export const allproducts = async () => {
    const formatData = {
        status : 200,
        data : [],
        error: ""
    }
    await fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res => {
        formatData.data = res;
        console.log(formatData);
    })
    .catch((err) => {
        formatData.error = err;
        formatData.status = 400
    });

    return formatData;
} 

export const getproduct = async (productId : string) => {
    const formatData = {
        status : 200,
        data : {},
        error: ""
    }
    
    await fetch('https://dummyjson.com/products/' + productId)
    .then(res => res.json())
    .then(res => {
        formatData.data = res;
        console.log(formatData);
    })
    .catch((err) => {
        formatData.error = err;
        formatData.status = 400
    });

    return formatData;
} 