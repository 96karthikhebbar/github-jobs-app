import React from 'react'

const useFetchJobs = (params, page) => {
    return {
        jobs : [],
        loading : false,
        error: false
    }
}

export default useFetchJobs
