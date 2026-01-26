// fetching data


async function fetchData() {
    console.log("starting fetching data")

    const response = await fetch('data.json')


    const data = await response.json()
    console.log("response data :" , data)
}

fetchData()