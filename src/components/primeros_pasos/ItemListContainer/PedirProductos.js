import data from "../../../MOCK_DATA.json";

export const pedirProductor = () => {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

